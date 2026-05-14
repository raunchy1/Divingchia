"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const LOCALES = [
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const rawPath = pathname.replace(`/${locale}`, "") || "/";

  const lp = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const navLinks = [
    { key: "experiences", href: "/#esperienze" },
    { key: "offers", href: "#preventivi" },
    { key: "safety", href: "/safety" },
    { key: "gallery", href: "/gallery" },
    { key: "faq", href: "/faq" },
    { key: "contact", href: "/contact" },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[156px] md:h-[140px] lg:h-[156px] flex items-center transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(13,27,42,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 lg:px-8">
          <Link href={lp("/")} className="flex items-center">
            <img
              src="/images/logo-white.png"
              alt="Diving Center Chia - Bad Boy of Sardinia"
              className="h-[144px] md:h-[128px] lg:h-[148px] w-auto transition-opacity duration-300"
              style={{ objectFit: "contain" }}
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={lp(link.href)}
                className="font-jost text-[13px] font-light uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#C9A84C]"
                style={{ color: "#FAFAF8" }}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            {LOCALES.map((l) => (
              <Link
                key={l.code}
                href={`/${l.code}${rawPath === "/" ? "" : rawPath}`}
                className="font-jost text-[12px] font-light uppercase tracking-[0.08em] transition-colors duration-300"
                style={{ color: locale === l.code ? "#C9A84C" : "#FAFAF8" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={lp("/contact")}
              className="font-jost text-[12px] font-normal uppercase tracking-[0.15em] px-8 py-3 border transition-colors duration-300"
              style={{
                borderColor: "#FAFAF8",
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
              {t("book")}
            </Link>
          </div>

          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block h-px w-6 transition-colors" style={{ backgroundColor: menuOpen ? "#1a1a1a" : "#FAFAF8" }} />
            <span className="block h-px w-6 transition-colors" style={{ backgroundColor: menuOpen ? "#1a1a1a" : "#FAFAF8" }} />
            <span className="block h-px w-6 transition-colors" style={{ backgroundColor: menuOpen ? "#1a1a1a" : "#FAFAF8" }} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#FAFAF8" }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center"
          aria-label="Chiudi menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="2" x2="18" y2="18" stroke="#1a1a1a" strokeWidth="1.5" />
            <line x1="18" y1="2" x2="2" y2="18" stroke="#1a1a1a" strokeWidth="1.5" />
          </svg>
        </button>

        <img
          src="/images/logo-hero.png"
          alt="Diving Center Chia - Bad Boy of Sardinia"
          className="h-[80px] w-auto mb-4"
          style={{ objectFit: "contain" }}
        />

        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={lp(link.href)}
            className="font-jost text-[18px] font-light uppercase tracking-[0.1em]"
            style={{ color: "#1a1a1a", animationDelay: `${i * 0.08}s` }}
            onClick={() => setMenuOpen(false)}
          >
            {t(link.key)}
          </Link>
        ))}

        <div className="flex items-center gap-4 mt-2">
          {LOCALES.map((l) => (
            <Link
              key={l.code}
              href={`/${l.code}${rawPath === "/" ? "" : rawPath}`}
              className="font-jost text-[14px] font-light uppercase tracking-[0.08em]"
              style={{ color: locale === l.code ? "#C9A84C" : "#1a1a1a" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href={lp("/contact")}
          className="mt-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] px-10 py-4"
          style={{ backgroundColor: "#0D1B2A", color: "#FAFAF8" }}
          onClick={() => setMenuOpen(false)}
        >
          {t("book")}
        </Link>
      </div>
    </>
  );
}
