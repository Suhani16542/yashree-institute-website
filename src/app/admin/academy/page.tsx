"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Upload,
  Trash2,
  Lock,
  Unlock,
  CheckCircle,
  AlertCircle,
  Eye,
  ArrowLeft,
  Video,
  Plus,
  RefreshCw,
  Play,
  Clock,
} from "lucide-react";
import { AcademyVideo } from "@/data/academyVideosSeed";

const ADMIN_PASSCODE = "yashree2026";

const CATEGORIES: AcademyVideo["category"][] = [
  "Masterclasses & Demos",
  "Student Practice & Reels",
  "Awards & Ceremonies",
  "Campus Tour & Facilities",
  "Student Testimonials",
];

export default function AdminAcademyPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState("");

  const [videos, setVideos] = useState<AcademyVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Form states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<AcademyVideo["category"]>("Masterclasses & Demos");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const authStatus = sessionStorage.getItem("yashree_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/academy-videos");
      const data = await res.json();
      if (data.success && Array.isArray(data.items)) {
        setVideos(data.items);
      }
    } catch (err) {
      console.error("Error fetching academy videos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchVideos();
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

  const handleVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setFeedback({ type: "error", text: "Please enter a video title." });
      return;
    }

    if (!videoUrl.trim() && !selectedFile) {
      setFeedback({
        type: "error",
        text: "Please enter a YouTube/Vimeo video link or select a video file.",
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
        formData.append("description", description);
        formData.append("duration", duration || "Video");
        formData.append("isFeatured", String(isFeatured));
        formData.append("thumbnail", thumbnail);
        formData.append("file", selectedFile);

        res = await fetch("/api/academy-videos", {
          method: "POST",
          body: formData,
        });
      } else {
        res = await fetch("/api/academy-videos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            category,
            videoUrl: videoUrl.trim(),
            thumbnail: thumbnail.trim(),
            description: description.trim(),
            duration: duration.trim() || "Video",
            isFeatured,
          }),
        });
      }

      const data = await res.json();
      if (data.success) {
        setFeedback({
          type: "success",
          text: "✨ Academy video added successfully to /academy page!",
        });
        // Reset form
        setTitle("");
        setVideoUrl("");
        setThumbnail("");
        setDuration("");
        setDescription("");
        setIsFeatured(false);
        setSelectedFile(null);
        fetchVideos();
      } else {
        setFeedback({ type: "error", text: data.message || "Failed to add video." });
      }
    } catch (err: any) {
      setFeedback({ type: "error", text: err.message || "Network error while uploading video." });
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteVideo = async (id: string, videoTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${videoTitle}" from the Academy page?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/academy-videos?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setFeedback({
          type: "success",
          text: `"${videoTitle}" removed successfully.`,
        });
        fetchVideos();
      } else {
        setFeedback({ type: "error", text: data.message || "Failed to delete video." });
      }
    } catch (err: any) {
      setFeedback({ type: "error", text: "Error deleting video: " + err.message });
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
              Yashree Academy Admin
            </span>
            <h1 className="text-2xl font-serif font-bold text-white">
              Video Management Desk
            </h1>
            <p className="text-xs text-zinc-400">
              Enter admin passcode to upload, manage, or delete Academy videos.
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
              <span>Unlock Video Admin Desk</span>
            </button>
          </form>

          <div className="pt-2 text-center">
            <Link
              href="/academy"
              className="text-xs text-zinc-400 hover:text-[#f2c301] inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Academy Videos</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. Authenticated Video Dashboard
  return (
    <div className="min-h-screen bg-[#faf8f5] text-zinc-900">
      {/* Top Header */}
      <header className="bg-zinc-950 text-white border-b border-zinc-800 sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/academy"
              className="p-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              title="View Public Academy"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-base font-serif font-bold text-white flex items-center gap-2">
                <span>Academy Video Desk</span>
                <span className="text-[10px] bg-[#f2c301] text-zinc-950 px-2 py-0.5 rounded-full font-bold uppercase">
                  Live
                </span>
              </h1>
              <p className="text-[11px] text-zinc-400">
                Manage videos visible at /academy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/academy"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-amber-200 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview /academy</span>
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

        {/* Video Upload Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-md">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-amber-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                Add Masterclass / Reel
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950 mt-0.5">
                Upload Video to Academy Hub
              </h2>
            </div>

            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#b8860b] flex items-center justify-center">
              <Plus className="w-5 h-5" />
            </div>
          </div>

          <form onSubmit={handleVideoSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Column */}
              <div className="md:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Video Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bridal HD Makeup Masterclass or Hair Keratin Treatment Reel"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-[#b8860b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Option A: YouTube Video / Shorts / Vimeo Link *
                  </label>
                  <input
                    type="text"
                    placeholder="https://www.youtube.com/watch?v=... or https://youtube.com/shorts/..."
                    value={videoUrl}
                    onChange={(e) => {
                      setVideoUrl(e.target.value);
                      if (e.target.value) setSelectedFile(null);
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#b8860b]"
                  />
                  <p className="text-[11px] text-zinc-500 mt-1">
                    Auto-generates YouTube embed &amp; high-res thumbnail.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Option B: Or Upload MP4 File from Device
                  </label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setSelectedFile(file);
                        setVideoUrl("");
                      }
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-[#faf8f5] border border-zinc-200 text-xs text-zinc-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Custom Thumbnail Image (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="/images/celebrity_makeup.jpg or https://..."
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#b8860b]"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Video Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as AcademyVideo["category"])}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#b8860b]"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Duration Tag
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 4:30 min or Short Reel"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#b8860b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Description / Key Techniques
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the demo (e.g. Deepika Patidar demonstrating bridal contouring, brush angles, and airbrush base application)..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#b8860b] resize-none"
                  />
                </div>

                <div className="flex items-center pt-2">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isFeatured}
                      onChange={(e) => setIsFeatured(e.target.checked)}
                      className="w-4 h-4 rounded text-[#b8860b] focus:ring-[#b8860b] accent-[#b8860b]"
                    />
                    <span className="text-xs font-bold text-zinc-800">
                      Mark as Featured Masterclass Video
                    </span>
                  </label>
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
                        <span>Publishing Video...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" />
                        <span>Publish Video to /academy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Existing Videos Inventory */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-md space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-amber-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                Active Inventory ({videos.length} Videos)
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950 mt-0.5">
                Published Academy Videos
              </h2>
            </div>

            <button
              onClick={fetchVideos}
              className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#b8860b] transition-colors"
              title="Refresh List"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12 text-zinc-400 text-xs">
              Loading videos...
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 text-xs">
              No videos found. Use the form above to add your first masterclass video.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-[#faf8f5] rounded-2xl p-4 border border-amber-200/80 flex flex-col justify-between space-y-3 group hover:border-[#b8860b] transition-all"
                >
                  <div className="space-y-2.5">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black shadow-xs">
                      <Image
                        src={vid.thumbnail}
                        alt={vid.title}
                        fill
                        sizes="300px"
                        className="object-cover"
                        unoptimized={vid.thumbnail.startsWith("http") || vid.thumbnail.startsWith("/uploads/")}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-[#f2c301] text-zinc-950 flex items-center justify-center">
                          <Play className="w-4 h-4 fill-zinc-950 ml-0.5" />
                        </div>
                      </div>

                      <div className="absolute top-2 left-2 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-zinc-950/85 text-[#f2c301] text-[9px] font-bold uppercase tracking-wider">
                          {vid.category}
                        </span>
                        {vid.isFeatured && (
                          <span className="px-2 py-0.5 rounded-full bg-[#f2c301] text-zinc-950 text-[9px] font-bold uppercase tracking-wider">
                            Featured
                          </span>
                        )}
                      </div>

                      {vid.duration && (
                        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[9px] font-medium flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5 text-[#f2c301]" />
                          <span>{vid.duration}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 font-serif line-clamp-1">
                        {vid.title}
                      </h4>
                      <p className="text-[11px] text-zinc-500 line-clamp-2 mt-0.5">
                        {vid.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">{vid.date || "Active"}</span>
                    <button
                      onClick={() => handleDeleteVideo(vid.id, vid.title)}
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
