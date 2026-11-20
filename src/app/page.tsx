import { About } from "@/sections/about";
import { isEstimatorEnabled } from "@/lib/estimator";
import { Contact } from "@/sections/contact";
import { Estimator } from "@/sections/estimator";
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
      {isEstimatorEnabled ? <Estimator /> : null}
      <Process />
      <Reviews />
      <About />
      <Contact />
    </>
  );
}
