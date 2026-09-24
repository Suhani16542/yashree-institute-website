import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { INITIAL_EVENTS, AcademyEvent } from "@/data/eventsSeed";

const DATA_FILE = path.join(process.cwd(), "src", "data", "eventsData.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "events");

function getEventsData(): AcademyEvent[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
      fs.writeFileSync(DATA_FILE, JSON.stringify(INITIAL_EVENTS, null, 2), "utf-8");
      return INITIAL_EVENTS;
    }
    const content = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error reading events data:", error);
    return INITIAL_EVENTS;
  }
}

function saveEventsData(items: AcademyEvent[]) {
  try {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving events data:", error);
  }
}

function parseDateComponents(dateStr: string) {
  // e.g. "2026-04-15" or "15 May 2026"
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      return {
        day: d.getDate().toString().padStart(2, "0"),
        month: months[d.getMonth()],
        year: d.getFullYear().toString(),
        formattedDate: `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`,
      };
    }
  } catch {}
  return {
    day: "20",
    month: "APR",
    year: "2026",
    formattedDate: dateStr,
  };
}

// GET: Return events
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const includeUnpublished = searchParams.get("all") === "true";

    const items = getEventsData();
    const filtered = includeUnpublished ? items : items.filter((evt) => evt.isPublished !== false);

    return NextResponse.json({ success: true, count: filtered.length, items: filtered });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

// POST: Create a new event (supports multipart/form-data or JSON)
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let title = "";
    let category: AcademyEvent["category"] = "Upcoming Workshop";
    let date = "";
    let time = "";
    let venue = "";
    let instructor = "Deepika Patidar";
    let seatsStatus = "Registrations Open";
    let description = "";
    let shortDescription = "";
    let highlights: string[] = [];
    let isFeatured = false;
    let isPublished = true;
    let image = "/images/cosmetology_training_hero.jpg";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      title = formData.get("title")?.toString().trim() || "";
      category = (formData.get("category")?.toString().trim() as AcademyEvent["category"]) || "Upcoming Workshop";
      date = formData.get("date")?.toString().trim() || "";
      time = formData.get("time")?.toString().trim() || "10:00 AM – 4:00 PM";
      venue = formData.get("venue")?.toString().trim() || "Yashree Institute Indore Campus";
      instructor = formData.get("instructor")?.toString().trim() || "Deepika Patidar (Celebrity Makeup Artist)";
      seatsStatus = formData.get("seatsStatus")?.toString().trim() || "Seats Available";
      description = formData.get("description")?.toString().trim() || "";
      shortDescription = formData.get("shortDescription")?.toString().trim() || "";
      isFeatured = formData.get("isFeatured") === "true";
      isPublished = formData.get("isPublished") !== "false";

      const hlStr = formData.get("highlights")?.toString() || "";
      if (hlStr) {
        try {
          highlights = JSON.parse(hlStr);
        } catch {
          highlights = hlStr.split("\n").map((s) => s.trim()).filter(Boolean);
        }
      }

      const file = formData.get("file") as File | null;
      if (file && file instanceof File && file.size > 0) {
        // Validate image file type
        const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
        if (!allowedTypes.includes(file.type)) {
          return NextResponse.json(
            { success: false, message: "Invalid image type. Please upload a JPG, PNG, or WEBP image." },
            { status: 400 }
          );
        }

        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
        const ext = path.extname(file.name) || ".jpg";
        const cleanBase = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
        const uniqueFileName = `event-${Date.now()}-${cleanBase}${ext}`;
        const targetFilePath = path.join(UPLOAD_DIR, uniqueFileName);

        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(targetFilePath, buffer);
        image = `/uploads/events/${uniqueFileName}`;
      } else if (formData.get("image")) {
        image = formData.get("image")!.toString().trim();
      }
    } else {
      const body = await req.json();
      title = body.title?.trim() || "";
      category = body.category || "Upcoming Workshop";
      date = body.date?.trim() || "";
      time = body.time?.trim() || "10:00 AM – 4:00 PM";
      venue = body.venue?.trim() || "Yashree Institute Indore Campus";
      instructor = body.instructor?.trim() || "Deepika Patidar";
      seatsStatus = body.seatsStatus?.trim() || "Seats Available";
      description = body.description?.trim() || "";
      shortDescription = body.shortDescription?.trim() || "";
      highlights = Array.isArray(body.highlights) ? body.highlights : [];
      isFeatured = Boolean(body.isFeatured);
      isPublished = body.isPublished !== false;
      image = body.image?.trim() || image;
    }

    if (!title) {
      return NextResponse.json(
        { success: false, message: "Event title is required." },
        { status: 400 }
      );
    }

    if (!date) {
      return NextResponse.json(
        { success: false, message: "Event date is required." },
        { status: 400 }
      );
    }

    const { day, month, year, formattedDate } = parseDateComponents(date);

    const newEvent: AcademyEvent = {
      id: `event-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      title,
      category,
      date: formattedDate || date,
      day,
      month,
      year,
      time,
      venue,
      instructor,
      seatsStatus,
      image,
      description: description || shortDescription,
      highlights: highlights.length > 0 ? highlights : [
        "Live Masterclass & Demonstration",
        "Authorized Academy Certification",
        "100% Practical Model Practice",
      ],
      isFeatured,
      isPublished,
    };

    const currentEvents = getEventsData();
    const updatedEvents = [newEvent, ...currentEvents];
    saveEventsData(updatedEvents);

    return NextResponse.json({
      success: true,
      message: "Event created and saved successfully!",
      item: newEvent,
    });
  } catch (error: any) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to create event" },
      { status: 500 }
    );
  }
}

// PATCH: Update existing event or toggle status
export async function PATCH(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let id = "";
    let updates: Partial<AcademyEvent> = {};

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      id = formData.get("id")?.toString().trim() || "";
      if (formData.has("title")) updates.title = formData.get("title")?.toString().trim();
      if (formData.has("category")) updates.category = formData.get("category")?.toString().trim() as any;
      if (formData.has("date")) {
        const dStr = formData.get("date")?.toString().trim() || "";
        const parsed = parseDateComponents(dStr);
        updates.date = parsed.formattedDate;
        updates.day = parsed.day;
        updates.month = parsed.month;
        updates.year = parsed.year;
      }
      if (formData.has("time")) updates.time = formData.get("time")?.toString().trim();
      if (formData.has("venue")) updates.venue = formData.get("venue")?.toString().trim();
      if (formData.has("instructor")) updates.instructor = formData.get("instructor")?.toString().trim();
      if (formData.has("seatsStatus")) updates.seatsStatus = formData.get("seatsStatus")?.toString().trim();
      if (formData.has("description")) updates.description = formData.get("description")?.toString().trim();
      if (formData.has("isFeatured")) updates.isFeatured = formData.get("isFeatured") === "true";
      if (formData.has("isPublished")) updates.isPublished = formData.get("isPublished") === "true";

      const hlStr = formData.get("highlights")?.toString();
      if (hlStr) {
        try {
          updates.highlights = JSON.parse(hlStr);
        } catch {
          updates.highlights = hlStr.split("\n").map((s) => s.trim()).filter(Boolean);
        }
      }

      const file = formData.get("file") as File | null;
      if (file && file instanceof File && file.size > 0) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
        const ext = path.extname(file.name) || ".jpg";
        const cleanBase = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
        const uniqueFileName = `event-${Date.now()}-${cleanBase}${ext}`;
        const targetFilePath = path.join(UPLOAD_DIR, uniqueFileName);

        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(targetFilePath, buffer);
        updates.image = `/uploads/events/${uniqueFileName}`;
      } else if (formData.get("image")) {
        updates.image = formData.get("image")!.toString().trim();
      }
    } else {
      const body = await req.json();
      id = body.id;
      if (body.date) {
        const parsed = parseDateComponents(body.date);
        updates = { ...body, date: parsed.formattedDate, day: parsed.day, month: parsed.month, year: parsed.year };
      } else {
        updates = body;
      }
    }

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing event id" },
        { status: 400 }
      );
    }

    const currentEvents = getEventsData();
    let found = false;
    const updatedEvents = currentEvents.map((evt) => {
      if (evt.id === id) {
        found = true;
        return { ...evt, ...updates };
      }
      return evt;
    });

    if (!found) {
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 }
      );
    }

    saveEventsData(updatedEvents);

    return NextResponse.json({
      success: true,
      message: "Event updated successfully!",
      item: updatedEvents.find((e) => e.id === id),
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update event" },
      { status: 500 }
    );
  }
}

// DELETE: Delete an event
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing id parameter" },
        { status: 400 }
      );
    }

    const currentEvents = getEventsData();
    const updatedEvents = currentEvents.filter((item) => item.id !== id);
    saveEventsData(updatedEvents);

    return NextResponse.json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to delete event" },
      { status: 500 }
    );
  }
}
