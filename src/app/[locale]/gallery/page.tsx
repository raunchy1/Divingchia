"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";

const ITEMS = [
  {
    key: "chiSiamo",
    img: "/images/chi-siamo.jpg",
    href: null,
  },
  {
    key: "immersioni",
    img: "/images/immersioni.jpg",
    href: "/guided-dives",
  },
  {
    key: "snorkeling",
    img: "/images/snorkeling.jpg",
    href: "/snorkeling",
  },
  {
    key: "corsi",
    img: "/images/corsi.jpg",
    href: "/courses",
  },
  {
    key: "eventi",
    img: "/images/eventi.jpg",
    href: "/private-tours",
  },
  {
    key: "rental",
    img: "/images/rental.jpeg",
    href: null,
  },
] as const;

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const locale = useLocale();
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
        <img
          src="/images/hero-chia.jpg"
          alt="Chia, Sardegna del Sud"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000d22]/80 via-[#000d22]/20 to-transparent" />
        <div className="relative z-10 px-5 md:px-16 pb-12 md:pb-20 pt-28 md:pt-40 max-w-[1440px] w-full mx-auto">
          <span className="font-serif text-xs tracking-[0.2em] uppercase text-[#E8DCC8] mb-3 md:mb-4 block">
            Diving Chia
          </span>
          <h1 className="font-serif text-white text-4xl md:text-7xl font-normal leading-[1.05] mb-4 md:mb-6">
            {t("title")}
          </h1>
          <p className="font-serif text-white/70 text-base md:text-xl max-w-xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* ── EDITORIAL ENTRIES ── */}
      <section className="bg-[#faf9fc]">
        {ITEMS.map(({ key, img, href }, index) => {
          const isEven = index % 2 === 0;
          return (
            <ScrollReveal key={key} delay={0.1}>
              <article className={`grid grid-cols-1 md:grid-cols-2 min-h-[460px] md:min-h-[600px] ${index > 0 ? "border-t border-[#E8DCC8]" : ""}`}>
                {/* Image — always on top on mobile */}
                <div className={`relative overflow-hidden ${isEven ? "md:order-1" : "md:order-2"}`}>
                  <img
                    src={img}
                    alt={t(`items.${key}.title`)}
                    className="w-full h-full object-cover min-h-[260px] md:min-h-[600px] hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Tag badge */}
                  <div className="absolute top-3 left-3 md:top-6 md:left-6 bg-[#0a2342]/80 backdrop-blur-sm px-3 py-1 md:px-4 md:py-1.5">
                    <span className="font-serif text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-white">
                      {t(`items.${key}.tag`)}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className={`flex flex-col justify-center px-5 py-8 md:px-14 md:py-16 lg:px-20 ${isEven ? "md:order-2" : "md:order-1"}`}>
                  <span className="font-serif text-[11px] tracking-[0.15em] uppercase text-[#006689] mb-3 md:mb-5 block">
                    {t(`items.${key}.tag`)}
                  </span>

                  <h2 className="font-serif text-[#000d22] text-2xl md:text-4xl font-normal leading-[1.2] mb-4 md:mb-6">
                    {t(`items.${key}.title`)}
                  </h2>

                  <div className="w-12 md:w-16 h-px bg-[#E8DCC8] mb-5 md:mb-8" />

                  <p className="text-[#44474e] text-base leading-[1.85] mb-8">
                    {t(`items.${key}.body`)}
                  </p>

                  {href ? (
                    <Link
                      href={lp(href)}
                      className="inline-flex items-center gap-2 font-serif text-[11px] tracking-[0.15em] uppercase text-[#000d22] border-b border-[#000d22] pb-1 self-start hover:text-[#006689] hover:border-[#006689] transition-all"
                    >
                      Scopri di più
                      <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                        arrow_forward
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-serif text-[11px] tracking-[0.15em] uppercase text-[#25D366] border-b border-[#25D366] pb-1 self-start hover:opacity-80 transition-opacity"
                    >
                      Contattaci su WhatsApp
                      <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                        arrow_forward
                      </span>
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </section>

      {/* ── BOOKING STRIP ── */}
      <section className="bg-[#0a2342] py-24 px-8 md:px-16 text-center">
        <h2 className="font-serif text-white text-4xl md:text-5xl font-normal mb-6 leading-[1.1]">
          Pronto a vivere queste esperienze?
        </h2>
        <p className="font-serif text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Contattaci su WhatsApp e costruiamo insieme la tua avventura nel mare di Sardegna.
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-[#25D366] text-white px-12 py-5 font-serif text-xs tracking-[0.1em] uppercase hover:brightness-110 transition-all shadow-xl"
        >
          <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.887-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.89-11.888 11.89-2.015 0-3.991-.51-5.741-1.478l-6.251 1.638zm5.921-4.45s.262.155.612.366c1.39.832 3.004 1.27 4.683 1.27 4.901 0 8.89-3.988 8.89-8.89 0-2.378-.925-4.612-2.607-6.294s-3.915-2.607-6.292-2.607c-4.902 0-8.89 3.991-8.89 8.892 0 1.735.502 3.426 1.453 4.888l.348.534-1.074 3.92 4.024-1.053z"/>
          </svg>
          Prenota su WhatsApp
        </a>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
