import Link from "next/link";
import { SITE } from "@/constants/site";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">404</p>
      <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-subtext">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-xl bg-gradient-to-r from-primary to-secondary px-6 text-sm font-semibold text-white"
      >
        Back to {SITE.name.split(" ")[0]}&apos;s portfolio
      </Link>
    </div>
  );
}
