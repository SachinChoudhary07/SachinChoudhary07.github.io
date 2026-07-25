export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: number;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
};

export type ProjectCategory = "All" | "Flutter" | "Firebase" | "UI" | "API" | "Web";

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  features: string[];
  techStack: string[];
  categories: ProjectCategory[];
  github?: string;
  liveDemo?: string;
  playStore?: string;
  challenges: string[];
  solutions: string[];
  lessons: string[];
  architecture: string;
  role: string;
  performance: string[];
  timeline: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  date: string;
  readTime: string;
  url: string;
};

export type CommandItem = {
  id: string;
  label: string;
  href?: string;
  action?: string;
  shortcut?: string;
  group: string;
};
