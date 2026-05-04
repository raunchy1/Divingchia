import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Immersioni Subacquee a Chia — Diving Chia | Dal 1996",
  description: "Scopri le immersioni subacquee a Chia, Sud Sardegna. Oltre 25 anni di esperienza nei migliori siti di diving del Mediterraneo.",
};

export default function DivingChiaPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-32 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Dal 1996</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Immersioni Subacquee a Chia
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Oltre 25 anni di esperienza esplorando i fondali del Sud Sardegna.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Scuba Diving in Chia, South Sardinia — Since 1996.
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
      <section className="px-8 py-32 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Chia è una delle localit&agrave; pi&ugrave; affascinanti della Sardegna del Sud per le immersioni subacquee. 
              Le sue acque cristalline, la visibilit&agrave; spesso superiore ai 30 metri e la ricchezza della vita marina 
              la rendono una meta ambita dai subacquei di tutto il mondo. Dal 1996, Diving Chia accompagna 
              appassionati e curiosi alla scoperta di questo paradiso sommerso.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              I nostri siti di immersione spaziano dalla tranquilla Baia di Chia, perfetta per i principianti, 
              alle profonde Grotte di Teulada per i sub pi&ugrave; esperti. Ogni immersione &egrave; un&apos;avventura unica, 
              guidata da istruttori certificati che conoscono ogni anfratto e ogni segreto di queste coste.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Che tu sia alla tua prima esperienza o un sub certificato alla ricerca di nuove emozioni, 
              a Chia troverai ci&ograve; che cerchi. Organizziamo immersioni guidate, corsi PADI e SSI, 
              e tour privati per far vivere il meglio del Mediterraneo ai nostri ospiti.
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
