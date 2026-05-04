import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Prima Immersione a Chia — Try Scuba Diving | Diving Chia",
  description: "Prova l'immersione subacquea per la prima volta a Chia. Nessuna esperienza necessaria, istruttore dedicato.",
};

export default function TryScubaChiaPage() {
  return (
    <>
      <Navbar />

      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-32 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Primi Tuffi</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Prima Immersione a Chia
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Il tuo primo respiro sott&apos;acqua in una delle location pi&ugrave; belle del Mediterraneo.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Try Scuba Diving in Chia — No experience needed.
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
              Se hai sempre sognato di respirare sott&apos;acqua, la Prima Immersione a Chia &egrave; il modo perfetto per iniziare. 
              Non serve alcuna esperienza precedente n&eacute; saper nuotare perfettamente: il nostro istruttore certificato 
              PADI sar&agrave; al tuo fianco in ogni momento, dalla preparazione dell&apos;attrezzatura al rientro in superficie.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              L&apos;esperienza inizia con un briefing dettagliato in cui spieghiamo le basi della subacquea 
              e rispondiamo a tutte le tue domande. Poi ci spostiamo in barca verso una cala protetta, 
              dove faremo esercizi in acque basse prima di scendere fino a 6 metri di profondit&agrave;.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              L&apos;attrezzatura completa &egrave; inclusa, cos&igrave; come le foto sott&apos;acqua del tuo primo tuffo 
              e l&apos;assicurazione DAN. Al rientro, riceverai un attestato di partecipazione. 
              Molti dei nostri ospiti iniziano cos&igrave; il loro percorso subacqueo, 
              proseguendo poi con il corso Open Water Diver.
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
