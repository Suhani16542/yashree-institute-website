import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { INITIAL_ACADEMY_VIDEOS, AcademyVideo, parseVideoEmbed } from "@/data/academyVideosSeed";

const DATA_FILE = path.join(process.cwd(), "src", "data", "academyVideos.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "videos");

// Helper: Ensure storage exists and read data
function getVideosData(): AcademyVideo[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
      fs.writeFileSync(DATA_FILE, JSON.stringify(INITIAL_ACADEMY_VIDEOS, null, 2), "utf-8");
      return INITIAL_ACADEMY_VIDEOS;
    }
    const content = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error reading academy videos data:", error);
    return INITIAL_ACADEMY_VIDEOS;
  }
}

// Helper: Save data
function saveVideosData(items: AcademyVideo[]) {
  try {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving academy videos data:", error);
  }
}

// GET: Return all academy videos
export async function GET() {
  try {
    const items = getVideosData();
    return NextResponse.json({ success: true, count: items.length, items });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch academy videos" },
      { status: 500 }
    );
  }
}

// POST: Add a new academy video
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let title = "";
    let category: AcademyVideo["category"] = "Masterclasses & Demos";
    let videoUrl = "";
    let thumbnail = "";
    let description = "";
    let duration = "Video";
    let isFeatured = false;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      title = (formData.get("title") as string) || "New Academy Masterclass Video";
      category = ((formData.get("category") as string) as AcademyVideo["category"]) || "Masterclasses & Demos";
      description = (formData.get("description") as string) || "";
      duration = (formData.get("duration") as string) || "Video";
      isFeatured = formData.get("isFeatured") === "true";
      videoUrl = (formData.get("videoUrl") as string) || "";
      thumbnail = (formData.get("thumbnail") as string) || "";

      const file = formData.get("file") as File | null;
      if (file && file.size > 0) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const ext = path.extname(file.name) || ".mp4";
        const sanitizedBase = path
          .basename(file.name, ext)
          .replace(/[^a-zA-Z0-9_-]/g, "_");
        const uniqueFileName = `${Date.now()}_${sanitizedBase}${ext}`;
        const filePath = path.join(UPLOAD_DIR, uniqueFileName);

        fs.writeFileSync(filePath, buffer);
        videoUrl = `/uploads/videos/${uniqueFileName}`;
      }
    } else {
      const body = await req.json();
      title = body.title || "New Academy Masterclass Video";
      category = body.category || "Masterclasses & Demos";
      videoUrl = body.videoUrl || "";
      thumbnail = body.thumbnail || "";
      description = body.description || "";
      duration = body.duration || "Video";
      isFeatured = Boolean(body.isFeatured);
    }

    if (!videoUrl || videoUrl.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Video URL or uploaded video file is required." },
        { status: 400 }
      );
    }

    const { embedUrl, thumbnail: autoThumb } = parseVideoEmbed(videoUrl);
    const finalThumbnail = thumbnail.trim() ? thumbnail.trim() : autoThumb;

    const newVideo: AcademyVideo = {
      id: `vid-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      title: title.trim(),
      category,
      videoUrl: videoUrl.trim(),
      embedUrl,
      thumbnail: finalThumbnail,
      description: description.trim(),
      duration: duration.trim(),
      isFeatured,
      date: new Date().toISOString().split("T")[0],
    };

    const currentVideos = getVideosData();
    const updatedVideos = [newVideo, ...currentVideos];
    saveVideosData(updatedVideos);

    return NextResponse.json({
      success: true,
      message: "Academy video added successfully!",
      video: newVideo,
    });
  } catch (error: any) {
    console.error("Academy video upload error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to add video" },
      { status: 500 }
    );
  }
}

// DELETE: Remove an academy video by id
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing video ID parameter" },
        { status: 400 }
      );
    }

    const currentVideos = getVideosData();
    const videoToDelete = currentVideos.find((v) => v.id === id);

    if (!videoToDelete) {
      return NextResponse.json(
        { success: false, message: "Video not found" },
        { status: 404 }
      );
    }

    // Delete local video file if stored in /uploads/videos/
    if (videoToDelete.videoUrl.startsWith("/uploads/videos/")) {
      const localFilePath = path.join(
        process.cwd(),
        "public",
        videoToDelete.videoUrl.replace(/^\//, "")
      );
      if (fs.existsSync(localFilePath)) {
        try {
          fs.unlinkSync(localFilePath);
        } catch (e) {
          console.warn("Could not delete physical video file:", localFilePath);
        }
      }
    }

    const updatedVideos = currentVideos.filter((v) => v.id !== id);
    saveVideosData(updatedVideos);

    return NextResponse.json({
      success: true,
      message: "Video removed from Academy page successfully",
    });
  } catch (error: any) {
    console.error("Video delete error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to delete video" },
      { status: 500 }
    );
  }
}
