import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Snorkeling in Barca Chia — Esperienza Sud Sardegna",
  description: "Tour di snorkeling in barca per tutte le età a Chia. Acque cristalline e vita marina del Mediterraneo.",
};

const includedItems = [
  "Attrezzatura snorkeling completa (maschera, boccaglio, pinne)",
  "Guida esperta in acqua con te",
  "Barca attrezzata con doccia dolce",
  "Rinfresco a bordo incluso",
  "Assicurazione inclusa",
  "Bambini dai 6 anni benvenuti",
];

export default function SnorkelingPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-44 md:pt-40 lg:pt-44 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Tutte le Et&agrave;</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Snorkeling in Barca
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Un&apos;avventura accessibile a tutti alla scoperta della vita marina del Mediterraneo.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Snorkeling Boat Trip — An adventure accessible to all to discover Mediterranean marine life.
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

      {/* Content */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left — What's Included */}
            <ScrollReveal>
              <h2
                className="mb-8 font-cormorant text-[32px] font-light leading-[1.2] md:text-[40px]"
                style={{ color: "#1a1a1a" }}
              >
                Cosa Include
              </h2>
              <p className="mb-8 font-jost text-base font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
                Everything included for a perfect snorkeling experience
              </p>
              <ul className="flex flex-col gap-4">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 block h-px w-6 shrink-0" style={{ backgroundColor: "#C9A84C" }} />
                    <span className="font-jost text-[15px] font-light leading-[1.7]" style={{ color: "#6b6b6b" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Right — Details + Price */}
            <ScrollReveal delay={0.2}>
              <div className="p-8 md:p-12" style={{ backgroundColor: "#F2F0EB" }}>
                <h3
                  className="mb-8 font-cormorant text-[24px] font-light leading-[1.3]"
                  style={{ color: "#1a1a1a" }}
                >
                  Dettagli dell&apos;Esperienza
                </h3>
                <div className="mb-10 flex flex-col gap-6">
                  <div className="flex justify-between border-b pb-4" style={{ borderColor: "#E5E3DE" }}>
                    <span className="font-jost text-[13px] font-light uppercase tracking-[0.1em]" style={{ color: "#9a9a9a" }}>
                      Durata
                    </span>
                    <span className="font-jost text-[15px] font-light" style={{ color: "#1a1a1a" }}>
                      3 ore
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-4" style={{ borderColor: "#E5E3DE" }}>
                    <span className="font-jost text-[13px] font-light uppercase tracking-[0.1em]" style={{ color: "#9a9a9a" }}>
                      Gruppo
                    </span>
                    <span className="font-jost text-[15px] font-light" style={{ color: "#1a1a1a" }}>
                      Max 8 persone
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-4" style={{ borderColor: "#E5E3DE" }}>
                    <span className="font-jost text-[13px] font-light uppercase tracking-[0.1em]" style={{ color: "#9a9a9a" }}>
                      Zone
                    </span>
                    <span className="font-jost text-[15px] font-light" style={{ color: "#1a1a1a" }}>
                      Chia / Pula / Teulada
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-4" style={{ borderColor: "#E5E3DE" }}>
                    <span className="font-jost text-[13px] font-light uppercase tracking-[0.1em]" style={{ color: "#9a9a9a" }}>
                      Et&agrave; minima
                    </span>
                    <span className="font-jost text-[15px] font-light" style={{ color: "#1a1a1a" }}>
                      6 anni
                    </span>
                  </div>
                </div>

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
