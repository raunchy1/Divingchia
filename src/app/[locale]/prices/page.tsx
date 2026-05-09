import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Preventivi — Diving Chia | Offerte Personalizzate",
  description: "Richiedi il tuo preventivo personalizzato per immersioni, snorkeling, corsi e tour privati a Chia, Sud Sardegna. Risposta rapida via WhatsApp.",
};

export default function PricesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[60vh] md:min-h-[70vh] items-end px-5 pb-12 pt-28 md:px-16 md:pb-16 md:pt-32 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Offerte Personalizzate</GoldLabel>
          <h1
            className="mb-4 md:mb-6 max-w-[700px] font-cormorant text-[36px] md:text-[56px] lg:text-[72px] font-light leading-[1.08] tracking-[-0.02em]"
            style={{ color: "#FAFAF8" }}
          >
            Preventivi Personalizzati
          </h1>
          <p
            className="mb-3 max-w-[520px] font-jost text-[16px] md:text-[18px] font-light leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Nessun listino fisso. Ogni esperienza viene costruita su misura per te.
          </p>
          <p
            className="mb-8 max-w-[520px] font-jost text-[14px] font-light"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Il prezzo dipende dal numero di partecipanti, dall&apos;attività scelta, dalla stagione e dalle tue esigenze specifiche. Contattaci direttamente su WhatsApp e ti risponderemo in pochi minuti con un&apos;offerta dedicata.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            RICHIEDI PREVENTIVO SU WHATSAPP
          </a>
          <p
            className="mt-4 font-jost text-[12px] font-light"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Risposta in meno di 30 minuti
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="px-5 py-16 md:px-16 md:py-28 lg:px-20 lg:py-32" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal className="mb-12 md:mb-16 text-center">
            <GoldLabel>Cosa Offriamo</GoldLabel>
            <h2
              className="font-cormorant text-[28px] md:text-[40px] lg:text-[48px] font-light leading-[1.15] tracking-[-0.01em] mb-3"
              style={{ color: "#1a1a1a" }}
            >
              Attivit&agrave; Su Misura
            </h2>
            <p className="max-w-[600px] mx-auto font-jost text-[15px] font-light leading-[1.7]" style={{ color: "#6b6b6b" }}>
              Scegli l&apos;esperienza che preferisci e ricevi un preventivo personalizzato in base alle tue esigenze.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-px sm:grid-cols-2" style={{ backgroundColor: "#E5E3DE" }}>
            {[
              { name: "Immersioni Guidate", desc: "Per sub certificati di ogni livello" },
              { name: "Try Scuba", desc: "La tua prima immersione, in totale sicurezza" },
              { name: "Snorkeling", desc: "Esplora la superficie del mare cristallino" },
              { name: "Corsi Sub", desc: "Certificazioni PADI, SSI e CMAS" },
              { name: "Tour Privati", desc: "La barca solo per te, come vuoi tu" },
              { name: "Tramonto in Barca", desc: "Un&apos;esperienza romantica al calar del sole" },
            ].map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.05}>
                <div className="h-full p-6 md:p-8" style={{ backgroundColor: "#FAFAF8" }}>
                  <h3
                    className="mb-2 font-cormorant text-[22px] font-light leading-[1.2]"
                    style={{ color: "#1a1a1a" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-jost text-[14px] font-light leading-[1.7]"
                    style={{ color: "#6b6b6b" }}
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-16 md:px-16 md:py-24 lg:px-20" style={{ backgroundColor: "#F2F0EB" }}>
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <GoldLabel>Pronto a Tuffarti?</GoldLabel>
            <h2
              className="mb-4 font-cormorant text-[28px] md:text-[40px] lg:text-[48px] font-light leading-[1.15]"
              style={{ color: "#1a1a1a" }}
            >
              Scegli la tua esperienza.<br />Il resto lo facciamo noi.
            </h2>
            <p className="mb-8 font-jost text-[15px] font-light leading-[1.7] mx-auto max-w-[500px]" style={{ color: "#6b6b6b" }}>
              Cancellazione gratuita fino a 48 ore prima. In caso di maltempo: rimborso completo o riprogrammazione senza penali.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              RICHIEDI PREVENTIVO SU WHATSAPP
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
