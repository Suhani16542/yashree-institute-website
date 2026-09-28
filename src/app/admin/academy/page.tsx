"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Upload,
  Trash2,
  CheckCircle,
  AlertCircle,
  Eye,
  ArrowLeft,
  Video,
  Plus,
  RefreshCw,
  Play,
  Clock,
  LogOut,
} from "lucide-react";
import { useAdminAuth } from "@/lib/auth/useAdminAuth";
import { academyVideosApi } from "@/lib/api";
import { resolveAssetUrl } from "@/lib/api/config";
import { AcademyVideoItem } from "@/lib/api/types";

const CATEGORIES = [
  "Masterclasses & Demos",
  "Student Practice & Reels",
  "Awards & Ceremonies",
  "Campus Tour & Facilities",
  "Student Testimonials",
] as const;

export default function AdminAcademyPage() {
  const { user, loading: authLoading, logout } = useAdminAuth();

  const [videos, setVideos] = useState<AcademyVideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Form states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<string>("Masterclasses & Demos");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [duration, setDuration] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [selectedVideoFile, setSelectedVideoFile] = useState<File | null>(null);
  const [selectedThumbnailFile, setSelectedThumbnailFile] = useState<File | null>(null);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const res = await academyVideosApi.getPublic();
      setVideos(res.videos || []);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load videos";
      console.error("Error fetching academy videos:", msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchVideos();
    }
  }, [user]);

  const handleVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setFeedback({ type: "error", text: "Please enter a video title." });
      return;
    }

    if (!videoUrl.trim() && !selectedVideoFile) {
      setFeedback({
        type: "error",
        text: "Please enter a YouTube/Vimeo video link or select a video file.",
      });
      return;
    }

    setUploading(true);
    setFeedback(null);

    try {
      if (selectedVideoFile || selectedThumbnailFile) {
        const formData = new FormData();
        formData.append("title", title.trim());
        formData.append("category", category);
        formData.append("duration", duration.trim() || "Video");
        formData.append("published", "true");

        if (selectedVideoFile) {
          formData.append("video", selectedVideoFile);
        } else if (videoUrl.trim()) {
          formData.append("videoUrl", videoUrl.trim());
        }

        if (selectedThumbnailFile) {
          formData.append("thumbnail", selectedThumbnailFile);
        } else if (thumbnail.trim()) {
          formData.append("thumbnailUrl", thumbnail.trim());
        }

        await academyVideosApi.create(formData);
      } else {
        await academyVideosApi.create({
          title: title.trim(),
          category,
          videoUrl: videoUrl.trim(),
          thumbnailUrl: thumbnail.trim() || undefined,
          duration: duration.trim() || "Video",
          published: true,
        });
      }

      setFeedback({
        type: "success",
        text: "✨ Academy video added successfully to /academy page!",
      });
      // Reset form
      setTitle("");
      setVideoUrl("");
      setThumbnail("");
      setDuration("");
      setIsFeatured(false);
      setSelectedVideoFile(null);
      setSelectedThumbnailFile(null);
      fetchVideos();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error while uploading video.";
      setFeedback({ type: "error", text: msg });
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteVideo = async (id: string, videoTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${videoTitle}" from the Academy page?`)) {
      return;
    }

    try {
      await academyVideosApi.delete(id);
      setFeedback({
        type: "success",
        text: `"${videoTitle}" removed successfully.`,
      });
      fetchVideos();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to delete video.";
      setFeedback({ type: "error", text: "Error deleting video: " + msg });
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
      {/* Top Header */}
      <header className="bg-zinc-950 text-white border-b border-zinc-800 sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="p-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Return to Main Admin Dashboard"
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
              onClick={() => logout()}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-rose-950 text-rose-300 border border-zinc-700 hover:border-rose-500 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
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
              className="text-xs font-bold underline opacity-70 hover:opacity-100 cursor-pointer"
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
                      if (e.target.value) setSelectedVideoFile(null);
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
                        setSelectedVideoFile(file);
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
              className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#b8860b] transition-colors cursor-pointer"
              title="Refresh List"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12 text-zinc-400 text-xs flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin text-[#f2c301]" />
              <span>Loading videos from backend...</span>
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 text-xs">
              No videos found. Use the form above to add your first masterclass video.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {videos.map((vid) => {
                const vidId = vid.id || vid._id || "";
                const thumb = resolveAssetUrl(vid.thumbnailUrl) || "/images/celebrity_makeup.jpg";
                return (
                  <div
                    key={vidId}
                    className="bg-[#faf8f5] rounded-2xl p-4 border border-amber-200/80 flex flex-col justify-between space-y-3 group hover:border-[#b8860b] transition-all"
                  >
                    <div className="space-y-2.5">
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black shadow-xs">
                        <Image
                          src={thumb}
                          alt={vid.title}
                          fill
                          sizes="300px"
                          className="object-cover"
                          unoptimized
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
                          {vid.videoUrl || "Video"}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px]">
                      <span className="text-zinc-400">
                        {vid.createdAt ? new Date(vid.createdAt).toLocaleDateString() : "Active"}
                      </span>
                      <button
                        onClick={() => handleDeleteVideo(vidId, vid.title)}
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

