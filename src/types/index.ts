export type NavItem = {
  label: string;
  href: string;
};

export type ContactChannel = {
  id: "email" | "whatsapp" | "linkedin" | "upwork" | "github";
  label: string;
  value: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Service = {
  id: string;
  title: string;
  outcome: string;
  points: string[];
  stack: string;
};

export type CaseStudyLink = {
  label: string;
  href: string;
};

export type CaseStudyVisual =
  /** One wide banner / mockup image, shown edge to edge. */
  | { kind: "cover"; images: [string]; tone: string }
  /** Two or three phone screenshots side by side. */
  | { kind: "phones"; images: string[]; tone: string }
  /** Tall showcase posters side by side; each opens full size on click. */
  | { kind: "posters"; images: string[]; tone: string }
  /** A logo or icon on a tinted panel. */
  | { kind: "logo"; images: [string]; tone: string };

export type CaseStudy = {
  id: string;
  name: string;
  summary: string;
  context: string;
  problem: string;
  built: string;
  features: string[];
  stack: string[];
  links: CaseStudyLink[];
  visual: CaseStudyVisual;
};

export type MoreWorkItem = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  project: string;
  source?: string;
  review: string;
  rating: number;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  note: string;
};

export type WritingItem = {
  title: string;
  href: string;
  meta: string;
};
