import API from "./api";

// Backend expects: { phoneNumber, preferredCourse }
// Route is protected: POST /api/vapi/call (requires auth token — handled by api.ts interceptor)
export const initiateCall = async (data: { phone: string; course: string; topic: string }) => {
  const res = await API.post("/vapi/call", {
    phoneNumber: data.phone,
    preferredCourse: `${data.course} - ${data.topic}`,
  });
  return res.data;
};

export const vapiFormContent = {
  courses: [
    "B.Tech Computer Science (CSE)",
    "B.Tech Electronics (ECE)",
    "B.Tech AI & Data Science",
    "B.Tech Mechanical (ME)",
    "B.Tech Civil (CE)",
    "B.Tech Information Technology (IT)",
    "M.Tech Computer Science",
    "M.Tech VLSI Design",
    "M.Tech Structural Engineering",
    "MBA Finance",
    "MBA Marketing",
    "MBA HR",
    "MBA IT",
  ],
  topics: [
    "Course Details",
    "Fee Structure",
    "Admission Process",
    "Placement Statistics",
    "Campus Life",
    "Scholarships",
    "Hostel Facilities",
    "Other",
  ],
};