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
  const [videoSourceType, setVideoSourceType] = useState<"youtube" | "file">("youtube");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [duration, setDuration] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [selectedVideoFile, setSelectedVideoFile] = useState<File | null>(null);
  const [videoFilePreview, setVideoFilePreview] = useState<string | null>(null);
  const [selectedThumbnailFile, setSelectedThumbnailFile] = useState<File | null>(null);
  const [activePreviewVideo, setActivePreviewVideo] = useState<AcademyVideoItem | null>(null);

  const MAX_VIDEO_SIZE_MB = 100;
  const SUPPORTED_VIDEO_EXTENSIONS = ["mp4", "webm", "mov", "mkv", "ogg", "m4v"];

  const handleVideoFileChange = (file: File | null) => {
    if (!file) {
      setSelectedVideoFile(null);
      setVideoFilePreview(null);
      return;
    }

    // Type validation
    const fileExt = file.name.split(".").pop()?.toLowerCase() || "";
    const isVideoType = file.type.startsWith("video/") || SUPPORTED_VIDEO_EXTENSIONS.includes(fileExt);
    if (!isVideoType || (fileExt && !SUPPORTED_VIDEO_EXTENSIONS.includes(fileExt))) {
      setFeedback({
        type: "error",
        text: `Invalid file format (.${fileExt || "unknown"}). Supported video formats: MP4, WebM, MOV, MKV, OGG, M4V.`,
      });
      return;
    }

    // Size validation (100MB limit)
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > MAX_VIDEO_SIZE_MB) {
      setFeedback({
        type: "error",
        text: `Video file is too large (${fileSizeMB.toFixed(1)}MB). Maximum allowed size is ${MAX_VIDEO_SIZE_MB}MB.`,
      });
      return;
    }

    setFeedback(null);
    setSelectedVideoFile(file);
    try {
      const url = URL.createObjectURL(file);
      setVideoFilePreview(url);
    } catch {
      setVideoFilePreview(null);
    }
  };

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
    if (uploading) return; // Prevent duplicate submissions

    if (!title.trim()) {
      setFeedback({ type: "error", text: "Please enter a video title." });
      return;
    }

    if (videoSourceType === "youtube") {
      if (!videoUrl.trim()) {
        setFeedback({
          type: "error",
          text: "Please enter a YouTube video URL.",
        });
        return;
      }
    } else {
      if (!selectedVideoFile) {
        setFeedback({
          type: "error",
          text: "Please select an MP4 video file from your computer.",
        });
        return;
      }
    }

    setUploading(true);
    setFeedback(null);

    try {
      if (videoSourceType === "file" && selectedVideoFile) {
        const formData = new FormData();
        formData.append("title", title.trim());
        formData.append("category", category);
        formData.append("duration", duration.trim() || "Video");
        formData.append("published", "true");
        formData.append("videoFile", selectedVideoFile);
        formData.append("video", selectedVideoFile);

        if (selectedThumbnailFile) {
          formData.append("thumbnail", selectedThumbnailFile);
        } else if (thumbnail.trim()) {
          formData.append("thumbnailUrl", thumbnail.trim());
        }

        await academyVideosApi.create(formData);
      } else {
        if (selectedThumbnailFile) {
          const formData = new FormData();
          formData.append("title", title.trim());
          formData.append("category", category);
          formData.append("videoUrl", videoUrl.trim());
          formData.append("duration", duration.trim() || "Video");
          formData.append("published", "true");
          formData.append("thumbnail", selectedThumbnailFile);
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
      setVideoFilePreview(null);
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
                <span className="truncate">Academy Video Desk</span>
                <span className="text-[10px] bg-[#f2c301] text-zinc-950 px-2 py-0.5 rounded-full font-bold uppercase flex-shrink-0">
                  Live
                </span>
              </h1>
              <p className="text-[11px] text-zinc-400 hidden sm:block truncate">
                Manage videos visible at /academy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
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

        {/* Video Upload Form */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 sm:p-8 border-2 border-amber-200/80 shadow-md">
          <div className="flex items-center justify-between pb-4 mb-4 sm:mb-6 border-b border-amber-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                Add Masterclass / Reel
              </span>
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-zinc-950 mt-0.5">
                Upload Video to Academy Hub
              </h2>
            </div>

            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-50 text-[#b8860b] flex items-center justify-center flex-shrink-0">
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

                {/* Video Source Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Video Source *
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-zinc-100 rounded-2xl border border-zinc-200">
                    <button
                      type="button"
                      onClick={() => setVideoSourceType("youtube")}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        videoSourceType === "youtube"
                          ? "bg-white text-zinc-950 shadow-xs border border-amber-300"
                          : "text-zinc-600 hover:text-zinc-950"
                      }`}
                    >
                      <Video className="w-3.5 h-3.5 text-red-500" />
                      <span>YouTube URL</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setVideoSourceType("file")}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        videoSourceType === "file"
                          ? "bg-white text-zinc-950 shadow-xs border border-amber-300"
                          : "text-zinc-600 hover:text-zinc-950"
                      }`}
                    >
                      <Upload className="w-3.5 h-3.5 text-[#b8860b]" />
                      <span>Upload Video File</span>
                    </button>
                  </div>
                </div>

                {/* Conditional Input based on Source */}
                {videoSourceType === "youtube" ? (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      YouTube / Shorts / Vimeo URL *
                    </label>
                    <input
                      type="text"
                      placeholder="https://www.youtube.com/watch?v=... or https://youtube.com/shorts/..."
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#b8860b]"
                    />
                    <p className="text-[11px] text-zinc-500 mt-1">
                      Auto-generates YouTube embed player and high-res preview thumbnail.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Select MP4 Video File from Device *
                    </label>

                    {!selectedVideoFile ? (
                      <div className="border-2 border-dashed border-amber-200 hover:border-[#b8860b] rounded-2xl p-5 bg-[#faf8f5] text-center transition-colors">
                        <input
                          type="file"
                          id="academy-video-file-input"
                          accept="video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) handleVideoFileChange(f);
                          }}
                          className="hidden"
                        />
                        <label
                          htmlFor="academy-video-file-input"
                          className="cursor-pointer flex flex-col items-center justify-center space-y-2"
                        >
                          <div className="w-10 h-10 rounded-full bg-amber-100 text-[#b8860b] flex items-center justify-center">
                            <Upload className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-zinc-800 hover:text-[#b8860b]">
                              Click to choose video
                            </span>
                            <span className="text-xs text-zinc-500"> or drag file here</span>
                          </div>
                          <p className="text-[10px] text-zinc-400">
                            Supports .MP4, .WebM, .MOV (Max {MAX_VIDEO_SIZE_MB}MB)
                          </p>
                        </label>
                      </div>
                    ) : (
                      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-300 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-[#f2c301] text-zinc-950 flex items-center justify-center flex-shrink-0">
                            <Video className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-zinc-950 truncate">
                              {selectedVideoFile.name}
                            </p>
                            <p className="text-[10px] text-zinc-500">
                              {(selectedVideoFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to publish
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleVideoFileChange(null)}
                          className="p-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-700 transition-colors cursor-pointer flex-shrink-0"
                          title="Remove file"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {videoFilePreview && (
                      <div className="mt-2 rounded-xl overflow-hidden border border-zinc-200 bg-black aspect-video max-h-36">
                        <video
                          src={videoFilePreview}
                          controls
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                )}

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
                  <p className="text-[10px] text-zinc-400 mt-1">
                    Optional poster image for video card.
                  </p>
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
                    className="w-full py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-[#f2c301] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {uploading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Uploading &amp; Publishing Video...</span>
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
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 sm:p-8 border-2 border-amber-200/80 shadow-md space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-amber-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                Active Inventory ({videos.length} Videos)
              </span>
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-zinc-950 mt-0.5">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
              {videos.map((vid) => {
                const vidId = vid.id || vid._id || "";
                const thumb = resolveAssetUrl(vid.thumbnailUrl) || "/images/celebrity_makeup.jpg";
                const isDirectUpload =
                  vid.videoUrl?.includes("/uploads/") ||
                  vid.videoUrl?.endsWith(".mp4") ||
                  vid.videoUrl?.endsWith(".webm") ||
                  vid.videoUrl?.endsWith(".mov") ||
                  !vid.videoUrl?.includes("youtube") && !vid.videoUrl?.includes("youtu.be");

                return (
                  <div
                    key={vidId}
                    className="bg-[#faf8f5] rounded-2xl p-4 border border-amber-200/80 flex flex-col justify-between space-y-3 group hover:border-[#b8860b] transition-all"
                  >
                    <div className="space-y-2.5">
                      <div
                        onClick={() => setActivePreviewVideo(vid)}
                        className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black shadow-xs cursor-pointer"
                      >
                        <Image
                          src={thumb}
                          alt={vid.title}
                          fill
                          sizes="300px"
                          className="object-cover group-hover:scale-105 transition-transform"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-[#f2c301] text-zinc-950 flex items-center justify-center shadow-lg">
                            <Play className="w-4 h-4 fill-zinc-950 ml-0.5" />
                          </div>
                        </div>

                        <div className="absolute top-2 left-2 flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-full bg-zinc-950/85 text-[#f2c301] text-[9px] font-bold uppercase tracking-wider">
                            {vid.category}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-black/75 text-white text-[9px] font-semibold">
                            {isDirectUpload ? "MP4 Upload" : "YouTube"}
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
                        <p className="text-[11px] text-zinc-500 line-clamp-2 mt-0.5 break-all">
                          {vid.videoUrl || "Direct Upload"}
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

        {/* Video Preview Modal */}
        {activePreviewVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
            onClick={() => setActivePreviewVideo(null)}
          >
            <div
              className="bg-zinc-950 border border-amber-300/40 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <h3 className="text-sm sm:text-base font-bold text-white truncate pr-4">
                  {activePreviewVideo.title}
                </h3>
                <button
                  onClick={() => setActivePreviewVideo(null)}
                  className="p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>

              <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden">
                {activePreviewVideo.videoUrl?.includes("youtube") || activePreviewVideo.videoUrl?.includes("youtu.be") ? (
                  <iframe
                    src={activePreviewVideo.videoUrl.replace("watch?v=", "embed/")}
                    title={activePreviewVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <video
                    src={resolveAssetUrl(activePreviewVideo.videoUrl)}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

