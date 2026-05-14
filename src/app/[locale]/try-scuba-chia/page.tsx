import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return [{ locale: "it" }, { locale: "en" }, { locale: "de" }];
}

const dict: Record<string, any> = {
  it: {
    metaTitle: "Prima Immersione a Chia — Try Scuba Diving | Diving Chia",
    metaDesc: "Prova l'immersione subacquea per la prima volta a Chia. Nessuna esperienza necessaria, istruttore dedicato.",
    label: "Primi Tuffi",
    title: "Prima Immersione a Chia",
    subtitle: "Il tuo primo respiro sott'acqua in una delle location più belle del Mediterraneo.",
    subtitle2: "Try Scuba Diving in Chia — No experience needed.",
    cta: "Prenota su WhatsApp",
    p1: "Se hai sempre sognato di respirare sott'acqua, la Prima Immersione a Chia è il modo perfetto per iniziare. Non serve alcuna esperienza precedente né saper nuotare perfettamente: il nostro istruttore certificato PADI sarà al tuo fianco in ogni momento, dalla preparazione dell'attrezzatura al rientro in superficie.",
    p2: "L'esperienza inizia con un briefing dettagliato in cui spieghiamo le basi della subacquea e rispondiamo a tutte le tue domande. Poi ci spostiamo in barca verso una cala protetta, dove faremo esercizi in acque basse prima di scendere fino a 6 metri di profondità.",
    p3: "L'attrezzatura completa è inclusa, così come le foto sott'acqua del tuo primo tuffo e l'assicurazione DAN. Al rientro, riceverai un attestato di partecipazione. Molti dei nostri ospiti iniziano così il loro percorso subacqueo, proseguendo poi con il corso Open Water Diver.",
  },
  en: {
    metaTitle: "First Dive in Chia — Try Scuba Diving | Diving Chia",
    metaDesc: "Try scuba diving for the first time in Chia. No experience needed, dedicated instructor.",
    label: "First Dives",
    title: "First Dive in Chia",
    subtitle: "Your first breath underwater in one of the most beautiful locations in the Mediterranean.",
    subtitle2: "Try Scuba Diving in Chia — No experience needed.",
    cta: "Book on WhatsApp",
    p1: "If you've always dreamed of breathing underwater, the First Dive in Chia is the perfect way to start. No previous experience or perfect swimming skills are needed: our certified PADI instructor will be by your side at all times, from equipment preparation to surfacing.",
    p2: "The experience begins with a detailed briefing where we explain the basics of scuba diving and answer all your questions. Then we move by boat to a protected cove, where we will do exercises in shallow water before descending to 6 meters depth.",
    p3: "Full equipment is included, as well as underwater photos of your first dive and DAN insurance. Upon return, you will receive a participation certificate. Many of our guests start their scuba journey this way, then continue with the Open Water Diver course.",
  },
  de: {
    metaTitle: "Erster Tauchgang in Chia — Try Scuba Diving | Diving Chia",
    metaDesc: "Probieren Sie Tauchen zum ersten Mal in Chia. Keine Erfahrung nötig, dedizierter Instructor.",
    label: "Erste Tauchgänge",
    title: "Erster Tauchgang in Chia",
    subtitle: "Ihr erster Atemzug unter Wasser an einem der schönsten Orte des Mittelmeers.",
    subtitle2: "Try Scuba Diving in Chia — Keine Erfahrung nötig.",
    cta: "Auf WhatsApp buchen",
    p1: "Wenn Sie schon immer davon geträumt haben, unter Wasser zu atmen, ist der Erste Tauchgang in Chia der perfekte Einstieg. Keine Vorerfahrung oder perfekte Schwimmkenntnisse nötig: unser zertifizierter PADI-Instructor steht Ihnen bei jedem Schritt zur Seite, von der Ausrüstungsvorbereitung bis zum Auftauchen.",
    p2: "Das Erlebnis beginnt mit einem detaillierten Briefing, in dem wir die Grundlagen des Tauchens erklären und alle Ihre Fragen beantworten. Dann fahren wir mit dem Boot zu einer geschützten Bucht, wo wir Übungen im flachen Wasser machen, bevor wir bis zu 6 Meter Tiefe abtauchen.",
    p3: "Die komplette Ausrüstung ist inklusive, ebenso Unterwasserfotos Ihres ersten Tauchgangs und die DAN-Versicherung. Bei der Rückkehr erhalten Sie eine Teilnahmebescheinigung. Viele unserer Gäste beginnen so ihre Tauchkarriere und setzen dann mit dem Open Water Diver Kurs fort.",
  },
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = dict[params.locale] || dict.it;
  return { title: t.metaTitle, description: t.metaDesc };
}

export default function TryScubaChiaPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'it' | 'en' | 'de';
  const t = dict[locale] || dict.it;
  return (
    <>
      <Navbar />
      <section className="flex min-h-[70vh] items-center px-8 pb-16 pt-44 md:pt-40 lg:pt-44 md:px-6 md:px-16 lg:px-20" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>{t.label}</GoldLabel>
          <h1 className="mb-6 max-w-[700px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]" style={{ color: "#FAFAF8" }}>{t.title}</h1>
          <p className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]" style={{ color: "#9a9a9a" }}>{t.subtitle}</p>
          <p className="mb-10 max-w-[520px] font-jost text-base font-light" style={{ color: "#9a9a9a" }}>{t.subtitle2}</p>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 font-jost text-xs font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90" style={{ backgroundColor: "#25D366" }}>{t.cta}</a>
        </div>
      </section>
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal><p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>{t.p1}</p></ScrollReveal>
          <ScrollReveal delay={0.1}><p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>{t.p2}</p></ScrollReveal>
          <ScrollReveal delay={0.2}><p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>{t.p3}</p></ScrollReveal>
          <ScrollReveal delay={0.3}><a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 font-jost text-xs font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90" style={{ backgroundColor: "#25D366" }}>{t.cta}</a></ScrollReveal>
        </div>
      </section>
      <Footer /><WhatsAppButton />
    </>
  );
}
