import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Immersioni Guidate Chia — Subacquea Sud Sardegna",
  description: "Immersioni guidate per sub certificati a Chia e Teulada. I migliori siti del Sud Sardegna con guide esperte.",
};

const diveSites = [
  {
    name: "Baia di Chia",
    depth: "5 — 18m",
    level: "Tutti i Livelli",
    desc: "Una baia protetta con fondali sabbiosi e posidonia. Ideale per chi cerca un'immersione rilassante tra cernie, polpi e scorfani. La visibilit&agrave; eccezionale rende ogni immersione un'esperienza visivamente straordinaria.",
  },
  {
    name: "Secca di Pula",
    depth: "12 — 25m",
    level: "Open Water+",
    desc: "Una secca sommersa ricca di vita marina. Incontri frequenti con branchi di barracuda, murene e gorgonie. Correnti moderate e fondali rocciosi che regalano emozioni ad ogni discesa.",
  },
  {
    name: "Grotte di Teulada",
    depth: "15 — 30m",
    level: "Avanzato",
    desc: "Grotte sottomarine spettacolari con gallerie, camini e ambienti criptici. La luce filtra creando giochi d'ombra indimenticabili. Per sub esperti che cercano l'avventura autentica.",
  },
  {
    name: "Nora Archeologico",
    depth: "8 — 20m",
    level: "Tutti i Livelli",
    desc: "Immergiti nella storia con i resti dell'antica citt&agrave; di Nora. Fondali che custodiscono reperti romani e punici, circondati da una flora e fauna marina rigogliosa.",
  },
];

const requirements = [
  "Certificazione Open Water (o equivalente)",
  "Immersione logata entro 12 mesi",
  "Attrezzatura personale o noleggio incluso",
  "Briefing obbligatorio pre-immersione",
  "Max 6 sub per guida",
];

export default function GuidedDivesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-44 md:pt-40 lg:pt-44 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Sub Certificati</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Immersioni Guidate
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Esplora i migliori siti subacquei del Sud Sardegna con guide esperte e sicurezza al primo posto.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Guided Dives — Explore the finest dive sites in South Sardinia with expert guides.
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

      {/* Dive Sites */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal className="mb-16">
            <GoldLabel centered={false}>I Nostri Siti</GoldLabel>
            <h2
              className="font-cormorant text-[36px] font-light leading-[1.15] tracking-[-0.01em] md:text-[48px] lg:text-[64px]"
              style={{ color: "#1a1a1a" }}
            >
              Dove Portiamo i Sub
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-px md:grid-cols-2" style={{ backgroundColor: "#E5E3DE" }}>
            {diveSites.map((site, i) => (
              <ScrollReveal key={site.name} delay={i * 0.1}>
                <div className="h-full p-8 md:p-10" style={{ backgroundColor: "#FAFAF8" }}>
                  <div className="mb-6 flex items-center gap-4">
                    <span
                      className="font-cormorant text-[14px] font-light uppercase tracking-[0.15em]"
                      style={{ color: "#C9A84C" }}
                    >
                      {site.depth}
                    </span>
                    <span className="h-px w-4" style={{ backgroundColor: "#E5E3DE" }} />
                    <span
                      className="font-jost text-[12px] font-light uppercase tracking-[0.1em]"
                      style={{ color: "#9a9a9a" }}
                    >
                      {site.level}
                    </span>
                  </div>
                  <h3
                    className="mb-4 font-cormorant text-[28px] font-light leading-[1.2]"
                    style={{ color: "#1a1a1a" }}
                  >
                    {site.name}
                  </h3>
                  <p
                    className="font-jost text-[15px] font-light leading-[1.8]"
                    style={{ color: "#6b6b6b" }}
                    dangerouslySetInnerHTML={{ __html: site.desc }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Price */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#F2F0EB" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Requirements */}
            <ScrollReveal>
              <h2
                className="mb-8 font-cormorant text-[32px] font-light leading-[1.2] md:text-[40px]"
                style={{ color: "#1a1a1a" }}
              >
                Requisiti
              </h2>
              <p className="mb-8 font-jost text-base font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
                Requirements for certified divers
              </p>
              <ul className="flex flex-col gap-4">
                {requirements.map((item) => (
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
