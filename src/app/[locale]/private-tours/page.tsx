import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Esperienze Private — Tour in Barca Personalizzati Chia",
  description: "Tour privati in barca personalizzati a Chia, Sud Sardegna. Per coppie, famiglie e gruppi di amici.",
};

const tourTypes = [
  {
    title: "Coppie",
    en: "Couples",
    desc: "Un'esperienza intima e romantica in barca solo per voi due. Soste in calette nascoste, bagno in acque cristalline e momenti da ricordare per sempre. Perfetto per anniversari, proposte di matrimonio o semplicemente per celebrare il vostro amore.",
  },
  {
    title: "Famiglie",
    en: "Families",
    desc: "Un'avventura su misura per grandi e piccini. Attivit&agrave; adatte a ogni et&agrave;, snorkeling sicuro, giochi in spiaggia e tutta la flessibilit&agrave; che una famiglia necessita. I bambini saranno entusiasti della vita marina e delle sorprese che il mare riserva.",
  },
  {
    title: "Gruppi di Amici",
    en: "Groups of Friends",
    desc: "La vostra barca, le vostre regole. Un giorno di mare perfetto con gli amici, tra immersioni, snorkeling, relax e tanto divertimento. Possibilit&agrave; di organizzare pranzi a bordo, aperitivi al tramonto e itinerari personalizzati.",
  },
];

const combinations = [
  "Snorkeling + Pranzo in spiaggia",
  "Immersione + Snorkeling per non sub",
  "Giro delle calette + Aperitivo al tramonto",
  "Giornata intera con soste multiple",
];

export default function PrivateToursPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-24 md:pt-32 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Esclusivo</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            La Tua Esperienza, Le Tue Regole
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Tour privati in barca personalizzati per coppie, famiglie e gruppi.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Private Boat Tours — Your experience, your rules.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-jost text-xs font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            Richiedi Preventivo
          </a>
        </div>
      </section>

      {/* Tour Types */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal className="mb-16">
            <GoldLabel centered={false}>Per Chi &Egrave;</GoldLabel>
            <h2
              className="font-cormorant text-[36px] font-light leading-[1.15] tracking-[-0.01em] md:text-[48px] lg:text-[64px]"
              style={{ color: "#1a1a1a" }}
            >
              Un&apos;Esperienza Su Misura
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-px lg:grid-cols-3" style={{ backgroundColor: "#E5E3DE" }}>
            {tourTypes.map((tour, i) => (
              <ScrollReveal key={tour.title} delay={i * 0.1}>
                <div className="h-full p-8 md:p-10" style={{ backgroundColor: "#FAFAF8" }}>
                  <h3
                    className="mb-1 font-cormorant text-[28px] font-light leading-[1.2]"
                    style={{ color: "#1a1a1a" }}
                  >
                    {tour.title}
                  </h3>
                  <span
                    className="mb-6 block font-jost text-[13px] font-light"
                    style={{ color: "#9a9a9a" }}
                  >
                    {tour.en}
                  </span>
                  <p
                    className="font-jost text-[15px] font-light leading-[1.8]"
                    style={{ color: "#6b6b6b" }}
                    dangerouslySetInnerHTML={{ __html: tour.desc }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Combinations + Price */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#F2F0EB" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Combinations */}
            <ScrollReveal>
              <h2
                className="mb-8 font-cormorant text-[32px] font-light leading-[1.2] md:text-[40px]"
                style={{ color: "#1a1a1a" }}
              >
                Combinazioni Popolari
              </h2>
              <p className="mb-8 font-jost text-base font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
                Popular combinations
              </p>
              <ul className="flex flex-col gap-4">
                {combinations.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 block h-px w-6 shrink-0" style={{ backgroundColor: "#C9A84C" }} />
                    <span className="font-jost text-[15px] font-light leading-[1.7]" style={{ color: "#6b6b6b" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* WhatsApp CTA */}
            <ScrollReveal delay={0.2}>
              <div className="p-8 md:p-12" style={{ backgroundColor: "#FAFAF8" }}>
                <h3
                  className="mb-6 font-cormorant text-[24px] font-light leading-[1.3]"
                  style={{ color: "#1a1a1a" }}
                >
                  Richiedi la tua offerta personalizzata
                </h3>
                <p className="mb-8 font-jost text-[15px] font-light leading-[1.7]" style={{ color: "#6b6b6b" }}>
                  Ogni uscita viene quotata individualmente in base al numero di persone, all&apos;attività scelta e alle condizioni del mare. Contattaci su WhatsApp per ricevere il tuo preventivo dedicato.
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-10 py-4 text-center font-jost text-xs font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#25D366" }}
                >
                  CHIEDI OFFERTA SU WHATSAPP
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
