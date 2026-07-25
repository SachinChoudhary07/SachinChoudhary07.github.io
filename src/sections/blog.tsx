"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock3, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Reveal, SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS, MEDIUM_PROFILE } from "@/constants/site";
import { formatDate } from "@/lib/utils";

export function Blog() {
  return (
    <section id="blog" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Articles on Medium"
          description="Flutter guides I've published — biometrics, payments, Firebase, security, and more."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.id} delay={(i % 3) * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 transition-colors hover:border-primary/40"
              >
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-48 w-full overflow-hidden"
                  aria-label={`Read ${post.title} on Medium`}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </a>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-primary"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-subtext">{post.excerpt}</p>

                  <div className="mt-4 flex items-center gap-4 text-xs text-subtext">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Read on Medium
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={MEDIUM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            View all articles on Medium
            <ExternalLink className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
