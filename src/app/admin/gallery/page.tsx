"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Upload,
  Trash2,
  CheckCircle,
  AlertCircle,
  Eye,
  ArrowLeft,
  Plus,
  RefreshCw,
  LogOut,
} from "lucide-react";
import { useAdminAuth } from "@/lib/auth/useAdminAuth";
import { galleryApi } from "@/lib/api";
import { resolveAssetUrl } from "@/lib/api/config";
import { GalleryItemData } from "@/lib/api/types";

const CATEGORIES = [
  "Awards & Seminars",
  "Student Convocation",
  "Celebrity Makeup",
  "Practical Training",
  "Salon & Studio",
] as const;

export default function AdminGalleryPage() {
  const { user, loading: authLoading, logout } = useAdminAuth();

  const [items, setItems] = useState<GalleryItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Form states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<string>("Awards & Seminars");
  const [caption, setCaption] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch current gallery items
  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await galleryApi.getPublic();
      setItems(res.items || []);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load gallery items";
      console.error("Error fetching gallery items:", msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchItems();
    }
  }, [user]);

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
      const formData = new FormData();
      formData.append("category", category);
      formData.append("caption", caption || title);
      formData.append("featured", String(isFeatured));

      if (selectedFile) {
        formData.append("image", selectedFile);
      } else if (imageUrl.trim()) {
        formData.append("imageUrl", imageUrl.trim());
      }

      await galleryApi.create(formData);

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
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error while uploading photo.";
      setFeedback({
        type: "error",
        text: msg,
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteItem = async (id: string, itemCaption?: string | null) => {
    const displayName = itemCaption || "this item";
    if (!confirm(`Are you sure you want to remove "${displayName}" from the gallery?`)) {
      return;
    }

    try {
      await galleryApi.delete(id);
      setFeedback({
        type: "success",
        text: `Item removed from gallery successfully.`,
      });
      fetchItems();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to delete item.";
      setFeedback({ type: "error", text: "Error deleting item: " + msg });
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4">
        <div className="text-center space-y-3">
          <RefreshCw className="w-8 h-8 text-[#f2c301] animate-spin mx-auto" />
          <p className="text-xs text-zinc-400 font-mono">Verifying admin credentials...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] text-zinc-900">
      {/* Top Admin Header */}
      <header className="bg-zinc-950 text-white border-b border-zinc-800 sticky top-0 z-40 px-3 sm:px-8 py-3 sm:py-3.5 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <Link
              href="/admin"
              className="p-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors flex-shrink-0"
              title="Return to Main Admin Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-base font-serif font-bold text-white flex items-center gap-2 truncate">
                <span className="truncate">Gallery Admin Desk</span>
                <span className="text-[10px] bg-[#f2c301] text-zinc-950 px-2 py-0.5 rounded-full font-bold uppercase flex-shrink-0">
                  Live
                </span>
              </h1>
              <p className="text-[11px] text-zinc-400 hidden sm:block truncate">
                Upload &amp; Manage photos visible at /gallery
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Link
              href="/gallery"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-amber-200 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Live Gallery</span>
            </Link>

            <button
              onClick={() => logout()}
              className="px-3 sm:px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-rose-950 text-rose-300 border border-zinc-700 hover:border-rose-500 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-6 sm:space-y-8">
        {/* Feedback Alert */}
        {feedback && (
          <div
            className={`p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between gap-2 text-xs sm:text-sm font-medium animate-fadeIn ${
              feedback.type === "success"
                ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                : "bg-rose-50 border-rose-300 text-rose-800"
            }`}
          >
            <div className="flex items-center gap-2 min-w-0">
              {feedback.type === "success" ? (
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 flex-shrink-0" />
              )}
              <span className="truncate">{feedback.text}</span>
            </div>
            <button
              onClick={() => setFeedback(null)}
              className="text-xs font-bold underline opacity-70 hover:opacity-100 cursor-pointer flex-shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Upload Form Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 sm:p-8 border-2 border-amber-200/80 shadow-md">
          <div className="flex items-center justify-between pb-4 mb-4 sm:mb-6 border-b border-amber-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                Add New Photo
              </span>
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-zinc-950 mt-0.5">
                Upload Image to Live Gallery
              </h2>
            </div>

            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-50 text-[#b8860b] flex items-center justify-center flex-shrink-0">
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
                          <img
                            src={filePreview}
                            alt="Upload preview"
                            className="w-full h-full object-cover"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Gallery Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
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
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 sm:p-8 border-2 border-amber-200/80 shadow-md space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-amber-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                Active Inventory ({items.length} Photos)
              </span>
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-zinc-950 mt-0.5">
                All Published Gallery Items
              </h2>
            </div>

            <button
              onClick={fetchItems}
              className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#b8860b] transition-colors cursor-pointer"
              title="Refresh List"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12 text-zinc-400 text-xs flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin text-[#f2c301]" />
              <span>Loading gallery items from backend...</span>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 text-xs">
              No gallery items found. Use the form above to add photos.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
              {items.map((item) => {
                const resolvedImg = resolveAssetUrl(item.image || item.imageUrl);
                const itemId = item.id || item._id || "";
                return (
                  <div
                    key={itemId}
                    className="bg-[#faf8f5] rounded-2xl p-4 border border-amber-200/80 flex flex-col justify-between space-y-3 group hover:border-[#b8860b] transition-all"
                  >
                    <div className="space-y-2.5">
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black shadow-xs">
                        <img
                          src={resolvedImg || "/images/gallery_placeholder.jpg"}
                          alt={item.caption || "Gallery item"}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-full bg-zinc-950/80 text-[#f2c301] text-[9px] font-bold uppercase tracking-wider">
                            {item.category}
                          </span>
                          {item.featured && (
                            <span className="px-2 py-0.5 rounded-full bg-[#f2c301] text-zinc-950 text-[9px] font-bold uppercase tracking-wider">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-zinc-700 line-clamp-2 mt-0.5 font-medium">
                          {item.caption || "Gallery Moment"}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px]">
                      <span className="text-zinc-400">
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Active"}
                      </span>
                      <button
                        onClick={() => handleDeleteItem(itemId, item.caption)}
                        className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

