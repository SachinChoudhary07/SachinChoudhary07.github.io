import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-5 sm:px-8">
      <p className="label">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em]">This page doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-md text-lg text-subtext">
        The link may be old. Everything you need is on the home page.
      </p>
      <ButtonLink href="/" size="lg" className="mt-8 self-start">
        Back to home
      </ButtonLink>
    </div>
  );
}
