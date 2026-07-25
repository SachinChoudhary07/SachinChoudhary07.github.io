import { SOCIAL_LINKS, SITE } from "@/constants/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.role,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    image: `${SITE.url}${SITE.photo}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "MP",
      addressCountry: "IN",
    },
    sameAs: SOCIAL_LINKS.filter((link) => link.icon !== "email").map((link) => link.href),
    description: SITE.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
