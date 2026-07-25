"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Lightbulb,
  ListChecks,
  Sparkles,
  Timer,
  TriangleAlert,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, type ReactNode } from "react";
import { SiGoogleplay } from "react-icons/si";
import { useLenis } from "@/components/providers/smooth-scroll-provider";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

function InfoBlock({
  icon,
  title,
  items,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
        {icon}
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-subtext">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const lenis = useLenis();
  const isWebProject = !!project?.categories.includes("Web");

  useEffect(() => {
    if (!project) return;

    lenis?.stop();
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarGap > 0) {
      document.body.style.paddingRight = `${scrollbarGap}px`;
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [project, lenis]);

  return (
    <Dialog.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {project ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onWheel={(e) => e.preventDefault()}
                onTouchMove={(e) => e.preventDefault()}
              />
            </Dialog.Overlay>

            <Dialog.Content
              asChild
              forceMount
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 24 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                data-lenis-prevent
                onWheel={(e) => e.stopPropagation()}
                className="fixed top-1/2 left-1/2 z-[100] max-h-[88vh] w-[min(94vw,880px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-card shadow-2xl focus:outline-none"
              >
                <div className="relative h-56 w-full overflow-hidden rounded-t-3xl sm:h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 880px) 94vw, 880px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <Dialog.Close
                    aria-label="Close project details"
                    className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
                  >
                    <X className="h-4 w-4" />
                  </Dialog.Close>
                </div>

                <div className="p-6 sm:p-8">
                  <Dialog.Title className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {project.title}
                  </Dialog.Title>
                  <Dialog.Description className="mt-3 text-sm leading-relaxed text-subtext sm:text-base">
                    {project.longDescription}
                  </Dialog.Description>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
                        <User className="h-3.5 w-3.5" />
                        Role
                      </p>
                      <p className="mt-1.5 text-sm text-subtext">{project.role}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
                        <Timer className="h-3.5 w-3.5" />
                        Timeline
                      </p>
                      <p className="mt-1.5 text-sm text-subtext">{project.timeline}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
                        <Layers className="h-3.5 w-3.5" />
                        Architecture
                      </p>
                      <p className="mt-1.5 text-sm text-subtext">{project.architecture}</p>
                    </div>
                  </div>

                  {project.screenshots.length > 0 ? (
                    <div className="mt-8">
                      <p className="mb-3 text-sm font-semibold text-foreground">Screenshots</p>
                      <div
                        className={cn(
                          "flex gap-4 overflow-x-auto pb-2",
                          isWebProject && "flex-col sm:flex-col"
                        )}
                      >
                        {project.screenshots.map((src, i) => (
                          <div
                            key={src}
                            className={cn(
                              "relative flex-shrink-0 overflow-hidden rounded-xl border border-white/10",
                              isWebProject
                                ? "aspect-video w-full max-w-full"
                                : "h-44 w-32 sm:h-56 sm:w-40"
                            )}
                          >
                            <Image
                              src={src}
                              alt={`${project.title} screenshot ${i + 1}`}
                              fill
                              sizes={isWebProject ? "(max-width: 880px) 94vw, 800px" : "160px"}
                              className="object-cover object-top"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <InfoBlock
                      icon={<Sparkles className="h-4 w-4 text-primary" />}
                      title="Key Features"
                      items={project.features}
                    />
                    <InfoBlock
                      icon={<ListChecks className="h-4 w-4 text-accent" />}
                      title="Performance"
                      items={project.performance}
                    />
                    <InfoBlock
                      icon={<TriangleAlert className="h-4 w-4 text-secondary" />}
                      title="Challenges"
                      items={project.challenges}
                    />
                    <InfoBlock
                      icon={<Lightbulb className="h-4 w-4 text-primary" />}
                      title="Solutions"
                      items={project.solutions}
                    />
                  </div>

                  {project.lessons.length > 0 ? (
                    <div className="mt-4">
                      <InfoBlock
                        icon={<Lightbulb className="h-4 w-4 text-accent" />}
                        title="Lessons Learned"
                        items={project.lessons}
                      />
                    </div>
                  ) : null}

                  <div className="mt-8 flex flex-wrap gap-3 pb-2">
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:brightness-110"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    ) : null}
                    {project.playStore ? (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-white/10"
                      >
                        <SiGoogleplay className="h-4 w-4" />
                        Play Store
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
