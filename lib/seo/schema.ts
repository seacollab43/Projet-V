import { siteConfig, type VeterinaryBusinessConfig } from "@/config/site";

export function buildVeterinarySchema(config: VeterinaryBusinessConfig) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["VeterinaryCare", "LocalBusiness"],
        "@id": "#vet24",
        url: siteConfig.siteUrl,
        image: `${siteConfig.siteUrl}/vet24-clinic-hero.webp`,
        name: config.name,
        alternateName: config.alternateName,
        description: config.description,
        telephone: config.phones,
        address: {
          "@type": "PostalAddress",
          streetAddress: config.address.street,
          addressLocality: config.address.city,
          postalCode: config.address.postalCode,
          addressCountry: config.address.countryCode,
        },
        areaServed: {
          "@type": "City",
          name: config.areaServed,
        },
        sameAs: config.socialProfiles,
        knowsAbout: config.knowsAbout,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services vétérinaires Vet24",
          itemListElement: config.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service,
              areaServed: config.areaServed,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": "#site",
        url: siteConfig.siteUrl,
        name: config.name,
        inLanguage: "fr-MA",
        publisher: { "@id": "#vet24" },
      },
    ],
  };
}

export function buildFaqSchema(
  questions: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "#faq",
    inLanguage: "fr-MA",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
