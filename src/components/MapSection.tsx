"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";
import GoldLabel from "./GoldLabel";

export default function MapSection() {
  const t = useTranslations("map");

  return (
    <section style={{ backgroundColor: "#F2F0EB" }} className="py-16 md:py-40 lg:py-48">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <GoldLabel>{t("eyebrow")}</GoldLabel>
          <h2
            className="mt-4 font-cormorant text-[28px] md:text-[48px] lg:text-[64px] font-light leading-[1.15] tracking-[-0.01em]"
            style={{ color: "#1a1a1a" }}
          >
            {t("title")}
          </h2>
          <p
            className="mx-auto mt-6 max-w-[600px] font-jost text-[15px] md:text-[18px] font-light leading-[1.8]"
            style={{ color: "#6b6b6b", whiteSpace: "pre-line" }}
          >
            {t("description")}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="w-full overflow-hidden rounded-sm" style={{ border: "1px solid #E5E3DE" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.5!2d8.9283656!3d38.9311547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e6ddd752aa2703%3A0xc6a4af58b6eced96!2sDiving+Center+Chia!5e0!3m2!1sen!2sit!4v1715270400000!5m2!1sen!2sit"
              width="100%"
              height="450"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diving Center Chia Location"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
