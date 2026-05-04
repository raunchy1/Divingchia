import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Snorkeling a Teulada — Diving Chia | Sud Sardegna",
  description: "Snorkeling a Teulada, tra calette selvagge e acque cristalline. Esplora la costa del Sud Sardegna con Diving Chia.",
};

export default function SnorkelingTeuladaPage() {
  return (
    <>
      <Navbar />

      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-32 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Teulada</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Snorkeling a Teulada
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Calette nascoste e fondali ricchi di vita marina nell&apos;estremo sud della Sardegna.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Snorkeling in Teulada, South Sardinia.
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
              Teulada &egrave; una delle mete pi&ugrave; ambite per lo snorkeling nel Sud Sardegna. 
              La sua costa selvaggia e frastagliata nasconde calette accessibili solo via mare, 
              dove l'acqua &egrave; cos&igrave; trasparente da sembrare vetro. I nostri tour di snorkeling 
              ti portano alla scoperta di questi angoli di paradiso, lontani dalla folla e immersi 
              in una natura ancora intatta.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              I fondali di Teulada sono ricchi di vita: praterie di posidonia che oscillano dolcemente 
              con le correnti, scogli coperti di spugne colorate e alghe, e una fauna che va dai pesci 
              pi&ugrave; comuni come le salpe e le donzelle fino a cernie e murene nascoste tra le rocce. 
              La visibilit&agrave; &egrave; spesso superiore ai 20 metri, permettendo di ammirare tutto 
              in grande dettaglio.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              Il tour di snorkeling a Teulada &egrave; adatto a tutta la famiglia, bambini inclusi dai 6 anni. 
              L&apos;attrezzatura &egrave; fornita da noi e la guida esperta accompagna ogni partecipante 
              in acqua, indicando i punti pi&ugrave; interessanti e garantendo sicurezza a ogni momento. 
              Prenota la tua uscita e scopri Teulada dal mare.
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
