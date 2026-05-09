import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Snorkeling vicino a Chia, Pula, Teulada & Capoterra — Diving Chia",
  description: "Snorkeling nei dintorni di Chia, Pula, Teulada e Capoterra. Scopri la vita marina del Sud Sardegna.",
};

export default function SnorkelingNearChiaPage() {
  return (
    <>
      <Navbar />

      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-24 md:pt-32 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Costa Sud-Ovest</GoldLabel>
          <h1
            className="mb-6 max-w-[800px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Snorkeling vicino a Chia, Pula, Teulada &amp; Capoterra
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Esplora la costa del Sulcis-Iglesiente in snorkeling.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Snorkeling near Chia, Pula, Teulada &amp; Capoterra.
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

      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              La costa tra Chia, Pula, Teulada e Capoterra &egrave; un paradiso per gli appassionati di snorkeling. 
              Acque trasparenti, calette nascoste e una biodiversit&agrave; marina unica rendono ogni uscita 
              un&apos;esperienza indimenticabile. I nostri tour in barca ti portano nei punti migliori, 
              accessibili solo via mare, lontani dalla folla e immersi nella natura pi&ugrave; autentica.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Le praterie di posidonia ospitano cavallucci marini, polpi e murene, mentre i fondali rocciosi 
              sono popolati da cernie, scorfani e colorati pesci tropicai che hanno colonizzato queste acque. 
              La visibilit&agrave;, spesso superiore ai 20 metri, permette di ammirare ogni dettaglio 
              senza bisogno di scendere in profondit&agrave;.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Che tu sia in vacanza a Chia, Pula, Teulada o Capoterra, il nostro snorkeling tour 
              &egrave; il modo perfetto per scoprire il mare della Sardegna del Sud. L&apos;attrezzatura &egrave; inclusa 
              e i bambini sono i benvenuti. Contattaci per prenotare la tua avventura.
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
