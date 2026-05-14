import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Immersioni vicino a Chia, Pula, Teulada & Capoterra — Diving Chia",
  description: "Immersioni subacquee nei dintorni di Chia, Pula, Teulada e Capoterra. I migliori siti del Sud Sardegna.",
};

export default function DivingNearChiaPage() {
  return (
    <>
      <Navbar />

      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-44 md:pt-40 lg:pt-44 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Sud Sardegna</GoldLabel>
          <h1
            className="mb-6 max-w-[800px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Immersioni vicino a Chia, Pula, Teulada &amp; Capoterra
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            I migliori siti subacquei del Sulcis-Iglesiente a portata di barca.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Diving near Chia, Pula, Teulada &amp; Capoterra.
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
              Il Sud Sardegna offre alcuni dei siti di immersione pi&ugrave; spettacolari del Mediterraneo. 
              Dalla Baia di Chia, con i suoi fondali sabbiosi ideali per i principianti, 
              alle Secche di Pula, dove i sub esperti possono ammirare branchi di barracuda e gorgonie, 
              ogni immersione &egrave; un&apos;avventura diversa. La costa tra Chia, Pula, Teulada e Capoterra 
              &egrave; un susseguirsi di calette, grotte e secche sommerse che conservano tesori naturali e archeologici.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              A Teulada, le grotte sottomarine offrono scenari da film: gallerie, camini di luce 
              e ambienti criptici dove la fauna trova rifugio. I fondali antistanti Nora conservano 
              reperti archeologici risalenti all&apos;epoca romana e punica, rendendo ogni immersione 
              anche un viaggio nella storia.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Organizziami immersioni guidate per sub certificati di ogni livello, dalla prima Open Water 
              fino ai brevetti avanzati. I piccoli gruppi garantiscono sicurezza e attenzione personalizzata. 
              Contattaci per pianificare il tuo itinerario di diving nel Sud Sardegna.
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
