export type LocalBusinessConfig = {
  name: string;
  legalName?: string;
  description: string;
  phone?: string;
  email?: string;
  address?: {
    street?: string;
    city: string;
    region?: string;
    postalCode?: string;
    countryCode: string;
  };
  serviceAreas: string[];
  socialProfiles: string[];
};

/**
 * Central source of truth for visible copy, metadata and structured data.
 * Real business details are added once the project brief is confirmed.
 */
export const siteConfig = {
  locale: "fr-MA",
  language: "fr",
} as const;
