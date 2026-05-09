import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tramonto in Barca Chia — Esperienza Serale Sud Sardegna",
  description: "Tramonto in barca a Chia con aperitivo e prosecco incluso. Un'esperienza magica sul mare della Sardegna del Sud.",
};

const includedItems = [
  "Crociera di 2 ore al tramonto",
  "Aperitivo con stuzzichini sardi",
  "Bottiglia di prosecco o vino locale",
  "Soste panoramiche nelle calette",
  "Musica soft di sottofondo",
  "Possibilit&agrave; di bagno serale",
];

export default function SunsetPage() {
  return (
    <>
      <Navbar />

      {/* Hero — Split with gold gradient */}
      <section className="relative flex min-h-[70vh] flex-col md:flex-row" id="hero">
        {/* Left panel — dark */}
        <div
          className="flex w-full flex-col justify-center px-8 py-16 md:w-1/2 md:pl-20 md:pr-12 lg:pl-24 lg:pr-16"
          style={{ backgroundColor: "#0D1B2A" }}
        >
          <GoldLabel centered={false}>Esperienza Serale</GoldLabel>
          <h1
            className="mb-6 font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Tramonto in Barca
          </h1>
          <p
            className="mb-4 max-w-[480px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            L&apos;ora d&apos;oro sul mare, con aperitivo e prosecco. Un&apos;esperienza romantica indimenticabile.
          </p>
          <p
            className="mb-10 max-w-[480px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Sunset Boat Experience — Golden hour on the water with aperitivo.
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

        {/* Right panel — gold gradient */}
        <div
          className="relative min-h-[40vh] w-full md:min-h-0 md:w-1/2"
          style={{
            background: "linear-gradient(135deg, #2a1810 0%, #C9A84C 50%, #e8a84c 100%)",
          }}
        >
          {/* Left-edge blend */}
          <div
            className="absolute inset-y-0 left-0 hidden w-1/3 md:block"
            style={{
              background: "linear-gradient(to right, #0D1B2A 0%, transparent 100%)",
            }}
          />
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
                What&apos;s included in your sunset experience
              </p>
              <ul className="flex flex-col gap-4">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 block h-px w-6 shrink-0" style={{ backgroundColor: "#C9A84C" }} />
                    <span
                      className="font-jost text-[15px] font-light leading-[1.7]"
                      style={{ color: "#6b6b6b" }}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
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
                      2 ore
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-4" style={{ borderColor: "#E5E3DE" }}>
                    <span className="font-jost text-[13px] font-light uppercase tracking-[0.1em]" style={{ color: "#9a9a9a" }}>
                      Orario
                    </span>
                    <span className="font-jost text-[15px] font-light" style={{ color: "#1a1a1a" }}>
                      1 ora prima del tramonto
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-4" style={{ borderColor: "#E5E3DE" }}>
                    <span className="font-jost text-[13px] font-light uppercase tracking-[0.1em]" style={{ color: "#9a9a9a" }}>
                      Gruppo
                    </span>
                    <span className="font-jost text-[15px] font-light" style={{ color: "#1a1a1a" }}>
                      Max 6 persone
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-4" style={{ borderColor: "#E5E3DE" }}>
                    <span className="font-jost text-[13px] font-light uppercase tracking-[0.1em]" style={{ color: "#9a9a9a" }}>
                      Periodo
                    </span>
                    <span className="font-jost text-[15px] font-light" style={{ color: "#1a1a1a" }}>
                      Aprile — Ottobre
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
