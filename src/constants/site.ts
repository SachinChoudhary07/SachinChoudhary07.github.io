import type {
  BlogPost,
  Experience,
  NavItem,
  Project,
  Service,
  SkillCategory,
  SocialLink,
  Stat,
  Testimonial,
} from "@/types";

export const SITE = {
  name: "Sachin Choudhary",
  role: "Flutter Developer",
  tagline: "Building production-ready Android & iOS apps with Flutter",
  description:
    "Flutter developer with 4+ years of experience building production-ready Android and iOS applications. Strong expertise in Provider-based state management, Firebase, REST APIs, and real-time features like chat, voice, and video calls.",
  email: "sachin.dev2910@gmail.com",
  phone: "+91 6232580029",
  location: "Indore, MP, India",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://sachinchoudhary07.github.io",
  photo: "/assets/images/sachin-choudhary.png",
  ogImage: "/assets/images/portfolio-hero.png",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sachin-dev2910",
    icon: "linkedin",
  },
  {
    name: "Medium",
    href: "https://medium.com/@sachin.dev2910",
    icon: "medium",
  },
  {
    name: "Email",
    href: "mailto:sachin.dev2910@gmail.com",
    icon: "email",
  },
];

export const MEDIUM_PROFILE = "https://medium.com/@sachin.dev2910";

export const HERO_ROLES = [
  "Flutter Developer",
  "Contributing Writer",
  "Full Stack Web Developer",
  "Mobile App Developer",
  "Firebase Specialist",
] as const;

export const HERO_TAGS = [
  "Flutter Developer",
  "Mobile App Developer",
  "Full Stack Web Developer",
  "Cross Platform Expert",
] as const;

export const HERO_STATS: Stat[] = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Apps Built" },
  { value: 4, suffix: "", label: "Companies" },
  { value: 60, suffix: "%", label: "Crash Reduction" },
];

export const ACHIEVEMENT_STATS: Stat[] = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Store Releases" },
  { value: 60, suffix: "%", label: "Fewer Crashes" },
];

export const ABOUT = {
  intro:
    "I'm a Flutter developer with 4+ years of experience shipping production-ready Android and iOS apps. I specialize in Provider-based state management, Firebase, REST APIs, and realtime communication features like chat, voice, and video calls.",
  experience:
    "I've built apps across edtech, logistics, legal services, dating, healthcare, and fitness — collaborating with backend teams on APIs, payments, Agora realtime features, and store deployments.",
  whatIDo:
    "I own core modules like authentication, navigation, payments, and realtime communication. I implement Clean Architecture / MVC patterns, optimize performance, and publish maintainable apps on Google Play and the App Store.",
  passion:
    "I'm passionate about smooth UX, stable releases, and realtime features that keep users engaged — chat, voice, and video experiences that feel reliable in production.",
  currentFocus:
    "Currently at Codiant (A Yash Technology Company), building fitness and clinical apps including CalCounts, CalCounts Pro, Scribeflo, and CoachRater.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "flutter",
    title: "Flutter",
    skills: [
      { name: "Flutter", level: 94 },
      { name: "Dart", level: 93 },
      { name: "Widgets & UI", level: 92 },
      { name: "Deep Linking", level: 85 },
    ],
  },
  {
    id: "web",
    title: "Web",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 86 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 87 },
    ],
  },
  {
    id: "state",
    title: "State Management",
    skills: [
      { name: "Provider", level: 94 },
      { name: "Bloc", level: 88 },
      { name: "GetX", level: 86 },
    ],
  },
  {
    id: "backend",
    title: "Firebase & Backend",
    skills: [
      { name: "Firebase Auth", level: 92 },
      { name: "Firestore", level: 88 },
      { name: "FCM", level: 87 },
      { name: "Supabase", level: 88 },
      { name: "Payment Gateways", level: 86 },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    skills: [
      { name: "Clean Architecture", level: 88 },
      { name: "MVC", level: 90 },
    ],
  },
  {
    id: "api",
    title: "API & Realtime",
    skills: [
      { name: "REST APIs", level: 93 },
      { name: "JSON", level: 92 },
      { name: "Agora SDK", level: 90 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "GitHub / GitLab", level: 92 },
      { name: "Android Studio", level: 90 },
      { name: "VS Code / Cursor", level: 93 },
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    skills: [
      { name: "Play Store", level: 92 },
      { name: "App Store", level: 88 },
      { name: "Cloudflare", level: 86 },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Flutter Developer",
    company: "Codiant — A Yash Technology Company",
    location: "Indore, MP",
    period: "Oct 2024 — Present",
    type: "Full-time",
    responsibilities: [
      "Build and ship production Flutter apps for fitness and clinical workflows",
      "Develop tablet-optimized coach dashboards and mobile calorie-tracking experiences",
      "Implement realtime transcription, offline support, and multi-device syncing",
      "Publish and maintain apps on Google Play Store and App Store",
    ],
    technologies: ["Flutter", "Dart", "Provider", "Bloc", "REST APIs", "Firebase"],
    achievements: [
      "Delivered CalCounts Pro instructor dashboard for tablet coaches",
      "Built CalCounts meal tracking with barcode scan, photo upload, and subscriptions",
      "Shipped Scribeflo clinical documentation with realtime transcription",
      "Published and maintained apps on both major stores",
    ],
  },
  {
    id: "2",
    role: "Associate Flutter Developer",
    company: "Mactosys Software Technology Pvt. Ltd.",
    location: "Indore, MP",
    period: "Dec 2023 — Sept 2024",
    type: "Full-time",
    responsibilities: [
      "Led end-to-end development of legal services and social communication apps",
      "Integrated secure payment gateways for service bookings",
      "Built chat, voice, and video calling with Agora SDK",
      "Collaborated on UI/UX for doctor appointment scheduling",
    ],
    technologies: ["Flutter", "Agora SDK", "Payment Gateway", "Firebase", "REST APIs"],
    achievements: [
      "Led LynkLegal — chat, call, and video booking with lawyers, CAs, and CS professionals",
      "Boosted engagement on Ashfaq Dating via Agora chat, voice, and video",
      "Contributed to Oshler doctor appointment UX",
      "Published and maintained apps on Google Play Store",
    ],
  },
  {
    id: "3",
    role: "Junior Flutter Developer",
    company: "IndVibe Infotech Pvt Ltd.",
    location: "Indore, MP",
    period: "Nov 2022 — Nov 2023",
    type: "Full-time",
    responsibilities: [
      "Owned core modules including authentication and navigation for edtech apps",
      "Implemented secure Google Login and Firebase authentication",
      "Built responsive Flutter UI for driver workflows",
      "Published and maintained applications on Google Play Store",
    ],
    technologies: ["Flutter", "Firebase", "GetX", "Google Login", "Provider"],
    achievements: [
      "Reduced Edux App crashes by ~60% through structured testing and error handling",
      "Optimized routing with GetX for smoother navigation",
      "Delivered polished UI across Yalla Driver screens",
    ],
  },
  {
    id: "4",
    role: "Flutter Developer Intern",
    company: "Xcrino Business Solution",
    location: "Indore, MP",
    period: "Sept 2021 — Jan 2022",
    type: "Internship",
    responsibilities: [
      "Converted UI wireframes into responsive Flutter screens",
      "Integrated REST APIs for listings, menus, and order placement",
      "Built e-commerce flows for clothing and quick-delivery use cases",
      "Collaborated with backend developers on loading and error states",
    ],
    technologies: ["Flutter", "REST APIs", "JSON", "Dart"],
    achievements: [
      "Shipped a Flutter food ordering application",
      "Delivered checkout-focused e-commerce experiences with optimized UI performance",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "tripkhata",
    title: "TripKhata: Group Trip Expense Splitter",
    description:
      "Offline-first Flutter app for splitting group trip expenses: add spends by Hinglish voice, split fairly, and settle up over UPI.",
    longDescription:
      "TripKhata is an Android app I designed and built for Indian road trips, where one friend pays for petrol, another for the dhaba and someone else for the hotel. Say “Rahul ne 1500 ka petrol bharwaya” and it is saved, split and added to everyone's balance, even with no signal on the highway. Everything is stored on the phone first (Drift/SQLite) and synced to Firebase when the network returns. Expenses can be split equally, by amount or by shares, only between the people who were part of them, and the app computes the fewest payments needed to settle the trip, with a one-tap UPI payment pre-filled for GPay or PhonePe. Trips can be shared with a 6-letter code, friends get push notifications when someone adds an expense, and every trip ends with a route map of stops and a shareable PDF/CSV summary. Released as a signed APK on GitHub.",
    image: "/assets/images/tripkhata-cover.jpg",
    screenshots: [
      "/assets/images/tripkhata-cover.jpg",
      "/assets/images/tripkhata-offline-first.jpg",
      "/assets/images/tripkhata-hinglish-voice.jpg",
      "/assets/images/tripkhata-fair-splits.jpg",
      "/assets/images/tripkhata-upi-settle-up.jpg",
      "/assets/images/tripkhata-route-stops.jpg",
      "/assets/images/tripkhata-summary-pdf.jpg",
    ],
    features: [
      "Offline-first: every expense is saved on the phone and syncs when there's signal",
      "Speak to add: on-device speech recognition with a Hinglish parser (“pandrah sau”, “dedh hazaar”, “2k”)",
      "Home screen widget with a mic button for quick voice entry",
      "Split equally, by amount or by shares, down to the paisa, only between the people involved",
      "Balances with the fewest payments to settle, plus one-tap UPI pay (upi://pay)",
      "Share a trip with a 6-letter code and get push notifications when friends add expenses",
      "Check-ins at hotels, dhabas and petrol pumps with an OpenStreetMap route log",
      "Trip summary with PDF/CSV export, bill photos and budget alerts",
      "Google sign-in, in-app account deletion, no ads and no tracking",
    ],
    techStack: [
      "Flutter",
      "BLoC",
      "Drift (SQLite)",
      "Firebase",
      "Firestore",
      "Cloud Functions",
      "FCM",
      "flutter_map",
      "Speech-to-Text",
    ],
    categories: ["Flutter", "Firebase", "UI"],
    github: "https://github.com/SachinChoudhary07/Trip-Khata",
    liveDemo: "https://github.com/SachinChoudhary07/Trip-Khata/releases/latest",
    challenges: [
      "Highways have no network, but expenses must never be lost",
      "Parsing casual Hinglish speech into an amount, payer and split",
      "Splitting fairly when only some members shared an item, without rounding errors",
      "Keeping a shared trip in sync across several phones that go offline",
    ],
    solutions: [
      "Local Drift database as the source of truth with a queued sync to Firestore",
      "Custom Hinglish number and intent parser that highlights anything uncertain for a one-tap fix",
      "All money stored in paise, with per-expense participants and a minimal-payments settle-up algorithm",
      "Firestore security rules scoped to trip members and a Cloud Function that pushes FCM updates on each expense",
    ],
    lessons: [
      "Offline-first changes every design decision, from IDs to conflict handling",
      "Voice input works when the app shows what it understood and makes corrections cheap",
      "Small local touches (Hinglish, UPI, dhabas) make a utility app feel built for its users",
    ],
    architecture:
      "Flutter UI with BLoC/Cubits over a TripRepository backed by Drift (SQLite). A sync layer queues changes to Firestore; Firebase Auth (Google), Storage for bill photos, Cloud Functions + FCM for group notifications, and Crashlytics for stability.",
    role: "Solo product: idea, UI design, Flutter app, Firebase backend, Cloud Functions, and APK releases.",
    performance: [
      "Works fully offline with instant local writes",
      "Sync and push notifications when the network returns",
      "Signed release APKs published through GitHub Releases",
    ],
    timeline: "Personal Product — 2026",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description:
      "This premium portfolio — built with Next.js, React, TypeScript, and Framer Motion to showcase my Flutter work.",
    longDescription:
      "A modern, animated personal portfolio built with Next.js App Router, React 19, TypeScript, and Tailwind CSS. It features smooth Lenis scrolling, Framer Motion + GSAP animations, a filterable project showcase with case-study modals, EmailJS contact form, dark/light theme, SEO metadata, and a fully responsive mobile-first layout. This is the site you're browsing right now.",
    image: "/assets/images/portfolio-hero.png",
    screenshots: [
      "/assets/images/portfolio-hero.png",
      "/assets/images/portfolio-hero-light.png",
    ],
    features: [
      "Next.js App Router + React 19 + TypeScript",
      "Framer Motion & GSAP scroll animations",
      "Filterable projects with detailed case-study modal",
      "EmailJS contact form with validation",
      "Dark/light theme, SEO, sitemap & Open Graph",
      "Lenis smooth scroll and command palette (Ctrl/Cmd+K)",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
    categories: ["Web", "UI"],
    liveDemo: SITE.url,
    challenges: [
      "Keeping animations smooth without hurting performance",
      "Organizing reusable sections for a scalable portfolio codebase",
    ],
    solutions: [
      "Dynamic imports for below-the-fold sections and optimized images",
      "Centralized content in constants with shared UI primitives",
    ],
    lessons: [
      "A strong portfolio is both a product and a case study of craft",
      "Web skills complement Flutter delivery for full-stack storytelling",
    ],
    architecture:
      "Next.js App Router with modular sections, shared UI components, and content-driven constants.",
    role: "Sole designer & developer — UI, animations, content, and SEO.",
    performance: [
      "Code-split sections via dynamic imports",
      "Optimized local images and lazy-loaded content",
    ],
    timeline: "2026",
  },
  {
    id: "scribeflo",
    title: "Scribeflo: AI Medical Scribe",
    description:
      "AI-powered clinical scribe that records patient encounters, transcribes in real time, and generates structured SOAP notes automatically.",
    longDescription:
      "Let AI handle your clinical notes. Scribeflo is an AI-powered scribe designed for healthcare providers. It records patient encounters, transcribes them in real-time, and generates structured clinical documentation—automatically. Ideal for physicians, therapists, and allied health professionals, it improves efficiency while maintaining full accuracy and compliance. How it works: start visit recording, talk naturally while Scribeflo handles the background, view and edit AI-generated SOAP notes, then export or sync finalized notes. Built for healthcare professionals to document and review clinical notes — it does not provide medical advice or diagnostic recommendations.",
    image: "/assets/images/scribeflo.png",
    screenshots: [
      "/assets/images/scribeflo-capture.png",
      "/assets/images/scribeflo-soap.png",
    ],
    features: [
      "Capture ambient conversations — tap and go, no scripting",
      "Generate SOAP notes instantly (Subjective, Objective, Assessment, Plan)",
      "Edit, review & export notes with ease — including EHR upload flows",
      "Full HIPAA compliance with healthcare-grade encryption",
      "Save time & reduce burnout — cut documentation time by up to 80%",
      "Real-time transcription from patient conversations",
    ],
    techStack: ["Flutter", "Dart", "REST APIs", "Provider", "AI Transcription"],
    categories: ["Flutter", "UI", "API"],
    playStore: "https://play.google.com/store/apps/details?id=com.codiant.scribeflo",
    challenges: [
      "Accurate real-time transcription during ambient clinical conversations",
      "Generating reliable structured SOAP notes clinicians can trust",
      "Meeting healthcare privacy and HIPAA compliance requirements",
    ],
    solutions: [
      "Ambient recording with natural visit capture — tap to start, no setup",
      "AI-generated SOAP notes with quick review and edit workflows",
      "Healthcare-grade encryption aligned with HIPAA regulations",
    ],
    lessons: [
      "Clinical tools succeed when they reclaim time without sacrificing accuracy",
      "Documentation UX must stay out of the way of the patient conversation",
    ],
    architecture:
      "Flutter mobile app with realtime transcription, structured note generation, and secure export/sync flows for clinical documentation.",
    role: "Flutter Developer — visit recording UX, note generation flows, and store release.",
    performance: [
      "Up to 80% less documentation time for providers",
      "Real-time transcription during patient encounters",
      "Faster SOAP note review and export workflows",
    ],
    timeline: "Codiant — Present",
  },
  {
    id: "docvian",
    title: "Docvian: Secure Document Vault",
    description:
      "Private, encrypted & offline document vault with AES-256 security, biometric unlock, and local-only storage.",
    longDescription:
      "Docvian is an offline-first document vault I worked on for storing IDs, files, and personal records locally on-device. It uses AES-256 encryption with hardware-backed key storage, biometric unlock, and no cloud sync by design — so sensitive documents never leave the user's phone. I focused on vault UX, secure session handling, scanner/import flows, and organized categories/tags for fast retrieval.",
    image: "/assets/images/docvian.png",
    screenshots: ["/assets/images/docvian.png"],
    features: [
      "Biometric unlock with Fingerprint or Face recognition",
      "100% offline-first — no servers, no cloud, no tracking",
      "AES-256 encryption for every file added to the vault",
      "App lock, auto lock-out timers & secure session handling",
      "Smart scanner — capture, crop, and store as images or PDFs",
      "Import PDFs & images with organized categories and tags",
      "Encrypted backups, recovery questions & safe offline restore",
      "Premium UI with smooth animations, glassmorphism & dark mode",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "AES-256",
      "Biometrics",
      "Local Storage",
      "Provider",
    ],
    categories: ["Flutter", "UI"],
    playStore: "https://play.google.com/store/apps/details?id=com.docvian.mobile&hl=en_IN",
    challenges: [
      "Keeping sensitive documents fully offline without sacrificing usability",
      "Secure key storage and encryption that never exposes plaintext data",
      "Reliable backup/restore without cloud sync dependency",
    ],
    solutions: [
      "Local-first vault architecture with hardware-backed key storage",
      "AES-256 encryption applied automatically on every file",
      "Password-protected encrypted backups with recovery questions and offline restore",
    ],
    lessons: [
      "True privacy means the app maker cannot see, reset, or sync user data",
      "Premium vault UX must feel effortless while remaining security-first",
    ],
    architecture:
      "Offline-first Flutter vault with local AES-256 encryption, biometric auth, secure session handling, and encrypted backup/restore flows.",
    role: "Flutter Developer — secure vault UX, encryption flows, scanner, and document organization.",
    performance: [
      "Instant biometric unlock for vault access",
      "Fast retrieval with searchable tags and filters",
      "Zero network dependency for day-to-day document management",
    ],
    timeline: "Product",
  },
  {
    id: "calcount",
    title: "CalCounts: AI Calorie & Food Tracker",
    description:
      "AI-powered calorie and food tracker — snap meals, scan barcodes, track macros, and crush health goals.",
    longDescription:
      "Track smarter. Eat better. Live healthier—with CalCounts. Designed for everyday users and trusted by health pros, nutritionists, and trainers, CalCounts is your AI-powered companion for smarter calorie tracking and goal-crushing health habits. Log meals in seconds, track macros with ease, and sync your progress—without the clutter. From food photos to barcode scans, CalCounts gives you quick, accurate insights that actually make sense. Unlock Beast Mode with CalCounts Pro for supercharged food scanning, smart exercise sync, advanced progress reports, and personalized nudges. CalCounts offers AI-powered calorie estimates and nutrition tracking for general wellness only — it does not provide medical advice, diagnosis, or treatment.",
    image: "/assets/images/calcounts.png",
    screenshots: ["/assets/images/calcounts.png"],
    features: [
      "Snap & Log Instantly — AI estimates calories and macros from meal photos",
      "Scan barcodes in a flash for snacks and groceries",
      "Track macros & nutrients — carbs, protein, fats, and more",
      "Plan meals your way with custom meals and smart suggestions",
      "Set personal health goals — weight loss, maintenance, or muscle gain",
      "Clear daily, weekly, and monthly progress dashboards",
      "Smart reminders for meals, hydration, and movement",
      "CalCounts Pro — advanced scanning, exercise sync, reports & nudges",
    ],
    techStack: ["Flutter", "Dart", "REST APIs", "Provider", "AI", "Subscriptions"],
    categories: ["Flutter", "UI", "API"],
    playStore: "https://play.google.com/store/apps/details?id=com.codiant.calcounts&hl=en_IN",
    challenges: [
      "Accurate AI calorie and macro estimates from food photos",
      "Keeping tracking fast and clutter-free for everyday users",
      "Packaging Pro subscription features without overwhelming free users",
    ],
    solutions: [
      "Photo-based AI meal logging plus barcode scanning for quick entry",
      "Clean dashboards for daily, weekly, and monthly progress",
      "CalCounts Pro tier for advanced scanning, workouts, and reports",
    ],
    lessons: [
      "Counting calories shouldn't feel like a full-time job",
      "Tools succeed when they work as hard as the user's goals",
    ],
    architecture:
      "Flutter calorie-tracking app with AI meal recognition, barcode logging, goals, progress analytics, and subscription-based Pro features.",
    role: "Flutter Developer — meal logging UX, AI/barcode flows, goals, and store release.",
    performance: [
      "Meal logging in seconds via photo or barcode",
      "Clear macro and nutrient breakdowns at a glance",
      "Consistent habits with smart reminders and progress views",
    ],
    timeline: "Codiant — Present",
  },
  {
    id: "calcounts-pro",
    title: "CalCounts Pro: Instructor Dashboard",
    description:
      "Tablet-only instructor dashboard to manage clients, track calories, nutrition, meals, and connection requests.",
    longDescription:
      "CalCounts Pro is your dedicated instructor dashboard built exclusively for tablets. Seamlessly manage all your clients, monitor their daily calorie burn, track nutrition, and review logged meals—all from one easy-to-use interface. Whether you're training in-person or virtually, CalCounts Pro helps you keep your clients on track—every step of their journey. Intended for informational and coaching purposes only — it does not provide medical advice, diagnosis, or treatment.",
    image: "/assets/images/calcounts-pro.png",
    screenshots: ["/assets/images/calcounts-pro.png"],
    features: [
      "Fast & secure login to instructor profile and linked clients",
      "Real-time calorie tracking — daily and weekly intake vs burn",
      "Macro & meal insights with protein, carbs, fats, and meal photos",
      "Request management — accept or reject client connections in one tap",
      "Optimized for tablets with a larger screen for better visibility",
      "My Day dashboard with pending, accepted, and rejected request overview",
    ],
    techStack: ["Flutter", "Dart", "REST APIs", "Provider", "Tablet UI"],
    categories: ["Flutter", "UI", "API"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.codiant.calcountsinstructor&hl=en_IN",
    challenges: [
      "Designing a tablet-first coaching experience distinct from the consumer app",
      "Presenting multi-client calorie and nutrition data clearly at a glance",
      "Streamlining client connection request workflows for instructors",
    ],
    solutions: [
      "Dedicated tablet layouts with sidebar navigation and dashboard cards",
      "Real-time client tracking views for intake, burn, macros, and meals",
      "One-tap accept/reject request management with clear status badges",
    ],
    lessons: [
      "Coach tools need larger-screen visibility and fast client oversight",
      "Separating instructor and consumer apps keeps each experience focused",
    ],
    architecture:
      "Flutter tablet app for instructors with client dashboards, nutrition insights, and request management flows.",
    role: "Flutter Developer — tablet instructor dashboard, client tracking, and request management.",
    performance: [
      "Faster client oversight from a single My Day dashboard",
      "Clear request statuses for pending, accepted, and rejected",
      "Optimized tablet layouts for coaching workflows",
    ],
    timeline: "Codiant — Present",
  },
  {
    id: "mio-amore",
    title: "Mio Amore: Dating App",
    description:
      "Flutter dating app with Firebase auth, matching, encrypted chat, admin tools, and subscription monetization.",
    longDescription:
      "Mio Amore is a Flutter dating app I worked on with matching, discovery, and chat at the core. I implemented key consumer flows on Android and iOS from a single codebase, wired Firebase auth and profile data, and supported safety-focused features like photo ID verification plus encrypted messaging. The product also includes admin controls for user management, plus monetization through RevenueCat subscriptions and AdMob. A public demo build is available on the Play Store.",
    image: "/assets/images/mio-amore.png",
    screenshots: ["/assets/images/mio-amore.png"],
    features: [
      "Native Android & iOS from a single Flutter codebase",
      "Firebase backend with multi-auth (Google, Facebook, Phone)",
      "Admin panel for user management, settings, and blocking",
      "Photo ID verification for safer matching",
      "End-to-end encrypted messaging",
      "Subscriptions via RevenueCat and ads via AdMob",
      "Location, radius, and discovery settings",
      "Onboarding guides and engagement-focused UI",
    ],
    techStack: [
      "Flutter",
      "Firebase",
      "RevenueCat",
      "AdMob",
      "Encrypted Chat",
      "Admin Panel",
    ],
    categories: ["Flutter", "Firebase", "UI", "API"],
    playStore: "https://play.google.com/store/apps/details?id=com.incevio.mioamore&hl=en_IN",
    challenges: [
      "Balancing engagement features with safety and privacy",
      "Supporting consumer app flows and admin tooling on Flutter + Firebase",
      "Adding monetization without hurting the matching experience",
    ],
    solutions: [
      "Firebase-backed auth, profiles, and admin controls",
      "Photo ID verification and encrypted messaging",
      "RevenueCat subscriptions and AdMob for flexible monetization",
    ],
    lessons: [
      "Dating products win when safety and privacy are first-class features",
      "Admin tools matter as much as a polished consumer UI",
    ],
    architecture:
      "Flutter consumer app + admin tooling on Firebase, with encrypted chat, verification, subscriptions, and ads.",
    role: "Flutter Developer — dating UX, Firebase integration, admin flows, and Play Store demo release.",
    performance: [
      "Cross-platform delivery from one Flutter codebase",
      "Efficient Firebase-backed auth and user management",
      "Monetization-ready with subscriptions and ads",
    ],
    timeline: "Product / Demo",
  },
  {
    id: "chess-game",
    title: "Chess Game",
    description:
      "Multiplayer Flutter chess app with Firebase — in-game chat, tournaments, and invite-code matches with friends.",
    longDescription:
      "A real-time multiplayer chess experience built with Flutter and Firebase. Players can share an invite code and play with friends, join tournament-style competitions, and stay connected through in-app chat as well as in-game chat during matches. The product was fully built as a feature-rich chess platform, but it was not published on app stores — the original product direction (Chess4Cash) involved betting-related mechanics, which are restricted under Indian regulations, so a public store release was not pursued.",
    image:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "Real-time multiplayer chess powered by Flutter + Firebase",
      "Share invite codes to play privately with friends",
      "In-app chat for players outside the board",
      "In-game chat during live matches",
      "Tournament features for competitive play",
      "Online matchmaking and friend-based rooms",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Realtime DB / Firestore", "Provider"],
    categories: ["Flutter", "Firebase", "UI", "API"],
    challenges: [
      "Keeping board state and moves in sync across devices in real time",
      "Building chat that works both globally and inside active matches",
      "Store publishing blocked due to India restrictions on betting-related apps",
    ],
    solutions: [
      "Firebase-backed realtime game rooms and move synchronization",
      "Separate in-app chat and in-game match chat channels",
      "Invite-code flow for private friend matches and tournament brackets",
    ],
    lessons: [
      "Gameplay polish matters as much as networking reliability",
      "Product positioning and regional store policies can block release even when the tech is ready",
    ],
    architecture:
      "Flutter client with Firebase auth, realtime match rooms, chat channels, tournament flows, and invite-code private games.",
    role: "Flutter Developer — multiplayer chess UX, Firebase realtime sync, chat, and tournament features.",
    performance: [
      "Responsive realtime move updates during matches",
      "Stable friend invite-code join flow",
      "Chat available both in-app and in-game",
    ],
    timeline: "Personal Project",
  },
  {
    id: "shopkrr",
    title: "Shopkrr: Ecommerce App",
    description:
      "Full-stack ecommerce platform with Flutter mobile app, Flutter Web admin panel, and Firebase backend.",
    longDescription:
      "Shopkrr is a complete ecommerce solution built with Flutter for the customer mobile app and a Flutter Web admin panel, powered by Firebase as the backend. Customers can browse categories, discover deals, view product details, manage carts, and complete checkout flows. Admins get full control from the web panel to manage products, inventory, users, and orders end-to-end — including order status updates and catalog operations. Auth, catalog, carts, and order data are implemented on Firebase so the app and admin stay in sync in realtime.",
    image: "/assets/images/shopkrr.png",
    screenshots: [
      "/assets/images/shopkrr.png",
      "/assets/images/shopkrr-login.png",
      "/assets/images/shopkrr-product.png",
      "/assets/images/shopkrr-cart.png",
    ],
    features: [
      "Flutter mobile shopping app with modern ecommerce UI",
      "Flutter Web admin panel for full store management",
      "Firebase backend for auth, catalog, carts, and orders",
      "Admin can manage products, categories, and inventory",
      "Admin can manage users and track/update all orders",
      "Customer flows: login, home, categories, hot deals, product details",
      "Cart with quantity controls, totals, and checkout",
      "Product options like color/size selection and wishlist",
    ],
    techStack: [
      "Flutter",
      "Flutter Web",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Provider",
    ],
    categories: ["Flutter", "Firebase", "UI", "API"],
    challenges: [
      "Keeping mobile app and web admin in sync on one Firebase backend",
      "Building complete product, user, and order management for admins",
      "Delivering a clean shopping UX from browse to checkout",
    ],
    solutions: [
      "Shared Firebase data model for products, users, carts, and orders",
      "Dedicated Flutter Web admin for catalog, user, and order operations",
      "Polished customer UI for home, product detail, cart, and auth screens",
    ],
    lessons: [
      "Ecommerce systems need equal investment in admin tools and customer UX",
      "Firebase works well when mobile and web share one source of truth",
    ],
    architecture:
      "Flutter mobile client + Flutter Web admin on Firebase Auth/Firestore, covering catalog, cart, checkout, users, and order management.",
    role: "Flutter Developer — customer app, Flutter Web admin panel, and Firebase ecommerce flows.",
    performance: [
      "Realtime catalog and order updates via Firebase",
      "Smooth browse-to-cart shopping experience",
      "Centralized admin control for products, users, and orders",
    ],
    timeline: "Personal Project",
  },
  {
    id: "coachrater",
    title: "CoachRater",
    description:
      "Multi-provider platform for coach profiles, ratings, achievements, and guest exploration.",
    longDescription:
      "Developed a multi-provider application where coaches can register, upload achievement documents, and manage profiles. Implemented a rater module for users to rate coaches and add known coaches, plus guest mode for exploring without signup.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "Coach registration & profile management",
      "Achievement document uploads",
      "Ratings module",
      "Guest mode exploration",
    ],
    techStack: ["Flutter", "Provider", "REST APIs", "Firebase"],
    categories: ["Flutter", "UI", "API"],
    challenges: ["Multi-role coach/user flows", "Low-friction onboarding"],
    solutions: ["Provider-based state across roles", "Guest mode for exploration without signup"],
    lessons: ["Guest access lowers the barrier to discovering coaches"],
    architecture: "Multi-provider Flutter application with role-based modules.",
    role: "Flutter Developer — profiles, ratings, and guest experience.",
    performance: ["Clear coach discovery flows", "Stable role-based navigation"],
    timeline: "Codiant — Present",
  },
  {
    id: "smart-taxi",
    title: "Smart Taxi",
    description:
      "Flutter ride-hailing platform with customer & driver apps, Firebase backend, dispatcher tools, and a web admin panel.",
    longDescription:
      "Smart Taxi is a multi-service ride-hailing product I built with Flutter and Firebase. It includes a Customer App and Driver App, plus a web admin panel and dispatcher tooling for day-to-day operations. Riders can book City Cab, Intercity, Parcel, and Rental services with realtime GPS tracking, wallet support, and safety features like SOS and female-only ride mode. I focused on keeping customer, driver, and admin flows in sync on one Firebase backend — including payments, surge/zone fares, multi-language + RTL, and light/dark themes.",
    image: "/assets/images/smart-taxi.png",
    screenshots: [
      "/assets/images/smart-taxi.png",
      "/assets/images/smart-taxi-tech.png",
      "/assets/images/smart-taxi-services.png",
      "/assets/images/smart-taxi-themes.png",
    ],
    features: [
      "Customer app for cab, intercity, parcel, and rental bookings",
      "Driver app for accepting trips, navigation, and earnings",
      "Web admin panel for platform management",
      "Dispatcher panel for realtime ride operations",
      "Realtime GPS tracking and live trip updates",
      "Multi-gateway payments, wallet, and fare controls",
      "Surge pricing and zone-based fares",
      "Female-only ride mode and SOS emergency alerts",
      "Multi-language + RTL with light and dark themes",
    ],
    techStack: [
      "Flutter",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Google Maps",
      "Payment Gateways",
      "Android",
      "iOS",
    ],
    categories: ["Flutter", "Firebase", "UI", "API"],
    challenges: [
      "Keeping customer, driver, admin, and dispatcher flows on one Firebase backend",
      "Supporting multi-service rides without cluttering the booking UX",
      "Combining payments, GPS, and fare rules reliably",
    ],
    solutions: [
      "Shared Flutter + Firebase architecture across apps and admin",
      "Modular ride types with dedicated admin/dispatcher tooling",
      "Wallet, multi-gateway payments, and safety features in the same product",
    ],
    lessons: [
      "Ride-hailing needs equal investment in ops tools and passenger UX",
      "Firebase works well when mobile and admin share one source of truth",
    ],
    architecture:
      "Flutter customer & driver apps with Firebase backend, web admin, dispatcher panel, Maps GPS, and payments.",
    role: "Flutter Developer — customer/driver apps, Firebase flows, admin panel, and ride modules.",
    performance: [
      "Realtime GPS and booking updates via Firebase",
      "Multi-service ride flows from a shared codebase",
      "Admin and dispatcher controls for live operations",
    ],
    timeline: "Personal Project",
  },
  {
    id: "homehub",
    title: "HOMEHUB: Family Organizer",
    description:
      "FamilyWall-inspired family organizer built with Flutter, Supabase, and Cloudflare — orange-themed, without payment features.",
    longDescription:
      "HOMEHUB is a FamilyWall-style family organizer app built for a client who wanted the same all-in-one family experience — shared calendar, lists, meals, chores, documents, messages, location, and more — without payment or budget features. Built with Flutter for Android and iOS, Supabase for auth and realtime backend data, and Cloudflare for edge/hosting infrastructure. The product uses a warm orange brand theme with a custom house-and-heart logo, keeping family coordination simple while dropping in-app payments and expense tracking from the original FamilyWall scope.",
    image: "/assets/images/homehub.png",
    screenshots: [
      "/assets/images/homehub.png",
      "/assets/images/homehub-logo.png",
    ],
    features: [
      "Shared family calendar with color-coded events and reminders",
      "Collaborative shopping lists, to-dos, and chore checklists",
      "Meal planning and recipe sharing for the household",
      "Family documents, folders, and private messaging",
      "Location favorites and family coordination tools",
      "Timetable / schedule views for school and activities",
      "Custom orange brand theme with HOMEHUB house-heart logo",
      "No payment, budget, or expense-tracking features (client scope)",
      "Flutter mobile app backed by Supabase",
      "Cloudflare infrastructure for performance and delivery",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Supabase",
      "Cloudflare",
      "Provider",
      "REST APIs",
    ],
    categories: ["Flutter", "UI", "API"],
    challenges: [
      "Matching FamilyWall-style UX without shipping payment/budget modules",
      "Keeping shared family data realtime and reliable across members",
      "Delivering a distinct orange brand identity with custom logo",
    ],
    solutions: [
      "Scoped feature set around calendar, lists, meals, chores, docs, and chat",
      "Supabase auth + database for shared family circles and sync",
      "Cloudflare-backed delivery with Flutter orange-themed UI",
    ],
    lessons: [
      "Client clones succeed when scope cuts are clear — especially payments",
      "Supabase + Flutter is a strong Firebase alternative for family apps",
    ],
    architecture:
      "Flutter client with Supabase auth/data sync and Cloudflare edge/hosting, focused on family organization without payments.",
    role: "Flutter Developer — HOMEHUB UI, Supabase integration, and feature scoping without payments.",
    performance: [
      "Realtime family updates via Supabase",
      "Fast delivery with Cloudflare",
      "Clean orange-themed UX for daily family use",
    ],
    timeline: "Client Project",
  },
  {
    id: "routemitra",
    title: "RouteMitra: Same-Way Rides Promo",
    description:
      "Promotional landing page for RouteMitra — a same-way commute and carpool app for daily rides across Indore and Bhopal.",
    longDescription:
      "RouteMitra is a marketing landing page built to promote a same-way rides application — think daily carpooling where people heading the same direction share seats, split fares, and commute together. The page introduces the product with a clear hero, live city routes (Indore & Bhopal), feature highlights, match examples, and a simple how-it-works flow. Copy and UI focus on fair fare splitting, intermediate pickups, verified co-commuters, and the local tagline “Safar saath, kharcha kam.” Deployed on Netlify as a fast, conversion-focused promo site for the RouteMitra app.",
    image: "/assets/images/routemitra.png",
    screenshots: ["/assets/images/routemitra.png"],
    features: [
      "Promotional landing page for same-way / carpool daily rides",
      "Hero + route marquee for Indore & Bhopal commute corridors",
      "Explains route-level matching with intermediate pickups & fair fare splits",
      "Phone mockup for offer-ride and en-route passenger requests",
      "Features, live matches, corridors, testimonials, and how-it-works sections",
      "Safety messaging: verified users, women-only rides, SOS",
      "Google Play and contact CTAs for product conversion",
      "Responsive Netlify deployment for fast shareable marketing links",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Netlify", "UI Design"],
    categories: ["Web", "UI"],
    liveDemo: "https://routemitra-promo.netlify.app/",
    challenges: [
      "Explaining same-way carpooling simply for first-time local users",
      "Making Indore/Bhopal route value feel real without a full app demo",
      "Keeping the promo page conversion-focused and lightweight",
    ],
    solutions: [
      "Local route examples, Hindi tagline, and clear fare-split storytelling",
      "Phone mockup with offer-ride and en-route request UI snippets",
      "Sectioned landing flow from concept → features → how it works → CTA",
    ],
    lessons: [
      "Regional commute products sell better with familiar routes and pricing",
      "A strong promo page can validate demand before the full app launches",
    ],
    architecture:
      "Static promotional React landing page hosted on Netlify, designed to market RouteMitra’s same-way ride matching for daily city commutes.",
    role: "Web developer — promo landing page UI, copy structure, and Netlify deployment.",
    performance: [
      "Fast static hosting on Netlify",
      "Clean responsive hero and section layout",
      "Shareable live demo for product pitching",
    ],
    timeline: "Personal / Product Promo",
  },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Flutter Development",
    description: "End-to-end Android & iOS apps with clean architecture and polished UX.",
    icon: "smartphone",
  },
  {
    id: "2",
    title: "Firebase Integration",
    description: "Auth, Firestore, and FCM wired for secure, production-ready mobile apps.",
    icon: "flame",
  },
  {
    id: "3",
    title: "Realtime Communication",
    description: "Chat, voice, and video calling with Agora SDK for high-engagement apps.",
    icon: "messages",
  },
  {
    id: "4",
    title: "Performance Optimization",
    description: "Crash reduction, smoother navigation, and stability improvements that stick.",
    icon: "zap",
  },
  {
    id: "5",
    title: "App Publishing",
    description: "Play Store and App Store release support, maintenance, and store readiness.",
    icon: "rocket",
  },
  {
    id: "6",
    title: "UI Implementation",
    description: "Responsive Flutter UI from wireframes with consistent design and smooth flows.",
    icon: "palette",
  },
  {
    id: "7",
    title: "API Integration",
    description: "REST/JSON clients with loading states, error handling, and clean data rendering.",
    icon: "network",
  },
  {
    id: "8",
    title: "Payment Integration",
    description: "Secure payment gateway flows for bookings, subscriptions, and checkout.",
    icon: "credit-card",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Vinu V.",
    company: "Freelancer",
    role: "Real-Money Chess App",
    review:
      "Sachin delivered my Flutter chess app exactly as scoped — 1v1 gameplay, wallet, and Razorpay integration. Responsive, supportive, and always on time with updates. Happy with the work and highly recommend him for mobile app projects.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Vinu+V&background=F97316&color=fff&size=200",
  },
  {
    id: "2",
    name: "Family Organizer Client",
    company: "Upwork",
    role: "HOMEHUB / Family App",
    review:
      "It was a pleasure working with Sachin. The cross-platform family organizer he built for us was excellent — professional, committed to quality, and detail-oriented from start to finish. Highly recommended if you need a project done properly.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Family+Client&background=14A800&color=fff&size=200",
  },
  {
    id: "3",
    name: "React Client",
    company: "Upwork",
    role: "React.js Developer",
    review:
      "Great experience working with Sachin. Professional, responsive, and delivered high-quality work on time. Clear communication throughout kept me informed every step of the way. I'd recommend him to anyone looking for a reliable, skilled partner.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=React+Client&background=0A66C2&color=fff&size=200",
  },
  {
    id: "4",
    name: "Hector Alberto D.",
    company: "Freelancer",
    role: "Flutter + Firebase Auth",
    review:
      "He did a great job integrating Google Login with Firebase in Flutter. Clean work, clear communication, and I'd happily hire him again.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Hector+D&background=FFCA28&color=1a1a1a&size=200",
  },
  {
    id: "5",
    name: "Sai R.",
    company: "Freelancer",
    role: "Web & Flutter",
    review:
      "Budget-friendly, knowledgeable, and excellent communication. Needed work across HTML5, Bootstrap, CSS, React, and Flutter — Sachin handled it well and made collaboration easy.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Sai+R&background=6366F1&color=fff&size=200",
  },
  {
    id: "6",
    name: "Ajay J.",
    company: "Freelancer",
    role: "Grocery Shop Website",
    review:
      "Very good experience with Sachin — he delivered on time and the work looked polished. Highly recommended. Reliable guy who gets things done.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Ajay+J&background=10B981&color=fff&size=200",
  },
  {
    id: "7",
    name: "Sunil P.",
    company: "Freelancer",
    role: "Flutter Feature Showcase",
    review:
      "Good to work with Sachin. Professional attitude, very responsive, and smooth collaboration throughout the Flutter feature showcase project.",
    rating: 4,
    avatar: "https://ui-avatars.com/api/?name=Sunil+P&background=EC4899&color=fff&size=200",
  },
  {
    id: "8",
    name: "Srikar B.",
    company: "Freelancer",
    role: "PAN Card App",
    review:
      "Very good and smooth experience. Sachin understood the requirements quickly and delivered a solid project without drama.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Srikar+B&background=8B5CF6&color=fff&size=200",
  },
  {
    id: "9",
    name: "Freelancer Client",
    company: "Freelancer",
    role: "Flutter App Update",
    review:
      "Great work on a focused Flutter update. Quick turnaround, clean delivery, and exactly what we needed.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Flutter+Client&background=02569B&color=fff&size=200",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "secure-your-flutter-app-with-easy-biometric-authentication",
    title: "Secure Your Flutter App with Easy Biometric Authentication",
    excerpt:
      "Dive into security and privacy — learn how to easily add fingerprint authentication to your Flutter app.",
    image: "/assets/images/biometric-authentication.png",
    tags: ["Flutter", "Security"],
    date: "2024-09-18",
    readTime: "6 min",
    url: "https://medium.com/@sachin.dev2910/secure-your-flutter-app-with-easy-biometric-authentication-6b1c16b2b493",
  },
  {
    id: "3",
    slug: "secure-your-flutter-app-block-screen-recording-screenshots",
    title: "Secure Your Flutter App: Block Screen Recording & Screenshots",
    excerpt:
      "Protect user data by preventing screenshots and screen recording in Flutter apps.",
    image: "/assets/images/block-screenshots.png",
    tags: ["Flutter", "Security"],
    date: "2024-07-23",
    readTime: "5 min",
    url: "https://medium.com/@sachin.dev2910/secure-your-flutter-app-block-screen-recording-screenshots-dad5c55b5e6d",
  },
  {
    id: "4",
    slug: "implementing-a-global-real-time-internet-checker-in-flutter",
    title: "Implementing a Global Real-Time Internet Checker in Flutter",
    excerpt:
      "Build a global internet connectivity checker in Flutter using the Get package for realtime network awareness.",
    image: "/assets/images/internet-checker.png",
    tags: ["Flutter", "Connectivity"],
    date: "2024-07-16",
    readTime: "7 min",
    url: "https://medium.com/@sachin.dev2910/implementing-a-global-real-time-internet-checker-in-flutter-3f20bd7e6ba8",
  },
  {
    id: "5",
    slug: "google-pay-integration-in-flutter-app",
    title: "Google Pay Integration in Flutter App | Payments in Flutter App",
    excerpt:
      "Integrate Google Pay into your Flutter app in a few simple steps for smoother payment experiences.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Flutter", "Payments"],
    date: "2024-07-09",
    readTime: "8 min",
    url: "https://medium.com/@sachin.dev2910/google-pay-integration-in-flutter-app-payments-in-flutter-app-c85f1c7e260e",
  },
  {
    id: "6",
    slug: "publishing-package-on-pub-dev-2023",
    title: "Publishing Package on Pub.dev",
    excerpt:
      "A clear step-by-step guide to creating and publishing your Dart/Flutter package on pub.dev.",
    image: "/assets/images/pub-dev.png",
    tags: ["Flutter", "pub.dev"],
    date: "2023-12-01",
    readTime: "8 min",
    url: "https://medium.com/@sachin.dev2910/publishing-package-on-pub-dev-2023-a931837ca56c",
  },
];
