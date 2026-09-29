// ✏️ Edit this one file to update the whole site.

export const profile = {
  name: "Muhammad Annas Fikri",
  headline: "I build secure web systems.",
  intro:
    "Computer Science student in Information Security and Assurance at USIM. I turn messy manual processes into tools people actually use, and I care how safely they run.",
  email: "annas.fikri003@gmail.com",
  phone: "", // add e.g. "+60 12-326 5737" if you want it public
  location: "Kuala Berang, Terengganu, Malaysia",
  github: "https://github.com/annasfikri003-cyber",
  linkedin: "https://www.linkedin.com/in/annas-fikri",
};

export const about = {
  paragraphs: [
    "I'm a Bachelor of Computer Science student at Universiti Sains Islam Malaysia (USIM), specialising in Information Security and Assurance, with a current CGPA of 3.52.",
    "From March to September 2026 I interned at KLMTECH Digital, a Unifi-authorised telco sales and service partner in Terengganu. Alongside daily order and customer work, I led the digitalisation of the team's PowerPoint-based SOPs into a searchable knowledge base and built a booking app that stopped double-bookings. I have since received an offer to join as a Sales Engineer II.",
  ],
  highlights: [
    "Published my Final Year Project thesis in an academic journal",
    "Took part in the CTF Intervarsity Cyber Forensics Challenge",
    "Commissioning as a Leftenan Muda in Angkatan Pertahanan Awam Malaysia (APM)",
  ],
};

export const timeline = [
  {
    when: "2026",
    title: "Sales Engineer II offer, KLMTECH Digital",
    text: "Offered a full-time role after completing the internship.",
  },
  {
    when: "Mar to Sep 2026",
    title: "Intern, KLMTECH Digital",
    text: "Order management, customer onboarding and technical support, plus SOPSphere, SEKURIX Bookings and a computer service website.",
  },
  {
    when: "Oct 2022 to now",
    title: "BCS (Information Security and Assurance), USIM",
    text: "Network security, wireless security and risk assessment (ISO 27005).",
  },
  {
    when: "2021 to 2022",
    title: "Tamhidi in Accounting and Muamalat, USIM",
    text: "Foundation year before entering the computer science programme.",
  },
];

export const skillCategories = ["All", "Security", "Development", "Platforms", "Workplace"];

export const skills = [
  { name: "Network security", category: "Security" },
  { name: "Wireless security", category: "Security" },
  { name: "Omada Certified Network Administrator Wireless (OCNA Wireless)", category: "Security" },
  { name: "Digital forensics (CTF)", category: "Security" },
  { name: "Cybersecurity analysis (CySA+)", category: "Security" },
  { name: "Secure web programming", category: "Security" },
  { name: "PHP", category: "Development" },
  { name: "MySQL", category: "Development" },
  { name: "JavaScript", category: "Development" },
  { name: "React", category: "Development" },
  { name: "Flutter", category: "Development" },
  { name: "Java", category: "Development" },
  { name: "Python", category: "Development" },
  { name: "C++", category: "Development" },
  { name: "WordPress", category: "Platforms" },
  { name: "Glide (no-code)", category: "Platforms" },
  { name: "phpMyAdmin", category: "Platforms" },
  { name: "Git and GitHub", category: "Platforms" },
  { name: "Customer Relationship Management (CRM)", category: "Workplace" },
  { name: "Site Survey & Feasibility Testing", category: "Workplace" },
  { name: "Customer Onboarding", category: "Workplace" },
  { name: "Technical support", category: "Workplace" },
  { name: "Cross-team coordination", category: "Workplace" },
  { name: "Malay (native), English (fluent)", category: "Workplace" },
];

// Put screenshots in /public/images and set image: "/images/your-file.png"
export const projects = [
  {
    title: "SOPSphere: KLM Unifi Digital Knowledge Base",
    context: "KLMTECH Digital internship",
    description:
      "Turned scattered PowerPoint SOPs and FAQs into a searchable web knowledge base with categories, keyword search, bookmarks and an admin dashboard. Engineers now find procedures themselves instead of interrupting senior staff.",
    tags: ["PHP", "phpMyAdmin", "Search", "Admin dashboard"],
    image: "",
    link: "",
  },
  {
    title: "SEKURIX Bookings",
    context: "KLMTECH Digital internship",
    description:
      "A mobile-friendly booking app with a guided flow, buffer-time management and anti-double-booking logic, built to end scheduling confusion from walk-ins and phone bookings.",
    tags: ["Glide", "No-code", "Scheduling"],
    image: "",
    link: "",
  },
  {
    title: "Computer service request website",
    context: "KLMTECH Digital internship",
    description:
      "An online service request form for customers, including government clients, that captures what engineers need and promises a 24 business-hour response.",
    tags: ["WordPress", "Forms", "Service desk"],
    image: "",
    link: "",
  },
  {
    title: "Google Business Profile campaign",
    context: "KLMTECH Digital internship",
    description:
      "Kept the company's listing accurate, monitored reviews and made it easier for new customers to find and contact the shop. The sales team reported more and better inbound enquiries.",
    tags: ["Local SEO", "Reviews", "Marketing"],
    image: "",
    link: "",
  },
];
