import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Snorkeling a Chia — Diving Chia | Sud Sardegna",
  description: "Esperienze di snorkeling a Chia per tutte le età. Acque cristalline e vita marina del Mediterraneo.",
};

export default function SnorkelingChiaPage() {
  return (
    <>
      <Navbar />

      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-32 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Chia</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Snorkeling a Chia
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Un&apos;avventura accessibile a tutti alla scoperta della vita marina.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Snorkeling in Chia, South Sardinia.
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

      <section className="px-8 py-32 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Lo snorkeling a Chia &egrave; un&apos;esperienza che non ha bisogno di esperienza subacquea. 
              Borsegli, maschera e pinne sono tutto ci&ograve; che serve per esplorare un mondo sommerso ricco di colori e vita. 
              Le acque cristalline della Sardegna del Sud offrono una visibilit&agrave; eccezionale, 
              permettendo di ammirare praterie di posidonia, scogliera ricca di fauna e, con un po&apos; di fortuna, 
              avvistamenti di pesci tra i pi&ugrave; affascinanti del Mediterraneo.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              I nostri tour di snorkeling partono in piccoli gruppi, massimo 8 persone, per garantire 
              un&apos;esperienza intima e sicura. Una guida esperta accompagna i partecipanti in acqua, 
              indicando i punti pi&ugrave; interessanti e assicurandosi che tutti si sentano a proprio agio.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              I bambini dai 6 anni sono i benvenuti, rendendo questa attivit&agrave; perfetta per famiglie. 
              L&apos;attrezzatura &egrave; inclusa e il rinfresco a bordo rende l&apos;esperienza ancora pi&ugrave; piacevole. 
              Un modo semplice e indimenticabile per scoprire il mare di Chia.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 font-jost text-xs font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              Prenota su WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
