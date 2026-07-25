import dynamic from "next/dynamic";
import { Hero } from "@/sections/hero";

const About = dynamic(() => import("@/sections/about").then((m) => m.About));
const Skills = dynamic(() => import("@/sections/skills").then((m) => m.Skills));
const Experience = dynamic(() =>
  import("@/sections/experience").then((m) => m.Experience)
);
const Projects = dynamic(() =>
  import("@/sections/projects").then((m) => m.Projects)
);
const Achievements = dynamic(() =>
  import("@/sections/achievements").then((m) => m.Achievements)
);
const Services = dynamic(() =>
  import("@/sections/services").then((m) => m.Services)
);
const Testimonials = dynamic(() =>
  import("@/sections/testimonials").then((m) => m.Testimonials)
);
const Blog = dynamic(() => import("@/sections/blog").then((m) => m.Blog));
const Contact = dynamic(() =>
  import("@/sections/contact").then((m) => m.Contact)
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
