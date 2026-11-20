import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Hero } from "@/sections/hero";
import { Process } from "@/sections/process";
import { Reviews } from "@/sections/reviews";
import { Services } from "@/sections/services";
import { Work } from "@/sections/work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Process />
      <Reviews />
      <About />
      <Contact />
    </>
  );
}
