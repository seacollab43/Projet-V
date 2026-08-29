export type VeterinaryBusinessConfig = {
  name: string;
  alternateName: string;
  description: string;
  phones: string[];
  address: {
    street: string;
    city: string;
    postalCode: string;
    countryCode: string;
  };
  areaServed: string;
  socialProfiles: string[];
  services: string[];
  knowsAbout: string[];
};

export const businessConfig: VeterinaryBusinessConfig = {
  name: "Clinique Vétérinaire Vet24",
  alternateName: "Vet24",
  description:
    "Clinique vétérinaire située Route de Taddart à Casablanca, proposant des soins pour les chiens et les chats.",
  phones: ["+212520968023", "+212653767048"],
  address: {
    street: "Imm. Evasion Office, Mag. 1, Route de Taddart",
    city: "Casablanca",
    postalCode: "20100",
    countryCode: "MA",
  },
  areaServed: "Casablanca",
  socialProfiles: [
    "https://www.instagram.com/clinique_veterinaire_vet24/",
    "https://www.facebook.com/clinique.vet24/",
  ],
  services: [
    "Consultation vétérinaire",
    "Vaccination et identification",
    "Chirurgie vétérinaire",
    "Imagerie et analyses",
    "Dentisterie vétérinaire",
    "Urgences et hospitalisation",
  ],
  knowsAbout: [
    "Médecine vétérinaire du chien",
    "Médecine vétérinaire du chat",
    "Chirurgie vétérinaire",
    "Imagerie vétérinaire",
    "Urgences vétérinaires",
  ],
};

export const siteConfig = {
  locale: "fr-MA",
  language: "fr",
  siteUrl: "https://site-vitrine-abderrahmane.nq88h8ydw2.chatgpt.site",
} as const;
