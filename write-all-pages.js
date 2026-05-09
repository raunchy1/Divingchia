const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, 'src/app/[locale]');

function write(filePath, content) {
  fs.writeFileSync(filePath, content.trimStart() + '\n');
  console.log('Wrote', filePath);
}

// ---------- CONTACT (client component) ----------
write(path.join(BASE, 'contact/page.tsx'), `
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { getWhatsAppLinkWithData } from "@/lib/whatsapp";

export default function ContactPage() {
  const t = useTranslations("contact");

  const attivitaOptions = [
    t("activities.tryScuba"),
    t("activities.guidedDives"),
    t("activities.snorkeling"),
    t("activities.privateTour"),
    t("activities.sunsetBoat"),
    t("activities.course"),
  ];

  const livelloOptions = [
    t("levels.never"),
    t("levels.beginner"),
    t("levels.advanced"),
    t("levels.expert"),
  ];

  const [formData, setFormData] = useState({
    nome: "",
    telefono: "",
    data: "",
    persone: "",
    attivita: "",
    livello: "",
    hotel: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = getWhatsAppLinkWithData({
      nome: formData.nome,
      telefono: formData.telefono,
      data: formData.data,
      persone: formData.persone,
      attivita: formData.attivita,
      livello: formData.livello,
      hotel: formData.hotel,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <Navbar />
      <section
        className="flex min-h-[60vh] items-center px-8 pb-16 pt-32 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>{t("goldLabel")}</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            {t("title")}
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            {t("subtitle")}
          </p>
        </div>
      </section>
      <section className="px-8 py-32 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <h2 className="mb-8 font-cormorant text-[32px] font-light leading-[1.2] md:text-[40px]" style={{ color: "#1a1a1a" }}>
                {t("formTitle")}
              </h2>
              <p className="mb-10 font-jost text-base font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
                {t("formSubtitle")}
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#6b6b6b" }}>
                    {t("labelName")}
                  </label>
                  <input type="text" name="nome" required value={formData.nome} onChange={handleChange} placeholder={t("placeholderName")}
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }} />
                </div>
                <div>
                  <label className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#6b6b6b" }}>
                    {t("labelPhone")}
                  </label>
                  <input type="tel" name="telefono" required value={formData.telefono} onChange={handleChange} placeholder={t("placeholderPhone")}
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }} />
                </div>
                <div>
                  <label className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#6b6b6b" }}>
                    {t("labelDate")}
                  </label>
                  <input type="date" name="data" required value={formData.data} onChange={handleChange}
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }} />
                </div>
                <div>
                  <label className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#6b6b6b" }}>
                    {t("labelPeople")}
                  </label>
                  <input type="text" name="persone" value={formData.persone} onChange={handleChange} placeholder={t("placeholderPeople")}
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }} />
                </div>
                <div>
                  <label className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#6b6b6b" }}>
                    {t("labelActivity")}
                  </label>
                  <select name="attivita" required value={formData.attivita} onChange={handleChange}
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: formData.attivita ? "#1a1a1a" : "#9a9a9a" }}>
                    <option value="" disabled>{t("activityPlaceholder")}</option>
                    {attivitaOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#6b6b6b" }}>
                    {t("labelLevel")}
                  </label>
                  <select name="livello" value={formData.livello} onChange={handleChange}
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: formData.livello ? "#1a1a1a" : "#9a9a9a" }}>
                    <option value="" disabled>{t("levelPlaceholder")}</option>
                    {livelloOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#6b6b6b" }}>
                    {t("labelHotel")}
                  </label>
                  <input type="text" name="hotel" value={formData.hotel} onChange={handleChange} placeholder={t("placeholderHotel")}
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }} />
                </div>
                <div className="pt-4">
                  <button type="submit"
                    className="w-full py-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90 md:w-auto md:px-16"
                    style={{ backgroundColor: "#25D366" }}>
                    {t("submitButton")}
                  </button>
                </div>
              </form>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="mb-6 font-cormorant text-[24px] font-light leading-[1.3]" style={{ color: "#1a1a1a" }}>
                    {t("contactTitle")}
                  </h3>
                  <div className="flex flex-col gap-6">
                    <div>
                      <span className="mb-1 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#9a9a9a" }}>
                        {t("whatsappLabel")}
                      </span>
                      <a href="https://wa.me/393388585504" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 font-jost text-[18px] font-light" style={{ color: "#1a1a1a" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" style={{ color: "#25D366" }}>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        +39 338 858 5504
                      </a>
                    </div>
                    <div>
                      <span className="mb-1 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#9a9a9a" }}>
                        {t("locationLabel")}
                      </span>
                      <span className="font-jost text-[18px] font-light" style={{ color: "#1a1a1a" }}>
                        {t("locationValue")}
                      </span>
                    </div>
                    <div>
                      <span className="mb-1 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#9a9a9a" }}>
                        {t("hoursLabel")}
                      </span>
                      <span className="font-jost text-[18px] font-light" style={{ color: "#1a1a1a" }}>
                        {t("hoursValue")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-[300px] w-full" style={{ backgroundColor: "#E5E3DE" }}>
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-jost text-[13px] font-light uppercase tracking-[0.1em]" style={{ color: "#9a9a9a" }}>
                      {t("mapLabel")}
                    </span>
                  </div>
                </div>
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
`);

// ---------- GALLERY (client component) ----------
write(path.join(BASE, 'gallery/page.tsx'), `
"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";

const ITEMS = [
  { key: "chiSiamo", img: "/images/chi-siamo.jpg", href: null },
  { key: "immersioni", img: "/images/immersioni.jpg", href: "/guided-dives" },
  { key: "snorkeling", img: "/images/snorkeling.jpg", href: "/snorkeling" },
  { key: "corsi", img: "/images/corsi.jpg", href: "/courses" },
  { key: "eventi", img: "/images/eventi.jpg", href: "/private-tours" },
  { key: "rental", img: "/images/rental.jpeg", href: null },
] as const;

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const locale = useLocale();
  const lp = (path: string) => \`/\${locale}\${path}\`;

  return (
    <>
      <Navbar />
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
        <img src="/images/hero-chia.jpg" alt="Chia, Sardegna del Sud" className="absolute inset-0 w-full h-full object-cover brightness-[0.55]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000d22]/80 via-[#000d22]/20 to-transparent" />
        <div className="relative z-10 px-5 md:px-16 pb-12 md:pb-20 pt-28 md:pt-40 max-w-[1440px] w-full mx-auto">
          <span className="font-serif text-xs tracking-[0.2em] uppercase text-[#E8DCC8] mb-3 md:mb-4 block">
            {t("heroLabel")}
          </span>
          <h1 className="font-serif text-white text-4xl md:text-7xl font-normal leading-[1.05] mb-4 md:mb-6">
            {t("title")}
          </h1>
          <p className="font-serif text-white/70 text-base md:text-xl max-w-xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>
      <section className="bg-[#faf9fc]">
        {ITEMS.map(({ key, img, href }, index) => {
          const isEven = index % 2 === 0;
          return (
            <ScrollReveal key={key} delay={0.1}>
              <article className={\`grid grid-cols-1 md:grid-cols-2 min-h-[460px] md:min-h-[600px] \${index > 0 ? "border-t border-[#E8DCC8]" : ""}\`}>
                <div className={\`relative overflow-hidden \${isEven ? "md:order-1" : "md:order-2"}\`}>
                  <img src={img} alt={t(\`items.\${key}.title\`)} className="w-full h-full object-cover min-h-[260px] md:min-h-[600px] hover:scale-[1.02] transition-transform duration-700" />
                  <div className="absolute top-3 left-3 md:top-6 md:left-6 bg-[#0a2342]/80 backdrop-blur-sm px-3 py-1 md:px-4 md:py-1.5">
                    <span className="font-serif text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-white">
                      {t(\`items.\${key}.tag\`)}
                    </span>
                  </div>
                </div>
                <div className={\`flex flex-col justify-center px-5 py-8 md:px-14 md:py-16 lg:px-20 \${isEven ? "md:order-2" : "md:order-1"}\`}>
                  <span className="font-serif text-[11px] tracking-[0.15em] uppercase text-[#006689] mb-3 md:mb-5 block">
                    {t(\`items.\${key}.tag\`)}
                  </span>
                  <h2 className="font-serif text-[#000d22] text-2xl md:text-4xl font-normal leading-[1.2] mb-4 md:mb-6">
                    {t(\`items.\${key}.title\`)}
                  </h2>
                  <div className="w-12 md:w-16 h-px bg-[#E8DCC8] mb-5 md:mb-8" />
                  <p className="text-[#44474e] text-base leading-[1.85] mb-8">
                    {t(\`items.\${key}.body\`)}
                  </p>
                  {href ? (
                    <Link href={lp(href)} className="inline-flex items-center gap-2 font-serif text-[11px] tracking-[0.15em] uppercase text-[#000d22] border-b border-[#000d22] pb-1 self-start hover:text-[#006689] hover:border-[#006689] transition-all">
                      {t("discoverMore")}
                      <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>arrow_forward</span>
                    </Link>
                  ) : (
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-serif text-[11px] tracking-[0.15em] uppercase text-[#25D366] border-b border-[#25D366] pb-1 self-start hover:opacity-80 transition-opacity">
                      {t("contactWhatsApp")}
                      <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>arrow_forward</span>
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </section>
      <section className="bg-[#0a2342] py-24 px-8 md:px-16 text-center">
        <h2 className="font-serif text-white text-4xl md:text-5xl font-normal mb-6 leading-[1.1]">
          {t("bookingTitle")}
        </h2>
        <p className="font-serif text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {t("bookingSubtitle")}
        </p>
        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-[#25D366] text-white px-12 py-5 font-serif text-xs tracking-[0.1em] uppercase hover:brightness-110 transition-all shadow-xl">
          <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.887-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.89-11.888 11.89-2.015 0-3.991-.51-5.741-1.478l-6.251 1.638zm5.921-4.45s.262.155.612.366c1.39.832 3.004 1.27 4.683 1.27 4.901 0 8.89-3.988 8.89-8.89 0-2.378-.925-4.612-2.607-6.294s-3.915-2.607-6.292-2.607c-4.902 0-8.89 3.991-8.89 8.892 0 1.735.502 3.426 1.453 4.888l.348.534-1.074 3.92 4.024-1.053z"/>
          </svg>
          {t("bookingCta")}
        </a>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
`);

// ---------- Simple server pages ----------
const simplePages = [
  { folder: 'diving-chia', ns: 'divingChia', component: 'DivingChiaPage' },
  { folder: 'diving-near-chia', ns: 'divingNearChia', component: 'DivingNearChiaPage' },
  { folder: 'diving-teulada', ns: 'divingTeulada', component: 'DivingTeuladaPage' },
  { folder: 'snorkeling-chia', ns: 'snorkelingChia', component: 'SnorkelingChiaPage' },
  { folder: 'snorkeling-near-chia', ns: 'snorkelingNearChia', component: 'SnorkelingNearChiaPage' },
  { folder: 'snorkeling-teulada', ns: 'snorkelingTeulada', component: 'SnorkelingTeuladaPage' },
  { folder: 'sunset-boat-experience-chia', ns: 'sunsetBoatExperienceChia', component: 'SunsetBoatExperienceChiaPage' },
  { folder: 'try-scuba-chia', ns: 'tryScubaChia', component: 'TryScubaChiaPage' },
  { folder: 'private-boat-tours-chia', ns: 'privateBoatToursChia', component: 'PrivateBoatToursChiaPage' },
];

simplePages.forEach(p => {
  write(path.join(BASE, p.folder, 'page.tsx'), `
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getWhatsAppLink } from "@/lib/whatsapp";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("${p.ns}");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function ${p.component}() {
  const t = await getTranslations("${p.ns}");
  return (
    <>
      <Navbar />
      <section className="flex min-h-[70vh] items-center px-8 pb-16 pt-32 md:px-16 lg:px-20" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>{t("goldLabel")}</GoldLabel>
          <h1 className="mb-6 max-w-[700px] font-cormorant text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]" style={{ color: "#FAFAF8" }}>
            {t("title")}
          </h1>
          <p className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]" style={{ color: "#9a9a9a" }}>
            {t("subtitle")}
          </p>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 font-jost text-xs font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90" style={{ backgroundColor: "#25D366" }}>
            {t("cta")}
          </a>
        </div>
      </section>
      <section className="px-8 py-32 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>{t("paragraphs.0")}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>{t("paragraphs.1")}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>{t("paragraphs.2")}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 font-jost text-xs font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90" style={{ backgroundColor: "#25D366" }}>
              {t("cta")}
            </a>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
`);
});

console.log('Base pages done');
