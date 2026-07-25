"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheckBig, LoaderCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal, SectionHeading } from "@/components/shared/section-heading";
import { SocialIcon } from "@/components/shared/social-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE, SOCIAL_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.email("Enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const isConfigured = (value?: string) =>
      Boolean(value && !value.startsWith("your_") && value.trim().length > 0);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!isConfigured(serviceId) || !isConfigured(templateId) || !isConfigured(publicKey)) {
      toast.error("Email service is not configured yet. Please email me directly instead.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
          to_email: SITE.email,
        },
        { publicKey }
      );

      setShowSuccess(true);
      toast.success("Message sent! I'll get back to you soon.");
      reset();
      window.setTimeout(() => setShowSuccess(false), 3200);
    } catch {
      toast.error("Something went wrong while sending your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Great"
          description="Have a project in mind or just want to say hello? My inbox is always open."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={SITE.photo}
                      alt={SITE.name}
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Get in Touch
                    </h3>
                    <p className="text-sm text-subtext">{SITE.role}</p>
                  </div>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-subtext sm:text-base">
                  Whether it&apos;s a new app, a technical consult, or a collaboration idea, I&apos;d
                  love to hear about it. I typically respond within 24 hours.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="glass flex items-center gap-3 rounded-2xl border border-white/10 p-4 transition hover:border-primary/40"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-subtext">Email</p>
                      <p className="text-sm font-medium text-foreground">{SITE.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="glass flex items-center gap-3 rounded-2xl border border-white/10 p-4 transition hover:border-primary/40"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-subtext">Phone</p>
                      <p className="text-sm font-medium text-foreground">{SITE.phone}</p>
                    </div>
                  </a>

                  <div className="glass flex items-center gap-3 rounded-2xl border border-white/10 p-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-subtext">Location</p>
                      <p className="text-sm font-medium text-foreground">{SITE.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="mb-4 text-sm font-semibold text-foreground">Find me online</p>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-subtext transition hover:border-primary/40 hover:text-primary"
                    >
                      <SocialIcon name={link.icon} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/15 text-accent"
                    >
                      <CircleCheckBig className="h-10 w-10" />
                    </motion.span>
                    <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                      Message Sent!
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-subtext">
                      Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Name</Label>
                        <Input
                          id="contact-name"
                          placeholder="Jane Doe"
                          aria-invalid={!!errors.name}
                          {...register("name")}
                        />
                        {errors.name ? (
                          <p className="text-xs text-red-400">{errors.name.message}</p>
                        ) : null}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="jane@example.com"
                          aria-invalid={!!errors.email}
                          {...register("email")}
                        />
                        {errors.email ? (
                          <p className="text-xs text-red-400">{errors.email.message}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subject</Label>
                      <Input
                        id="contact-subject"
                        placeholder="Let's build something great"
                        aria-invalid={!!errors.subject}
                        {...register("subject")}
                      />
                      {errors.subject ? (
                        <p className="text-xs text-red-400">{errors.subject.message}</p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell me about your project..."
                        aria-invalid={!!errors.message}
                        {...register("message")}
                      />
                      {errors.message ? (
                        <p className="text-xs text-red-400">{errors.message.message}</p>
                      ) : null}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className={cn("w-full sm:w-auto")}
                    >
                      {isSubmitting ? (
                        <>
                          <LoaderCircle className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
