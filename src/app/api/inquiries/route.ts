import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { INITIAL_INQUIRIES, InquiryLead } from "@/data/inquiriesSeed";

const DATA_FILE = path.join(process.cwd(), "src", "data", "inquiriesData.json");

// Helper: Read leads
function getInquiriesData(): InquiryLead[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
      fs.writeFileSync(DATA_FILE, JSON.stringify(INITIAL_INQUIRIES, null, 2), "utf-8");
      return INITIAL_INQUIRIES;
    }
    const content = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error reading inquiries data:", error);
    return INITIAL_INQUIRIES;
  }
}

// Helper: Save leads
function saveInquiriesData(items: InquiryLead[]) {
  try {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving inquiries data:", error);
  }
}

// GET: Return all inquiries
export async function GET() {
  try {
    const items = getInquiriesData();
    return NextResponse.json({ success: true, count: items.length, items });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}

// POST: Save a new inquiry from contact / consultation form
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, course, mode, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const newInquiry: InquiryLead = {
      id: `lead-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name: name.trim(),
      phone: phone.trim(),
      course: course || "General Inquiry",
      mode: mode || "Offline Classroom (Indore)",
      message: (message || "").trim(),
      status: "New",
      createdAt: new Date().toISOString(),
    };

    const currentLeads = getInquiriesData();
    const updatedLeads = [newInquiry, ...currentLeads];
    saveInquiriesData(updatedLeads);

    return NextResponse.json({
      success: true,
      message: "Inquiry saved successfully!",
      item: newInquiry,
    });
  } catch (error: any) {
    console.error("Error saving inquiry:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to save inquiry" },
      { status: 500 }
    );
  }
}

// PATCH: Update inquiry status (New -> Contacted -> Enrolled -> Closed)
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "Missing id or status" },
        { status: 400 }
      );
    }

    const currentLeads = getInquiriesData();
    const updatedLeads = currentLeads.map((item) =>
      item.id === id ? { ...item, status: status as InquiryLead["status"] } : item
    );

    saveInquiriesData(updatedLeads);
    return NextResponse.json({
      success: true,
      message: "Inquiry status updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update inquiry" },
      { status: 500 }
    );
  }
}

// DELETE: Remove an inquiry
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

    const currentLeads = getInquiriesData();
    const updatedLeads = currentLeads.filter((item) => item.id !== id);
    saveInquiriesData(updatedLeads);

    return NextResponse.json({
      success: true,
      message: "Inquiry deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to delete inquiry" },
      { status: 500 }
    );
  }
}
