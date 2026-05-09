const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, 'src/app/[locale]');

const serverPageTemplate = (opts) => `import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getWhatsAppLink } from "@/lib/whatsapp";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("${opts.ns}");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ${opts.componentName}() {
  const t = await getTranslations("${opts.ns}");

  return (
    <>
      <Navbar />
      <section
        className="flex min-h-[70vh] items-center px-8 pb-16 pt-32 md:px-16 lg:px-20"
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
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-jost text-xs font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            {t("cta")}
          </a>
        </div>
      </section>
      <section className="px-8 py-32 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              {t("paragraphs.0")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-6 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              {t("paragraphs.1")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-jost text-[18px] font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
              {t("paragraphs.2")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 font-jost text-xs font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
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
`;

const pages = [
  { folder: 'diving-chia', ns: 'divingChia', componentName: 'DivingChiaPage' },
  { folder: 'diving-near-chia', ns: 'divingNearChia', componentName: 'DivingNearChiaPage' },
  { folder: 'diving-teulada', ns: 'divingTeulada', componentName: 'DivingTeuladaPage' },
  { folder: 'snorkeling-chia', ns: 'snorkelingChia', componentName: 'SnorkelingChiaPage' },
  { folder: 'snorkeling-near-chia', ns: 'snorkelingNearChia', componentName: 'SnorkelingNearChiaPage' },
  { folder: 'snorkeling-teulada', ns: 'snorkelingTeulada', componentName: 'SnorkelingTeuladaPage' },
  { folder: 'sunset-boat-experience-chia', ns: 'sunsetBoatExperienceChia', componentName: 'SunsetBoatExperienceChiaPage' },
  { folder: 'try-scuba-chia', ns: 'tryScubaChia', componentName: 'TryScubaChiaPage' },
  { folder: 'private-boat-tours-chia', ns: 'privateBoatToursChia', componentName: 'PrivateBoatToursChiaPage' },
];

pages.forEach(p => {
  const filePath = path.join(BASE, p.folder, 'page.tsx');
  fs.writeFileSync(filePath, serverPageTemplate(p));
  console.log('Wrote', filePath);
});

console.log('Done writing simple pages!');
