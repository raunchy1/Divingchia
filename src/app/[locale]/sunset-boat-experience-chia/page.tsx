import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tramonto in Barca a Chia — Diving Chia | Esperienza Serale",
  description: "Esperienza di tramonto in barca a Chia con aperitivo e prosecco incluso. Un momento magico sul mare del Sud Sardegna.",
};

export default function SunsetBoatExperienceChiaPage() {
  return (
    <>
      <Navbar />

      {/* Hero — Split with gold gradient */}
      <section className="relative flex min-h-[70vh] flex-col md:flex-row">
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
            Tramonto in Barca a Chia
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
            Sunset Boat Experience in Chia, South Sardinia.
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
          <div
            className="absolute inset-y-0 left-0 hidden w-1/3 md:block"
            style={{
              background: "linear-gradient(to right, #0D1B2A 0%, transparent 100%)",
            }}
          />
        </div>
      </section>

      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Il tramonto in barca a Chia &egrave; un&apos;esperienza che resta nel cuore. Quando il sole 
              inizia a calare sul mare della Sardegna del Sud, i colori si trasformano in una palette 
              infinita: tonalit&agrave; dorate, arancio acceso e sfumature di rosa che si riflettono 
              sull&apos;acqua come in un specchio naturale. A bordo della nostra barca, con un bicchiere 
              di prosecco in mano e stuzzichini sardi, questo spettacolo diventa un ricordo indimenticabile.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              L&apos;esperienza dura circa due ore: partiamo un&apos;ora prima del tramonto per navigare 
              lungo la costa, ammirando le scogliere e le calette che si tingono di luce dorata. 
              Facciamo soste panoramiche nei punti pi&ugrave; belli, dove potrai scattare foto straordinarie 
              e, se lo desideri, concederti un bagno nelle acque calme della sera.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              L&apos;aperitivo include prosecco o vino locale, accompagnato da stuzzichini tipici sardi: 
              pane carasau, formaggio pecorino, olive e salsiccia secca. L&apos;atmosfera &egrave; intima 
              e rilassata, con musica soft di sottofondo. Perfetto per coppie in cerca di romanticismo, 
              ma anche per piccoli gruppi di amici che vogliono vivere Chia in modo speciale.
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
