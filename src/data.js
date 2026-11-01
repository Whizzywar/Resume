// Edit your content here.
export const profile = {
  name: "Ubani Wisdom",
  role: "Frontend Developer",
  location: "FCT Abuja, Nigeria",
  headline: ["I live in a world", "where I express my thoughts through code."],
  intro:
    "I build aesthetically appealing user interfaces for websites and web applications, where every line of code serves a purpose.",
  email: "ubaniwisdom480@mail.com",

  stats: [
    ["3+", "years of experience"],
    ["20+", "projects shipped"],
    ["10+", "happy clients"],
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Node.js",
    "Firebase",
    "API integration",
    "Responsiveness",
    "Prompt engineering",
    "SEO",
  ],
  // Put your photos in /public (e.g. /public/me.jpg) and reference them as '/me.jpg'.
  // Leave empty to show the generated placeholders.
  photos: { main: "/whizzy_p.webp", about: "/wh1zzyware.webp" },
};

// Add `image: '/my-project.png'` (file in /public) to any project to replace the placeholder.
export const projects = [
  {
    image: "/val-energy-web.vercel.app_ (1).webp",
    title: "Valtech Solar Energy",
    kind: "E-commerce storefront",
    year: 2025,
    stack: "React, Tailwind, GSAP",
    text: "An energy store where energy products and solutions are showcased online.",
    url: "https://val-energy-web.vercel.app/",
  },
  {
    image: "/movie-majx2t0tk-ubani-wisdom-s-projects.vercel.app_.webp",
    title: "Netflix Sequel",
    kind: "Entertainment",
    year: 2024,
    stack: "React, Css, Firebase,Tmdb movie API",
    text: "A Movie App for seeing movies online",
    url: "https://movie-majx2t0tk-ubani-wisdom-s-projects.vercel.app/",
  },
  {
    image: "/dsez-web.vercel.app_.webp",
    title: "Delta Special Economic Zone",
    kind: "Government Website",
    year: 2026,
    stack: "React, Tailwind, Sanity",
    text: " A free trade zone website for the Delta State Government, where investors can learn about the free trade zone and its benefits.",
    url: "https://dsez-web.vercel.app/",
  },
  {
    image: "/Mara baylor photography.webp",
    title: "Mara Baylor Photography",
    kind: "Portfolio Website",
    year: 2022,
    stack: "React, Tailwind, Sanity",
    text: "A photography website for a photographer to showcase her work and services.",
    url: "#",
  },
  {
    title: "Paperplane",
    kind: "SaaS landing page",
    year: 2025,
    stack: "Next.js, Tailwind, Framer",
    text: "A launch page that lifted trial sign-ups by 38 percent in its first month.",
    url: "#",
  },
  {
    title: "Learnly",
    kind: "Education web app",
    year: 2024,
    stack: "React, Firebase, Tailwind",
    text: "A course platform serving 12,000 students, with offline-friendly lessons.",
    url: "#",
  },
];

// ---------- Added content ----------
export const extra = {
  whatsapp: "+2348140067333", // country code + number, no "+" or spaces
  whatsappText:
    "Hi Wisdom, I saw your portfolio and I’d like to talk about a project.",
  cv: "/Ubani-WisdomCV.pdf", // file lives in /public
  phone: "+234 8140067333",
  availability: "Active 24/7",
};

export const socials = [
  ["GitHub", "", "https://github.com/Whizzywar"],
  [
    "LinkedIn",
    "https://www.linkedin.com/in/wisdom-ubani-256753268?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "linkedin",
  ],
  ["X", "https://x.com/Whizzyware", "x"],
  [
    "Instagram",
    "https://www.linkedin.com/in/wisdom-ubani-256753268?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "instagram",
  ],
];

export const experience = [
  {
    period: "2019 – 2020",
    role: "IT student",
    org: "Smarthub Technologies Emab Plaza",
    where: "Abuja",
    points: [
      "Collaborated with cross-functional teams to launch the smart clinic app, built for patient to book appointment online with doctors.",
      "Taught them on how the app works and how to navigate it.",
      "Provided technical support and troubleshooting for JennyGLo Hospital.",
    ],
  },
  {
    period: "2020 – 2021",
    role: "IT Student",
    org: "Bluetooth link Technologies Emab Plaza",
    where: "Abuja",
    points: [
      "Installation and troubleshooting of software solutions for clients.",
      "Repairs and maintainance of Apple laptop hardwares.",
    ],
  },
  {
    period: "2024 – 2025",
    role: "Web Developer",
    org: "Deita Special Economic Zone",
    where: "Delta State",
    points: [
      "Maintained the company's website, ensuring optimal performance and user experience",
      "Redesigned the company's website user interface for a better user experience.",
      "Content management and updates.",
    ],
  },
];

// Shown under "About me", in this order.
export const expertise = [
  {
    group: "Frontend",
    items: [
      "JavaScript",
      "ReactJS",
      "Next.js",
      "TypeScript",
      "GSAP",
      "Tailwind CSS",
      "WordPress",
    ],
  },
  { group: "Backend", items: ["Node.js", "Firebase", "APIs and Auth"] },
  { group: "AI", items: ["Claude", "Prompt engineering"] },
  { group: "Tools", items: ["Vercel", "Vite", "Git and GitHub"] },
  {
    group: "Practice",
    items: [
      "SEO",
      "Accessibility",
      "Responsive UI",
      "Maintenance",
      "UI Development",
      "Troubleshooting and debugging",
      "Performance Optimization",
    ],
  },
  {
    group: "Design",
    items: ["Stitch", "Figma"],
  },
];

// Icon keys map to react-icons in src/components/Services.jsx
export const services = [
  {
    icon: "design",
    title: "Web development and design",
    text: "Fast, responsive websites designed and built to meet your business needs.",
    points: ["Custom design", "Mobile first", "SEO ready"],
  },
  {
    icon: "app",
    title: "Web applications",
    text: "Dashboards, booking systems and SaaS products built with React, Node.js and Firebase.",
    points: ["React and Next.js", "APIs and auth", "Payments"],
  },
  {
    icon: "shop",
    title: "E-commerce",
    text: "Online stores that load quickly and make checking out simple for your customers.",
    points: ["Product pages", "Paystack and Stripe", "Order emails"],
  },
  {
    icon: "support",
    title: "24-hour support",
    text: "Round-the-clock help after launch, so problems are fixed regularly before they cost your customers/business.",
    points: ["Quick fixes", "Monitoring", "Maintenance plans"],
  },
];
