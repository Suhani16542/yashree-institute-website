"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Image as ImageIcon,
  Video as VideoIcon,
  LogOut,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  Plus,
  Trash2,
  CheckCircle,
  AlertCircle,
  Eye,
  RefreshCw,
  Search,
  Filter,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Award,
  Play,
  Upload,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Mail,
  UserCheck,
  Film,
  Layers,
  GraduationCap,
  FileText,
  Download,
  CheckCircle2,
  CalendarPlus,
  Edit3,
  MapPin,
  Tag,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import {
  authApi,
  inquiriesApi,
  internshipsApi,
  eventsApi,
  galleryApi,
  academyVideosApi,
  resolveAssetUrl,
  AuthUser,
} from "@/lib/api";
import { parseVideoEmbed } from "@/data/academyVideosSeed";

export interface InquiryLead {
  id: string;
  name: string;
  phone: string;
  course: string;
  mode: string;
  message?: string | null;
  status: "New" | "Contacted" | "Follow-up" | "Converted" | "Closed" | string;
  createdAt: string;
}

export interface InternshipApplication {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  education: string;
  areaOfInterest: string;
  preferredArea: string;
  message?: string | null;
  resumeFileUrl?: string;
  resumeFileName?: string;
  resumeUrl?: string;
  fileSizeBytes?: number;
  status: "New" | "Reviewed" | "Shortlisted" | "Contacted" | "Rejected" | "Pending Review" | "Archived" | string;
  createdAt: string;
}


export interface AcademyEvent {
  id: string;
  title: string;
  category: "Upcoming Workshop" | "Live Seminar" | "Annual Convocation" | "Masterclass" | string;
  date: string;
  day?: string;
  month?: string;
  year?: string;
  time: string;
  venue: string;
  instructor: string;
  seatsStatus: string;
  image: string;
  description: string;
  shortDescription?: string;
  fullDescription?: string;
  highlights: string[];
  isFeatured?: boolean;
  isPublished?: boolean;
  registrationUrl?: string;
  createdAt?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Awards & Seminars" | "Student Convocation" | "Celebrity Makeup" | "Practical Training" | "Salon & Studio" | string;
  image: string;
  caption: string;
  isFeatured?: boolean;
  createdAt?: string;
}

export interface AcademyVideo {
  id: string;
  title: string;
  category: "Masterclasses & Demos" | "Student Practice & Reels" | "Awards & Ceremonies" | "Campus Tour & Facilities" | "Student Testimonials" | string;
  videoUrl: string;
  embedUrl: string;
  thumbnail: string;
  description: string;
  duration: string;
  isFeatured?: boolean;
  date?: string;
}

const GALLERY_CATEGORIES: GalleryItem["category"][] = [
  "Awards & Seminars",
  "Student Convocation",
  "Celebrity Makeup",
  "Practical Training",
  "Salon & Studio",
];

const VIDEO_CATEGORIES: AcademyVideo["category"][] = [
  "Masterclasses & Demos",
  "Student Practice & Reels",
  "Awards & Ceremonies",
  "Campus Tour & Facilities",
  "Student Testimonials",
];

const EVENT_CATEGORIES = [
  "Masterclass",
  "Live Seminar",
  "Upcoming Workshop",
  "Annual Convocation",
];

const INTERNSHIP_STATUSES = [
  "New",
  "Reviewed",
  "Shortlisted",
  "Contacted",
  "Rejected",
  "Pending Review",
  "Archived",
];

function mapInquiryItem(item: any): InquiryLead {
  const rawStatus = (item.status || "NEW").toUpperCase();
  let mappedStatus = "New";
  if (rawStatus === "CONTACTED") mappedStatus = "Contacted";
  else if (rawStatus === "FOLLOW_UP") mappedStatus = "Follow-up";
  else if (rawStatus === "CONVERTED") mappedStatus = "Converted";
  else if (rawStatus === "CLOSED") mappedStatus = "Closed";

  return {
    id: item.id || item._id,
    name: item.name || "",
    phone: item.phone || "",
    course: item.course || "",
    mode: item.mode || "",
    message: item.message || "",
    status: mappedStatus,
    createdAt: item.createdAt || new Date().toISOString(),
  };
}

function mapInternshipItem(item: any): InternshipApplication {
  const rawStatus = (item.status || "NEW").toUpperCase();
  let mappedStatus = "New";
  if (rawStatus === "REVIEWING") mappedStatus = "Reviewed";
  else if (rawStatus === "SHORTLISTED") mappedStatus = "Shortlisted";
  else if (rawStatus === "INTERVIEW" || rawStatus === "CONTACTED") mappedStatus = "Contacted";
  else if (rawStatus === "REJECTED") mappedStatus = "Rejected";
  else if (rawStatus === "CLOSED") mappedStatus = "Archived";

  const resumeUrl = item.id ? internshipsApi.getResumeUrl(item.id) : (item.resumeUrl ? resolveAssetUrl(item.resumeUrl) : undefined);
  const resumeName = item.resumeOriginalName || (item.resumeUrl ? item.resumeUrl.split("/").pop() : "Candidate_Resume.pdf");

  return {
    id: item.id || item._id,
    fullName: item.fullName || item.name || "",
    phone: item.phone || "",
    email: item.email || "",
    city: item.city || "",
    education: item.education || "",
    areaOfInterest: item.areaOfInterest || "",
    preferredArea: item.preferredArea || "",
    message: item.message || "",
    resumeFileUrl: resumeUrl,
    resumeUrl: resumeUrl,
    resumeFileName: resumeName,
    status: mappedStatus,
    createdAt: item.createdAt || new Date().toISOString(),
  };
}

function mapEventItem(e: any): AcademyEvent {
  const d = e.eventDate || e.date || new Date().toISOString();
  let dateObj: Date;
  try {
    dateObj = new Date(d);
    if (isNaN(dateObj.getTime())) dateObj = new Date();
  } catch {
    dateObj = new Date();
  }

  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  return {
    id: e.id || e._id || `evt-${Date.now()}`,
    title: e.title || "Academy Event",
    category: e.category || "Upcoming Workshop",
    date: e.date || `${dateObj.getDate()} ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`,
    day: String(dateObj.getDate()).padStart(2, "0"),
    month: monthNames[dateObj.getMonth()],
    year: String(dateObj.getFullYear()),
    time: e.time || "10:00 AM – 4:00 PM",
    venue: e.location || e.venue || "Yashree Institute Indore Campus",
    instructor: e.instructor || "Deepika Patidar (Celebrity Makeup Artist)",
    seatsStatus: e.seatsStatus || "Registrations Open",
    image: resolveAssetUrl(e.bannerImage || e.bannerImageUrl || e.image, "/images/cosmetology_training_hero.jpg"),
    description: e.description || "",
    shortDescription: e.shortDescription || e.description || "",
    highlights: Array.isArray(e.highlights)
      ? e.highlights
      : typeof e.highlights === "string"
      ? (() => {
          try {
            return JSON.parse(e.highlights);
          } catch {
            return [e.highlights];
          }
        })()
      : [
          "Live Step-by-Step Model Demo",
          "Authorized Masterclass Certificate",
          "Free Practice Cosmetics & Vanity Brushes",
        ],
    isFeatured: Boolean(e.featured ?? e.isFeatured),
    isPublished: e.published !== undefined ? e.published : (e.isPublished !== false),
    createdAt: e.createdAt,
  };
}

function mapGalleryItem(g: any): GalleryItem {
  return {
    id: g.id || g._id || `gal-${Date.now()}`,
    title: g.caption || g.title || "Gallery Moment",
    category: g.category || "Awards & Seminars",
    image: resolveAssetUrl(g.image || g.imageUrl, "/images/award_ceremony_team.jpg"),
    caption: g.caption || g.title || "",
    isFeatured: Boolean(g.featured ?? g.isFeatured),
    createdAt: g.createdAt,
  };
}

function mapAcademyVideo(v: any): AcademyVideo {
  const vidUrl = v.videoUrl || "";
  const { embedUrl, thumbnail: autoThumb } = parseVideoEmbed(vidUrl);
  const resolvedThumb = resolveAssetUrl(v.thumbnailUrl || v.thumbnail, autoThumb);

  return {
    id: v.id || v._id || `vid-${Date.now()}`,
    title: v.title || "Academy Masterclass Video",
    category: v.category || "Masterclasses & Demos",
    videoUrl: vidUrl,
    embedUrl,
    thumbnail: resolvedThumb,
    description: v.description || "",
    duration: v.duration || "Video",
    isFeatured: Boolean(v.featured ?? v.isFeatured),
    date: v.createdAt ? new Date(v.createdAt).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
  };
}

async function compressImageIfLarge(file: File, maxDimension = 1600, quality = 0.85): Promise<File> {
  if (typeof window === "undefined" || !file.type.startsWith("image/") || file.size < 1024 * 1024) {
    return file;
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new (window as any).Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob(
            (blob) => {
              if (blob && blob.size < file.size) {
                resolve(new File([blob], file.name.replace(/\.[^/.]+$/, ".jpg"), { type: "image/jpeg" }));
              } else {
                resolve(file);
              }
            },
            "image/jpeg",
            quality
          );
        } else {
          resolve(file);
        }
      };
      img.onerror = () => resolve(file);
      img.src = e.target?.result as string;
    };
    reader.onerror = () => resolve(file);
    reader.readAsDataURL(file);
  });
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "overview" | "inquiries" | "internships" | "events" | "gallery" | "videos"
  >("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<AuthUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Data states
  const [inquiries, setInquiries] = useState<InquiryLead[]>([]);
  const [internships, setInternships] = useState<InternshipApplication[]>([]);
  const [events, setEvents] = useState<AcademyEvent[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [academyVideos, setAcademyVideos] = useState<AcademyVideo[]>([]);

  // Filter & Search states for Leads
  const [searchLeadQuery, setSearchLeadQuery] = useState("");
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>("All");

  // Filter & Search states for Internships
  const [searchInternshipQuery, setSearchInternshipQuery] = useState("");
  const [internshipStatusFilter, setInternshipStatusFilter] = useState<string>("All");
  const [selectedInternship, setSelectedInternship] = useState<InternshipApplication | null>(null);

  // Filter & Search states for Events
  const [searchEventQuery, setSearchEventQuery] = useState("");
  const [eventCategoryFilter, setEventCategoryFilter] = useState<string>("All");
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [eventFormMode, setEventFormMode] = useState<"create" | "edit">("create");
  const [editingEventId, setEditingEventId] = useState<string | null>(null);

  // Event Form fields
  const [evtTitle, setEvtTitle] = useState("");
  const [evtCategory, setEvtCategory] = useState<string>("Upcoming Workshop");
  const [evtDate, setEvtDate] = useState("");
  const [evtTime, setEvtTime] = useState("10:00 AM – 4:00 PM");
  const [evtVenue, setEvtVenue] = useState("Yashree Institute Indore Campus");
  const [evtInstructor, setEvtInstructor] = useState("Deepika Patidar (Celebrity Makeup Artist)");
  const [evtSeatsStatus, setEvtSeatsStatus] = useState("Registrations Open");
  const [evtDescription, setEvtDescription] = useState("");
  const [evtShortDesc, setEvtShortDesc] = useState("");
  const [evtHighlights, setEvtHighlights] = useState("Live Step-by-Step Model Demo\nAuthorized Masterclass Certificate\nFree Practice Cosmetics & Vanity Brushes");
  const [evtIsFeatured, setEvtIsFeatured] = useState(false);
  const [evtIsPublished, setEvtIsPublished] = useState(true);
  const [evtFile, setEvtFile] = useState<File | null>(null);
  const [evtFilePreview, setEvtFilePreview] = useState<string | null>(null);
  const [evtImageUrl, setEvtImageUrl] = useState("/images/cosmetology_training_hero.jpg");
  const [evtUploading, setEvtUploading] = useState(false);
  const evtFileInputRef = useRef<HTMLInputElement>(null);

  // Feedback notifications
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Gallery Upload form states
  const [galTitle, setGalTitle] = useState("");
  const [galCategory, setGalCategory] = useState<GalleryItem["category"]>("Awards & Seminars");
  const [galCaption, setGalCaption] = useState("");
  const [galIsFeatured, setGalIsFeatured] = useState(false);
  const [galFile, setGalFile] = useState<File | null>(null);
  const [galFilePreview, setGalFilePreview] = useState<string | null>(null);
  const [galImageUrl, setGalImageUrl] = useState("");
  const [galUploading, setGalUploading] = useState(false);
  const galFileInputRef = useRef<HTMLInputElement>(null);

  // Video Upload form states
  const [vidTitle, setVidTitle] = useState("");
  const [vidCategory, setVidCategory] = useState<AcademyVideo["category"]>("Masterclasses & Demos");
  const [vidSourceType, setVidSourceType] = useState<"youtube" | "file">("youtube");
  const [vidUrl, setVidUrl] = useState("");
  const [vidThumb, setVidThumb] = useState("");
  const [vidDuration, setVidDuration] = useState("");
  const [vidDesc, setVidDesc] = useState("");
  const [vidIsFeatured, setVidIsFeatured] = useState(false);
  const [vidFile, setVidFile] = useState<File | null>(null);
  const [vidFilePreview, setVidFilePreview] = useState<string | null>(null);
  const [vidUploading, setVidUploading] = useState(false);
  const vidFileInputRef = useRef<HTMLInputElement>(null);

  const handleAdminVidFileChange = (file: File | null) => {
    if (!file) {
      setVidFile(null);
      setVidFilePreview(null);
      return;
    }

    const SUPPORTED_VIDEO_EXTENSIONS = ["mp4", "webm", "mov", "mkv", "ogg", "m4v"];
    const fileExt = file.name.split(".").pop()?.toLowerCase() || "";
    const isVideo = file.type.startsWith("video/") || SUPPORTED_VIDEO_EXTENSIONS.includes(fileExt);
    if (!isVideo || (fileExt && !SUPPORTED_VIDEO_EXTENSIONS.includes(fileExt))) {
      setFeedback({
        type: "error",
        text: `Invalid file format (.${fileExt || "unknown"}). Supported formats: MP4, WebM, MOV, MKV, OGG, M4V.`,
      });
      return;
    }

    const sizeMB = file.size / (1024 * 1024);
    if (sizeMB > 100) {
      setFeedback({
        type: "error",
        text: `Video file is too large (${sizeMB.toFixed(1)}MB). Max limit is 100MB.`,
      });
      return;
    }

    setFeedback(null);
    setVidFile(file);
    try {
      setVidFilePreview(URL.createObjectURL(file));
    } catch {
      setVidFilePreview(null);
    }
  };

  // Auth Guard with real backend session verification
  useEffect(() => {
    async function verifyAuthAndLoad() {
      try {
        const user = await authApi.getMe();
        if (user) {
          setAdminUser(user);
          setIsAuthenticated(true);
          fetchAllData();
        } else {
          router.push("/admin/login");
        }
      } catch {
        router.push("/admin/login");
      }
    }
    verifyAuthAndLoad();
  }, [router]);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [inqRes, internRes, evtRes, galRes, vidRes] = await Promise.all([
        inquiriesApi.getAll({ limit: 100 }).catch(() => ({ inquiries: [] })),
        internshipsApi.getAll({ limit: 100 }).catch(() => ({ internships: [] })),
        eventsApi.getAllAdmin({ limit: 100 }).catch(() => ({ events: [] })),
        galleryApi.getPublic({ limit: 100 }).catch(() => ({ items: [] })),
        academyVideosApi.getPublic({ limit: 100 }).catch(() => ({ videos: [] })),
      ]);

      if (Array.isArray(inqRes?.inquiries)) {
        setInquiries(inqRes.inquiries.map(mapInquiryItem));
      }
      if (Array.isArray(internRes?.internships)) {
        setInternships(internRes.internships.map(mapInternshipItem));
      }
      if (Array.isArray(evtRes?.events)) {
        setEvents(evtRes.events.map(mapEventItem));
      }
      if (Array.isArray(galRes?.items)) {
        setGalleryItems(galRes.items.map(mapGalleryItem));
      }
      if (Array.isArray(vidRes?.videos)) {
        setAcademyVideos(vidRes.videos.map(mapAcademyVideo));
      }
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authApi.logout();
    } catch (err) {
      console.warn("Logout error:", err);
    } finally {
      router.push("/admin/login");
    }
  };

  // ==========================================
  // INQUIRY STATUS HANDLERS
  // ==========================================
  const handleUpdateLeadStatus = async (id: string, newStatus: string) => {
    const backendStatus =
      newStatus === "New"
        ? "NEW"
        : newStatus === "Contacted"
        ? "CONTACTED"
        : newStatus === "Follow-up"
        ? "FOLLOW_UP"
        : newStatus === "Converted"
        ? "CONVERTED"
        : "CLOSED";

    try {
      await inquiriesApi.updateStatus(id, backendStatus as any);
      setInquiries((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      );
      setFeedback({ type: "success", text: `Inquiry status updated to "${newStatus}"` });
    } catch (err: any) {
      setFeedback({ type: "error", text: "Error updating status: " + (err.message || "Failed") });
    }
  };

  const handleDeleteLead = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete inquiry from ${name}?`)) return;
    try {
      await inquiriesApi.delete(id);
      setInquiries((prev) => prev.filter((item) => item.id !== id));
      setFeedback({ type: "success", text: `Inquiry from ${name} deleted.` });
    } catch (err: any) {
      setFeedback({ type: "error", text: "Error deleting inquiry: " + (err.message || "Failed") });
    }
  };

  // ==========================================
  // INTERNSHIP APPLICATION HANDLERS
  // ==========================================
  const handleUpdateInternshipStatus = async (id: string, newStatus: string) => {
    const backendStatus =
      newStatus === "New"
        ? "NEW"
        : newStatus === "Reviewed"
        ? "REVIEWING"
        : newStatus === "Shortlisted"
        ? "SHORTLISTED"
        : newStatus === "Contacted"
        ? "INTERVIEW"
        : newStatus === "Rejected"
        ? "REJECTED"
        : "CLOSED";

    try {
      await internshipsApi.updateStatus(id, backendStatus as any);
      setInternships((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus as any } : item))
      );
      if (selectedInternship && selectedInternship.id === id) {
        setSelectedInternship((prev) => (prev ? { ...prev, status: newStatus as any } : null));
      }
      setFeedback({ type: "success", text: `Application status updated to "${newStatus}"` });
    } catch (err: any) {
      setFeedback({ type: "error", text: "Error updating status: " + (err.message || "Failed") });
    }
  };

  const handleDeleteInternship = async (id: string, candidateName: string) => {
    if (!confirm(`Are you sure you want to delete the internship application of "${candidateName}"?`)) return;
    try {
      await internshipsApi.delete(id);
      setInternships((prev) => prev.filter((item) => item.id !== id));
      if (selectedInternship?.id === id) {
        setSelectedInternship(null);
      }
      setFeedback({ type: "success", text: `Application of ${candidateName} deleted.` });
    } catch (err: any) {
      setFeedback({ type: "error", text: "Error deleting application: " + (err.message || "Failed") });
    }
  };

  // ==========================================
  // EVENT MANAGEMENT HANDLERS
  // ==========================================
  const handleOpenCreateEvent = () => {
    setEventFormMode("create");
    setEditingEventId(null);
    setEvtTitle("");
    setEvtCategory("Upcoming Workshop");
    setEvtDate("");
    setEvtTime("10:00 AM – 4:00 PM");
    setEvtVenue("Yashree Institute Indore Campus");
    setEvtInstructor("Deepika Patidar (Celebrity Makeup Artist)");
    setEvtSeatsStatus("Registrations Open");
    setEvtDescription("");
    setEvtShortDesc("");
    setEvtHighlights("Live Step-by-Step Model Demo\nAuthorized Masterclass Certificate\nFree Practice Cosmetics & Vanity Brushes");
    setEvtIsFeatured(false);
    setEvtIsPublished(true);
    setEvtFile(null);
    setEvtFilePreview(null);
    setEvtImageUrl("/images/cosmetology_training_hero.jpg");
    setEventModalOpen(true);
  };

  const handleOpenEditEvent = (evt: AcademyEvent) => {
    setEventFormMode("edit");
    setEditingEventId(evt.id);
    setEvtTitle(evt.title);
    setEvtCategory(evt.category);
    setEvtDate(evt.date);
    setEvtTime(evt.time || "10:00 AM – 4:00 PM");
    setEvtVenue(evt.venue || "Yashree Institute Indore Campus");
    setEvtInstructor(evt.instructor || "Deepika Patidar");
    setEvtSeatsStatus(evt.seatsStatus || "Seats Available");
    setEvtDescription(evt.description || "");
    setEvtShortDesc(evt.shortDescription || "");
    setEvtHighlights(Array.isArray(evt.highlights) ? evt.highlights.join("\n") : "");
    setEvtIsFeatured(Boolean(evt.isFeatured));
    setEvtIsPublished(evt.isPublished !== false);
    setEvtFile(null);
    setEvtFilePreview(evt.image || null);
    setEvtImageUrl(evt.image || "/images/cosmetology_training_hero.jpg");
    setEventModalOpen(true);
  };

  const handleSaveEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (evtUploading) return; // Prevent duplicate submissions

    if (!evtTitle.trim()) {
      setFeedback({ type: "error", text: "Please enter an event title." });
      return;
    }
    if (!evtDate.trim()) {
      setFeedback({ type: "error", text: "Please specify the event date." });
      return;
    }

    setEvtUploading(true);
    try {
      const formData = new FormData();
      formData.append("title", evtTitle.trim());
      formData.append("category", evtCategory);
      formData.append("eventDate", evtDate.trim());
      formData.append("location", evtVenue.trim() || "Yashree Institute Indore Campus");
      formData.append("description", evtDescription.trim() || evtShortDesc.trim() || evtTitle.trim());
      formData.append("published", String(evtIsPublished));
      formData.append("featured", String(evtIsFeatured));

      if (evtFile) {
        // Fast client compression for large photos to optimize network transfer
        let fileToUpload = evtFile;
        if (evtFile.size > 1024 * 1024) {
          fileToUpload = await compressImageIfLarge(evtFile);
        }
        formData.append("bannerImage", fileToUpload);
      }

      if (eventFormMode === "create") {
        await eventsApi.create(formData);
      } else if (editingEventId) {
        await eventsApi.update(editingEventId, formData);
      }

      setFeedback({
        type: "success",
        text: eventFormMode === "create" ? "✨ Event created and published!" : "✨ Event updated successfully!",
      });
      setEventModalOpen(false);

      // Refresh ONLY the events list instead of reloading all 5 collections
      const evtRes = await eventsApi.getAllAdmin({ limit: 100 }).catch(() => ({ events: [] }));
      if (Array.isArray(evtRes?.events)) {
        setEvents(evtRes.events.map(mapEventItem));
      }
    } catch (err: any) {
      setFeedback({ type: "error", text: err.message || "Network error saving event." });
    } finally {
      setEvtUploading(false);
    }
  };

  const handleToggleEventPublish = async (evt: AcademyEvent) => {
    const newStatus = !(evt.isPublished !== false);
    try {
      await eventsApi.update(evt.id, { published: newStatus });
      setEvents((prev) =>
        prev.map((e) => (e.id === evt.id ? { ...e, isPublished: newStatus } : e))
      );
      setFeedback({
        type: "success",
        text: `Event "${evt.title}" is now ${newStatus ? "PUBLISHED" : "UNPUBLISHED"}.`,
      });
    } catch (err: any) {
      setFeedback({ type: "error", text: "Error updating status: " + (err.message || "Failed") });
    }
  };

  const handleDeleteEvent = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete event "${title}"? This cannot be undone.`)) return;
    try {
      await eventsApi.delete(id);
      setEvents((prev) => prev.filter((item) => item.id !== id));
      setFeedback({ type: "success", text: `Event "${title}" deleted.` });
    } catch (err: any) {
      setFeedback({ type: "error", text: "Error deleting event: " + (err.message || "Failed") });
    }
  };

  // ==========================================
  // GALLERY & VIDEO HANDLERS
  // ==========================================
  const handleGalleryUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!galTitle.trim()) {
      setFeedback({ type: "error", text: "Please enter a photo title or caption." });
      return;
    }
    if (!galFile && !galImageUrl.trim()) {
      setFeedback({ type: "error", text: "Please select an image file to upload." });
      return;
    }

    setGalUploading(true);
    try {
      const formData = new FormData();
      formData.append("category", galCategory);
      formData.append("caption", galTitle.trim() || galCaption.trim());
      formData.append("featured", String(galIsFeatured));

      if (galFile) {
        formData.append("image", galFile);
      }

      await galleryApi.create(formData);

      setFeedback({ type: "success", text: "✨ Photo uploaded and published to /gallery!" });
      setGalTitle("");
      setGalCaption("");
      setGalIsFeatured(false);
      setGalFile(null);
      setGalFilePreview(null);
      setGalImageUrl("");
      if (galFileInputRef.current) galFileInputRef.current.value = "";
      fetchAllData();
    } catch (err: any) {
      setFeedback({ type: "error", text: err.message || "Upload network error." });
    } finally {
      setGalUploading(false);
    }
  };

  const handleDeleteGalleryItem = async (id: string, itemTitle: string) => {
    if (!confirm(`Delete photo "${itemTitle}" from gallery?`)) return;
    try {
      await galleryApi.delete(id);
      setGalleryItems((prev) => prev.filter((i) => i.id !== id));
      setFeedback({ type: "success", text: `"${itemTitle}" removed from gallery.` });
    } catch (err: any) {
      setFeedback({ type: "error", text: "Error deleting item: " + (err.message || "Failed") });
    }
  };

  const handleVideoUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (vidUploading) return; // Prevent duplicate submissions

    if (!vidTitle.trim()) {
      setFeedback({ type: "error", text: "Please enter a video title." });
      return;
    }

    if (vidSourceType === "youtube") {
      if (!vidUrl.trim()) {
        setFeedback({ type: "error", text: "Please enter a YouTube video URL." });
        return;
      }
    } else {
      if (!vidFile) {
        setFeedback({ type: "error", text: "Please select an MP4 video file from your computer." });
        return;
      }
    }

    setVidUploading(true);
    try {
      if (vidSourceType === "file" && vidFile) {
        const formData = new FormData();
        formData.append("title", vidTitle.trim());
        formData.append("category", vidCategory);
        formData.append("duration", vidDuration.trim() || "Video");
        formData.append("published", "true");
        formData.append("videoFile", vidFile);
        formData.append("video", vidFile);
        if (vidThumb.trim()) formData.append("thumbnailUrl", vidThumb.trim());
        await academyVideosApi.create(formData);
      } else {
        await academyVideosApi.create({
          title: vidTitle.trim(),
          category: vidCategory,
          videoUrl: vidUrl.trim(),
          thumbnailUrl: vidThumb.trim() || undefined,
          duration: vidDuration.trim() || "Video",
          published: true,
        });
      }

      setFeedback({ type: "success", text: "✨ Video published to /academy successfully!" });
      setVidTitle("");
      setVidUrl("");
      setVidThumb("");
      setVidDuration("");
      setVidDesc("");
      setVidIsFeatured(false);
      setVidFile(null);
      setVidFilePreview(null);
      if (vidFileInputRef.current) vidFileInputRef.current.value = "";
      
      const vidRes = await academyVideosApi.getPublic({ limit: 100 }).catch(() => ({ videos: [] }));
      if (Array.isArray(vidRes?.videos)) {
        setAcademyVideos(vidRes.videos.map(mapAcademyVideo));
      }
    } catch (err: any) {
      setFeedback({ type: "error", text: err.message || "Video upload error." });
    } finally {
      setVidUploading(false);
    }
  };

  const handleDeleteVideo = async (id: string, vTitle: string) => {
    if (!confirm(`Delete video "${vTitle}" from academy?`)) return;
    try {
      await academyVideosApi.delete(id);
      setAcademyVideos((prev) => prev.filter((v) => v.id !== id));
      setFeedback({ type: "success", text: `"${vTitle}" removed from academy.` });
    } catch (err: any) {
      setFeedback({ type: "error", text: "Error deleting video: " + (err.message || "Failed") });
    }
  };

  // Filtered queries
  const filteredLeads = inquiries.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchLeadQuery.toLowerCase()) ||
      lead.phone.toLowerCase().includes(searchLeadQuery.toLowerCase()) ||
      lead.course.toLowerCase().includes(searchLeadQuery.toLowerCase());
    const matchesStatus =
      leadStatusFilter === "All" || lead.status === leadStatusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredInternships = internships.filter((app) => {
    const q = searchInternshipQuery.toLowerCase();
    const matchesSearch =
      app.fullName.toLowerCase().includes(q) ||
      app.phone.toLowerCase().includes(q) ||
      app.email.toLowerCase().includes(q) ||
      app.city.toLowerCase().includes(q) ||
      app.areaOfInterest.toLowerCase().includes(q);
    const matchesStatus =
      internshipStatusFilter === "All" || app.status === internshipStatusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredEvents = events.filter((evt) => {
    const q = searchEventQuery.toLowerCase();
    const matchesSearch =
      evt.title.toLowerCase().includes(q) ||
      evt.venue.toLowerCase().includes(q) ||
      evt.instructor.toLowerCase().includes(q) ||
      evt.date.toLowerCase().includes(q);
    const matchesCategory =
      eventCategoryFilter === "All" || evt.category === eventCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center text-xs">
        Authenticating session...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] text-zinc-900 flex flex-col md:flex-row selection:bg-[#f2c301]/30">
      {/* ========================================================
          MOBILE SIDEBAR BACKDROP OVERLAY
      ======================================================== */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden transition-opacity duration-200"
          aria-hidden="true"
        />
      )}

      {/* ========================================================
          LEFT SIDEBAR NAVIGATION
      ======================================================== */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 h-screen w-[280px] sm:w-72 max-w-[85vw] bg-zinc-950 text-white border-r border-zinc-800 flex flex-col justify-between transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Top Brand Area */}
        <div>
          <div className="p-4 sm:p-6 border-b border-zinc-800/80 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-32 sm:w-36 h-8 sm:h-9">
                <Image
                  src="/images/logo.png"
                  alt="Yashree Institute Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Admin Profile Tag */}
          <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-zinc-900 bg-zinc-900/40 flex items-center gap-3">
            <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-[#f2c301] text-zinc-950 flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
              YI
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold text-white block truncate">
                Deepika Patidar Admin
              </span>
              <span className="text-[10.5px] text-[#f2c301] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                Live Control Desk
              </span>
            </div>
          </div>

          {/* Sidebar Menu Links */}
          <nav className="p-3 sm:p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-230px)]">
            <button
              onClick={() => {
                setActiveTab("overview");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "bg-[#f2c301] text-zinc-950 shadow-md font-extrabold"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
                <span>Dashboard Overview</span>
              </div>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  activeTab === "overview" ? "rotate-90" : "opacity-40"
                }`}
              />
            </button>

            <button
              onClick={() => {
                setActiveTab("inquiries");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "inquiries"
                  ? "bg-[#f2c301] text-zinc-950 shadow-md font-extrabold"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Users className="w-4 h-4 flex-shrink-0" />
                <span>Student Leads CRM</span>
              </div>
              {inquiries.filter((i) => i.status === "New").length > 0 ? (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                  {inquiries.filter((i) => i.status === "New").length} New
                </span>
              ) : (
                <span className="text-xs opacity-60 font-mono">{inquiries.length}</span>
              )}
            </button>

            {/* Internship Applications Tab */}
            <button
              onClick={() => {
                setActiveTab("internships");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "internships"
                  ? "bg-[#f2c301] text-zinc-950 shadow-md font-extrabold"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <GraduationCap className="w-4 h-4 flex-shrink-0" />
                <span>Internships &amp; CVs</span>
              </div>
              {internships.filter((i) => i.status === "New" || i.status === "Pending Review").length > 0 ? (
                <span className="px-2 py-0.5 rounded-full bg-amber-500 text-zinc-950 text-[10px] font-bold">
                  {internships.filter((i) => i.status === "New" || i.status === "Pending Review").length} New
                </span>
              ) : (
                <span className="text-xs opacity-60 font-mono">{internships.length}</span>
              )}
            </button>

            {/* Events Management Tab */}
            <button
              onClick={() => {
                setActiveTab("events");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "events"
                  ? "bg-[#f2c301] text-zinc-950 shadow-md font-extrabold"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>Events &amp; Masterclasses</span>
              </div>
              <span className="text-xs opacity-60 font-mono">{events.length}</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("gallery");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "gallery"
                  ? "bg-[#f2c301] text-zinc-950 shadow-md font-extrabold"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <ImageIcon className="w-4 h-4 flex-shrink-0" />
                <span>Gallery Photo Desk</span>
              </div>
              <span className="text-xs opacity-60 font-mono">{galleryItems.length}</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("videos");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "videos"
                  ? "bg-[#f2c301] text-zinc-950 shadow-md font-extrabold"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <VideoIcon className="w-4 h-4 flex-shrink-0" />
                <span>Academy Video Hub</span>
              </div>
              <span className="text-xs opacity-60 font-mono">{academyVideos.length}</span>
            </button>
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-3 sm:p-4 border-t border-zinc-900 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            <div className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-[#f2c301] flex-shrink-0" />
              <span className="truncate">View Live Website</span>
            </div>
            <span className="text-[10px] text-zinc-500">&rarr;</span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-950/40 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <LogOut className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Sign Out Admin</span>
            </div>
          </button>
        </div>
      </aside>

      {/* ========================================================
          MAIN ADMIN CONTENT AREA
      ======================================================== */}
      <main className="flex-1 min-w-0 flex flex-col min-h-screen max-w-full overflow-x-hidden">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white border-b border-zinc-200 px-3.5 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between shadow-xs gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-xl text-zinc-700 hover:bg-zinc-100 focus:outline-none flex-shrink-0"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="min-w-0">
              <h1 className="text-sm sm:text-lg font-serif font-bold text-zinc-950 truncate">
                {activeTab === "overview" && "Executive Dashboard Overview"}
                {activeTab === "inquiries" && "Student Admission Leads CRM"}
                {activeTab === "internships" && "Internship Candidate Applications & Resumes"}
                {activeTab === "events" && "Academy Events, Seminars & Workshops"}
                {activeTab === "gallery" && "Official Gallery Media Manager"}
                {activeTab === "videos" && "Academy Video & Reels Hub"}
              </h1>
              <p className="text-[11px] text-zinc-500 hidden sm:block truncate">
                Yashree Institute of Cosmetology &amp; Aesthetic Academy • Deepika Patidar Control Console
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={fetchAllData}
              disabled={loading}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-zinc-100 hover:bg-amber-100 text-zinc-700 hover:text-amber-900 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-[#b8860b]" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </header>

        {/* Global Feedback Banner */}
        {feedback && (
          <div
            className={`mx-3 sm:mx-8 mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center justify-between gap-2 ${
              feedback.type === "success"
                ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                : "bg-rose-50 border-rose-300 text-rose-900"
            }`}
          >
            <div className="flex items-center gap-2 min-w-0">
              {feedback.type === "success" ? (
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              )}
              <span className="truncate">{feedback.text}</span>
            </div>
            <button
              onClick={() => setFeedback(null)}
              className="p-1 text-zinc-400 hover:text-zinc-700 flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="p-3.5 sm:p-6 lg:p-8 flex-1 space-y-6 sm:space-y-8 max-w-full">
          {/* ========================================================
              TAB 1: EXECUTIVE OVERVIEW
          ======================================================== */}
          {activeTab === "overview" && (
            <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
              {/* Top Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Student Leads
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-[#b8860b] flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-serif font-black text-zinc-950">
                    {inquiries.length}
                  </div>
                  <div className="text-[11px] text-zinc-500 flex items-center gap-1">
                    <span className="font-bold text-emerald-600">
                      {inquiries.filter((i) => i.status === "New").length} New
                    </span>
                    <span>uncontacted leads</span>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Internship CVs
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-zinc-950">
                    {internships.length}
                  </div>
                  <div className="text-[11px] text-zinc-500 flex items-center gap-1">
                    <span className="font-bold text-amber-600">
                      {internships.filter((i) => i.status === "New" || i.status === "Pending Review").length} Pending
                    </span>
                    <span>candidate reviews</span>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Live Events
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-zinc-950">
                    {events.length}
                  </div>
                  <div className="text-[11px] text-zinc-500 flex items-center gap-1">
                    <span className="font-bold text-emerald-600">
                      {events.filter((e) => e.isPublished !== false).length} Published
                    </span>
                    <span>on live website</span>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Gallery Photos
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-zinc-950">
                    {galleryItems.length}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Active on /gallery
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Video Hub
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Film className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-zinc-950">
                    {academyVideos.length}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Active on /academy
                  </div>
                </div>
              </div>

              {/* Quick Actions & Recent Tables */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Recent Inquiries */}
                <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#b8860b]" />
                      <h3 className="text-sm sm:text-base font-serif font-bold text-zinc-950">
                        Recent Admission Inquiries
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveTab("inquiries")}
                      className="text-xs font-bold text-[#b8860b] hover:underline"
                    >
                      View All Leads &rarr;
                    </button>
                  </div>

                  <div className="space-y-2">
                    {inquiries.slice(0, 5).map((lead) => (
                      <div
                        key={lead.id}
                        className="p-3 sm:p-3.5 rounded-2xl bg-zinc-50 hover:bg-amber-50/50 border border-zinc-100 transition-colors flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-zinc-900 truncate">{lead.name}</p>
                          <p className="text-[11px] text-zinc-500 truncate">
                            {lead.course} • {lead.phone}
                          </p>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                            lead.status === "New"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-zinc-200 text-zinc-700"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Internship Applications */}
                <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-purple-600" />
                      <h3 className="text-sm sm:text-base font-serif font-bold text-zinc-950">
                        Recent Internship Applications
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveTab("internships")}
                      className="text-xs font-bold text-[#b8860b] hover:underline"
                    >
                      View All CVs &rarr;
                    </button>
                  </div>

                  <div className="space-y-2">
                    {internships.length === 0 ? (
                      <p className="text-xs text-zinc-400 py-6 text-center">
                        No internship applications received yet.
                      </p>
                    ) : (
                      internships.slice(0, 5).map((app) => (
                        <div
                          key={app.id}
                          className="p-3 sm:p-3.5 rounded-2xl bg-zinc-50 hover:bg-purple-50/50 border border-zinc-100 transition-colors flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-zinc-900 truncate">{app.fullName}</p>
                            <p className="text-[11px] text-zinc-500 truncate">
                              {app.areaOfInterest} • {app.city || "Indore"}
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            {app.resumeFileUrl && (
                              <a
                                href={app.resumeFileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 sm:px-2 sm:py-1 rounded-lg bg-amber-100 text-[#b8860b] hover:bg-amber-200 text-[10px] font-bold flex items-center gap-1"
                              >
                                <FileText className="w-3 h-3" /> <span className="hidden xs:inline">CV</span>
                              </a>
                            )}
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-200 text-zinc-800">
                              {app.status}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB 2: STUDENT LEADS CRM
          ======================================================== */}
          {activeTab === "inquiries" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Search and Filters */}
              <div className="bg-white p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search name, phone, course..."
                    value={searchLeadQuery}
                    onChange={(e) => setSearchLeadQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-[#b8860b]"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Filter className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                  <span className="text-xs font-bold text-zinc-600 flex-shrink-0">Status:</span>
                  <select
                    value={leadStatusFilter}
                    onChange={(e) => setLeadStatusFilter(e.target.value)}
                    className="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-800"
                  >
                    <option value="All">All Statuses ({inquiries.length})</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Enrolled">Enrolled</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              {/* Inquiries Table */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs overflow-hidden max-w-full">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[640px]">
                    <thead className="bg-zinc-50 text-zinc-500 font-bold border-b border-zinc-200 uppercase tracking-wider">
                      <tr>
                        <th className="px-5 py-3.5">Candidate</th>
                        <th className="px-5 py-3.5">Contact</th>
                        <th className="px-5 py-3.5">Program / Mode</th>
                        <th className="px-5 py-3.5">Message</th>
                        <th className="px-5 py-3.5">Status</th>
                        <th className="px-5 py-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 font-medium">
                      {filteredLeads.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-5 py-8 text-center text-zinc-400">
                            No student leads found matching criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-amber-50/40 transition-colors">
                            <td className="px-5 py-4">
                              <p className="font-bold text-zinc-900">{lead.name}</p>
                              <p className="text-[10px] text-zinc-400">{lead.createdAt?.slice(0, 10)}</p>
                            </td>
                            <td className="px-5 py-4 space-y-1">
                              <div className="flex items-center gap-2">
                                <a
                                  href={`tel:${lead.phone}`}
                                  className="font-bold text-zinc-800 hover:text-[#b8860b]"
                                >
                                  {lead.phone}
                                </a>
                                <a
                                  href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald-600 hover:scale-110"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                </a>
                              </div>
                            </td>
                            <td className="px-5 py-4">
                              <span className="font-bold text-zinc-900 block">{lead.course}</span>
                              <span className="text-[10px] text-zinc-500">{lead.mode}</span>
                            </td>
                            <td className="px-5 py-4 max-w-xs text-zinc-600 line-clamp-2">
                              {lead.message || "—"}
                            </td>
                            <td className="px-5 py-4">
                              <select
                                value={lead.status}
                                onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value as any)}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                                  lead.status === "New"
                                    ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                                    : lead.status === "Contacted"
                                    ? "bg-blue-50 text-blue-800 border-blue-300"
                                    : lead.status === "Enrolled"
                                    ? "bg-amber-50 text-amber-800 border-amber-300"
                                    : "bg-zinc-100 text-zinc-700 border-zinc-300"
                                }`}
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Enrolled">Enrolled</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </td>
                            <td className="px-5 py-4 text-right">
                              <button
                                onClick={() => handleDeleteLead(lead.id, lead.name)}
                                className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-600 hover:bg-rose-50"
                                title="Delete lead"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB 3: INTERNSHIP APPLICATIONS & RESUMES
          ======================================================== */}
          {activeTab === "internships" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Header Filter Bar */}
              <div className="bg-white p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search candidate, phone, email, city..."
                    value={searchInternshipQuery}
                    onChange={(e) => setSearchInternshipQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-[#b8860b]"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Filter className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                  <span className="text-xs font-bold text-zinc-600 flex-shrink-0">Status:</span>
                  <select
                    value={internshipStatusFilter}
                    onChange={(e) => setInternshipStatusFilter(e.target.value)}
                    className="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-800"
                  >
                    <option value="All">All Statuses ({internships.length})</option>
                    {INTERNSHIP_STATUSES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Internship Applications Table */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs overflow-hidden max-w-full">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[720px]">
                    <thead className="bg-zinc-50 text-zinc-500 font-bold border-b border-zinc-200 uppercase tracking-wider">
                      <tr>
                        <th className="px-5 py-3.5">Applicant</th>
                        <th className="px-5 py-3.5">Contact Details</th>
                        <th className="px-5 py-3.5">Education / City</th>
                        <th className="px-5 py-3.5">Area of Interest</th>
                        <th className="px-5 py-3.5">Resume / CV</th>
                        <th className="px-5 py-3.5">Status</th>
                        <th className="px-5 py-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 font-medium">
                      {filteredInternships.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="px-5 py-8 text-center text-zinc-400">
                            No internship applications found.
                          </td>
                        </tr>
                      ) : (
                        filteredInternships.map((app) => (
                          <tr key={app.id} className="hover:bg-purple-50/30 transition-colors">
                            <td className="px-5 py-4">
                              <p className="font-bold text-zinc-900">{app.fullName}</p>
                              <p className="text-[10px] text-zinc-400">
                                Applied: {app.createdAt?.slice(0, 10)}
                              </p>
                            </td>

                            <td className="px-5 py-4 space-y-1">
                              <div className="flex items-center gap-2">
                                <a
                                  href={`tel:${app.phone}`}
                                  className="font-bold text-zinc-800 hover:text-[#b8860b]"
                                >
                                  {app.phone}
                                </a>
                                <a
                                  href={`https://wa.me/${app.phone.replace(/\D/g, "")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald-600 hover:scale-110"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                </a>
                              </div>
                              <p className="text-[11px] text-zinc-500">{app.email}</p>
                            </td>

                            <td className="px-5 py-4">
                              <p className="text-zinc-900 font-semibold line-clamp-1">
                                {app.education || "Student / Graduate"}
                              </p>
                              <p className="text-[11px] text-zinc-500">{app.city || "Indore"}</p>
                            </td>

                            <td className="px-5 py-4">
                              <span className="font-bold text-zinc-900 block line-clamp-1">
                                {app.areaOfInterest}
                              </span>
                              <span className="text-[10.5px] text-zinc-500">
                                Pref: {app.preferredArea}
                              </span>
                            </td>

                            <td className="px-5 py-4">
                              {app.resumeFileUrl ? (
                                <a
                                  href={app.resumeFileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#b8860b] border border-amber-300 text-xs font-bold transition-all shadow-2xs group"
                                >
                                  <FileText className="w-3.5 h-3.5" />
                                  <span>View Resume</span>
                                  <Download className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                                </a>
                              ) : (
                                <span className="text-xs text-zinc-400 italic">No File</span>
                              )}
                            </td>

                            <td className="px-5 py-4">
                              <select
                                value={app.status}
                                onChange={(e) => handleUpdateInternshipStatus(app.id, e.target.value)}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                                  app.status === "Shortlisted"
                                    ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                                    : app.status === "Contacted"
                                    ? "bg-blue-50 text-blue-800 border-blue-300"
                                    : app.status === "Reviewed"
                                    ? "bg-amber-50 text-amber-800 border-amber-300"
                                    : app.status === "Rejected"
                                    ? "bg-rose-50 text-rose-800 border-rose-300"
                                    : "bg-zinc-100 text-zinc-800 border-zinc-300"
                                }`}
                              >
                                {INTERNSHIP_STATUSES.map((st) => (
                                  <option key={st} value={st}>
                                    {st}
                                  </option>
                                ))}
                              </select>
                            </td>

                            <td className="px-5 py-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => setSelectedInternship(app)}
                                  className="p-1.5 rounded-lg text-zinc-500 hover:text-[#b8860b] hover:bg-amber-50"
                                  title="View Full Profile"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteInternship(app.id, app.fullName)}
                                  className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-600 hover:bg-rose-50"
                                  title="Delete Application"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Candidate Details Modal */}
              {selectedInternship && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
                  <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full p-4 sm:p-6 sm:p-8 shadow-2xl border border-zinc-200 relative max-h-[90vh] overflow-y-auto">
                    <button
                      onClick={() => setSelectedInternship(null)}
                      className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="space-y-5 sm:space-y-6">
                      <div className="border-b border-zinc-100 pb-4 pr-8">
                        <span className="text-[11px] font-bold text-[#b8860b] uppercase tracking-wider">
                          Internship Candidate Profile
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950 mt-1">
                          {selectedInternship.fullName}
                        </h3>
                        <p className="text-xs text-zinc-500">
                          Application ID: {selectedInternship.id} • Submitted: {selectedInternship.createdAt?.slice(0, 10)}
                        </p>
                      </div>

                      {/* Applicant Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            Phone / WhatsApp
                          </span>
                          <p className="text-sm font-bold text-zinc-900">
                            {selectedInternship.phone}
                          </p>
                        </div>

                        <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            Email Address
                          </span>
                          <p className="text-sm font-bold text-zinc-900 truncate">
                            {selectedInternship.email}
                          </p>
                        </div>

                        <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            Current City
                          </span>
                          <p className="text-sm font-bold text-zinc-900">
                            {selectedInternship.city || "Indore"}
                          </p>
                        </div>

                        <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            Educational Background
                          </span>
                          <p className="text-sm font-bold text-zinc-900">
                            {selectedInternship.education || "Not specified"}
                          </p>
                        </div>
                      </div>

                      {/* Disciplines & Roles */}
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-2">
                        <div>
                          <span className="text-[10px] font-bold text-[#b8860b] uppercase tracking-wider">
                            Primary Area of Interest
                          </span>
                          <p className="text-sm font-bold text-zinc-950">
                            {selectedInternship.areaOfInterest}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-[#b8860b] uppercase tracking-wider">
                            Preferred Internship Role
                          </span>
                          <p className="text-xs font-semibold text-zinc-700">
                            {selectedInternship.preferredArea}
                          </p>
                        </div>
                      </div>

                      {/* Message */}
                      {selectedInternship.message && (
                        <div>
                          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                            Message / About Applicant:
                          </span>
                          <p className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 leading-relaxed">
                            {selectedInternship.message}
                          </p>
                        </div>
                      )}

                      {/* Resume Download Action */}
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#f2c301] text-zinc-950 flex items-center justify-center font-bold flex-shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-white truncate">
                              {selectedInternship.resumeFileName || "Candidate Resume"}
                            </p>
                            <p className="text-[11px] text-zinc-400">
                              {selectedInternship.fileSizeBytes
                                ? `${(selectedInternship.fileSizeBytes / (1024 * 1024)).toFixed(2)} MB • `
                                : ""}Verified Upload
                            </p>
                          </div>
                        </div>

                        {selectedInternship.resumeFileUrl && (
                          <a
                            href={selectedInternship.resumeFileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center px-4 py-2 rounded-xl bg-[#f2c301] hover:bg-[#d4af37] text-zinc-950 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download / View</span>
                          </a>
                        )}
                      </div>

                      {/* Status Selector */}
                      <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-zinc-100">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-zinc-700 flex-shrink-0">Update Status:</span>
                          <select
                            value={selectedInternship.status}
                            onChange={(e) => handleUpdateInternshipStatus(selectedInternship.id, e.target.value)}
                            className="flex-1 sm:flex-initial px-3 py-1.5 rounded-xl border border-zinc-300 text-xs font-bold bg-white"
                          >
                            {INTERNSHIP_STATUSES.map((st) => (
                              <option key={st} value={st}>
                                {st}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href={`https://wa.me/${selectedInternship.phone.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Chat on WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              TAB 4: EVENTS MANAGEMENT
          ======================================================== */}
          {activeTab === "events" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Action Bar */}
              <div className="bg-white p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleOpenCreateEvent}
                    className="w-full sm:w-auto justify-center px-4 sm:px-5 py-2.5 rounded-2xl bg-zinc-950 hover:bg-[#b8860b] text-[#f2c301] hover:text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create New Event</span>
                  </button>

                  <Link
                    href="/events"
                    target="_blank"
                    className="w-full sm:w-auto justify-center px-4 py-2.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Public /events Page</span>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search event title, venue..."
                      value={searchEventQuery}
                      onChange={(e) => setSearchEventQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-[#b8860b]"
                    />
                  </div>

                  <select
                    value={eventCategoryFilter}
                    onChange={(e) => setEventCategoryFilter(e.target.value)}
                    className="w-full sm:w-auto px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-800"
                  >
                    <option value="All">All Categories ({events.length})</option>
                    {EVENT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Events Table */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs overflow-hidden max-w-full">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[720px]">
                    <thead className="bg-zinc-50 text-zinc-500 font-bold border-b border-zinc-200 uppercase tracking-wider">
                      <tr>
                        <th className="px-5 py-3.5">Event Cover</th>
                        <th className="px-5 py-3.5">Title &amp; Category</th>
                        <th className="px-5 py-3.5">Schedule</th>
                        <th className="px-5 py-3.5">Venue &amp; Speaker</th>
                        <th className="px-5 py-3.5">Status</th>
                        <th className="px-5 py-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 font-medium">
                      {filteredEvents.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-5 py-8 text-center text-zinc-400">
                            No events found. Click &quot;Create New Event&quot; to publish one.
                          </td>
                        </tr>
                      ) : (
                        filteredEvents.map((evt) => (
                          <tr key={evt.id} className="hover:bg-amber-50/40 transition-colors">
                            <td className="px-5 py-3.5">
                              <div className="relative w-20 h-14 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-200 flex-shrink-0">
                                <img
                                  src={evt.image || "/images/cosmetology_training_hero.jpg"}
                                  alt={evt.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </td>

                            <td className="px-5 py-3.5 max-w-xs">
                              <span className="text-[10px] font-bold text-[#b8860b] uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                                {evt.category}
                              </span>
                              <h4 className="font-bold text-zinc-900 mt-1 line-clamp-1">
                                {evt.title}
                              </h4>
                              <p className="text-[11px] text-zinc-500 line-clamp-1">
                                {evt.seatsStatus}
                              </p>
                            </td>

                            <td className="px-5 py-3.5">
                              <div className="flex items-center gap-1.5 font-bold text-zinc-900">
                                <Calendar className="w-3.5 h-3.5 text-[#b8860b]" />
                                <span>{evt.date}</span>
                              </div>
                              <p className="text-[11px] text-zinc-500">{evt.time}</p>
                            </td>

                            <td className="px-5 py-3.5">
                              <p className="text-zinc-900 font-medium line-clamp-1">{evt.venue}</p>
                              <p className="text-[11px] text-zinc-500 line-clamp-1">{evt.instructor}</p>
                            </td>

                            <td className="px-5 py-3.5">
                              <button
                                type="button"
                                onClick={() => handleToggleEventPublish(evt)}
                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border cursor-pointer transition-all ${
                                  evt.isPublished !== false
                                    ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                                    : "bg-zinc-100 text-zinc-500 border-zinc-300"
                                }`}
                              >
                                {evt.isPublished !== false ? (
                                  <>
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span>Published</span>
                                  </>
                                ) : (
                                  <>
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                                    <span>Draft (Hidden)</span>
                                  </>
                                )}
                              </button>
                            </td>

                            <td className="px-5 py-3.5 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => handleOpenEditEvent(evt)}
                                  className="p-1.5 rounded-lg text-zinc-500 hover:text-amber-900 hover:bg-amber-100 transition-colors cursor-pointer"
                                  title="Edit Event"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteEvent(evt.id, evt.title)}
                                  className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                  title="Delete Event"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Event Create / Edit Modal */}
              {eventModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
                  <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full p-4 sm:p-6 sm:p-8 shadow-2xl border border-zinc-200 relative max-h-[90vh] overflow-y-auto">
                    <button
                      onClick={() => setEventModalOpen(false)}
                      className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="mb-4 sm:mb-6 pr-8">
                      <span className="text-[11px] font-bold text-[#b8860b] uppercase tracking-wider">
                        {eventFormMode === "create" ? "Add New Masterclass / Seminar" : "Edit Event Details"}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950 mt-0.5">
                        {eventFormMode === "create" ? "Create Academy Event" : "Update Event"}
                      </h3>
                    </div>

                    <form onSubmit={handleSaveEvent} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                          Event Title *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. National Bridal Makeup & Airbrush Masterclass"
                          value={evtTitle}
                          onChange={(e) => setEvtTitle(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-[#b8860b]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                            Event Category *
                          </label>
                          <select
                            value={evtCategory}
                            onChange={(e) => setEvtCategory(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-[#b8860b]"
                          >
                            {EVENT_CATEGORIES.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                            Event Date *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 25 April 2026 or 2026-04-25"
                            value={evtDate}
                            onChange={(e) => setEvtDate(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-[#b8860b]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                            Time Schedule
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 10:00 AM – 5:00 PM"
                            value={evtTime}
                            onChange={(e) => setEvtTime(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-[#b8860b]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                            Seat Availability / Status
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Only 15 Seats Left / Registrations Open"
                            value={evtSeatsStatus}
                            onChange={(e) => setEvtSeatsStatus(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-[#b8860b]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                            Location / Venue
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Yashree Institute Auditorium, Indore"
                            value={evtVenue}
                            onChange={(e) => setEvtVenue(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-[#b8860b]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                            Instructor / Key Speaker
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Deepika Patidar"
                            value={evtInstructor}
                            onChange={(e) => setEvtInstructor(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-[#b8860b]"
                          />
                        </div>
                      </div>

                      {/* Event Cover Image Upload */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                          Event Cover Image
                        </label>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                          <input
                            ref={evtFileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                const f = e.target.files[0];
                                setEvtFile(f);
                                setEvtFilePreview(URL.createObjectURL(f));
                              }
                            }}
                            className="hidden"
                            id="evt-img-input"
                          />
                          <label
                            htmlFor="evt-img-input"
                            className="px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#b8860b] border border-amber-300 text-xs font-bold cursor-pointer transition-colors flex items-center gap-1.5"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>Upload Cover Photo</span>
                          </label>

                          <span className="text-xs text-zinc-500 truncate max-w-xs">
                            {evtFile ? evtFile.name : "Or keep current image"}
                          </span>
                        </div>

                        {evtFilePreview && (
                          <div className="relative w-32 h-20 rounded-xl overflow-hidden mt-2 border border-zinc-300">
                            <img src={evtFilePreview} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                          Event Description
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Provide details on masterclass coverage, kit inclusion, and certifications..."
                          value={evtDescription}
                          onChange={(e) => setEvtDescription(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-[#b8860b] resize-none"
                        />
                      </div>

                      {/* Highlights */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                          Highlights (One per line)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Live Model Step-by-Step Demo&#10;Authorized Certificate&#10;Cosmetic Kit Provided"
                          value={evtHighlights}
                          onChange={(e) => setEvtHighlights(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-[#b8860b] resize-none font-mono"
                        />
                      </div>

                      {/* Toggles */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-2">
                        <label className="flex items-center gap-2 text-xs font-bold text-zinc-800 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={evtIsPublished}
                            onChange={(e) => setEvtIsPublished(e.target.checked)}
                            className="w-4 h-4 rounded text-[#b8860b] accent-[#b8860b]"
                          />
                          <span>Publish on Live Website</span>
                        </label>

                        <label className="flex items-center gap-2 text-xs font-bold text-zinc-800 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={evtIsFeatured}
                            onChange={(e) => setEvtIsFeatured(e.target.checked)}
                            className="w-4 h-4 rounded text-[#b8860b] accent-[#b8860b]"
                          />
                          <span>Highlight on Home Page</span>
                        </label>
                      </div>

                      <div className="pt-4 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 border-t border-zinc-100">
                        <button
                          type="button"
                          disabled={evtUploading}
                          onClick={() => setEventModalOpen(false)}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-100 text-zinc-700 text-xs font-bold hover:bg-zinc-200 cursor-pointer disabled:opacity-60"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={evtUploading}
                          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#f2c301] hover:bg-[#d4af37] text-zinc-950 text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {evtUploading ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin text-zinc-950" />
                              <span>{eventFormMode === "create" ? "Creating Event..." : "Updating Event..."}</span>
                            </>
                          ) : (
                            <span>{eventFormMode === "create" ? "Create Event" : "Save Changes"}</span>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              TAB 5: GALLERY PHOTO DESK
          ======================================================== */}
          {activeTab === "gallery" && (
            <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
              {/* Photo Upload Form */}
              <div className="bg-white p-4 sm:p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs">
                <div className="mb-4 sm:mb-6">
                  <span className="text-[11px] font-bold text-[#b8860b] uppercase tracking-wider">
                    Official Photo Gallery Manager
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950 mt-0.5">
                    Upload Photo to /gallery Showcase
                  </h3>
                </div>

                <form onSubmit={handleGalleryUpload} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                        Photo Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Celebrity Bridal Makeup Demonstration"
                        value={galTitle}
                        onChange={(e) => setGalTitle(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-[#b8860b]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                        Category *
                      </label>
                      <select
                        value={galCategory}
                        onChange={(e) => setGalCategory(e.target.value as any)}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-[#b8860b]"
                      >
                        {GALLERY_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                      Caption / Short Description
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Practical live training station at Indore campus"
                      value={galCaption}
                      onChange={(e) => setGalCaption(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-[#b8860b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                      Image File Upload
                    </label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                      <input
                        ref={galFileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const f = e.target.files[0];
                            setGalFile(f);
                            setGalFilePreview(URL.createObjectURL(f));
                          }
                        }}
                        className="hidden"
                        id="gal-img-input"
                      />
                      <label
                        htmlFor="gal-img-input"
                        className="px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#b8860b] border border-amber-300 text-xs font-bold cursor-pointer transition-colors flex items-center gap-1.5"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Select Image File</span>
                      </label>
                      <span className="text-xs text-zinc-500 truncate max-w-xs">
                        {galFile ? galFile.name : "Or paste direct image path below"}
                      </span>
                    </div>

                    {!galFile && (
                      <input
                        type="text"
                        placeholder="Or direct image path: /images/students_convocation.jpg"
                        value={galImageUrl}
                        onChange={(e) => setGalImageUrl(e.target.value)}
                        className="mt-2 w-full px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-[#b8860b]"
                      />
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={galUploading}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#f2c301] hover:bg-[#d4af37] text-zinc-950 text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {galUploading ? "Uploading Photo..." : "Upload & Publish to Gallery"}
                    </button>
                  </div>
                </form>
              </div>

              {/* Gallery Grid */}
              <div className="bg-white p-4 sm:p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-serif font-bold text-zinc-950">
                    Live Gallery Items ({galleryItems.length})
                  </h3>
                  <Link
                    href="/gallery"
                    target="_blank"
                    className="text-xs font-bold text-[#b8860b] hover:underline"
                  >
                    View Public /gallery &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {galleryItems.map((item) => (
                    <div
                      key={item.id}
                      className="relative group bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200 aspect-square"
                    >
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2 text-white text-[10px]">
                        <span className="font-bold line-clamp-2">{item.title}</span>
                        <button
                          onClick={() => handleDeleteGalleryItem(item.id, item.title)}
                          className="self-end p-1 rounded-lg bg-rose-600 text-white hover:bg-rose-700 cursor-pointer"
                          title="Delete photo"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB 6: ACADEMY VIDEO HUB
          ======================================================== */}
          {activeTab === "videos" && (
            <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
              {/* Video Upload Form */}
              <div className="bg-white p-4 sm:p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs">
                <div className="mb-4 sm:mb-6">
                  <span className="text-[11px] font-bold text-[#b8860b] uppercase tracking-wider">
                    Academy Reel &amp; Video Publisher
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950 mt-0.5">
                    Publish Video to /academy
                  </h3>
                </div>

                <form onSubmit={handleVideoUpload} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                        Video Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Masterclass Hair Chemical Demonstration"
                        value={vidTitle}
                        onChange={(e) => setVidTitle(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-[#b8860b]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                        Category *
                      </label>
                      <select
                        value={vidCategory}
                        onChange={(e) => setVidCategory(e.target.value as any)}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-[#b8860b]"
                      >
                        {VIDEO_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Video Source Option Switcher */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                      Video Source *
                    </label>
                    <div className="grid grid-cols-2 gap-2 p-1 bg-zinc-100 rounded-2xl border border-zinc-200 max-w-md">
                      <button
                        type="button"
                        onClick={() => setVidSourceType("youtube")}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          vidSourceType === "youtube"
                            ? "bg-white text-zinc-950 shadow-xs border border-amber-300"
                            : "text-zinc-600 hover:text-zinc-950"
                        }`}
                      >
                        <VideoIcon className="w-3.5 h-3.5 text-red-500" />
                        <span>YouTube URL</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setVidSourceType("file")}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          vidSourceType === "file"
                            ? "bg-white text-zinc-950 shadow-xs border border-amber-300"
                            : "text-zinc-600 hover:text-zinc-950"
                        }`}
                      >
                        <Upload className="w-3.5 h-3.5 text-[#b8860b]" />
                        <span>Upload Video File</span>
                      </button>
                    </div>
                  </div>

                  {vidSourceType === "youtube" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                          YouTube / Shorts URL *
                        </label>
                        <input
                          type="text"
                          placeholder="https://www.youtube.com/watch?v=..."
                          value={vidUrl}
                          onChange={(e) => setVidUrl(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-[#b8860b]"
                        />
                        <p className="text-[10px] text-zinc-500 mt-1">
                          Auto-generates YouTube player &amp; high-res thumbnail.
                        </p>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                          Duration Badge (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 5:20 min or Reel"
                          value={vidDuration}
                          onChange={(e) => setVidDuration(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-[#b8860b]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                          Select MP4 Video File *
                        </label>
                        <input
                          ref={vidFileInputRef}
                          type="file"
                          accept="video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              handleAdminVidFileChange(e.target.files[0]);
                            }
                          }}
                          className="hidden"
                          id="admin-vid-file-input"
                        />
                        <label
                          htmlFor="admin-vid-file-input"
                          className="w-full px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#b8860b] border border-amber-300 text-xs font-bold cursor-pointer transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>{vidFile ? "Change Video File" : "Choose MP4 from Computer"}</span>
                        </label>

                        {vidFile && (
                          <div className="mt-2 p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs">
                            <span className="truncate max-w-[200px] font-semibold text-zinc-850">
                              {vidFile.name}
                            </span>
                            <span className="text-zinc-500 font-mono text-[11px]">
                              {(vidFile.size / (1024 * 1024)).toFixed(1)} MB
                            </span>
                          </div>
                        )}
                        <p className="text-[10px] text-zinc-400 mt-1">
                          Accepts .mp4, .webm, .mov (Max 100MB)
                        </p>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                          Duration Badge (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 5:20 min or Reel"
                          value={vidDuration}
                          onChange={(e) => setVidDuration(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-[#b8860b]"
                        />
                      </div>
                    </div>
                  )}

                  {vidFilePreview && (
                    <div className="rounded-xl overflow-hidden border border-zinc-200 bg-black aspect-video max-h-36 max-w-sm">
                      <video src={vidFilePreview} controls className="w-full h-full object-contain" />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                      Video Description
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief summary of technique taught in this video..."
                      value={vidDesc}
                      onChange={(e) => setVidDesc(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-[#b8860b] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={vidUploading}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#f2c301] hover:bg-[#d4af37] text-zinc-950 text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {vidUploading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-zinc-950" />
                          <span>Uploading &amp; Publishing Video...</span>
                        </>
                      ) : (
                        <span>Publish to /academy Hub</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Videos Grid */}
              <div className="bg-white p-4 sm:p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-serif font-bold text-zinc-950">
                    Live Academy Videos ({academyVideos.length})
                  </h3>
                  <Link
                    href="/academy"
                    target="_blank"
                    className="text-xs font-bold text-[#b8860b] hover:underline"
                  >
                    View Public /academy &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {academyVideos.map((v) => {
                    const isDirectUpload =
                      v.videoUrl?.includes("/uploads/") ||
                      v.videoUrl?.endsWith(".mp4") ||
                      v.videoUrl?.endsWith(".webm") ||
                      v.videoUrl?.endsWith(".mov") ||
                      (!v.videoUrl?.includes("youtube") && !v.videoUrl?.includes("youtu.be"));

                    return (
                      <div
                        key={v.id}
                        className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-amber-300 transition-all flex flex-col justify-between space-y-2"
                      >
                        <div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[10px] font-bold text-[#b8860b] uppercase tracking-wider bg-amber-100/70 px-2 py-0.5 rounded-full">
                              {v.category}
                            </span>
                            <span className="text-[9px] font-bold text-zinc-700 bg-zinc-200 px-2 py-0.5 rounded-full">
                              {isDirectUpload ? "MP4 Upload" : "YouTube"}
                            </span>
                          </div>
                          <h4 className="font-bold text-xs text-zinc-900 mt-2 line-clamp-1">
                            {v.title}
                          </h4>
                          <p className="text-[11px] text-zinc-500 line-clamp-2 mt-0.5">
                            {v.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-zinc-200 flex items-center justify-between text-xs">
                          <a
                            href={v.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#b8860b] font-bold hover:underline flex items-center gap-1 text-[11px]"
                          >
                            <Play className="w-3 h-3" /> Watch Video
                          </a>
                          <button
                            onClick={() => handleDeleteVideo(v.id, v.title)}
                            className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                            title="Delete video"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
