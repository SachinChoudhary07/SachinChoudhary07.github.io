import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "@/components/shared/brand-icon";
import { Reveal } from "@/components/shared/reveal";
import { CONTACT_CHANNELS } from "@/constants/site";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-foreground py-20 text-background sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="label !text-background/55">Contact</p>
            <h2 className="mt-3 text-[2.2rem] leading-[1.1] font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
              Tell me about your project
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-background/70">
              A few lines about the idea, or the app you need help with, is enough. I&apos;ll reply
              within a day with questions, or with a rough scope, timeline and price. The estimate
              is free.
            </p>

            <ul className="mt-10 divide-y divide-background/15 border-y border-background/15">
              {CONTACT_CHANNELS.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    target={channel.id === "email" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center gap-4 py-4"
                  >
                    <span className="grid size-10 place-items-center rounded-full border border-background/20">
                      <BrandIcon name={channel.id} className="size-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm text-background/55">{channel.label}</span>
                      <span className="block">{channel.value}</span>
                    </span>
                    <ArrowUpRight
                      className="size-5 text-background/40 transition-colors group-hover:text-background"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
