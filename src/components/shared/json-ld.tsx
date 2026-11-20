import { PROFILE_LINKS, SERVICES, SITE } from "@/constants/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        jobTitle: "Freelance Flutter & Full-Stack Developer",
        url: SITE.url,
        email: `mailto:${SITE.email}`,
        image: `${SITE.url}${SITE.photo}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Indore",
          addressRegion: "MP",
          addressCountry: "IN",
        },
        knowsAbout: ["Flutter", "Dart", "React", "Next.js", "Node.js", "Firebase", "AI integration"],
        sameAs: Object.values(PROFILE_LINKS),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#service`,
        name: `${SITE.name}: app & web development`,
        url: SITE.url,
        description: SITE.description,
        founder: { "@id": `${SITE.url}/#person` },
        areaServed: "Worldwide",
        image: `${SITE.url}${SITE.ogImage}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.title, description: service.outcome },
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
