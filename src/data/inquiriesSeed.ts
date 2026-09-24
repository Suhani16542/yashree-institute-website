export interface InquiryLead {
  id: string;
  name: string;
  phone: string;
  course: string;
  mode: string;
  message: string;
  status: "New" | "Contacted" | "Enrolled" | "Closed";
  createdAt: string;
}

export const INITIAL_INQUIRIES: InquiryLead[] = [
  {
    id: "lead-1",
    name: "Pooja Sharma",
    phone: "+91 98260 12345",
    course: "Professional Make-up Master Class",
    mode: "Offline Classroom (Indore)",
    message: "Interested in morning batch timings and practice kit inclusions.",
    status: "New",
    createdAt: "2026-02-23T10:15:00.000Z",
  },
  {
    id: "lead-2",
    name: "Sneha Verma",
    phone: "+91 97555 67890",
    course: "Non-Doctor Aesthetic Course",
    mode: "Offline Classroom (Indore)",
    message: "Would like to know clinical device training schedule and fees.",
    status: "Contacted",
    createdAt: "2026-02-22T14:30:00.000Z",
  },
  {
    id: "lead-3",
    name: "Anjali Patel",
    phone: "+91 94250 54321",
    course: "Nail Extensions & Nail Art Class",
    mode: "Online Classes Available",
    message: "Please share 15-day syllabus and certificate details.",
    status: "Enrolled",
    createdAt: "2026-02-21T16:45:00.000Z",
  },
  {
    id: "lead-4",
    name: "Ritu Chouhan",
    phone: "+91 91111 88990",
    course: "Hair Master Class & Chemical Treatments",
    mode: "Offline Classroom (Indore)",
    message: "Looking for weekend batch for working professionals.",
    status: "New",
    createdAt: "2026-02-20T11:20:00.000Z",
  },
];
