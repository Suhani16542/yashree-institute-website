"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Upload,
  Trash2,
  Sparkles,
  Lock,
  Unlock,
  CheckCircle,
  AlertCircle,
  Eye,
  ArrowLeft,
  Image as ImageIcon,
  Plus,
  RefreshCw,
} from "lucide-react";
import { GalleryItem } from "@/data/gallerySeed";

const ADMIN_PASSCODE = "yashree2026";

const CATEGORIES: GalleryItem["category"][] = [
  "Awards & Seminars",
  "Student Convocation",
  "Celebrity Makeup",
  "Practical Training",
  "Salon & Studio",
];

export default function AdminGalleryPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState("");

  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Form states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<GalleryItem["category"]>("Awards & Seminars");
  const [caption, setCaption] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check sessionStorage for previous login
  useEffect(() => {
    const authStatus = sessionStorage.getItem("yashree_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch current gallery items
  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      if (data.success && Array.isArray(data.items)) {
        setItems(data.items);
      }
    } catch (err) {
      console.error("Error fetching gallery items:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchItems();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    sessionStorage.setItem("yashree_admin_auth", "true");
    setPasscodeError("");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("yashree_admin_auth");
    setPasscode("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setFeedback({ type: "error", text: "Please provide a title for the photo." });
      return;
    }

    if (!selectedFile && !imageUrl.trim()) {
      setFeedback({
        type: "error",
        text: "Please select an image file to upload or enter an image URL.",
      });
      return;
    }

    setUploading(true);
    setFeedback(null);

    try {
      let res;
      if (selectedFile) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", category);
        formData.append("caption", caption);
        formData.append("isFeatured", String(isFeatured));
        formData.append("file", selectedFile);

        res = await fetch("/api/gallery", {
          method: "POST",
          body: formData,
        });
      } else {
        res = await fetch("/api/gallery", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            category,
            caption,
            isFeatured,
            image: imageUrl.trim(),
          }),
        });
      }

      const data = await res.json();
      if (data.success) {
        setFeedback({
          type: "success",
          text: "✨ Photo uploaded and added to the live gallery successfully!",
        });
        // Reset form
        setTitle("");
        setCaption("");
        setIsFeatured(false);
        setSelectedFile(null);
        setFilePreview(null);
        setImageUrl("");
        if (fileInputRef.current) fileInputRef.current.value = "";
        // Refresh list
        fetchItems();
      } else {
        setFeedback({ type: "error", text: data.message || "Failed to upload photo." });
      }
    } catch (err: any) {
      setFeedback({
        type: "error",
        text: err.message || "Network error while uploading photo.",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteItem = async (id: string, itemTitle: string) => {
    if (!confirm(`Are you sure you want to remove "${itemTitle}" from the gallery?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/gallery?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setFeedback({
          type: "success",
          text: `"${itemTitle}" removed from gallery successfully.`,
        });
        fetchItems();
      } else {
        setFeedback({ type: "error", text: data.message || "Failed to delete item." });
      }
    } catch (err: any) {
      setFeedback({ type: "error", text: "Error deleting item: " + err.message });
    }
  };

  // 1. Passcode Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-zinc-900 rounded-3xl p-8 border-2 border-amber-300/40 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#f2c301] text-zinc-950 flex items-center justify-center mx-auto shadow-lg">
              <Lock className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f2c301] block">
              Yashree Institute Admin
            </span>
            <h1 className="text-2xl font-serif font-bold text-white">
              Gallery Management Desk
            </h1>
            <p className="text-xs text-zinc-400">
              Enter admin passcode to upload, manage, or delete gallery photos.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                Passcode
              </label>
              <input
                type="password"
                required
                placeholder="Enter passcode (e.g. yashree2026)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#f2c301]"
              />
            </div>

            {passcodeError && (
              <p className="text-xs text-rose-400 flex items-center gap-1.5 font-medium">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{passcodeError}</span>
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#f2c301] hover:bg-[#d4af37] text-zinc-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <div className="pt-2 text-center">
            <Link
              href="/gallery"
              className="text-xs text-zinc-400 hover:text-[#f2c301] inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Gallery</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#faf8f5] text-zinc-900">
      {/* Top Admin Header */}
      <header className="bg-zinc-950 text-white border-b border-zinc-800 sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/gallery"
              className="p-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              title="View Public Gallery"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-base font-serif font-bold text-white flex items-center gap-2">
                <span>Gallery Admin Desk</span>
                <span className="text-[10px] bg-[#f2c301] text-zinc-950 px-2 py-0.5 rounded-full font-bold uppercase">
                  Live
                </span>
              </h1>
              <p className="text-[11px] text-zinc-400">
                Upload &amp; Manage photos visible at /gallery
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/gallery"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-amber-200 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Live Gallery</span>
            </Link>

            <button
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-rose-950 text-rose-300 border border-zinc-700 hover:border-rose-500 text-xs font-semibold transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Feedback Alert */}
        {feedback && (
          <div
            className={`p-4 rounded-2xl border flex items-center justify-between gap-3 text-xs sm:text-sm font-medium animate-fadeIn ${
              feedback.type === "success"
                ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                : "bg-rose-50 border-rose-300 text-rose-800"
            }`}
          >
            <div className="flex items-center gap-2">
              {feedback.type === "success" ? (
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
              )}
              <span>{feedback.text}</span>
            </div>
            <button
              onClick={() => setFeedback(null)}
              className="text-xs font-bold underline opacity-70 hover:opacity-100"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Upload Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-md">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-amber-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                Add New Photo
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950 mt-0.5">
                Upload Image to Live Gallery
              </h2>
            </div>

            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#b8860b] flex items-center justify-center">
              <Plus className="w-5 h-5" />
            </div>
          </div>

          <form onSubmit={handleUploadSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Column: Image File or URL Selection */}
              <div className="md:col-span-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Option A: Upload File from Device *
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                      filePreview
                        ? "border-[#b8860b] bg-amber-50/50"
                        : "border-zinc-300 hover:border-amber-400 bg-[#faf8f5] hover:bg-amber-50/30"
                    }`}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />

                    {filePreview ? (
                      <div className="space-y-3">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow bg-black max-w-[240px] mx-auto">
                          <Image
                            src={filePreview}
                            alt="Upload preview"
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <p className="text-xs font-semibold text-[#b8860b]">
                          Click to choose a different image
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2 py-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#b8860b] flex items-center justify-center mx-auto">
                          <Upload className="w-6 h-6" />
                        </div>
                        <p className="text-xs font-bold text-zinc-800">
                          Click to Browse or Drag Image Here
                        </p>
                        <p className="text-[11px] text-zinc-500">
                          Supports JPG, PNG, WEBP, HEIC
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Option B: Or Enter Existing Image Path / URL
                  </label>
                  <input
                    type="text"
                    placeholder="/images/award_ceremony_team.jpg or https://..."
                    value={imageUrl}
                    onChange={(e) => {
                      setImageUrl(e.target.value);
                      if (e.target.value) {
                        setSelectedFile(null);
                        setFilePreview(e.target.value);
                      }
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#b8860b]"
                  />
                </div>
              </div>

              {/* Right Column: Meta Information */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Photo Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Masterclass Convocation 2026 or Bridal Makeup Shoot"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-[#b8860b]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Gallery Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as GalleryItem["category"])}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#b8860b]"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center pt-6">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={isFeatured}
                        onChange={(e) => setIsFeatured(e.target.checked)}
                        className="w-4 h-4 rounded text-[#b8860b] focus:ring-[#b8860b] accent-[#b8860b]"
                      />
                      <span className="text-xs font-bold text-zinc-800">
                        Mark as Featured Milestone
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Caption / Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide context (e.g. Deepika Patidar awarding diplomas to students during the annual convocation ceremony in Indore)..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#b8860b] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={uploading}
                    className="w-full py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-[#f2c301] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {uploading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Uploading Photo...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" />
                        <span>Upload &amp; Publish to Gallery</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Existing Gallery Photos Table / Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-md space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-amber-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                Active Inventory ({items.length} Photos)
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950 mt-0.5">
                All Published Gallery Items
              </h2>
            </div>

            <button
              onClick={fetchItems}
              className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#b8860b] transition-colors"
              title="Refresh List"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12 text-zinc-400 text-xs">
              Loading gallery items...
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 text-xs">
              No gallery items found. Use the form above to add photos.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#faf8f5] rounded-2xl p-4 border border-amber-200/80 flex flex-col justify-between space-y-3 group hover:border-[#b8860b] transition-all"
                >
                  <div className="space-y-2.5">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black shadow-xs">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="300px"
                        className="object-cover"
                        unoptimized={item.image.startsWith("/uploads/") || item.image.startsWith("http")}
                      />
                      <div className="absolute top-2 left-2 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-zinc-950/80 text-[#f2c301] text-[9px] font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                        {item.isFeatured && (
                          <span className="px-2 py-0.5 rounded-full bg-[#f2c301] text-zinc-950 text-[9px] font-bold uppercase tracking-wider">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 font-serif line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-500 line-clamp-2 mt-0.5">
                        {item.caption}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">{item.date || "Active"}</span>
                    <button
                      onClick={() => handleDeleteItem(item.id, item.title)}
                      className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
