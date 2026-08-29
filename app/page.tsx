import {
  Activity,
  ArrowUpRight,
  Bone,
  Clock3,
  HeartPulse,
  MapPin,
  Microscope,
  PawPrint,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
} from "lucide-react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { businessConfig } from "@/config/site";
import { buildFaqSchema, buildVeterinarySchema } from "@/lib/seo/schema";

const services = [
  {
    icon: Stethoscope,
    title: "Consultation & médecine",
    description:
      "Bilan de santé, diagnostic et suivi médical pour les chiens et les chats.",
  },
  {
    icon: Syringe,
    title: "Vaccination & identification",
    description:
      "Prévention, protocoles vaccinaux adaptés et identification électronique.",
  },
  {
    icon: Bone,
    title: "Chirurgie vétérinaire",
    description:
      "Interventions de chirurgie générale et orthopédique avec suivi postopératoire.",
  },
  {
    icon: Microscope,
    title: "Imagerie & laboratoire",
    description:
      "Radiographie, échographie et analyses pour orienter rapidement le diagnostic.",
  },
  {
    icon: Activity,
    title: "Dentisterie",
    description:
      "Prévention bucco-dentaire, détartrage et prise en charge des affections dentaires.",
  },
  {
    icon: HeartPulse,
    title: "Urgences & hospitalisation",
    description:
      "Évaluation des urgences et surveillance en clinique selon l’état de l’animal.",
  },
] as const;

const faqItems = [
  {
    question: "Où se trouve la clinique vétérinaire Vet24 à Casablanca ?",
    answer:
      "Vet24 se trouve à Imm. Evasion Office, magasin 1, Route de Taddart, Casablanca 20100, Maroc, à proximité du rond-point Bachkou.",
  },
  {
    question: "Comment contacter Vet24 ?",
    answer:
      "Vous pouvez appeler la clinique au 05 20 96 80 23. Le second numéro de contact est le 06 53 76 70 48.",
  },
  {
    question: "Quels animaux sont pris en charge par Vet24 ?",
    answer:
      "Le site présente les soins proposés par Vet24 pour les chiens et les chats, de la prévention au suivi médical et chirurgical.",
  },
  {
    question: "Quels services vétérinaires sont proposés à Casablanca ?",
    answer:
      "Vet24 propose des consultations, la vaccination et l’identification, la chirurgie, l’imagerie médicale, les analyses, la dentisterie ainsi que la prise en charge des urgences et l’hospitalisation selon la situation clinique.",
  },
  {
    question: "Comment prendre rendez-vous chez Vet24 ?",
    answer:
      "Appelez le 05 20 96 80 23 pour expliquer le motif de la visite et convenir d’un créneau. En cas de situation urgente, précisez-le dès le début de l’appel.",
  },
  {
    question: "Que faire en cas d’urgence vétérinaire à Casablanca ?",
    answer:
      "Appelez Vet24 avant de vous déplacer afin que l’équipe évalue la situation et prépare l’arrivée de votre animal. Une difficulté respiratoire, un saignement important, une intoxication suspectée, une convulsion ou un traumatisme nécessitent un avis vétérinaire rapide.",
  },
  {
    question: "Vet24 réalise-t-elle des radiographies, échographies et analyses ?",
    answer:
      "Oui. La clinique dispose de services d’imagerie et de laboratoire pour compléter l’examen vétérinaire et aider au diagnostic.",
  },
  {
    question: "La clinique réalise-t-elle des opérations vétérinaires ?",
    answer:
      "Oui. Vet24 prend en charge des interventions de chirurgie vétérinaire. Le vétérinaire précise l’indication, la préparation, l’anesthésie et le suivi postopératoire lors de la consultation.",
  },
  {
    question: "Puis-je faire vacciner et identifier mon chien ou mon chat ?",
    answer:
      "Oui. Vet24 propose la vaccination et l’identification électronique. Le protocole est adapté à l’âge, au mode de vie et à l’historique médical de l’animal.",
  },
  {
    question: "Quels sont les horaires d’ouverture de Vet24 ?",
    answer:
      "Pour obtenir les horaires officiels du jour et éviter une information périmée, appelez la clinique au 05 20 96 80 23 avant de vous déplacer.",
  },
] as const;

const veterinarySchema = buildVeterinarySchema(businessConfig);
const faqSchema = buildFaqSchema([...faqItems]);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(veterinarySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <header className="site-header">
        <div className="site-container header-inner">
          <a className="brand" href="#accueil" aria-label="Vet24, accueil">
            <span className="brand-mark" aria-hidden="true">
              <PawPrint />
            </span>
            <span>Vet24</span>
          </a>

          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#clinique">La clinique</a>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button-dark header-call" href="tel:+212520968023">
            <Phone aria-hidden="true" />
            Appeler
          </a>
        </div>
      </header>

      <main id="contenu">
        <section className="hero site-container" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">Route de Taddart · Casablanca</p>
            <h1>Clinique vétérinaire à Casablanca</h1>
            <p className="hero-lead">
              Vet24 accompagne les chiens et les chats avec une prise en charge
              claire, de la consultation aux examens, à la chirurgie et aux
              situations urgentes.
            </p>

            <div className="hero-actions">
              <a className="button button-lime" href="tel:+212520968023">
                <Phone aria-hidden="true" />
                05 20 96 80 23
              </a>
              <a className="button button-ghost" href="#services">
                Découvrir les soins
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <p className="hero-note">
              <ShieldCheck aria-hidden="true" />
              Pour une urgence, appelez avant de vous déplacer.
            </p>
          </div>

          <div className="hero-visual">
            <Image
              src="/vet24-clinic-hero.webp"
              width="1586"
              height="992"
              alt="Chien golden retriever et chat dans une clinique vétérinaire moderne"
              priority
              sizes="(max-width: 900px) 100vw, 56vw"
            />
            <div className="location-card">
              <MapPin aria-hidden="true" />
              <span>
                <strong>Vet24</strong>
                Taddart, Casablanca 20100
              </span>
            </div>
          </div>
        </section>

        <section className="quick-facts site-container" aria-label="Vet24 en bref">
          <article>
            <PawPrint aria-hidden="true" />
            <div>
              <strong>Chiens & chats</strong>
              <span>Prévention, soins et suivi</span>
            </div>
          </article>
          <article>
            <MapPin aria-hidden="true" />
            <div>
              <strong>Route de Taddart</strong>
              <span>Casablanca, Maroc</span>
            </div>
          </article>
          <article>
            <Phone aria-hidden="true" />
            <div>
              <strong>Deux lignes de contact</strong>
              <span>05 20 96 80 23 · 06 53 76 70 48</span>
            </div>
          </article>
        </section>

        <section className="answer-section" id="clinique">
          <div className="site-container answer-grid">
            <div>
              <p className="section-kicker">Réponse directe</p>
              <h2>Qu’est-ce que Vet24 ?</h2>
            </div>
            <div className="answer-copy">
              <p>
                <strong>Vet24 est une clinique vétérinaire à Casablanca</strong>,
                située Route de Taddart. Elle reçoit les propriétaires de chiens
                et de chats pour les consultations, la prévention, les examens,
                la chirurgie, la dentisterie et la prise en charge des urgences.
              </p>
              <p>
                La clinique est joignable au 05 20 96 80 23 et au 06 53 76 70 48.
                Les horaires du jour sont à confirmer par téléphone avant le
                déplacement.
              </p>
            </div>
          </div>
        </section>

        <section className="services-section site-container" id="services">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Soins vétérinaires</p>
              <h2>Les services de la clinique</h2>
            </div>
            <p>
              Une prise en charge structurée, avec des réponses simples à chaque
              étape du parcours de votre animal.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <div className="service-topline">
                    <span className="service-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="emergency-section site-container">
          <div className="emergency-icon" aria-hidden="true">
            <HeartPulse />
          </div>
          <div>
            <p className="section-kicker">Besoin d’un avis rapide ?</p>
            <h2>Une urgence vétérinaire à Casablanca</h2>
            <p>
              Appelez avant de partir. Décrivez les symptômes, le poids de
              l’animal et l’heure de début afin que l’équipe vous oriente.
            </p>
          </div>
          <a className="button button-dark" href="tel:+212653767048">
            Appeler le 06 53 76 70 48
          </a>
        </section>

        <section className="faq-section" id="faq">
          <div className="site-container faq-grid">
            <div className="faq-intro">
              <p className="section-kicker">Questions fréquentes</p>
              <h2>Les réponses avant votre visite</h2>
              <p>
                Des informations courtes et vérifiables pour préparer votre
                rendez-vous chez Vet24.
              </p>
            </div>

            <Accordion className="faq-list" type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem
                  className="faq-item"
                  key={item.question}
                  value={`faq-${index}`}
                >
                  <AccordionTrigger className="faq-trigger">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="faq-content">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="contact-section site-container" id="contact">
          <div className="contact-copy">
            <p className="section-kicker">Contact & accès</p>
            <h2>Préparer votre visite chez Vet24</h2>
            <p>
              Appelez pour prendre rendez-vous ou confirmer les horaires du jour.
              En cas d’urgence, signalez-le immédiatement au téléphone.
            </p>
            <div className="contact-actions">
              <a className="button button-dark" href="tel:+212520968023">
                <Phone aria-hidden="true" />
                05 20 96 80 23
              </a>
              <a
                className="button button-outline"
                href="https://www.google.com/maps/search/?api=1&query=Clinique+Vétérinaire+Vet24+Route+de+Taddart+Casablanca"
                target="_blank"
                rel="noreferrer"
              >
                Itinéraire
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <address className="contact-card">
            <div>
              <MapPin aria-hidden="true" />
              <span>
                <strong>Clinique Vétérinaire Vet24</strong>
                Imm. Evasion Office, Mag. 1<br />
                Route de Taddart<br />
                Casablanca 20100, Maroc
              </span>
            </div>
            <div>
              <Clock3 aria-hidden="true" />
              <span>
                <strong>Horaires</strong>
                À confirmer par téléphone
              </span>
            </div>
          </address>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <div>
            <a className="brand brand-footer" href="#accueil">
              <span className="brand-mark" aria-hidden="true">
                <PawPrint />
              </span>
              <span>Vet24</span>
            </a>
            <p>Clinique vétérinaire Route de Taddart, Casablanca.</p>
          </div>
          <div className="footer-links">
            <a href="tel:+212520968023">05 20 96 80 23</a>
            <a href="tel:+212653767048">06 53 76 70 48</a>
            <a
              href="https://www.instagram.com/clinique_veterinaire_vet24/"
              target="_blank"
              rel="noreferrer"
              aria-label="Vet24 sur Instagram"
            >
              <span aria-hidden="true">IG</span>
            </a>
            <a
              href="https://www.facebook.com/clinique.vet24/"
              target="_blank"
              rel="noreferrer"
              aria-label="Vet24 sur Facebook"
            >
              <span aria-hidden="true">f</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
