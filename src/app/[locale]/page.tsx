"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";

const IMG = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd81N-Pb6QPR2walyTUFTUTUoxyTYoNkeIzMswwfCll1oKg_s_gaOH5G4AExoHImsg7d2VpxQeWfPT4ezO-eRy4096HJSTmWp2axN9HleGxerX6WVGhat6qwLdSeZY42dJTeoF-06nf3JuzqmWOLtDdoJcgSCRmJHDzRFgeQYSx8uaCED_7yfXOKzgII_4auqS5G3iuk6YhW7WAt28W8G8UrBoTNzU_LI-aRzN6GRb9PpHQ-7SJ3TRIT6uwBD7q5A5xuk_Y34BY1S9",
  tryScuba: "https://lh3.googleusercontent.com/aida-public/AB6AXuBemVyI20gtmhh0LeP2hb6XYyhgL3_Q1Ns68WPN9Ri-TI_MMrF1aQ8OJ5GVaQQOt_z8278BknWNiNSP5uc48YZNePUauL6YGfKIQJDirQ8AEjgJkDjd7j0qdhCNK4OEh_OpZU4USeEesLODjeker98aFwbJtpT3yiceVJHNQn0tmXIwmFYH-Ad6OFK7kmIYnCBT-iqFbHfBjrB88g_k4BC4uqjisrRkEcLqPcwhDyB7Rkfm4PE_QFEOivgc1cpjKFWqEJVR4B7FG4pp",
  guidedDives: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNui_uapHuo2_WahlVBY7q4uiz6X7RDSvS77HAabZW77fg79KQSm7xYQDzV_CM2JtbMUCggD5tDestPirc5C2AH--4EykL22Zpoaui8Qfn9MEO38sO5YFfM-hyJKP9qr5aQxGReVSOMfqEy-oFyM8q09OIZK_anzjxJWQaBDbrjBr4Kq6WiVHy_nRsQwZM6OkEGmGHyrO6nVsUtbKyoMbYz6x_W61VHcud-HNFk6LdE-RY6FFLxIjGL20b1JEZgsaLCPYnRrSaUZt9",
  snorkeling: "https://lh3.googleusercontent.com/aida-public/AB6AXuDePR4taRK7cr_Xj6YVOCIgFYg3swwm5m80lL6ECei3ODtCuGaSwNKrlEzFWGaEpmJNHA33V28pswyYfwQBJxUgbBIZSYCofBLbWlOL9yy3w3p3Eqbg4IPIKV4BMuWPPmhZSKKWdcuJ7JuRBsDP0-ImEH6IG6n8qw9MD5UBeL7D3RdX783lXwl3Bq2Q5YMgAx6-gKhRpKjd1pWaH6I8dzWfgFptCWdM4LhXzQ0HcW-2wZvEyKHFoUQeFU6rPWkos0RxbrtX1zOimPLI",
  privateTours: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo2lGluLVfqCmaehaLXsglgepLvTxIsjjcK3_svmU-odVXiAFIyQ8aCERso0nQHOUYgeIbmu6xE4S0jSr53MChJw6lgEd5A5pb1yqilFXpmTP4uuy-b8YUfObYL3grN2v1dP3yZWvPN4LoVrnLH9D_ObtlA1mzhUNK-5iEEgondKl0MoztRK-_PoCLh5YcLPTN8qT2oAh-ORSpHpSz6Rp9jLUCQaq9I1HKXg6S5sEVedOwZTTa9zjFM-Mj4WfHPMCio1fa3QYq24gX",
  sunset: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxqoWYHlXy-xXXlrG-zQWeYJInguFVcMaGZVw0LLGKJV4hEabVGaDNchX4_yOUO3M1Wr86hGij-mCcsjiJhvygFy5HxA8AVDj6VJu-T7hkI1b51UmRe_Ha3v8dn2TvP7fByYws6z6X1TWTRuXBmL4GW0wT9aNVtkaP3K7JdvYGdlwjyXOfIWR5vXzppCTJih4C1sfrEx6J4Br87TSv0ycN6e8f34-wMiss_AraJUSK9wuqTQM7x1e0MD_eQPhZjm8yQ31eBQeUelQ9",
  courses: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNui_uapHuo2_WahlVBY7q4uiz6X7RDSvS77HAabZW77fg79KQSm7xYQDzV_CM2JtbMUCggD5tDestPirc5C2AH--4EykL22Zpoaui8Qfn9MEO38sO5YFfM-hyJKP9qr5aQxGReVSOMfqEy-oFyM8q09OIZK_anzjxJWQaBDbrjBr4Kq6WiVHy_nRsQwZM6OkEGmGHyrO6nVsUtbKyoMbYz6x_W61VHcud-HNFk6LdE-RY6FFLxIjGL20b1JEZgsaLCPYnRrSaUZt9",
  magazine: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo2lGluLVfqCmaehaLXsglgepLvTxIsjjcK3_svmU-odVXiAFIyQ8aCERso0nQHOUYgeIbmu6xE4S0jSr53MChJw6lgEd5A5pb1yqilFXpmTP4uuy-b8YUfObYL3grN2v1dP3yZWvPN4LoVrnLH9D_ObtlA1mzhUNK-5iEEgondKl0MoztRK-_PoCLh5YcLPTN8qT2oAh-ORSpHpSz6Rp9jLUCQaq9I1HKXg6S5sEVedOwZTTa9zjFM-Mj4WfHPMCio1fa3QYq24gX",
};

const SERVICES = [
  { slug: "tryScuba", href: "/try-scuba", img: IMG.tryScuba },
  { slug: "guidedDives", href: "/guided-dives", img: IMG.guidedDives },
  { slug: "snorkeling", href: "/snorkeling", img: IMG.snorkeling },
  { slug: "privateTours", href: "/private-tours", img: IMG.privateTours },
  { slug: "sunset", href: "/sunset", img: IMG.sunset },
  { slug: "courses", href: "/courses", img: IMG.courses },
] as const;

const USP_ICONS = [
  "history",
  "verified_user",
  "groups",
  "star",
  "architecture",
  "sailing",
  "map",
  "diversity_3",
] as const;

const TESTIMONIAL_FLAGS = [
  "https://flagcdn.com/w40/gb.png",
  "https://flagcdn.com/w40/it.png",
  "https://flagcdn.com/w40/de.png",
];

export default function HomePage() {
  const locale = useLocale();
  const lp = (path: string) => `/${locale}${path}`;

  const heroT = useTranslations("hero");
  const trustT = useTranslations("trustbar");
  const svcT = useTranslations("services");
  const uspT = useTranslations("usp");
  const magT = useTranslations("magazine");
  const testT = useTranslations("testimonials");
  const bookT = useTranslations("booking");
  const faqT = useTranslations("faq");

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const trustItems = [
    trustT("since1996"),
    trustT("licensed"),
    trustT("smallGroups"),
    trustT("instructors"),
    trustT("safety"),
  ];

  return (
    <main className="selection:bg-[#6fceff]/30">
      <Navbar />

      {/* ═══════════════════════════════════════════
          1. FULL-BLEED HERO
          ═══════════════════════════════════════════ */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMG.hero}
            alt="Luxury boat on turquoise waters of Sardinia"
            className="w-full h-full object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000d22]/40 via-transparent to-[#000d22]/60" />
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-5xl text-center">
          <h1 className="font-serif text-white mb-8 leading-[1.05] text-5xl md:text-7xl lg:text-[96px] font-normal">
            {heroT("titleLine1")}<br />
            {heroT("titleLine2")}<br />
            {heroT("titleLine3")}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {heroT("subtitle")}
          </p>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a2342] text-white px-10 py-5 font-serif text-xs tracking-[0.1em] uppercase hover:bg-[#006689] transition-colors"
            >
              {heroT("ctaWhatsApp")}
            </a>
            <Link
              href={lp("/#esperienze")}
              className="border border-white text-white px-10 py-5 font-serif text-xs tracking-[0.1em] uppercase hover:bg-white hover:text-[#000d22] transition-all"
            >
              {heroT("ctaAvailability")}
            </Link>
            <Link
              href={lp("/#esperienze")}
              className="font-serif text-xs tracking-[0.1em] text-white flex items-center gap-2 group uppercase"
            >
              {heroT("ctaExplore")}
              <span className="text-sm group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. TRUST BAR (Marquee)
          ═══════════════════════════════════════════ */}
      <section className="bg-[#0a2342] py-8 overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="flex animate-marquee gap-24 items-center">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-24 items-center flex-shrink-0">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-24">
                  <span className="font-serif text-white text-sm tracking-[0.12em] uppercase">{item}</span>
                  <div className="w-1 h-1 bg-[#006689] rounded-full flex-shrink-0" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. SERVICES (3x2 Grid)
          ═══════════════════════════════════════════ */}
      <section id="esperienze" className="px-8 md:px-16 py-32 max-w-[1440px] mx-auto">
        <ScrollReveal className="flex flex-col items-center mb-20 text-center">
          <h2 className="font-serif text-[#000d22] mb-4 text-4xl md:text-5xl font-normal">{svcT("title")}</h2>
          <div className="editorial-rule max-w-[200px] mb-6" />
          <p className="text-base text-[#44474e] max-w-2xl leading-relaxed">{svcT("subtitle")}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {SERVICES.map(({ slug, href, img }, i) => (
            <ScrollReveal key={slug} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#e9e7eb]">
                  <img
                    src={img}
                    alt={svcT(`items.${slug}.title`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-[#000d22] mb-2 text-2xl md:text-3xl font-normal">
                  {svcT(`items.${slug}.title`)}
                </h3>
                <p className="text-base text-[#44474e] mb-3 leading-relaxed">
                  {svcT(`items.${slug}.description`)}
                </p>
                <div className="flex flex-col gap-2">
                  <span className="font-serif text-xs tracking-[0.1em] uppercase text-[#006689]">
                    {svcT(`items.${slug}.price`)}
                  </span>
                  <Link
                    href={lp(href)}
                    className="font-serif text-xs tracking-[0.1em] uppercase text-[#000d22] flex items-center gap-1 group-hover:text-[#006689] transition-colors"
                  >
                    {svcT(`items.${slug}.discover`)}
                    <span className="material-symbols-outlined text-sm" style={{ fontSize: "16px" }}>arrow_forward</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. WHY CHOOSE US (8 Pillars)
          ═══════════════════════════════════════════ */}
      <section className="bg-[#F8F6F1] px-8 md:px-16 py-24">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-serif text-[#000d22] text-center mb-20 uppercase tracking-widest text-3xl md:text-4xl font-normal">
            {uspT("title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12">
            {USP_ICONS.map((icon, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <span
                    className="material-symbols-outlined text-[#006689] mb-4"
                    style={{ fontSize: "40px", fontVariationSettings: "'wght' 300" }}
                  >
                    {icon}
                  </span>
                  <h4 className="font-serif text-xs tracking-[0.1em] uppercase text-[#000d22] mb-2">
                    {uspT(`items.${i}.label`)}
                  </h4>
                  <p className="font-serif text-xs text-[#44474e] max-w-[160px] leading-relaxed">
                    {uspT(`items.${i}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. MAGAZINE SPREAD
          ═══════════════════════════════════════════ */}
      <section className="py-32 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
          <div className="md:col-span-7 aspect-[16/9] overflow-hidden">
            <img
              src={IMG.magazine}
              alt="Private boat experience in Sardinia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-5 px-8 md:px-16 py-12">
            <div className="max-w-md">
              <span className="font-serif text-xs tracking-[0.1em] uppercase text-[#006689] mb-4 block">
                {magT("label")}
              </span>
              <h2 className="font-serif text-[#000d22] mb-6 text-3xl md:text-4xl font-normal">
                {magT("title")}
              </h2>
              <p className="text-lg text-[#44474e] mb-8 italic leading-relaxed">
                {magT("quote")}
              </p>
              <p className="text-base text-[#44474e] mb-8 leading-relaxed">
                {magT("description")}
              </p>
              <Link
                href={lp("/private-tours")}
                className="border-b-2 border-[#000d22] py-2 font-serif text-xs tracking-[0.1em] uppercase text-[#000d22] hover:text-[#006689] hover:border-[#006689] transition-all"
              >
                {magT("cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. TESTIMONIALS
          ═══════════════════════════════════════════ */}
      <section className="bg-white px-8 md:px-16 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1440px] mx-auto">
          {[0, 1, 2].map((i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="border border-[#E8DCC8] p-10 md:p-12 flex flex-col items-center text-center">
                <div className="flex gap-1 text-[#FFD700] mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined"
                      style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1, 'wght' 300" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <div className="text-[#1A8FBD] mb-4">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "64px", fontVariationSettings: "'FILL' 1, 'wght' 300" }}
                  >
                    format_quote
                  </span>
                </div>
                <p className="font-serif text-[#000d22] mb-8 text-xl md:text-2xl leading-snug font-normal">
                  {testT(`items.${i}.text`)}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    className="w-8 h-5 object-cover"
                    src={TESTIMONIAL_FLAGS[i]}
                    alt=""
                  />
                  <span className="font-serif text-xs tracking-[0.1em] uppercase">{testT(`items.${i}.author`)}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. BOOKING STRIP
          ═══════════════════════════════════════════ */}
      <section className="bg-[#0a2342] py-32 px-8 md:px-16 text-center">
        <h2 className="font-serif text-white mb-12 text-5xl md:text-7xl lg:text-[84px] font-normal leading-[1.1]">
          {bookT("title")}
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-12 py-6 font-serif text-xs tracking-[0.1em] uppercase flex items-center gap-4 hover:brightness-110 transition-all shadow-xl"
          >
            <svg className="w-8 h-8 fill-current flex-shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.887-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.89-11.888 11.89-2.015 0-3.991-.51-5.741-1.478l-6.251 1.638zm5.921-4.45s.262.155.612.366c1.39.832 3.004 1.27 4.683 1.27 4.901 0 8.89-3.988 8.89-8.89 0-2.378-.925-4.612-2.607-6.294s-3.915-2.607-6.292-2.607c-4.902 0-8.89 3.991-8.89 8.892 0 1.735.502 3.426 1.453 4.888l.348.534-1.074 3.92 4.024-1.053z" />
            </svg>
            {bookT("ctaWhatsApp")}
          </a>
          <div className="text-white/60 font-serif text-xs tracking-[0.1em] uppercase">
            {bookT("orCall")}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. FAQ
          ═══════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-32 max-w-4xl mx-auto">
        <h2 className="font-serif text-[#000d22] text-center mb-16 text-3xl md:text-4xl font-normal">
          {faqT("title")}
        </h2>
        <div className="space-y-2">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className="border-b border-[#c4c6cf] py-6">
              <button
                className="flex w-full justify-between items-center text-left gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <h4 className="text-lg font-normal text-[#000d22] leading-snug">{faqT(`items.${i}.q`)}</h4>
                <span
                  className="material-symbols-outlined text-[#006689] flex-shrink-0 transition-transform"
                  style={{
                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    fontVariationSettings: "'wght' 300",
                    fontSize: "24px",
                  }}
                >
                  add
                </span>
              </button>
              {openFaq === i && (
                <p className="mt-4 text-base text-[#44474e] leading-relaxed">
                  {faqT(`items.${i}.a`)}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
