import type { LocalBusinessConfig } from "@/config/site";

export function buildLocalBusinessSchema(config: LocalBusinessConfig) {
  const address = config.address
    ? {
        "@type": "PostalAddress",
        streetAddress: config.address.street,
        addressLocality: config.address.city,
        addressRegion: config.address.region,
        postalCode: config.address.postalCode,
        addressCountry: config.address.countryCode,
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: config.name,
    legalName: config.legalName,
    description: config.description,
    telephone: config.phone,
    email: config.email,
    address,
    areaServed: config.serviceAreas,
    sameAs: config.socialProfiles,
  };
}

export function buildFaqSchema(
  questions: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
