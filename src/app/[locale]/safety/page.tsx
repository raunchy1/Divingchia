import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sicurezza ed Equipaggiamento — Diving Chia",
  description: "I nostri standard di sicurezza: istruttori certificati, attrezzatura premium e protocolli rigorosi a Chia dal 1996.",
};

const pillars = [
  {
    title: "Istruttori Certificati",
    desc: "Tutti i nostri istruttori sono certificati PADI, SSI o CMAS con anni di esperienza sulle coste sarde. Formazione continua e aggiornamenti periodici.",
  },
  {
    title: "Controlli Giornalieri",
    desc: "Ogni giorno controlliamo attentamente tutta l'attrezzatura: bombole, erogatori, giubbotti e tutto il materiale di sicurezza. Manutenzione preventiva senza compromessi.",
  },
  {
    title: "Piccoli Gruppi",
    desc: "Massimo 6 sub per guida. Questo ci permette di monitorare ogni partecipante con attenzione costante e rispondere immediatamente a ogni necessit&agrave;.",
  },
  {
    title: "Briefing Accurati",
    desc: "Prima di ogni immersione o attivit&agrave;, un briefing dettagliato copre il sito, le procedure, i segnali di comunicazione e i protocolli di sicurezza.",
  },
  {
    title: "Protocolli d'Emergenza",
    desc: "Collaboriamo con DAN (Divers Alert Network) e abbiamo protocolli d'emergenza testati. Cassa di pronto soccorso e ossigeno terapeutico sempre a bordo.",
  },
  {
    title: "Monitoraggio Meteo",
    desc: "Controlliamo costantemente le condizioni meteorologiche e marine. Se il mare non &egrave; sicuro, rinviamo o rimborsiamo. Nessun compromesso sulla sicurezza.",
  },
];

const equipment = [
  "Bombole in alluminio e acciaio, controllate annualmente",
  "Erogatori professionali con octopus di riserva",
  "Giubbotti compensatori (BCD) di ultima generazione",
  "Computer subacquei per ogni partecipante",
  "Mute in neoprene di qualit&agrave;",
  "Ossigeno terapeutico a bordo",
  "Cassa di pronto soccorso completa",
  "Radio VHF marina per comunicazioni",
];

export default function SafetyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-44 md:pt-40 lg:pt-44 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Il Nostro Impegno</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Sicurezza ed Equipaggiamento
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            La tua sicurezza &egrave; la nostra priorit&agrave; assoluta. Ogni dettaglio &egrave; curato per garantirti un&apos;esperienza serena.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Safety & Equipment — Your safety is our absolute priority.
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

      {/* Pillars Grid */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal className="mb-16 text-center">
            <GoldLabel>I Nostri Pilastri</GoldLabel>
            <h2
              className="font-cormorant text-[36px] font-light leading-[1.15] tracking-[-0.01em] md:text-[48px] lg:text-[64px]"
              style={{ color: "#1a1a1a" }}
            >
              Standard di Sicurezza
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-px md:grid-cols-2" style={{ backgroundColor: "#E5E3DE" }}>
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.1}>
                <div className="h-full p-8 md:p-10" style={{ backgroundColor: "#FAFAF8" }}>
                  <h3
                    className="mb-4 font-cormorant text-[24px] font-light leading-[1.2]"
                    style={{ color: "#1a1a1a" }}
                    dangerouslySetInnerHTML={{ __html: pillar.title }}
                  />
                  <p
                    className="font-jost text-[15px] font-light leading-[1.8]"
                    style={{ color: "#6b6b6b" }}
                    dangerouslySetInnerHTML={{ __html: pillar.desc }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment + Quote */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#F2F0EB" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Equipment List */}
            <ScrollReveal>
              <h2
                className="mb-8 font-cormorant text-[32px] font-light leading-[1.2] md:text-[40px]"
                style={{ color: "#1a1a1a" }}
              >
                Attrezzatura Premium
              </h2>
              <p className="mb-8 font-jost text-base font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
                Premium equipment, meticulously maintained
              </p>
              <ul className="flex flex-col gap-4">
                {equipment.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 block h-px w-6 shrink-0" style={{ backgroundColor: "#C9A84C" }} />
                    <span
                      className="font-jost text-[15px] font-light leading-[1.7]"
                      style={{ color: "#6b6b6b" }}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal delay={0.2}>
              <div
                className="flex h-full flex-col items-center justify-center p-8 text-center md:p-12"
                style={{ backgroundColor: "#0D1B2A" }}
              >
                <blockquote
                  className="mb-6 font-cormorant text-[28px] font-light italic leading-[1.3] md:text-[36px]"
                  style={{ color: "#FAFAF8" }}
                >
                  La tua sicurezza &egrave; la nostra priorit&agrave; dal 1996.
                </blockquote>
                <p className="font-jost text-[15px] font-light" style={{ color: "#9a9a9a" }}>
                  Your safety has been our priority since 1996.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
