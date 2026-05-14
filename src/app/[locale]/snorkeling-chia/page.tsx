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
    metaTitle: "Snorkeling a Chia — Diving Chia | Sud Sardegna",
    metaDesc: "Esperienze di snorkeling a Chia per tutte le età. Acque cristalline e vita marina del Mediterraneo.",
    label: "Chia",
    title: "Snorkeling a Chia",
    subtitle: "Un'avventura accessibile a tutti alla scoperta della vita marina.",
    subtitle2: "Snorkeling in Chia, South Sardinia.",
    cta: "Prenota su WhatsApp",
    p1: "Lo snorkeling a Chia è un'esperienza che non ha bisogno di esperienza subacquea. Boccaglio, maschera e pinne sono tutto ciò che serve per esplorare un mondo sommerso ricco di colori e vita. Le acque cristalline della Sardegna del Sud offrono una visibilità eccezionale, permettendo di ammirare praterie di posidonia, scogliera ricca di fauna e, con un po' di fortuna, avvistamenti di pesci tra i più affascinanti del Mediterraneo.",
    p2: "I nostri tour di snorkeling partono in piccoli gruppi, massimo 8 persone, per garantire un'esperienza intima e sicura. Una guida esperta accompagna i partecipanti in acqua, indicando i punti più interessanti e assicurandosi che tutti si sentano a proprio agio.",
    p3: "I bambini dai 6 anni sono i benvenuti, rendendo questa attività perfetta per famiglie. L'attrezzatura è inclusa e il rinfresco a bordo rende l'esperienza ancora più piacevole. Un modo semplice e indimenticabile per scoprire il mare di Chia.",
  },
  en: {
    metaTitle: "Snorkeling in Chia — Diving Chia | South Sardinia",
    metaDesc: "Snorkeling experiences in Chia for all ages. Crystal clear waters and Mediterranean marine life.",
    label: "Chia",
    title: "Snorkeling in Chia",
    subtitle: "An adventure accessible to everyone to discover marine life.",
    subtitle2: "Snorkeling in Chia, South Sardinia.",
    cta: "Book on WhatsApp",
    p1: "Snorkeling in Chia is an experience that requires no diving experience. Snorkel, mask and fins are all you need to explore an underwater world rich in colors and life. The crystal clear waters of South Sardinia offer exceptional visibility, allowing you to admire posidonia meadows, cliffs rich in fauna and, with a bit of luck, sightings of some of the most fascinating fish in the Mediterranean.",
    p2: "Our snorkeling tours leave in small groups, maximum 8 people, to ensure an intimate and safe experience. An expert guide accompanies participants in the water, pointing out the most interesting spots and making sure everyone feels comfortable.",
    p3: "Children from 6 years old are welcome, making this activity perfect for families. Equipment is included and refreshments on board make the experience even more enjoyable. A simple and unforgettable way to discover the sea of Chia.",
  },
  de: {
    metaTitle: "Schnorcheln in Chia — Diving Chia | Südsardinien",
    metaDesc: "Schnorchel-Erlebnisse in Chia für alle Altersgruppen. Kristallklares Wasser und mediterranes Meeresleben.",
    label: "Chia",
    title: "Schnorcheln in Chia",
    subtitle: "Ein Abenteuer für jeden, um die Unterwasserwelt zu entdecken.",
    subtitle2: "Schnorcheln in Chia, Südsardinien.",
    cta: "Auf WhatsApp buchen",
    p1: "Schnorcheln in Chia ist ein Erlebnis, das keine Tauchvorerfahrung erfordert. Schnorchel, Maske und Flossen sind alles, was Sie brauchen, um eine farbenfrohe und lebendige Unterwasserwelt zu erkunden. Das kristallklare Wasser von Südsardinien bietet außergewöhnliche Sichtweiten und ermöglicht es, Posidonia-Wiesen, felsige Küsten mit reicher Fauna und mit etwas Glück faszinierende Fische des Mittelmeers zu bewundern.",
    p2: "Unsere Schnorchel-Touren starten in kleinen Gruppen von maximal 8 Personen, um ein intimes und sicheres Erlebnis zu gewährleisten. Ein erfahrener Guide begleitet die Teilnehmer im Wasser, zeigt die interessantesten Stellen und stellt sicher, dass sich alle wohlfühlen.",
    p3: "Kinder ab 6 Jahren sind herzlich willkommen, was diese Aktivität perfekt für Familien macht. Die Ausrüstung ist inklusive und Erfrischungen an Bord machen das Erlebnis noch angenehmer. Eine einfache und unvergessliche Art, das Meer von Chia zu entdecken.",
  },
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = dict[params.locale] || dict.it;
  return { title: t.metaTitle, description: t.metaDesc };
}

export default function SnorkelingChiaPage({ params }: { params: { locale: string } }) {
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
