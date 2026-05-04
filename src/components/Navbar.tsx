"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { getWhatsAppLink } from "@/lib/whatsapp";

const LOCALES = [
  { code: "it", label: "IT", flag: "🇮🇹" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Strip locale prefix from pathname to get the raw path
  const rawPath = pathname.replace(`/${locale}`, "") || "/";

  // Build a locale-prefixed link
  const lp = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const navLinks = [
    { key: "experiences", path: "/#esperienze" },
    { key: "courses", path: "/courses" },
    { key: "prices", path: "/prices" },
    { key: "safety", path: "/safety" },
    { key: "gallery", path: "/gallery" },
    { key: "faq", path: "/faq" },
  ] as const;

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <nav className="flex justify-between items-center px-5 md:px-16 h-16 md:h-24 w-full max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-[#000d22]"
          >
            Diving Chia
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={lp(link.path)}
                className="font-serif text-[11px] tracking-[0.15em] uppercase text-slate-500 hover:text-[#000d22] transition-colors duration-300"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Right side: lang switcher + Book Now */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1">
              {LOCALES.map(({ code, label }) => (
                <Link
                  key={code}
                  href={`/${code}${rawPath === "/" ? "" : rawPath}`}
                  className={`font-serif text-[11px] tracking-widest px-1.5 py-0.5 transition-colors ${
                    locale === code
                      ? "text-[#000d22] font-bold border-b border-[#000d22]"
                      : "text-slate-400 hover:text-[#000d22]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a2342] text-white px-7 py-3 font-serif text-[11px] tracking-[0.12em] uppercase hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              {t("bookNow")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block h-px w-6 bg-[#000d22]" />
            <span className="block h-px w-6 bg-[#000d22]" />
            <span className="block h-px w-6 bg-[#000d22]" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white">
          <button
            className="absolute top-7 right-6 text-3xl text-[#000d22] leading-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <Link
            href={`/${locale}`}
            className="text-2xl font-serif font-bold tracking-tighter text-[#000d22] mb-2"
            onClick={() => setMenuOpen(false)}
          >
            Diving Chia
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={lp(link.path)}
              className="font-serif text-sm tracking-[0.15em] uppercase text-slate-600 hover:text-[#000d22]"
              onClick={() => setMenuOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}

          {/* Mobile language switcher */}
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 w-32 justify-center">
            {LOCALES.map(({ code, label, flag }) => (
              <Link
                key={code}
                href={`/${code}${rawPath === "/" ? "" : rawPath}`}
                className={`font-serif text-sm tracking-widest transition-colors flex items-center gap-1 ${
                  locale === code
                    ? "text-[#000d22] font-bold"
                    : "text-slate-400 hover:text-[#000d22]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{flag}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-[#0a2342] text-white px-10 py-4 font-serif text-xs tracking-[0.12em] uppercase"
            onClick={() => setMenuOpen(false)}
          >
            {t("bookNow")}
          </a>
        </div>
      )}
    </>
  );
}
