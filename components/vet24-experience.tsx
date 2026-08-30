"use client";

import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Bone,
  Clock3,
  HeartPulse,
  MapPin,
  Menu,
  Microscope,
  PawPrint,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
  X,
} from "lucide-react";
import {
  motion,
  MotionConfig,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { faqItems, services } from "@/config/content";

const serviceIcons = [
  Stethoscope,
  Syringe,
  Bone,
  Microscope,
  Activity,
  HeartPulse,
] as const;

const navItems = [
  ["La clinique", "#clinique"],
  ["Services", "#services"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
] as const;

function useMobileViewport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 820px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal-window ${className}`}>
      <motion.div
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function SectionMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-marker" aria-hidden="true">
      <span>{number}</span>
      <span>{label}</span>
    </div>
  );
}

function MagneticArrow() {
  return (
    <motion.span
      className="button-arrow"
      aria-hidden="true"
      whileHover={{ rotate: 45, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
    >
      <ArrowUpRight />
    </motion.span>
  );
}

function FloatingNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="floating-header">
      <div className="glass-nav">
        <a className="brand" href="#accueil" aria-label="Vet24, accueil">
          <span className="brand-dot" aria-hidden="true">
            <PawPrint />
          </span>
          <span>VET24</span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
        <a className="nav-call" href="tel:+212520968023">
          <Phone aria-hidden="true" />
          <span>Appeler</span>
        </a>
        <Sheet modal={false} open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button
              className="menu-trigger"
              type="button"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </SheetTrigger>
          <SheetContent className="mobile-sheet" side="top" showCloseButton={false}>
            <SheetHeader className="sr-only">
              <SheetTitle>Menu Vet24</SheetTitle>
              <SheetDescription>Navigation principale de la clinique vétérinaire Vet24</SheetDescription>
            </SheetHeader>
            <nav className="mobile-nav" aria-label="Navigation mobile">
              {navItems.map(([label, href]) => (
                <SheetClose asChild key={href}>
                  <a href={href}>
                    {label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const isMobile = useMobileViewport();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 22 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const wordY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const animalY = useTransform(scrollYProgress, [0, 1], [0, -72]);
  const animalScale = useTransform(scrollYProgress, [0, 1], [1, 1.045]);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 18);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 12);
  }

  return (
    <section
      className="hero-editorial"
      id="accueil"
      ref={heroRef}
      onPointerMove={isMobile ? undefined : handlePointerMove}
      onPointerLeave={isMobile ? undefined : () => { pointerX.set(0); pointerY.set(0); }}
    >
      <div className="hero-gridlines" aria-hidden="true" />
      <motion.div className="hero-monogram" style={isMobile ? undefined : { y: wordY }} aria-hidden="true">
        <span>VET</span><span>24</span>
      </motion.div>
      <motion.div
        className="hero-animal"
        style={isMobile ? undefined : { x: smoothX, y: animalY, scale: animalScale }}
      >
        <motion.div style={isMobile ? undefined : { y: smoothY }}>
          <Image
            src="/vet24-dog-cutout.webp"
            width={1024}
            height={1536}
            alt="Chien accueilli à la clinique vétérinaire Vet24 à Casablanca"
            priority
            unoptimized
            sizes="(max-width: 720px) 82vw, 46vw"
          />
        </motion.div>
      </motion.div>
      <motion.div className="hero-foreground-word" style={isMobile ? undefined : { y: wordY }} aria-hidden="true">
        24
      </motion.div>
      <div className="hero-content site-container-wide">
        <div className="hero-meta">
          <span>Clinique vétérinaire</span>
          <span>Casablanca · Route de Taddart</span>
        </div>
        <h1>
          <Reveal><span>Soigner avec</span></Reveal>
          <Reveal delay={0.08}><span className="hero-title-offset">précision.</span></Reveal>
          <span className="sr-only">Clinique vétérinaire Vet24 à Casablanca</span>
        </h1>
        <div className="hero-bottom">
          <motion.a
            className="hero-scroll"
            href="#clinique"
            aria-label="Découvrir Vet24"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            <ArrowDown aria-hidden="true" />
          </motion.a>
          <motion.div
            className="hero-glass glass-panel"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-glass-icon"><ShieldCheck aria-hidden="true" /></div>
            <p><span>Besoin d’un avis rapide ?</span>Appelez avant de vous déplacer.</p>
            <a href="tel:+212520968023" aria-label="Appeler Vet24 au 05 20 96 80 23">
              <Phone aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro-section site-container-wide" id="clinique">
      <SectionMarker number="01" label="La clinique" />
      <div className="intro-layout">
        <Reveal className="intro-heading">
          <h2>La médecine vétérinaire,<br /><em>sans distance.</em></h2>
        </Reveal>
        <motion.div
          className="intro-answer"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="micro-label">Réponse directe</p>
          <p className="intro-lead">
            <strong>Vet24 est une clinique vétérinaire à Casablanca</strong>, située
            Route de Taddart. Elle accompagne les chiens et les chats de la
            prévention aux examens, à la chirurgie et aux situations urgentes.
          </p>
          <p className="intro-detail">
            Une équipe attentive, un parcours lisible et des décisions expliquées
            avec des mots simples.
          </p>
          <a className="text-link" href="#services">Explorer les services <MagneticArrow /></a>
        </motion.div>
      </div>
      <div className="fact-ribbon" aria-label="Vet24 en bref">
        <div><span>01</span><strong>Chiens & chats</strong><small>Prévention, soins et suivi</small></div>
        <div><span>02</span><strong>Route de Taddart</strong><small>Casablanca 20100</small></div>
        <div><span>03</span><strong>Deux lignes directes</strong><small>05 20 96 80 23 · 06 53 76 70 48</small></div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-editorial" id="services">
      <div className="site-container-wide">
        <SectionMarker number="02" label="Expertises" />
        <div className="services-heading">
          <Reveal><p className="display-label">PRÉVENIR</p></Reveal>
          <Reveal delay={0.08}><p className="display-label display-label-outline">COMPRENDRE</p></Reveal>
          <Reveal delay={0.16}><p className="display-label display-label-right">SOIGNER</p></Reveal>
        </div>
        <div className="service-list">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article
                className="service-row"
                key={service.title}
              >
                <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="service-icon" aria-hidden="true"><Icon /></span>
                <div className="service-main"><p>{service.shortTitle}</p><h3>{service.title}</h3></div>
                <p className="service-description">{service.description}</p>
                <span className="service-detail">{service.detail}</span>
                <span className="service-arrow" aria-hidden="true"><ArrowUpRight /></span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Emergency() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useMobileViewport();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const catY = useTransform(scrollYProgress, [0, 1], [82, -64]);
  return (
    <section className="emergency-editorial" ref={sectionRef}>
      <div className="emergency-word" aria-hidden="true">URGENCE</div>
      <motion.div className="emergency-cat" style={isMobile ? undefined : { y: catY }}>
        <Image
          src="/vet24-cat-peek.webp"
          width={1254}
          height={1254}
          alt="Chat suivi par la clinique Vet24"
          unoptimized
          sizes="(max-width: 720px) 70vw, 34vw"
        />
      </motion.div>
      <div className="site-container-wide emergency-inner">
        <div className="emergency-copy">
          <p className="micro-label">Avis vétérinaire rapide</p>
          <Reveal><h2>Votre animal vous inquiète&nbsp;?</h2></Reveal>
          <p>
            Décrivez les symptômes, le poids de l’animal et l’heure de début.
            L’équipe vous indiquera la conduite à tenir et préparera votre arrivée
            si nécessaire.
          </p>
        </div>
        <motion.div
          className="emergency-glass glass-panel"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
        >
          <HeartPulse aria-hidden="true" />
          <span>Appelez avant de partir</span>
          <a href="tel:+212653767048">06 53 76 70 48</a>
          <small>Évaluation téléphonique · Casablanca</small>
        </motion.div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="faq-editorial site-container-wide" id="faq">
      <SectionMarker number="03" label="Questions" />
      <div className="faq-layout">
        <div className="faq-intro">
          <Reveal><h2>Avant<br /><em>la visite.</em></h2></Reveal>
          <p>Des réponses courtes, concrètes et vérifiables pour préparer votre rendez-vous chez Vet24.</p>
        </div>
        <Accordion className="faq-list" type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem className="faq-item" key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="faq-trigger">
                <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                <span>{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="faq-content"><p>{item.answer}</p></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-editorial" id="contact">
      <div className="contact-background" aria-hidden="true">TADDART</div>
      <div className="site-container-wide contact-inner">
        <SectionMarker number="04" label="Contact" />
        <div className="contact-heading">
          <Reveal><h2>Parlons de<br /><em>votre animal.</em></h2></Reveal>
          <p>Prenez rendez-vous, confirmez les horaires du jour ou demandez un avis avant de vous déplacer.</p>
        </div>
        <div className="contact-grid">
          <a className="contact-primary" href="tel:+212520968023">
            <span>Appeler la clinique</span><strong>05 20 96 80 23</strong><MagneticArrow />
          </a>
          <address className="contact-glass glass-panel">
            <div>
              <MapPin aria-hidden="true" />
              <span><strong>Clinique Vétérinaire Vet24</strong>Imm. Evasion Office, Mag. 1<br />Route de Taddart, Casablanca 20100</span>
            </div>
            <div>
              <Clock3 aria-hidden="true" />
              <span><strong>Horaires</strong>À confirmer par téléphone</span>
            </div>
            <a
              className="route-link"
              href="https://www.google.com/maps/search/?api=1&query=Clinique+Vétérinaire+Vet24+Route+de+Taddart+Casablanca"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir l’itinéraire <ArrowUpRight aria-hidden="true" />
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container-wide footer-top">
        <a className="footer-brand" href="#accueil">VET24</a>
        <p>Clinique vétérinaire à Casablanca, Route de Taddart.</p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/clinique_veterinaire_vet24/" target="_blank" rel="noreferrer" aria-label="Vet24 sur Instagram"><span aria-hidden="true">IG</span></a>
          <a href="https://www.facebook.com/clinique.vet24/" target="_blank" rel="noreferrer" aria-label="Vet24 sur Facebook"><span aria-hidden="true">f</span></a>
        </div>
      </div>
      <div className="site-container-wide footer-bottom">
        <span>© 2026 Clinique Vétérinaire Vet24</span>
        <a href="tel:+212653767048">06 53 76 70 48</a>
        <span>Casablanca · Maroc</span>
      </div>
    </footer>
  );
}

export function Vet24Experience() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <FloatingNavigation />
      <main id="contenu">
        <Hero />
        <Intro />
        <Services />
        <Emergency />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a className="mobile-call" href="tel:+212520968023"><Phone aria-hidden="true" />Appeler Vet24</a>
    </MotionConfig>
  );
}
