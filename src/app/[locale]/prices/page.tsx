import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Prezzi — Diving Chia | Esperienze e Pacchetti",
  description: "Listino prezzi trasparente per immersioni, snorkeling, corsi e tour privati a Chia, Sud Sardegna.",
};

const experiences = [
  { name: "Prima Immersione (Try Scuba)", price: "da €85", per: "a persona" },
  { name: "Immersione Guidata", price: "da €65", per: "per immersione" },
  { name: "Snorkeling in Barca", price: "da €55", per: "a persona" },
  { name: "Tour Privato mezza giornata", price: "Su richiesta", per: "" },
  { name: "Tour Privato giornata intera", price: "Su richiesta", per: "" },
  { name: "Esperienza Tramonto", price: "da €75", per: "a persona" },
  { name: "Corso Open Water", price: "€420", per: "per corso" },
  { name: "Corso Advanced", price: "€320", per: "per corso" },
];

const packages = [
  {
    name: "Pacchetto 2 Immersioni",
    desc: "Due immersioni guidate in un giorno con equipaggiamento incluso.",
    price: "€115",
  },
  {
    name: "Pacchetto Famiglia Snorkeling",
    desc: "Tour di snorkeling per 4 persone con attrezzatura e rinfresco inclusi.",
    price: "€195",
  },
  {
    name: "Weekend Sub",
    desc: "2 giorni di immersioni guidate, 4 immersioni totali con equipaggiamento.",
    price: "€220",
  },
  {
    name: "Full Experience",
    desc: "Prima immersione + snorkeling + esperienza tramonto. 3 giorni di attivit&agrave;.",
    price: "Su richiesta",
  },
];

export default function PricesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-32 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Prezzi Trasparenti</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Prezzi e Pacchetti
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Prezzi chiari, nessuna sorpresa. Scegli l&apos;esperienza che fa per te.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Prices & Packages — Clear pricing, no hidden fees.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-jost text-xs font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            Prenota su WhatsApp
          </a>
        </div>
      </section>

      {/* Experience Prices */}
      <section className="px-8 py-32 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal className="mb-16">
            <GoldLabel centered={false}>Le Nostre Esperienze</GoldLabel>
            <h2
              className="font-cormorant text-[36px] font-light leading-[1.15] tracking-[-0.01em] md:text-[48px]"
              style={{ color: "#1a1a1a" }}
            >
              Listino Prezzi
            </h2>
          </ScrollReveal>

          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.name} delay={i * 0.05}>
                <div
                  className="flex flex-col items-start justify-between gap-2 border-b py-6 transition-colors duration-200 hover:bg-[#F2F0EB] md:flex-row md:items-center md:gap-0"
                  style={{ borderColor: "#E5E3DE" }}
                >
                  <span className="font-jost text-[16px] font-light md:text-[18px]" style={{ color: "#1a1a1a" }}>
                    {exp.name}
                  </span>
                  <div className="flex items-center gap-3 md:text-right">
                    <span className="font-cormorant text-[28px] font-light leading-none" style={{ color: "#1a1a1a" }}>
                      {exp.price}
                    </span>
                    {exp.per && (
                      <span className="font-jost text-[13px] font-light" style={{ color: "#9a9a9a" }}>
                        {exp.per}
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="px-8 py-32 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#F2F0EB" }}>
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal className="mb-16">
            <GoldLabel centered={false}>Risparmia</GoldLabel>
            <h2
              className="font-cormorant text-[36px] font-light leading-[1.15] tracking-[-0.01em] md:text-[48px]"
              style={{ color: "#1a1a1a" }}
            >
              Pacchetti Speciali
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-px md:grid-cols-2" style={{ backgroundColor: "#E5E3DE" }}>
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <div className="h-full p-8 md:p-10" style={{ backgroundColor: "#F2F0EB" }}>
                  <div className="mb-4 flex items-baseline justify-between">
                    <h3
                      className="font-cormorant text-[24px] font-light leading-[1.2]"
                      style={{ color: "#1a1a1a" }}
                    >
                      {pkg.name}
                    </h3>
                    <span
                      className="font-cormorant text-[32px] font-light leading-none"
                      style={{ color: "#C9A84C" }}
                    >
                      {pkg.price}
                    </span>
                  </div>
                  <p
                    className="font-jost text-[15px] font-light leading-[1.8]"
                    style={{ color: "#6b6b6b" }}
                    dangerouslySetInnerHTML={{ __html: pkg.desc }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="px-8 py-16 md:px-16 lg:px-20" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[800px] text-center">
          <ScrollReveal>
            <p className="font-jost text-[15px] font-light leading-[1.8]" style={{ color: "#9a9a9a" }}>
              Cancellazione gratuita fino a 48 ore prima dell&apos;attivit&agrave;. Oltre tale termine verr&agrave; addebitato il 50% dell&apos;importo totale. In caso di condizioni meteorologiche avverse, offriamo il rimborso completo o il riprogrammamento senza penali.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
