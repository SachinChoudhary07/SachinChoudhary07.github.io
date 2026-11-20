import emailjs from "@emailjs/browser";
import { SITE } from "@/constants/site";

const CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "",
};

export const isEmailConfigured = Object.values(CONFIG).every(
  (v) => v.length > 0 && !v.startsWith("your_")
);

type Lead = {
  name: string;
  email: string;
  subject: string;
  message: string;
  extra?: Record<string, string>;
};

/** Sends a lead to Sachin's inbox using the existing EmailJS template (from_name, from_email, subject, message). */
export async function sendLead({ name, email, subject, message, extra }: Lead) {
  if (!isEmailConfigured) throw new Error("EmailJS is not configured");
  await emailjs.send(
    CONFIG.serviceId,
    CONFIG.templateId,
    {
      from_name: name,
      from_email: email,
      reply_to: email,
      subject,
      message,
      to_email: SITE.email,
      ...extra,
    },
    { publicKey: CONFIG.publicKey }
  );
}
