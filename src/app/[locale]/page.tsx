"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import MapSection from "@/components/MapSection";
import { getWhatsAppLink, getWhatsAppLinkWithData } from "@/lib/whatsapp";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

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

  const services = [
    { key: "tryScuba", href: "/try-scuba" },
    { key: "guidedDives", href: "/guided-dives" },
    { key: "snorkeling", href: "/snorkeling" },
    { key: "privateTours", href: "/private-tours" },
    { key: "sunset", href: "/sunset" },
    { key: "courses", href: "/courses" },
  ] as const;

  const reasons = [
    "since1996",
    "smallGroups",
    "equipment",
    "custom",
    "safetyFirst",
    "local",
  ] as const;

  const trustBar = [
    "since1996",
    "smallGroups",
    "premium",
    "safety",
  ] as const;

  const timeline = [
    { icon: "☀️", key: "0" },
    { icon: "⛵", key: "1" },
    { icon: "🤿", key: "2" },
    { icon: "📸", key: "3" },
  ] as const;

  const testimonials = t.raw("testimonials.items") as Array<{
    quote: string;
    name: string;
    from: string;
    stars: number;
  }>;

  const peopleOptions = t.raw("booking.people_options") as string[];
  const activityOptions = t.raw("booking.activity_options") as string[];
  const levelOptions = t.raw("booking.level_options") as string[];

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
          className="absolute inset-0 min-h-[100dvh] min-w-[100dvw] object-cover object-center"
          style={{ zIndex: 1 }}
        >
          <source src="/videos/whatsapp-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(13,27,42,0.35) 0%, rgba(13,27,42,0.15) 30%, rgba(13,27,42,0.55) 70%, rgba(13,27,42,0.75) 100%)",
            zIndex: 2,
          }}
        />
        <div
          className="relative w-full flex flex-col items-start px-5 pb-12 pt-20 text-left md:items-start md:px-20 lg:px-24 md:pb-16 md:pt-24 max-w-[900px]"
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
          SECTION 2B — INTRO
          ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FAFAF8" }} className="py-16 md:py-40 lg:py-48">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <GoldLabel>{t("intro.eyebrow")}</GoldLabel>
            <h2
              className="mt-4 font-cormorant text-[28px] md:text-[48px] lg:text-[64px] font-light leading-[1.15] tracking-[-0.01em]"
              style={{ color: "#1a1a1a" }}
            >
              {t("intro.title")}
            </h2>
            <p
              className="mx-auto mt-6 max-w-[700px] font-jost text-[15px] md:text-[18px] font-light leading-[1.8]"
              style={{ color: "#6b6b6b", whiteSpace: "pre-line" }}
            >
              {t("intro.description")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — SERVICES
          ═══════════════════════════════════════════ */}
      <section
        id="esperienze"
        style={{ backgroundColor: "#FAFAF8" }}
        className="py-16 md:py-40 lg:py-48"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <ScrollReveal className="mb-10 md:mb-16 text-center md:mb-20">
            <GoldLabel>{t("services.eyebrow")}</GoldLabel>
            <h2
              className="font-cormorant text-[28px] md:text-[48px] lg:text-[64px] font-light leading-[1.15] tracking-[-0.01em]"
              style={{ color: "#1a1a1a" }}
            >
              {t("services.title")}
            </h2>
            <p
              className="mx-auto mt-6 max-w-[700px] font-jost text-[15px] md:text-[18px] font-light leading-[1.8]"
              style={{ color: "#6b6b6b" }}
            >
              {t("services.description")}
            </p>
          </ScrollReveal>

          <div className="flex flex-col">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.key} delay={i * 0.1}>
                <Link
                  href={`/${locale}${svc.href}`}
                  className="group flex flex-col gap-2 border-b py-6 transition-colors duration-200 md:flex-row md:items-center md:py-10 md:gap-0"
                  style={{ borderColor: "#E5E3DE" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F2F0EB";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <span
                    className="shrink-0 font-cormorant text-[40px] md:text-[64px] font-light leading-none md:w-[120px] lg:text-[80px]"
                    style={{ color: "#E5E3DE" }}
                  >
                    {t(`services.items.${svc.key}.num`)}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="font-cormorant text-[22px] md:text-[24px] font-medium leading-[1.3] lg:text-[32px]"
                      style={{ color: "#1a1a1a" }}
                    >
                      {t(`services.items.${svc.key}.name`)}
                    </h3>
                    <p
                      className="mt-2 max-w-[520px] font-jost text-[15px] font-light leading-[1.8]"
                      style={{ color: "#6b6b6b", whiteSpace: "pre-line" }}
                    >
                      {t(`services.items.${svc.key}.desc`)}
                    </p>
                  </div>
                  <span
                    className="shrink-0 font-jost text-[12px] font-light transition-transform duration-200 group-hover:translate-x-1 md:ml-4"
                    style={{ color: "#C9A84C" }}
                  >
                    {t(`services.items.${svc.key}.cta`)}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — WHY CHOOSE US
          ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#F2F0EB" }} className="py-16 md:py-40 lg:py-48">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <ScrollReveal className="mb-10 md:mb-16 text-center md:mb-20">
            <GoldLabel>{t("whyUs.eyebrow")}</GoldLabel>
            <h2
              className="font-cormorant text-[36px] font-light leading-[1.15] tracking-[-0.01em] md:text-[48px] lg:text-[64px]"
              style={{ color: "#1a1a1a" }}
            >
              {t("whyUs.title")}
            </h2>
            <p
              className="mx-auto mt-6 max-w-[600px] font-jost text-[15px] md:text-[18px] font-light leading-[1.8]"
              style={{ color: "#6b6b6b", whiteSpace: "pre-line" }}
            >
              {t("whyUs.description")}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((key, i) => {
              const isLastCol = (i + 1) % 3 === 0;
              const isFirstRow = i < 3;
              return (
                <ScrollReveal
                  key={key}
                  delay={i * 0.15}
                  className="relative px-4 py-6 md:py-10 md:px-8 lg:px-10"
                >
                  {!isLastCol && (
                    <div
                      className="absolute right-0 top-0 bottom-0 hidden w-px lg:block"
                      style={{ backgroundColor: "#E5E3DE" }}
                    />
                  )}
                  {isFirstRow && i < 3 && (
                    <div
                      className="absolute right-0 bottom-0 left-0 hidden h-px lg:block"
                      style={{ backgroundColor: "#E5E3DE" }}
                    />
                  )}
                  <span
                    className="mb-2 md:mb-4 block font-cormorant text-[36px] md:text-[48px] font-light leading-none"
                    style={{ color: "#C9A84C" }}
                  >
                    {t(`whyUs.items.${key}.num`)}
                  </span>
                  <span
                    className="mb-3 block font-jost text-[13px] font-medium uppercase tracking-[0.1em]"
                    style={{ color: "#1a1a1a" }}
                  >
                    {t(`whyUs.items.${key}.label`)}
                  </span>
                  <p
                    className="font-jost text-[15px] font-light leading-[1.8]"
                    style={{ color: "#6b6b6b" }}
                  >
                    {t(`whyUs.items.${key}.desc`)}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4A — MAPPA
          ═══════════════════════════════════════════ */}
      <MapSection />

      {/* ═══════════════════════════════════════════
          SECTION 4B — TIMELINE
          ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FAFAF8" }} className="py-16 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <ScrollReveal className="mb-10 md:mb-16 text-center">
            <GoldLabel>{t("timeline.eyebrow")}</GoldLabel>
            <h2
              className="font-cormorant text-[28px] md:text-[48px] lg:text-[56px] font-light leading-[1.15] tracking-[-0.01em] mb-4"
              style={{ color: "#1a1a1a" }}
            >
              {t("timeline.title")}
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div
              className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-px"
              style={{ backgroundColor: "#E5E3DE" }}
            />
            <div className="flex flex-col gap-0">
              {timeline.map((step, i) => (
                <ScrollReveal key={step.key} delay={i * 0.12}>
                  <div className="relative flex gap-5 md:gap-8 pb-10 md:pb-14 last:pb-0">
                    <div className="relative z-10 flex flex-col items-center shrink-0">
                      <div
                        className="flex h-[48px] w-[48px] md:h-[56px] md:w-[56px] items-center justify-center rounded-full text-[20px] md:text-[24px]"
                        style={{ backgroundColor: "#F2F0EB" }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <div className="pt-1">
                      <h3
                        className="font-cormorant text-[22px] md:text-[28px] font-medium leading-[1.2] mb-2"
                        style={{ color: "#1a1a1a" }}
                      >
                        {t(`timeline.steps.${step.key}.title`)}
                      </h3>
                      <p
                        className="font-jost text-[14px] md:text-[15px] font-light leading-[1.7]"
                        style={{ color: "#6b6b6b", whiteSpace: "pre-line" }}
                      >
                        {t(`timeline.steps.${step.key}.desc`)}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4C — SAFETY
          ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0D1B2A" }} className="py-16 md:py-40 lg:py-48">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <GoldLabel>{t("safety.eyebrow")}</GoldLabel>
            <h2
              className="mt-4 font-cormorant text-[28px] md:text-[48px] lg:text-[56px] font-light leading-[1.15] tracking-[-0.01em]"
              style={{ color: "#FAFAF8" }}
            >
              {t("safety.title")}
            </h2>
            <p
              className="mx-auto mt-6 max-w-[600px] font-jost text-[15px] md:text-[18px] font-light leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.7)", whiteSpace: "pre-line" }}
            >
              {t("safety.description")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4D — TESTIMONIALS
          ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#F2F0EB" }} className="py-16 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <ScrollReveal className="mb-10 md:mb-16 text-center">
            <GoldLabel>{t("testimonials.eyebrow")}</GoldLabel>
            <h2
              className="font-cormorant text-[28px] md:text-[48px] lg:text-[56px] font-light leading-[1.15] tracking-[-0.01em]"
              style={{ color: "#1a1a1a" }}
            >
              {t("testimonials.title")}
            </h2>
            <p
              className="mx-auto mt-4 max-w-[700px] font-jost text-[15px] md:text-[18px] font-light leading-[1.8]"
              style={{ color: "#6b6b6b" }}
            >
              {t("testimonials.description")}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1}>
                <div
                  className="flex flex-col justify-between p-6 md:p-10 h-full"
                  style={{ backgroundColor: "#FAFAF8" }}
                >
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: item.stars }).map((_, si) => (
                      <span key={si} style={{ color: "#C9A84C" }} className="text-[16px]">
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote
                    className="mb-6 font-cormorant text-[18px] md:text-[22px] font-light italic leading-[1.5]"
                    style={{ color: "#1a1a1a" }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div>
                    <span
                      className="block font-jost text-[14px] font-normal"
                      style={{ color: "#1a1a1a" }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="font-jost text-[12px] font-light"
                      style={{ color: "#9a9a9a" }}
                    >
                      {item.from}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12 text-center">
            <a
              href="https://www.google.com/search?q=diving+chia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border px-8 py-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] transition-colors duration-300"
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
              {t("testimonials.cta")} &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4E — QUOTES
          ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FAFAF8" }} className="py-16 md:py-40 lg:py-48">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <GoldLabel>{t("quotes.eyebrow")}</GoldLabel>
            <h2
              className="mt-4 font-cormorant text-[28px] md:text-[48px] lg:text-[56px] font-light leading-[1.15] tracking-[-0.01em]"
              style={{ color: "#1a1a1a" }}
            >
              {t("quotes.title")}
            </h2>
            <p
              className="mx-auto mt-6 max-w-[600px] font-jost text-[15px] md:text-[18px] font-light leading-[1.8]"
              style={{ color: "#6b6b6b", whiteSpace: "pre-line" }}
            >
              {t("quotes.description")}
            </p>
            <p
              className="mx-auto mt-6 max-w-[600px] font-jost text-[16px] md:text-[18px] font-light italic leading-[1.7]"
              style={{ color: "#1a1a1a" }}
            >
              {t("quotes.note")}
            </p>
            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                {t("quotes.cta")}
              </a>
              <span
                className="font-jost text-[11px] font-light"
                style={{ color: "#9a9a9a" }}
              >
                {t("quotes.cta_sub")}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — BIG QUOTE
          ═══════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#0D1B2A" }}
        className="py-16 md:py-40 lg:py-48"
      >
        <div className="mx-auto max-w-[800px] px-6 text-center lg:px-8">
          <ScrollReveal>
            <blockquote
              className="font-cormorant text-[24px] md:text-[48px] lg:text-[56px] font-light italic leading-[1.3]"
              style={{ color: "#FAFAF8" }}
            >
              {t("whyUs.quote")}
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p
              className="mt-8 font-jost text-[15px] font-light"
              style={{ color: "#9a9a9a" }}
            >
              {t("whyUs.quoteEn")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — BOOKING FORM
          ═══════════════════════════════════════════ */}
      <section
        id="prenota"
        style={{ backgroundColor: "#FAFAF8" }}
        className="py-16 md:py-40 lg:py-48"
      >
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <ScrollReveal className="mb-8 md:mb-12 text-center md:mb-16">
            <GoldLabel>{t("booking.eyebrow")}</GoldLabel>
            <h2
              className="mb-4 font-cormorant text-[28px] md:text-[48px] lg:text-[56px] font-light leading-[1.15] tracking-[-0.01em]"
              style={{ color: "#1a1a1a" }}
            >
              {t("booking.title")}
            </h2>
            <p
              className="mx-auto max-w-[560px] font-jost text-[16px] font-light leading-[1.8]"
              style={{ color: "#6b6b6b" }}
            >
              {t("booking.description")}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label
                  className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                  style={{ color: "#6b6b6b" }}
                >
                  {t("booking.name")} {t("booking.required")}
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder={t("booking.name_placeholder")}
                  className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                  style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }}
                />
              </div>

              <div>
                <label
                  className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                  style={{ color: "#6b6b6b" }}
                >
                  {t("booking.phone")} {t("booking.required")}
                </label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder={t("booking.phone_placeholder")}
                  className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                  style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }}
                />
              </div>

              <div>
                <label
                  className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                  style={{ color: "#6b6b6b" }}
                >
                  {t("booking.date")} {t("booking.required")}
                </label>
                <input
                  type="date"
                  name="data"
                  required
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                  style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }}
                />
              </div>

              <div>
                <label
                  className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                  style={{ color: "#6b6b6b" }}
                >
                  {t("booking.people")}
                </label>
                <select
                  name="persone"
                  value={formData.persone}
                  onChange={handleChange}
                  className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                  style={{ borderColor: "#E5E3DE", color: formData.persone ? "#1a1a1a" : "#9a9a9a" }}
                >
                  <option value="" disabled>
                    {t("booking.people_placeholder")}
                  </option>
                  {peopleOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                  style={{ color: "#6b6b6b" }}
                >
                  {t("booking.activity")} {t("booking.required")}
                </label>
                <select
                  name="attivita"
                  required
                  value={formData.attivita}
                  onChange={handleChange}
                  className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                  style={{ borderColor: "#E5E3DE", color: formData.attivita ? "#1a1a1a" : "#9a9a9a" }}
                >
                  <option value="" disabled>
                    {t("booking.activity_placeholder")}
                  </option>
                  {activityOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                  style={{ color: "#6b6b6b" }}
                >
                  {t("booking.level")}
                </label>
                <select
                  name="livello"
                  value={formData.livello}
                  onChange={handleChange}
                  className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                  style={{ borderColor: "#E5E3DE", color: formData.livello ? "#1a1a1a" : "#9a9a9a" }}
                >
                  <option value="" disabled>
                    {t("booking.level_placeholder")}
                  </option>
                  {levelOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                  style={{ color: "#6b6b6b" }}
                >
                  {t("booking.hotel")}
                </label>
                <input
                  type="text"
                  name="hotel"
                  value={formData.hotel}
                  onChange={handleChange}
                  placeholder={t("booking.hotel_placeholder")}
                  className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                  style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }}
                />
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center px-8 py-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                {t("booking.submit")}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
