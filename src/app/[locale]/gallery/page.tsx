import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galleria — Diving Chia | Foto e Momenti",
  description: "Scopri i momenti più belli delle nostre esperienze subacquee a Chia, Sud Sardegna.",
};

const row1 = [
  { color: "#0D1B2A", flex: "1.5" },
  { color: "#1a3557", flex: "1" },
];

const row2 = [
  { color: "#1a3a5c", flex: "1" },
  { color: "#0D1B2A", flex: "1" },
  { color: "#1a3557", flex: "1" },
];

const row3 = [
  { color: "#1a3557", flex: "1" },
  { color: "#0D1B2A", flex: "1.5" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[50vh] items-center px-8 pb-16 pt-32 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Momenti</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Galleria
          </h1>
          <p
            className="max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Immagini dalle nostre avventure nel mare della Sardegna del Sud.
          </p>
        </div>
      </section>

      {/* Gallery Grid — Asymmetric Masonry */}
      <section className="px-0 py-0" style={{ backgroundColor: "#FAFAF8" }}>
        <ScrollReveal>
          {/* Row 1 — 60% + 40% */}
          <div className="flex" style={{ gap: "4px" }}>
            <div
              style={{ flex: "1.5", aspectRatio: "3/2", backgroundColor: row1[0].color }}
            />
            <div
              style={{ flex: "1", aspectRatio: "2/2", backgroundColor: row1[1].color }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {/* Row 2 — 33% + 33% + 33% */}
          <div className="flex" style={{ gap: "4px", marginTop: "4px" }}>
            <div
              style={{ flex: "1", aspectRatio: "1/1", backgroundColor: row2[0].color }}
            />
            <div
              style={{ flex: "1", aspectRatio: "1/1", backgroundColor: row2[1].color }}
            />
            <div
              style={{ flex: "1", aspectRatio: "1/1", backgroundColor: row2[2].color }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {/* Row 3 — 40% + 60% */}
          <div className="flex" style={{ gap: "4px", marginTop: "4px" }}>
            <div
              style={{ flex: "1", aspectRatio: "2/2", backgroundColor: row3[0].color }}
            />
            <div
              style={{ flex: "1.5", aspectRatio: "3/2", backgroundColor: row3[1].color }}
            />
          </div>
        </ScrollReveal>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
