"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CircleCheck, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BUDGETS, PROJECT_TYPES, SITE, WHATSAPP_URL } from "@/constants/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.email("Enter a valid email address"),
  projectType: z.enum(PROJECT_TYPES, { error: "Pick the closest option" }),
  budget: z.enum(BUDGETS, { error: "Pick a rough range (or 'Not sure yet')" }),
  message: z.string().trim().min(20, "A couple of sentences helps me give a useful estimate"),
});

type FormValues = z.infer<typeof schema>;

const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "",
};

const isConfigured = Object.values(EMAILJS).every((v) => v.length > 0 && !v.startsWith("your_"));

function FieldError({ message }: { message?: string }) {
  return message ? <p className="text-sm text-red-600 dark:text-red-400">{message}</p> : null;
}

export function ContactForm() {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    if (!isConfigured) {
      toast.error(`The form is offline right now. Please email me at ${SITE.email}.`);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: values.name,
          from_email: values.email,
          reply_to: values.email,
          subject: `Project inquiry: ${values.projectType} (${values.budget})`,
          message: [
            `Project type: ${values.projectType}`,
            `Budget: ${values.budget}`,
            "",
            values.message,
          ].join("\n"),
          project_type: values.projectType,
          budget: values.budget,
          to_email: SITE.email,
        },
        { publicKey: EMAILJS.publicKey }
      );
      setSentTo(values.email);
      reset();
    } catch {
      toast.error(`Couldn't send your message. Please email me at ${SITE.email} instead.`);
    }
  };

  if (sentTo) {
    return (
      <div className="flex min-h-[32rem] flex-col items-start justify-center rounded-2xl bg-background p-8 text-foreground sm:p-10">
        <CircleCheck className="size-10 text-ok" aria-hidden />
        <h3 className="mt-6 text-2xl font-semibold tracking-tight">Thanks, message received.</h3>
        <p className="mt-3 max-w-md text-subtext">
          I&apos;ll reply to <span className="text-foreground">{sentTo}</span> within 24 hours. If
          it&apos;s urgent, message me on{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="underline underline-offset-4">
            WhatsApp
          </a>
          .
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setSentTo(null)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-2xl bg-background p-6 text-foreground sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="projectType">What do you need?</Label>
          <Select
            id="projectType"
            defaultValue=""
            aria-invalid={!!errors.projectType}
            {...register("projectType")}
          >
            <option value="" disabled>
              Choose one
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
          <FieldError message={errors.projectType?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Rough budget (USD)</Label>
          <Select id="budget" defaultValue="" aria-invalid={!!errors.budget} {...register("budget")}>
            <option value="" disabled>
              Choose a range
            </option>
            {BUDGETS.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </Select>
          <FieldError message={errors.budget?.message} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">About the project</Label>
        <Textarea
          id="message"
          placeholder="What are you building, who is it for, and is there a deadline? Links to designs or an existing app are welcome."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-subtext">Free estimate · reply within 24 hours</p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoaderCircle className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send project details
              <ArrowRight />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
