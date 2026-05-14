import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tour Privati in Barca a Chia — Diving Chia | Sud Sardegna",
  description: "Tour privati in barca personalizzati a Chia. Per coppie, famiglie e gruppi di amici.",
};

export default function PrivateBoatToursChiaPage() {
  return (
    <>
      <Navbar />

      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-44 md:pt-40 lg:pt-44 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Esclusivo</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Tour Privati in Barca a Chia
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            La tua barca privata, il tuo itinerario, la tua giornata perfetta.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Private Boat Tours in Chia, South Sardinia.
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

      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Un tour privato in barca a Chia &egrave; l&apos;esperienza definitiva per chi cerca esclusivit&agrave; 
              e personalizzazione. La barca &egrave; interamente a tua disposizione, con un equipaggio esperto 
              che segue i tuoi desideri: soste in calette nascoste per nuotare, snorkeling in punti 
              selezionati, pranzo in spiaggia o semplicemente relax al sole con la brezza del mare.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Organizziamo tour privati per ogni esigenza: romantiche crociere per coppie al tramonto, 
              giornate di avventura per famiglie con bambini, uscite tra amici con snorkeling e aperitivo. 
              Possiamo combinare immersioni per sub certificati con snorkeling per chi non ha il brevetto, 
              in modo che nessuno debba rinunciare al divertimento.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Le nostre barche sono attrezzate con ogni comfort: doccia dolce, ombreggio, scala per 
              l&apos;ingresso in acqua e tutta l&apos;attrezzatura per lo snorkeling. Contattaci per 
              progettare insieme il tuo itinerario ideale. Ogni tour privato &egrave; unico, come i nostri ospiti.
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
              Richiedi Preventivo
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
