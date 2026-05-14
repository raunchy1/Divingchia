import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domande Frequenti — Diving Chia",
  description: "Trova le risposte alle domande più frequenti sulle nostre esperienze subacquee a Chia, Sud Sardegna.",
};

const faqs = [
  {
    q: "Serve la certificazione per partecipare?",
    a: "No, per la Prima Immersione (Try Scuba) non serve alcuna certificazione n&eacute; esperienza precedente. Il nostro istruttore sar&agrave; sempre al tuo fianco durante tutta l'esperienza.",
  },
  {
    q: "I principianti possono partecipare?",
    a: "S&igrave;, assolutamente. Le nostre attivit&agrave; sono pensate per accogliere principianti di ogni et&agrave;. Offriamo esperienze adatte a chi non ha mai messo la testa sott'acqua.",
  },
  {
    q: "Cosa succede se il mare &egrave; mosso?",
    a: "Se le condizioni marine non sono sicure, rinviamo l'attivit&agrave; alla prima data disponibile oppure offriamo il rimborso completo. La tua sicurezza viene prima di tutto.",
  },
  {
    q: "Cosa devo portare con me?",
    a: "Porta solo costume da bagno, asciugamano e protezione solare. Noi forniamo tutta l'attrezzatura necessaria, inclusa quella subacquea o da snorkeling.",
  },
  {
    q: "L'attrezzatura &egrave; inclusa?",
    a: "S&igrave;, tutta l'attrezzatura &egrave; inclusa in ogni nostra esperienza. Maschere, erogatori, mute, pinne e giubbotti sono forniti e controllati quotidianamente.",
  },
  {
    q: "Posso venire con i bambini?",
    a: "S&igrave;, i bambini sono i benvenuti a partire dai 6 anni per lo snorkeling e dai 10 anni per la prima immersione. Abbiamo attrezzature di taglia per i pi&ugrave; piccoli.",
  },
  {
    q: "Posso fare snorkeling mentre altri fanno immersione?",
    a: "S&igrave;, organizziamo spesso gruppi misti in cui alcuni partecipanti fanno immersione guidata mentre altri esplorano la superficie con lo snorkeling.",
  },
  {
    q: "Quanto dura l'esperienza?",
    a: "Le nostre esperienze durano generalmente dalle 2,5 alle 3 ore dall'imbarco allo sbarco, inclusi briefing, navigazione e attivit&agrave; in acqua.",
  },
  {
    q: "Da dove partiamo?",
    a: "Tutte le nostre attivit&agrave; partono dal Porto di Chia. Ti invieremo le indicazioni precise al momento della prenotazione.",
  },
  {
    q: "Come posso prenotare?",
    a: "La prenotazione &egrave; semplice e veloce: contattaci via WhatsApp al +39 338 858 5504 e ti risponderemo in pochi minuti con disponibilit&agrave; e conferma.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[50vh] items-center px-8 pb-16 pt-44 md:pt-40 lg:pt-44 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>FAQ</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Domande Frequenti
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Tutto quello che devi sapere prima di tuffarti.
          </p>
          <p
            className="max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Frequently Asked Questions
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[900px]">
          <div className="flex flex-col" style={{ gap: "1px", backgroundColor: "#E5E3DE" }}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="p-8 md:p-10" style={{ backgroundColor: "#FAFAF8" }}>
                  <h3
                    className="mb-4 font-jost text-[18px] font-normal leading-[1.5]"
                    style={{ color: "#1a1a1a" }}
                    dangerouslySetInnerHTML={{ __html: faq.q }}
                  />
                  <p
                    className="font-jost text-[15px] font-light leading-[1.8]"
                    style={{ color: "#6b6b6b" }}
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
