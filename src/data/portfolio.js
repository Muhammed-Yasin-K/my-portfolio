// ============================================================
// PORTFOLIO DATA — Muhammed Yasin K
// ============================================================

export const personal = {
  name: "Muhammed Yasin K",
  firstName: "Muhammed",
  role: "Software Developer",
  tagline: "Building scalable, efficient, and user-focused software solutions.",
  bio: "I am an MCA graduate with a strong foundation in full-stack web development and machine learning. I enjoy building scalable, efficient, and user-focused software solutions using modern technologies. I am dedicated to engineering intelligent, AI-powered applications and solving real-world problems through clean and maintainable code.",
  location: "Kannur, Kerala, India",
  available: true,
  email: "muhammedyasink786@gmail.com",
  resume: "/resume.pdf",
};

export const social = [
  { name: "GitHub",   href: "https://github.com/Muhammed-Yasin-K",           icon: "Code2"    },
  { name: "LinkedIn", href: "https://linkedin.com/in/muhammed-yasin-k",       icon: "Briefcase"},
  { name: "Email",    href: "mailto:muhammedyasink786@gmail.com",             icon: "Mail"     },
];

export const navLinks = [
  { label: "Home",      href: "#hero"      },
  { label: "About",     href: "#about"     },
  { label: "Education", href: "#education" },
  { label: "Skills",    href: "#skills"    },
  { label: "Projects",  href: "#projects"  },
  { label: "Contact",   href: "#contact"   },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    short: "MCA",
    school: "Federal Institute of Science and Technology",
    short_school: "FISAT",
    period: "2024 – 2026",
    cgpa: "9.07",
    icon: "GraduationCap",
  },
  {
    degree: "Bachelor of Science in Physics",
    short: "B.Sc. Physics",
    school: "Nirmalagiri College",
    short_school: "Nirmalagiri College",
    period: "2021 – 2024",
    cgpa: "9.02",
    icon: "BookOpen",
  },
  {
    degree: "Higher Secondary (Plus Two)",
    short: "Plus Two",
    school: "St. Cornelius HSS, Kolayad",
    short_school: "St. Cornelius HSS",
    period: "2019 – 2021",
    cgpa: "98.5%",
    icon: "Award",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    short: "SSLC",
    school: "St. Cornelius HSS, Kolayad",
    short_school: "St. Cornelius HSS",
    period: "2018 – 2019",
    cgpa: "100%",
    icon: "Award",
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "Unique World Robotics",
    period: "6 Months (2026)",
    type: "Internship",
    duration: "6 Months",
    description: "Completed a 6-month software development internship in a robotics-focused tech company. Designed, built, and successfully deployed a complete Learning Management System (LMS) using React, Django, and PostgreSQL.",
    skills: ["React.js", "Django", "PostgreSQL", "Git"],
    color: "#6366f1",
  },
];

export const skills = [
  {
    category: "Languages",
    color: "#6366f1",
    icon: "Code2",
    items: ["Python", "JavaScript"],
  },
  {
    category: "Frontend",
    color: "#8b5cf6",
    icon: "Monitor",
    items: ["React.js", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    color: "#06b6d4",
    icon: "Server",
    items: ["FastAPI", "Node.js", "Express.js", "Flask"],
  },
  {
    category: "Databases",
    color: "#10b981",
    icon: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "ML & AI",
    color: "#f59e0b",
    icon: "Brain",
    items: ["Scikit-learn", "XGBoost", "Random Forest", "ARIMA"],
  },
  {
    category: "Tools & DevOps",
    color: "#ec4899",
    icon: "Wrench",
    items: ["Git", "GitHub", "Postman"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Civic-DSS",
    subtitle: "Spatio-Temporal Civic Risk Prediction System",
    description:
      "A civic complaint analysis platform featuring hotspot detection, time-series forecasting, and interactive geographic visualization. Built for municipalities to proactively address citizen grievances before they escalate.",
    tech: ["React", "FastAPI", "MongoDB Atlas", "XGBoost", "ARIMA", "Leaflet.js"],
    github: "https://github.com/Muhammed-Yasin-K/CIVIC-DSS",
    live: "#",
    architecture: [
      "Frontend: React.js with Leaflet for interactive geographic visualization",
      "Backend: FastAPI for high-performance microservices architecture",
      "Machine Learning: XGBoost & ARIMA for spatio-temporal forecasting",
      "Database: MongoDB Atlas for scalable NoSQL data storage"
    ],
    gradient: "from-indigo",
    accent: "#6366f1",
    badge: "ML + Geo",
    featured: true,
    image: "/civic-dss-1.png",
  },
  {
    id: 2,
    title: "Equip Guard",
    subtitle: "Predictive Maintenance System",
    description:
      "A machine learning solution designed to predict equipment failures by analyzing historical maintenance and operational data. It helps reduce downtime and optimize scheduling through data-driven forecasting.",
    tech: ["Python", "Flask", "React.js", "MongoDB", "Scikit-learn"],
    github: "https://github.com/Muhammed-Yasin-K/Equip-Guard-Predictive-Maintenance-of-Industrial-Equipments-Using-ML",
    live: "#",
    architecture: [
      "Frontend: React.js for responsive glassmorphism dashboards",
      "Backend: Flask for robust and scalable web services",
      "Machine Learning: Scikit-learn models trained on historical data",
      "Database: MongoDB for structured maintenance record storage"
    ],
    gradient: "from-purple",
    accent: "#8b5cf6",
    badge: "Machine Learning",
    featured: true,
    image: "/equip-guard.png",
  },
  {
    id: 3,
    title: "Cinemaverse",
    subtitle: "Responsive Movie Database App",
    description:
      "A feature-rich movie discovery platform with real-time search, advanced filtering by genre and rating, and integrated YouTube trailer previews. Handles thousands of titles with smooth UX.",
    tech: ["HTML5", "CSS3", "JavaScript", "YouTube API"],
    github: "https://github.com/Muhammed-Yasin-K/movie-app",
    live: "#",
    architecture: [
      "Frontend: Semantic HTML5, CSS3, and Vanilla JavaScript",
      "External API: Deep integration with YouTube API for trailer streaming",
      "Search Engine: Client-side real-time filtering and rating sorting",
      "Design System: Fully responsive fluid grid layouts"
    ],
    gradient: "from-cyan",
    accent: "#06b6d4",
    badge: "Web App",
    featured: false,
    image: "/cinemaverse.png",
  },
];

export const certifications = [
  {
    title: "IBM DevOps Fundamentals",
    issuer: "IBM",
    icon: "Cloud",
    color: "#006699",
    year: "2026",
    credential: "#",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    icon: "Cloud",
    color: "#f59e0b",
    year: "2025",
    credential: "#",
  },
  {
    title: "Database Management Systems",
    issuer: "NPTEL",
    icon: "Database",
    color: "#10b981",
    year: "2025",
    credential: "#",
  },
  {
    title: "AI & Machine Learning Internship",
    issuer: "Industry Partner",
    icon: "Brain",
    color: "#8b5cf6",
    year: "2025",
    credential: "#",
  },
  {
    title: "MERN Stack Development Bootcamp",
    issuer: "Federal Institute of Science and Technology",
    icon: "Code2",
    color: "#6366f1",
    year: "2025",
    credential: "#",
  },
];

export const achievements = [
  {
    id: 'rank3',
    title: "Third Position – MCA Batch",
    subtitle: "Academic Excellence Award",
    institution: "Federal Institute of Science & Technology",
    period: "2024–2026",
    icon: "Trophy",
    color: "#f59e0b",
    description: "Awarded the Third Position in the MCA batch by the Federal Institute of Science & Technology for outstanding academic performance and excellence.",
    metadata: [
      "Presented during Gyan Deep 2026",
      "Presented by:\nHon. Minister for Higher Education,\nSri. Roji M. John"
    ],
    footer: "2026",
    proof: "", 
  },
  {
    id: 'codevita',
    title: "TCS CodeVita Season 12",
    subtitle: "Advanced to Round 2",
    icon: "Terminal",
    color: "#a855f7",
    description: "Qualified for Round 2 in one of India's largest competitive programming contests, demonstrating strong analytical and problem-solving skills.",
    metadata: [],
    footer: "Programming Contest",
    proof: "/tcs-codevita.jpg",
  },
  {
    id: 'distinction',
    title: "First Class with Distinction",
    subtitle: "Bachelor of Science in Physics",
    institution: "Nirmalagiri College",
    icon: "GraduationCap",
    color: "#10b981",
    description: "Graduated with First Class with Distinction, achieving a CGPA of 9.02.",
    metadata: [],
    footer: "Academic Achievement",
    proof: "", 
  },
];
