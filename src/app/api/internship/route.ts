import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src", "data", "internshipsData.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "resumes");

export type InternshipStatus = "New" | "Reviewed" | "Shortlisted" | "Contacted" | "Rejected" | "Pending Review" | "Archived";

export interface InternshipApplication {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  education: string;
  areaOfInterest: string;
  preferredArea: string;
  message: string;
  resumeFileName: string;
  resumeFileUrl: string;
  fileSizeBytes: number;
  status: InternshipStatus;
  createdAt: string;
}

function getInternshipsData(): InternshipApplication[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
      fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), "utf-8");
      return [];
    }
    const content = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error reading internships data:", error);
    return [];
  }
}

function saveInternshipsData(items: InternshipApplication[]) {
  try {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving internships data:", error);
  }
}

// GET: List all internship applications
export async function GET() {
  try {
    const items = getInternshipsData();
    return NextResponse.json({ success: true, count: items.length, items });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}

// POST: Submit a new internship application
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const city = formData.get("city")?.toString().trim() || "";
    const education = formData.get("education")?.toString().trim() || "";
    const areaOfInterest = formData.get("areaOfInterest")?.toString().trim() || "General Cosmetology";
    const preferredArea = formData.get("preferredArea")?.toString().trim() || "Practical Studio Training";
    const message = formData.get("message")?.toString().trim() || "";

    const resumeFile = formData.get("resume") as File | null;

    // Validation
    if (!fullName) {
      return NextResponse.json(
        { success: false, message: "Full name is required." },
        { status: 400 }
      );
    }

    if (!phone || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!resumeFile || !(resumeFile instanceof File) || resumeFile.size === 0) {
      return NextResponse.json(
        { success: false, message: "Please upload your resume (PDF or DOC/DOCX)." },
        { status: 400 }
      );
    }

    // Allowed file types: PDF, DOC, DOCX
    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const originalName = resumeFile.name || "resume.pdf";
    const ext = path.extname(originalName).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid file format. Only PDF, DOC, and DOCX files are allowed.",
        },
        { status: 400 }
      );
    }

    // Max file size: 10MB
    const maxSizeBytes = 10 * 1024 * 1024;
    if (resumeFile.size > maxSizeBytes) {
      return NextResponse.json(
        {
          success: false,
          message: "File size exceeds 10MB limit. Please upload a smaller document.",
        },
        { status: 400 }
      );
    }

    // Save resume to disk safely
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    const cleanBase = path.basename(originalName, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
    const uniqueFileName = `resume-${Date.now()}-${cleanBase}${ext}`;
    const targetFilePath = path.join(UPLOAD_DIR, uniqueFileName);

    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    fs.writeFileSync(targetFilePath, buffer);

    const applicationId = `intern-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;

    const newApplication: InternshipApplication = {
      id: applicationId,
      fullName,
      phone,
      email,
      city,
      education,
      areaOfInterest,
      preferredArea,
      message,
      resumeFileName: originalName,
      resumeFileUrl: `/uploads/resumes/${uniqueFileName}`,
      fileSizeBytes: resumeFile.size,
      status: "Pending Review",
      createdAt: new Date().toISOString(),
    };

    const currentList = getInternshipsData();
    saveInternshipsData([newApplication, ...currentList]);

    return NextResponse.json({
      success: true,
      message: "Your internship application has been successfully submitted! Our academic coordination team will review your profile.",
      applicationId,
    });
  } catch (error: any) {
    console.error("Error processing internship submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An unexpected error occurred during submission. Please try again.",
      },
      { status: 500 }
    );
  }
}

// PATCH: Update internship application status
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "Application id and new status are required" },
        { status: 400 }
      );
    }

    const currentList = getInternshipsData();
    let found = false;
    const updatedList = currentList.map((item) => {
      if (item.id === id) {
        found = true;
        return { ...item, status: status as InternshipStatus };
      }
      return item;
    });

    if (!found) {
      return NextResponse.json(
        { success: false, message: "Application not found" },
        { status: 404 }
      );
    }

    saveInternshipsData(updatedList);
    return NextResponse.json({
      success: true,
      message: `Status updated to ${status}`,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update status" },
      { status: 500 }
    );
  }
}

// DELETE: Remove an internship application
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

    const currentList = getInternshipsData();
    const itemToDelete = currentList.find((item) => item.id === id);

    // Optional: remove resume file if exists
    if (itemToDelete?.resumeFileUrl) {
      try {
        const filePath = path.join(process.cwd(), "public", itemToDelete.resumeFileUrl);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      } catch (err) {
        console.warn("Could not delete resume file:", err);
      }
    }

    const updatedList = currentList.filter((item) => item.id !== id);
    saveInternshipsData(updatedList);

    return NextResponse.json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to delete application" },
      { status: 500 }
    );
  }
}

