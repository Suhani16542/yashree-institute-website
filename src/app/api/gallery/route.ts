import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { INITIAL_GALLERY_ITEMS, GalleryItem } from "@/data/gallerySeed";

const DATA_FILE = path.join(process.cwd(), "src", "data", "galleryItems.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "gallery");

// Helper: Ensure storage exists and read data
function getGalleryData(): GalleryItem[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      // Initialize with seed data
      fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
      fs.writeFileSync(DATA_FILE, JSON.stringify(INITIAL_GALLERY_ITEMS, null, 2), "utf-8");
      return INITIAL_GALLERY_ITEMS;
    }
    const content = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error reading gallery data:", error);
    return INITIAL_GALLERY_ITEMS;
  }
}

// Helper: Save data
function saveGalleryData(items: GalleryItem[]) {
  try {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving gallery data:", error);
  }
}

// GET: Return all gallery items
export async function GET() {
  try {
    const items = getGalleryData();
    return NextResponse.json({ success: true, count: items.length, items });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch gallery items" },
      { status: 500 }
    );
  }
}

// POST: Add a new gallery item (supports multipart form file upload or JSON payload)
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let title = "";
    let category: GalleryItem["category"] = "Awards & Seminars";
    let caption = "";
    let isFeatured = false;
    let imagePath = "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      title = (formData.get("title") as string) || "New Gallery Photo";
      category = ((formData.get("category") as string) as GalleryItem["category"]) || "Awards & Seminars";
      caption = (formData.get("caption") as string) || "";
      isFeatured = formData.get("isFeatured") === "true";

      const file = formData.get("file") as File | null;
      const imageUrlInput = formData.get("imageUrl") as string | null;

      if (file && file.size > 0) {
        // Save uploaded file to public/uploads/gallery
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const ext = path.extname(file.name) || ".jpg";
        const sanitizedBase = path
          .basename(file.name, ext)
          .replace(/[^a-zA-Z0-9_-]/g, "_");
        const uniqueFileName = `${Date.now()}_${sanitizedBase}${ext}`;
        const filePath = path.join(UPLOAD_DIR, uniqueFileName);

        fs.writeFileSync(filePath, buffer);
        imagePath = `/uploads/gallery/${uniqueFileName}`;
      } else if (imageUrlInput && imageUrlInput.trim().length > 0) {
        imagePath = imageUrlInput.trim();
      } else {
        return NextResponse.json(
          { success: false, message: "Please provide an image file or an image URL." },
          { status: 400 }
        );
      }
    } else {
      // JSON body
      const body = await req.json();
      title = body.title || "New Gallery Photo";
      category = body.category || "Awards & Seminars";
      caption = body.caption || "";
      isFeatured = Boolean(body.isFeatured);
      imagePath = body.image || "";

      if (!imagePath) {
        return NextResponse.json(
          { success: false, message: "Image path or URL is required." },
          { status: 400 }
        );
      }
    }

    const newItem: GalleryItem = {
      id: `gallery-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      title: title.trim(),
      category,
      image: imagePath,
      caption: caption.trim(),
      isFeatured,
      date: new Date().toISOString().split("T")[0],
    };

    const currentItems = getGalleryData();
    // Put newest or featured items at top
    const updatedItems = [newItem, ...currentItems];
    saveGalleryData(updatedItems);

    return NextResponse.json({
      success: true,
      message: "Image uploaded and added to gallery successfully!",
      item: newItem,
    });
  } catch (error: any) {
    console.error("Gallery upload error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to upload image" },
      { status: 500 }
    );
  }
}

// DELETE: Remove a gallery item by id
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing item ID parameter" },
        { status: 400 }
      );
    }

    const currentItems = getGalleryData();
    const itemToDelete = currentItems.find((i) => i.id === id);

    if (!itemToDelete) {
      return NextResponse.json(
        { success: false, message: "Gallery item not found" },
        { status: 404 }
      );
    }

    // If it's a locally uploaded file in /uploads/gallery/, remove the file as well
    if (itemToDelete.image.startsWith("/uploads/gallery/")) {
      const localFilePath = path.join(
        process.cwd(),
        "public",
        itemToDelete.image.replace(/^\//, "")
      );
      if (fs.existsSync(localFilePath)) {
        try {
          fs.unlinkSync(localFilePath);
        } catch (e) {
          console.warn("Could not delete physical file:", localFilePath);
        }
      }
    }

    const updatedItems = currentItems.filter((i) => i.id !== id);
    saveGalleryData(updatedItems);

    return NextResponse.json({
      success: true,
      message: "Gallery item deleted successfully",
    });
  } catch (error: any) {
    console.error("Gallery delete error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to delete item" },
      { status: 500 }
    );
  }
}
