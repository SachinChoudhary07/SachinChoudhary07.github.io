import type {
  CaseStudy,
  ContactChannel,
  ExperienceItem,
  MoreWorkItem,
  NavItem,
  ProcessStep,
  Service,
  StackGroup,
  Stat,
  Testimonial,
  WritingItem,
} from "@/types";

const PHONE_E164 = "916232580029";

export const SITE = {
  name: "Sachin Choudhary",
  role: "Flutter & Full-Stack Product Developer",
  title: "Sachin Choudhary | Flutter & Full-Stack Freelance Developer",
  description:
    "Freelance Flutter and full-stack developer. I build mobile apps, web dashboards and AI features for startups, clinics and agencies, from idea to App Store. 4+ years, 15+ apps shipped.",
  email: "sachin.dev2910@gmail.com",
  phone: "+91 62325 80029",
  location: "Indore, India · working with clients worldwide",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sachinchoudhary07.github.io",
  photo: "/assets/images/sachin-choudhary.png",
  ogImage: "/assets/images/og-image.png",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const WHATSAPP_URL = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
  "Hi Sachin, I'd like a quote for a project."
)}`;

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}?subject=${encodeURIComponent("Project inquiry")}`,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: SITE.phone,
    href: WHATSAPP_URL,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "in/sachin-dev2910",
    href: "https://www.linkedin.com/in/sachin-dev2910",
  },
  {
    id: "upwork",
    label: "Upwork",
    value: "Hire me on Upwork",
    href: "https://www.upwork.com/freelancers/~01d26750bc64fd86bd",
  },
];

export const PROFILE_LINKS = {
  upwork: "https://www.upwork.com/freelancers/~01d26750bc64fd86bd",
  linkedin: "https://www.linkedin.com/in/sachin-dev2910",
  github: "https://github.com/SachinChoudhary07",
  medium: "https://medium.com/@sachin.dev2910",
  pubdev: "https://pub.dev/packages/deeplink_setup",
} as const;

export const HERO = {
  availability: "Taking 2 new client projects this month",
  headline: {
    lead: "I build mobile apps, web dashboards & AI features for startups,",
    accent: "from idea to App Store.",
  },
  sub: "I'm Sachin. I've been building Flutter apps for over 4 years, and now I work directly with founders and small teams. I can build your iOS and Android app, the admin panel you'll run it from, and AI features like transcription or food recognition, and I'm still around after launch.",
};

export const STATS: Stat[] = [
  { value: "4+", label: "years building production apps" },
  { value: "15+", label: "apps shipped for clients and products" },
  { value: "iOS + Android", label: "releases on App Store and Play Store" },
  { value: "pub.dev", label: "author of the deeplink_setup package" },
];

export const SERVICES: Service[] = [
  {
    id: "mobile",
    title: "Mobile apps",
    outcome: "One Flutter codebase, released on both stores.",
    points: [
      "MVP to App Store and Play Store release",
      "Auth, payments, subscriptions, chat, maps",
      "Store listing, review and compliance help",
    ],
    stack: "Flutter · iOS · Android",
  },
  {
    id: "web",
    title: "Web apps & admin panels",
    outcome: "The panel your team uses to manage users, orders and content.",
    points: [
      "Admin panels for users, orders and content",
      "Customer-facing web apps and landing pages",
      "APIs and backends that the mobile app shares",
    ],
    stack: "React · Next.js · Node.js · Firebase",
  },
  {
    id: "ai",
    title: "AI features",
    outcome: "Transcription, image recognition or a chatbot, built properly into your app.",
    points: [
      "Speech-to-text and meeting / visit transcription",
      "Image recognition (food, documents, products)",
      "Chatbots and LLM features inside your product",
    ],
    stack: "Speech AI · Vision · LLM APIs",
  },
  {
    id: "maintain",
    title: "Fix, upgrade & maintain",
    outcome: "For apps that crash, feel slow, or got rejected by a store.",
    points: [
      "Bug fixing and crash reduction",
      "Performance work and Flutter / SDK upgrades",
      "Play Store and App Store policy updates",
    ],
    stack: "Audits · Upgrades · Ongoing support",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "scribeflo",
    name: "Scribeflo",
    summary: "AI medical scribe that writes the clinical note while the doctor talks.",
    context: "Healthcare · AI · Live on Play Store",
    problem:
      "Doctors lose hours every clinic day typing notes after each visit instead of seeing patients.",
    built:
      "A Flutter app that records the visit with one tap, transcribes it in real time and turns it into a structured SOAP note the doctor can review, edit and export.",
    features: [
      "Real-time AI transcription with doctor / patient speaker separation",
      "Instant structured SOAP notes with draft review and editing",
      "Export to EHR, offline recording and multi-device sync",
    ],
    stack: ["Flutter", "AI transcription", "REST APIs", "Offline sync"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.codiant.scribeflo",
      },
    ],
    visual: {
      kind: "phones",
      images: ["/assets/images/scribeflo-capture.png", "/assets/images/scribeflo-soap.png"],
      tone: "#ece8fb",
    },
  },
  {
    id: "calcounts",
    name: "CalCounts",
    summary: "AI calorie tracker: snap a meal or scan a barcode, get calories and macros.",
    context: "Health & fitness · AI · Live on Play Store",
    problem:
      "Calorie tracking feels like homework. Most people stop after a week of typing in every meal by hand.",
    built:
      "An AI food tracker where a photo or a barcode scan logs the meal in seconds, with goals, progress dashboards and a paid Pro tier. I also built the tablet companion app coaches use to follow their clients.",
    features: [
      "AI calorie and macro estimates from meal photos",
      "Barcode scanning, meal planning and smart reminders",
      "Daily, weekly and monthly progress dashboards",
      "Pro subscriptions, Apple Watch sync and a coach tablet app",
    ],
    stack: ["Flutter", "AI image recognition", "In-app subscriptions", "REST APIs"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.codiant.calcounts",
      },
    ],
    visual: { kind: "cover", images: ["/assets/images/calcounts.png"], tone: "#ffffff" },
  },
  {
    id: "smart-taxi",
    name: "Smart Taxi",
    summary: "A complete ride-hailing platform: rider app, driver app, dispatch and admin.",
    context: "Mobility · Multi-app platform",
    problem:
      "Launching a ride-hailing service means building four products at once: a rider app, a driver app, dispatch tools and an admin panel, all in sync.",
    built:
      "Customer and driver apps in Flutter plus a web admin panel and dispatcher tools, all running on one shared Firebase backend so every booking updates everywhere in real time.",
    features: [
      "City cab, intercity, parcel and rental bookings",
      "Real-time GPS tracking and live trip status",
      "Wallet, multiple payment gateways, surge and zone pricing",
      "SOS, female-only rides, multi-language with RTL, light and dark themes",
    ],
    stack: ["Flutter", "Firebase", "Google Maps", "Payment gateways", "Web admin"],
    links: [],
    visual: { kind: "cover", images: ["/assets/images/smart-taxi.jpg"], tone: "#141414" },
  },
  {
    id: "shopkrr",
    name: "Shopkrr",
    summary: "Shopping app plus a web admin panel on one shared backend.",
    context: "E-commerce · Mobile app + web admin",
    problem:
      "A store owner needs customers shopping on mobile and staff running products, stock and orders from one place, without the two drifting out of sync.",
    built:
      "A Flutter shopping app and a Flutter Web admin panel on a shared Firebase backend, so catalog, stock and order changes show up instantly on both sides.",
    features: [
      "Categories, hot deals, size / colour options and wishlist",
      "Cart with quantity controls and checkout",
      "Admin panel for products, inventory, users and order status",
    ],
    stack: ["Flutter", "Flutter Web", "Firebase Auth", "Firestore"],
    links: [],
    visual: {
      kind: "phones",
      images: [
        "/assets/images/shopkrr.png",
        "/assets/images/shopkrr-product.png",
        "/assets/images/shopkrr-cart.png",
      ],
      tone: "#eceae4",
    },
  },
  {
    id: "mio-amore",
    name: "Mio Amore",
    summary: "Dating app with verified profiles, encrypted chat and subscriptions.",
    context: "Social · Subscriptions · Live on Play Store",
    problem:
      "A dating app has to feel safe enough to trust, engaging enough to come back to, and still make money.",
    built:
      "An Android and iOS dating app from one Flutter codebase, with matching and discovery, photo ID verification, end-to-end encrypted chat, an admin panel and subscription revenue.",
    features: [
      "Google, Facebook and phone sign-in",
      "Discovery with location and radius settings",
      "Photo ID verification and encrypted messaging",
      "RevenueCat subscriptions, AdMob and admin moderation tools",
    ],
    stack: ["Flutter", "Firebase", "RevenueCat", "AdMob"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.incevio.mioamore",
      },
    ],
    visual: { kind: "logo", images: ["/assets/images/mio-amore.png"], tone: "#fbe9f2" },
  },
  {
    id: "chess-arena",
    name: "Chess Arena",
    summary: "Real-time multiplayer chess with rated matches, tournaments and chat.",
    context: "Gaming · Real-time multiplayer",
    problem:
      "Online chess only works if every move lands instantly on both phones, and the clocks, results and ratings never disagree.",
    built:
      "A multiplayer chess app on Flutter and Firebase with rated matchmaking, Elo, friends, tournaments and private rooms. First delivered for a client with a wallet and Razorpay, then reworked into a skill-only version ready for Google Play.",
    features: [
      "Rated matchmaking with 3 to 30 minute time controls and Elo",
      "Friends with online presence and direct challenges",
      "Tournaments and private rooms joined by code",
      "In-game chat with report and block moderation",
    ],
    stack: ["Flutter", "Firebase", "Firestore real-time", "Razorpay"],
    // Add a store link later as a { label, href } entry here.
    links: [],
    visual: {
      kind: "posters",
      images: [
        "/assets/images/chess-arena-gameplay.webp",
        "/assets/images/chess-arena-social.webp",
      ],
      tone: "#0f1a14",
    },
  },
];

export const MORE_WORK: MoreWorkItem[] = [
  {
    name: "TripKhata",
    description:
      "Offline-first group trip expense splitter with fair splits, UPI settle-up and shared trips.",
    tags: ["Flutter", "Drift", "Firebase"],
    href: "https://github.com/SachinChoudhary07/Trip-Khata",
    linkLabel: "GitHub",
  },
  {
    name: "CalCounts Pro",
    description: "Tablet dashboard for coaches to track each client's intake, macros and meals.",
    tags: ["Flutter", "Tablet UI"],
    href: "https://play.google.com/store/apps/details?id=com.codiant.calcountsinstructor",
    linkLabel: "Google Play",
  },
  {
    name: "Docvian",
    description: "Encrypted, offline document vault with biometric unlock and no cloud storage.",
    tags: ["Flutter", "AES-256", "Biometrics"],
    href: "https://play.google.com/store/apps/details?id=com.docvian.mobile",
    linkLabel: "Google Play",
  },
  {
    name: "LynkLegal",
    description:
      "Legal-services booking app with chat, voice / video calls, document sharing and payments.",
    tags: ["Flutter", "Agora", "Payments"],
  },
  {
    name: "HOMEHUB",
    description: "Family organizer for a client: shared calendar, lists, meals, chores and chat.",
    tags: ["Flutter", "Supabase", "Cloudflare"],
  },
  {
    name: "Fashfx",
    description: "AI fashion studio: virtual try-on, product-to-model shots and AI video flows.",
    tags: ["Flutter", "Generative AI"],
  },
  {
    name: "RouteMitra",
    description: "Launch landing page for a same-way commute and carpool app.",
    tags: ["React", "Vite", "Tailwind"],
    href: "https://routemitra-promo.netlify.app/",
    linkLabel: "Live site",
  },
  {
    name: "deeplink_setup",
    description:
      "My open-source Dart CLI that sets up and debugs Android App Links and iOS Universal Links.",
    tags: ["Dart", "Open source", "160 pub points"],
    href: "https://pub.dev/packages/deeplink_setup",
    linkLabel: "pub.dev",
  },
];

export const PROCESS: ProcessStep[] = [
  {
    title: "Free scope & estimate",
    description:
      "We talk through your idea on a call or over chat. Within 48 hours I send a written scope, a timeline and a fixed price. It's free and you're not committed to anything.",
  },
  {
    title: "Fixed price, clear milestones",
    description:
      "The project is split into milestones you can see and test. You pay per milestone, so you always know what you're paying for.",
  },
  {
    title: "Weekly demos",
    description:
      "Every week you get a working build on your phone or a link to try, plus a short update on what's done and what's next.",
  },
  {
    title: "Launch & support",
    description:
      "I handle the App Store, Play Store and web release with you, then stay on for fixes and improvements after launch.",
  },
];

export const FEATURED_TESTIMONIAL: Testimonial = {
  id: "vinu",
  name: "Vinu V.",
  project: "Real-money chess app",
  source: "Freelancer.com",
  review:
    "Sachin delivered my Flutter chess app exactly as scoped: 1v1 gameplay, wallet, and Razorpay integration. Responsive, supportive, and always on time with updates. Happy with the work and highly recommend him for mobile app projects.",
  rating: 5,
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "homehub",
    name: "Family organizer client",
    project: "Cross-platform family app",
    source: "Upwork",
    review:
      "It was a pleasure working with Sachin. The cross-platform family organizer he built for us was excellent: professional, committed to quality, and detail-oriented from start to finish.",
    rating: 5,
  },
  {
    id: "react",
    name: "Web client",
    project: "React.js project",
    source: "Upwork",
    review:
      "Professional, responsive, and delivered high-quality work on time. Clear communication throughout kept me informed every step of the way.",
    rating: 5,
  },
  {
    id: "hector",
    name: "Hector Alberto D.",
    project: "Flutter + Firebase sign-in",
    source: "Freelancer.com",
    review:
      "He did a great job integrating Google Login with Firebase in Flutter. Clean work, clear communication, and I'd happily hire him again.",
    rating: 5,
  },
  {
    id: "ajay",
    name: "Ajay J.",
    project: "Grocery shop website",
    source: "Freelancer.com",
    review:
      "Very good experience. He delivered on time and the work looked polished. Reliable guy who gets things done.",
    rating: 5,
  },
  {
    id: "srikar",
    name: "Srikar B.",
    project: "PAN card app",
    source: "Freelancer.com",
    review:
      "Very good and smooth experience. Sachin understood the requirements quickly and delivered a solid project without drama.",
    rating: 5,
  },
  {
    id: "sai",
    name: "Sai R.",
    project: "Web & Flutter work",
    source: "Freelancer.com",
    review:
      "Budget-friendly, knowledgeable, and excellent communication. Needed work across React and Flutter, and he handled it well.",
    rating: 5,
  },
  {
    id: "flutter-update",
    name: "Freelancer.com client",
    project: "Flutter app update",
    source: "Freelancer.com",
    review:
      "Great work on a focused Flutter update. Quick turnaround, clean delivery, and exactly what we needed.",
    rating: 5,
  },
  {
    id: "sunil",
    name: "Sunil P.",
    project: "Flutter feature showcase",
    source: "Freelancer.com",
    review:
      "Good to work with Sachin. Professional attitude, very responsive, and smooth collaboration throughout the project.",
    rating: 4,
  },
];

export const ABOUT = {
  paragraphs: [
    "I've spent 4+ years building apps that real people use every day: AI scribes for doctors, calorie trackers, ride-hailing platforms, dating apps and online stores, across healthcare, fitness, legal-tech and e-commerce.",
    "Before going independent I worked in product teams at Codiant, Mactosys and IndVibe, where I owned features end to end and shipped them to the App Store and Play Store. Now I work directly with founders and teams as a freelancer, full-time.",
    "If you hire me, you deal with me directly, from the first call to the store release and the fixes after it.",
  ],
};

export const STACK_GROUPS: StackGroup[] = [
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "BLoC", "Riverpod", "Provider", "GetX", "iOS & Android releases"],
  },
  {
    title: "Web",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Admin dashboards"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Firebase", "Supabase", "REST APIs", "Stripe / Razorpay / RevenueCat"],
  },
  {
    title: "AI",
    items: ["Speech-to-text", "Image recognition", "LLM & chatbot integrations", "On-device ML"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Now",
    role: "Independent product developer",
    company: "Freelance, full-time",
    note: "Mobile apps, web dashboards and AI features for startups, clinics and agencies.",
  },
  {
    period: "Oct 2024 – Jun 2026",
    role: "Flutter Developer",
    company: "Codiant (a YASH Technologies company)",
    note: "Scribeflo, CalCounts, CalCounts Pro, Fitterloop and Fashfx: healthcare, fitness and AI apps.",
  },
  {
    period: "Dec 2023 – Sep 2024",
    role: "Associate Flutter Developer",
    company: "Mactosys Software Technology",
    note: "LynkLegal, a dating app with Agora chat and video, and a doctor appointment app.",
  },
  {
    period: "Nov 2022 – Nov 2023",
    role: "Junior Flutter Developer",
    company: "IndVibe Infotech",
    note: "E-learning and healthcare apps; cut crashes by about 60% on Edux.",
  },
];

export const WRITING: WritingItem[] = [
  {
    title: "deeplink_setup: App Links & Universal Links CLI",
    href: "https://pub.dev/packages/deeplink_setup",
    meta: "pub.dev package",
  },
  {
    title: "Secure your Flutter app with biometric authentication",
    href: "https://medium.com/@sachin.dev2910/secure-your-flutter-app-with-easy-biometric-authentication-6b1c16b2b493",
    meta: "Medium",
  },
  {
    title: "Block screen recording & screenshots in Flutter",
    href: "https://medium.com/@sachin.dev2910/secure-your-flutter-app-block-screen-recording-screenshots-dad5c55b5e6d",
    meta: "Medium",
  },
  {
    title: "Google Pay integration in a Flutter app",
    href: "https://medium.com/@sachin.dev2910/google-pay-integration-in-flutter-app-payments-in-flutter-app-c85f1c7e260e",
    meta: "Medium",
  },
];

export const PROJECT_TYPES = [
  "Mobile app",
  "Web app / admin panel",
  "AI feature",
  "Fix, upgrade or maintain an app",
  "Not sure yet",
] as const;

export const BUDGETS = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,000",
  "$7,000+",
  "Not sure yet",
] as const;
