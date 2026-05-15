"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import MapSection from "@/components/MapSection";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const services = [
    { key: "tryScuba", href: "/try-scuba" },
    { key: "guidedDives", href: "/guided-dives" },
    { key: "snorkeling", href: "/snorkeling" },
    { key: "privateTours", href: "/private-tours" },
    { key: "sunset", href: "/sunset" },
    { key: "courses", href: "/courses" },
  ] as const;

  const trustBar = [
    "since1996",
    "smallGroups",
    "premium",
    "safety",
  ] as const;

  const testimonials = t.raw("testimonials.items") as Array<{
    quote: string;
    name: string;
    from: string;
    stars: number;
  }>;
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <main>
      <Navbar />

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-end md:items-center" id="hero">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0D1B2A 0%, #1a3557 50%, #2a5a8c 100%)",
            zIndex: 0,
          }}
        />
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 h-full w-full object-contain object-top md:object-cover md:object-center"
          style={{ zIndex: 1 }}
        >
          <source src="/videos/diving_chia_hero_FINAL.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(13,27,42,0.35) 0%, rgba(13,27,42,0.15) 30%, rgba(13,27,42,0.55) 70%, rgba(13,27,42,0.75) 100%)",
            zIndex: 2,
          }}
        />
        <div
          className="relative w-full flex flex-col items-start px-5 pb-12 pt-44 text-left md:items-start md:px-20 lg:px-24 md:pb-16 md:pt-40 lg:pt-44 max-w-[900px]"
          style={{ zIndex: 3 }}
        >
          <span
            className="mb-4 md:mb-6 block h-px gold-line-animate"
            style={{ backgroundColor: "#C9A84C", width: "40px" }}
          />
          <span
            className="mb-3 md:mb-6 font-jost text-[10px] md:text-[11px] font-normal uppercase tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {t("hero.eyebrow")}
          </span>
          <h1
            className="mb-4 md:mb-6 font-cormorant text-[36px] md:text-[64px] lg:text-[80px] font-light leading-[1.08] tracking-[-0.02em]"
            style={{ color: "#FAFAF8" }}
          >
            {t("hero.title")}
          </h1>
          <p
            className="mb-8 md:mb-10 max-w-[560px] font-jost text-[15px] md:text-[18px] font-light leading-[1.6] md:leading-[1.8]"
            style={{ color: "rgba(255,255,255,0.85)", whiteSpace: "pre-line" }}
          >
            {t("hero.subtitle")}{"\n\n"}{t("hero.description")}
          </p>
          <div className="flex flex-col w-full gap-3 sm:flex-row sm:w-auto sm:gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              {t("hero.cta_whatsapp")}
            </a>
            <Link
              href="#esperienze"
              className="flex items-center justify-center border px-8 py-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] transition-colors duration-300"
              style={{
                borderColor: "rgba(255,255,255,0.6)",
                color: "#FAFAF8",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FAFAF8";
                e.currentTarget.style.color = "#0D1B2A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#FAFAF8";
              }}
            >
              {t("hero.cta_explore")}
            </Link>
          </div>
          <p
            className="mt-4 font-jost text-[11px] font-light uppercase tracking-[0.1em]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {t("hero.tags")}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — TRUST BAR
          ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#F2F0EB" }} className="py-5 md:py-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-6 md:grid-cols-4 lg:px-8">
          {trustBar.map((key) => (
            <div key={key} className="text-center">
              <span
                className="block font-jost text-[11px] md:text-[13px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "#1a1a1a" }}
              >
                {t(`trustBar.${key}.title`)}
              </span>
              <span
                className="block font-jost text-[11px] md:text-[12px] font-light mt-1"
                style={{ color: "#6b6b6b" }}
              >
                {t(`trustBar.${key}.subtitle`)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — INTRO (concise)
          ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FAFAF8" }} className="py-14 md:py-24">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <GoldLabel>{t("intro.eyebrow")}</GoldLabel>
            <h2
              className="mt-4 font-cormorant text-[28px] md:text-[40px] lg:text-[48px] font-light leading-[1.2] tracking-[-0.01em]"
              style={{ color: "#1a1a1a" }}
            >
              {t("intro.title")}
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — SERVICES (categories)
          ═══════════════════════════════════════════ */}
      <section
        id="esperienze"
        style={{ backgroundColor: "#FAFAF8" }}
        className="pb-16 md:pb-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <ScrollReveal className="mb-10 text-center md:mb-14">
            <GoldLabel>{t("services.eyebrow")}</GoldLabel>
            <h2
              className="font-cormorant text-[28px] md:text-[40px] lg:text-[48px] font-light leading-[1.2] tracking-[-0.01em]"
              style={{ color: "#1a1a1a" }}
            >
              {t("services.title")}
            </h2>
            <p
              className="mx-auto mt-4 max-w-[600px] font-jost text-[14px] md:text-[16px] font-light leading-[1.7]"
              style={{ color: "#6b6b6b" }}
            >
              {t("services.description")}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.key} delay={i * 0.06}>
                <Link
                  href={`/${locale}${svc.href}`}
                  className="group block h-full border p-6 md:p-8 transition-colors duration-200"
                  style={{ borderColor: "#E5E3DE", backgroundColor: "#FAFAF8" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F2F0EB";
                    e.currentTarget.style.borderColor = "#C9A84C";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FAFAF8";
                    e.currentTarget.style.borderColor = "#E5E3DE";
                  }}
                >
                  <span
                    className="block font-cormorant text-[36px] md:text-[40px] font-light leading-none mb-3"
                    style={{ color: "#C9A84C" }}
                  >
                    {t(`services.items.${svc.key}.num`)}
                  </span>
                  <h3
                    className="mb-2 font-cormorant text-[22px] md:text-[26px] font-medium leading-[1.25]"
                    style={{ color: "#1a1a1a" }}
                  >
                    {t(`services.items.${svc.key}.name`)}
                  </h3>
                  <p
                    className="mb-4 font-jost text-[14px] font-light leading-[1.7]"
                    style={{ color: "#6b6b6b" }}
                  >
                    {t(`services.items.${svc.key}.desc`)}
                  </p>
                  <span
                    className="inline-block font-jost text-[11px] font-normal uppercase tracking-[0.15em] transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "#C9A84C" }}
                  >
                    {t(`services.items.${svc.key}.cta`)} →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — QUICK-NAV CATEGORY CARDS
          ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#F2F0EB" }} className="py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <ScrollReveal className="mb-10 text-center md:mb-14">
            <GoldLabel>Esplora</GoldLabel>
            <h2
              className="font-cormorant text-[28px] md:text-[40px] lg:text-[48px] font-light leading-[1.2] tracking-[-0.01em]"
              style={{ color: "#1a1a1a" }}
            >
              Tutte le informazioni nelle pagine dedicate
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[
              { href: "/gallery", label: "Galleria", desc: "145 foto subacquee" },
              { href: "/safety", label: "Sicurezza", desc: "Protocolli & garanzie" },
              { href: "/prices", label: "Prezzi", desc: "Offerte personalizzate" },
              { href: "/faq", label: "FAQ", desc: "Domande frequenti" },
            ].map((c, i) => (
              <ScrollReveal key={c.href} delay={i * 0.06}>
                <Link
                  href={`/${locale}${c.href}`}
                  className="group block h-full border p-5 md:p-6 text-center transition-all duration-200"
                  style={{ borderColor: "#E5E3DE", backgroundColor: "#FAFAF8" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C9A84C";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E5E3DE";
                  }}
                >
                  <span
                    className="block font-cormorant text-[20px] md:text-[24px] font-medium mb-1"
                    style={{ color: "#1a1a1a" }}
                  >
                    {c.label}
                  </span>
                  <span
                    className="block font-jost text-[12px] md:text-[13px] font-light"
                    style={{ color: "#6b6b6b" }}
                  >
                    {c.desc}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — MAPPA
          ═══════════════════════════════════════════ */}
      <MapSection />

      {/* ═══════════════════════════════════════════
          SECTION 7 — TESTIMONIALS (compact)
          ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FAFAF8" }} className="py-14 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <ScrollReveal className="mb-8 md:mb-12 text-center">
            <GoldLabel>{t("testimonials.eyebrow")}</GoldLabel>
            <h2
              className="font-cormorant text-[28px] md:text-[40px] lg:text-[48px] font-light leading-[1.2] tracking-[-0.01em]"
              style={{ color: "#1a1a1a" }}
            >
              {t("testimonials.title")}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredTestimonials.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1}>
                <div
                  className="flex flex-col justify-between p-6 md:p-8 h-full"
                  style={{ backgroundColor: "#F2F0EB" }}
                >
                  <div className="mb-3 flex gap-1">
                    {Array.from({ length: item.stars }).map((_, si) => (
                      <span key={si} style={{ color: "#C9A84C" }} className="text-[14px]">
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote
                    className="mb-4 font-cormorant text-[16px] md:text-[18px] font-light italic leading-[1.55]"
                    style={{ color: "#1a1a1a" }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div>
                    <span
                      className="block font-jost text-[13px] font-normal"
                      style={{ color: "#1a1a1a" }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="font-jost text-[11px] font-light"
                      style={{ color: "#9a9a9a" }}
                    >
                      {item.from}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8 text-center">
            <a
              href="https://www.google.com/search?q=diving+chia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border px-7 py-3 font-jost text-[11px] font-normal uppercase tracking-[0.15em] transition-colors duration-300"
              style={{
                borderColor: "#1a1a1a",
                color: "#1a1a1a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1a1a1a";
                e.currentTarget.style.color = "#FAFAF8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#1a1a1a";
              }}
            >
              {t("testimonials.cta")} →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — FINAL CTA STRIP
          ═══════════════════════════════════════════ */}
      <section
        id="preventivi"
        style={{ backgroundColor: "#0D1B2A" }}
        className="py-14 md:py-24"
      >
        <div className="mx-auto max-w-[800px] px-6 text-center lg:px-8">
          <ScrollReveal>
            <GoldLabel>{t("quotes.eyebrow")}</GoldLabel>
            <h2
              className="mt-4 font-cormorant text-[28px] md:text-[40px] lg:text-[48px] font-light leading-[1.2] tracking-[-0.01em]"
              style={{ color: "#FAFAF8" }}
            >
              {t("quotes.title")}
            </h2>
            <p
              className="mx-auto mt-4 max-w-[560px] font-jost text-[14px] md:text-[16px] font-light leading-[1.7]"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {t("quotes.note")}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                {t("quotes.cta")}
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center border px-8 py-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] transition-colors duration-300"
                style={{
                  borderColor: "rgba(255,255,255,0.6)",
                  color: "#FAFAF8",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FAFAF8";
                  e.currentTarget.style.color = "#0D1B2A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#FAFAF8";
                }}
              >
                Modulo preventivo →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
