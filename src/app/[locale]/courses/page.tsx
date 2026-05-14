import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Corsi Sub — Certificazioni PADI, SSI, CMAS Chia",
  description: "Corsi subacquei PADI, SSI e CMAS a Chia, Sud Sardegna. Dalla prima immersione al Divemaster.",
};

const courses = [
  {
    num: "01",
    name: "Discover Scuba Diving",
    duration: "1/2 giorno",
    desc: "La tua prima esperienza sott'acqua. Nessuna certificazione richiesta, un breve briefing e un istruttore sempre al tuo fianco.",
  },
  {
    num: "02",
    name: "Open Water Diver",
    duration: "3-4 giorni",
    desc: "Il corso base per diventare subacqueo certificato. Teoria, esercizi in acque confinate e 4 immersioni in mare aperto.",
  },
  {
    num: "03",
    name: "Advanced Open Water",
    duration: "2-3 giorni",
    desc: "Migliora le tue competenze con 5 immersioni di specialit&agrave;: deep, navigazione, e tre a tua scelta tra le nostre proposte.",
  },
  {
    num: "04",
    name: "Rescue Diver",
    duration: "3-4 giorni",
    desc: "Impara a gestire situazioni di emergenza e a prenderti cura degli altri sub. Un corso stimolante che ti farà crescere come subacqueo.",
  },
  {
    num: "05",
    name: "Divemaster",
    duration: "4+ settimane",
    desc: "Il primo livello professionale. Diventa un leader, assisti gli istruttori e porta gli altri alla scoperta del mondo subacqueo.",
  },
];

const affiliations = [
  { name: "PADI", desc: "Professional Association of Diving Instructors — la pi&ugrave; grande organizzazione subacquea al mondo." },
  { name: "SSI", desc: "Scuba Schools International — certificazioni riconosciute globalmente con approccio digitale moderno." },
  { name: "CMAS", desc: "Conf&eacute;d&eacute;ration Mondiale des Activit&eacute;s Subaquatiques — standard europei di eccellenza." },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-44 md:pt-40 lg:pt-44 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Impara a Sub</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Corsi Subacquei
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Certificazioni PADI, SSI e CMAS per ogni livello. Dalla prima immersione al Divemaster.
          </p>
          <p
            className="mb-10 max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Diving Courses — PADI, SSI & CMAS certifications for every level.
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

      {/* Course Rows */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal className="mb-16">
            <GoldLabel centered={false}>I Nostri Corsi</GoldLabel>
            <h2
              className="font-cormorant text-[36px] font-light leading-[1.15] tracking-[-0.01em] md:text-[48px] lg:text-[64px]"
              style={{ color: "#1a1a1a" }}
            >
              Scegli il Tuo Livello
            </h2>
          </ScrollReveal>

          <div className="flex flex-col">
            {courses.map((course, i) => (
              <ScrollReveal key={course.num} delay={i * 0.1}>
                <div
                  className="group flex flex-col gap-4 border-b py-8 transition-colors duration-200 hover:bg-[#F2F0EB] md:flex-row md:items-start md:py-10 md:gap-0"
                  style={{ borderColor: "#E5E3DE" }}
                >
                  {/* Number */}
                  <span
                    className="shrink-0 font-cormorant text-[64px] font-light leading-none md:w-[120px] md:text-[80px]"
                    style={{ color: "#E5E3DE" }}
                  >
                    {course.num}
                  </span>

                  {/* Center content */}
                  <div className="flex-1">
                    <h3
                      className="font-cormorant text-[24px] font-medium leading-[1.3] md:text-[28px]"
                      style={{ color: "#1a1a1a" }}
                    >
                      {course.name}
                    </h3>
                    <p
                      className="mt-2 max-w-[520px] font-jost text-[15px] font-light leading-[1.8]"
                      style={{ color: "#6b6b6b" }}
                      dangerouslySetInnerHTML={{ __html: course.desc }}
                    />
                  </div>

                  {/* Right — duration */}
                  <div className="shrink-0 md:ml-4 md:text-right">
                    <span
                      className="block font-jost text-[13px] font-light uppercase tracking-[0.1em]"
                      style={{ color: "#9a9a9a" }}
                    >
                      Durata
                    </span>
                    <span
                      className="mt-1 block font-jost text-[15px] font-light"
                      style={{ color: "#1a1a1a" }}
                    >
                      {course.duration}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#F2F0EB" }}>
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal className="mb-16 text-center">
            <GoldLabel>Affiliazioni</GoldLabel>
            <h2
              className="font-cormorant text-[36px] font-light leading-[1.15] tracking-[-0.01em] md:text-[48px]"
              style={{ color: "#1a1a1a" }}
            >
              Perch&eacute; Trainare con Noi
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-px md:grid-cols-3" style={{ backgroundColor: "#E5E3DE" }}>
            {affiliations.map((aff, i) => (
              <ScrollReveal key={aff.name} delay={i * 0.1}>
                <div className="h-full p-8 md:p-10" style={{ backgroundColor: "#F2F0EB" }}>
                  <h3
                    className="mb-4 font-cormorant text-[24px] font-light leading-[1.2]"
                    style={{ color: "#1a1a1a" }}
                  >
                    {aff.name}
                  </h3>
                  <p
                    className="font-jost text-[15px] font-light leading-[1.8]"
                    style={{ color: "#6b6b6b" }}
                    dangerouslySetInnerHTML={{ __html: aff.desc }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <GoldLabel>Preventivo</GoldLabel>
            <h2
              className="mb-4 font-cormorant text-[28px] font-light leading-[1.15] md:text-[40px]"
              style={{ color: "#1a1a1a" }}
            >
              Richiedi la tua offerta personalizzata
            </h2>
            <p className="mb-8 font-jost text-[15px] font-light leading-[1.7]" style={{ color: "#6b6b6b" }}>
              Ogni corso viene quotato individualmente in base al livello, al numero di partecipanti e alle tue esigenze specifiche. Contattaci su WhatsApp per ricevere il tuo preventivo dedicato.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 font-jost text-xs font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              CHIEDI OFFERTA SU WHATSAPP
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
