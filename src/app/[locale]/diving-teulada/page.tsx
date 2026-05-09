import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Immersioni a Teulada — Diving Chia | Sud Sardegna",
  description: "Immersioni subacquee a Teulada, tra grotte marine e fondali spettacolari. Il meglio del Sud Sardegna con Diving Chia.",
};

export default function DivingTeuladaPage() {
  return (
    <>
      <Navbar />

      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-24 md:pt-32 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Teulada</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Immersioni a Teulada
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Grotte marine, fondali verticali e avventure subacquee indimenticabili.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Scuba Diving in Teulada, South Sardinia.
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
              Teulada &egrave; una delle localit&agrave; subacquee pi&ugrave; affascinanti della Sardegna. 
              Situata nell'estremo sud dell'isola, la sua costa frastagliata nasconde grotte sottomarine, 
              corridoi rocciosi e pareti verticali che scendono nel blu profondo. Le Grotte di Teulada 
              rappresentano il sito pi&ugrave; celebre: una serie di cavit&agrave; naturali che si sviluppano 
              tra i 15 e i 30 metri di profondit&agrave;, con camini di luce che creano atmosfere surreali.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              La fauna marina di Teulada &egrave; ricchissima: grosse cernie, murene, gronchi, astici e, 
              con un po&apos; di fortuna, avvistamenti di tartarughe marine e delfini. Le correnti marine 
              portano nutrienti che alimentano una biodiversit&agrave; straordinaria, con gorgonie rosse 
              e parazoanthus che colorano i fondali.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Le immersioni a Teulada sono consigliate a sub con esperienza intermedia o avanzata, 
              a causa delle profondit&agrave; e delle condizioni marine che possono variare rapidamente. 
              I nostri istruttori conoscono ogni anfratto e ti guideranno in sicurezza attraverso 
              questi scenari da sogno. Prenota la tua immersione a Teulada con Diving Chia.
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
