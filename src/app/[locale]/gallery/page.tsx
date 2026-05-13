"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoldLabel from "@/components/GoldLabel";
import GalleryClient from "@/components/GalleryClient";
import { CATEGORIES, type GalleryCategory } from "@/lib/galleryPhotos";

export default function GalleryPage() {
  const t = useTranslations("galleryPage");

  const categoryLabels = CATEGORIES.reduce(
    (acc, c) => {
      acc[c.key] = {
        label: t(`categories.${c.key}.label`),
        tagline: t(`categories.${c.key}.tagline`),
      };
      return acc;
    },
    {} as Record<GalleryCategory, { label: string; tagline: string }>
  );

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[50vh] items-center px-8 pb-16 pt-24 md:pt-32 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>{t("eyebrow")}</GoldLabel>
          <h1
            className="mb-6 max-w-[800px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            {t("title")}
          </h1>
          <p
            className="max-w-[560px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            {t("subtitle")}
          </p>
        </div>
      </section>

      <GalleryClient
        labels={{
          all: t("filterAll"),
          altPrefix: t("altPrefix"),
          captionLabel: t("captionLabel"),
          closeLabel: t("closeLabel"),
          prevLabel: t("prevLabel"),
          nextLabel: t("nextLabel"),
          counter: (n: number, total: number) => `${n} / ${total}`,
        }}
        categoryLabels={categoryLabels}
      />

      <Footer />
      <WhatsAppButton />
    </>
  );
}
