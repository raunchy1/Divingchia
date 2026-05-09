"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const experienceLinks = [
    { key: "tryScuba", href: "/try-scuba" },
    { key: "guidedDives", href: "/guided-dives" },
    { key: "snorkeling", href: "/snorkeling" },
    { key: "privateTours", href: "/private-tours" },
    { key: "sunset", href: "/sunset" },
    { key: "courses", href: "/courses" },
  ] as const;

  const navLinks = [
    { key: "home", href: "/" },
    { key: "experiences", href: "/#esperienze" },
    { key: "offers", href: "#preventivi" },
    { key: "safety", href: "/safety" },
    { key: "gallery", href: "/gallery" },
    { key: "faq", href: "/faq" },
    { key: "contact", href: "/contact" },
  ] as const;

  return (
    <footer style={{ backgroundColor: "#0D1B2A" }}>
      <div className="h-px w-full" style={{ backgroundColor: "#C9A84C" }} />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left column - Logo */}
          <div className="flex flex-col gap-4 items-start">
            <img
              src="/images/logo-footer-white.png"
              alt="Diving Center Chia - Bad Boy of Sardinia"
              className="h-[140px] w-auto"
              style={{ objectFit: "contain" }}
            />
            <p className="font-jost text-[14px] font-light" style={{ color: "#FAFAF8" }}>
              {t("tagline")}
            </p>
            <p className="font-jost text-[13px] font-light" style={{ color: "#9a9a9a" }}>
              {t("location")}
            </p>
            <p className="font-jost text-[13px] font-light" style={{ color: "#9a9a9a" }}>
              {t("copyright")}
            </p>
            <div className="mt-2 flex flex-col gap-2">
              <span className="font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>
                {t("follow")}
              </span>
              <div className="flex flex-wrap gap-3">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="font-jost text-[13px] font-light transition-colors duration-300 hover:text-[#FAFAF8]" style={{ color: "#9a9a9a" }}>WhatsApp</a>
                <a href="https://www.instagram.com/divingchia/?hl=it" target="_blank" rel="noopener noreferrer" className="font-jost text-[13px] font-light transition-colors duration-300 hover:text-[#FAFAF8]" style={{ color: "#9a9a9a" }}>Instagram</a>
                <a href="https://www.facebook.com/diving.laguna" target="_blank" rel="noopener noreferrer" className="font-jost text-[13px] font-light transition-colors duration-300 hover:text-[#FAFAF8]" style={{ color: "#9a9a9a" }}>Facebook</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="font-jost text-[13px] font-light transition-colors duration-300 hover:text-[#FAFAF8]" style={{ color: "#9a9a9a" }}>Google Maps</a>
                <a href="#" className="font-jost text-[13px] font-light transition-colors duration-300 hover:text-[#FAFAF8]" style={{ color: "#9a9a9a" }}>Email</a>
              </div>
            </div>
          </div>

          {/* Center column - Nav */}
          <div className="flex flex-col gap-3">
            <span className="font-jost text-[11px] font-normal uppercase tracking-[0.15em] mb-2" style={{ color: "#C9A84C" }}>
              {t("nav_title")}
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="font-jost text-[13px] font-light transition-colors duration-300 hover:text-[#FAFAF8]"
                style={{ color: "#9a9a9a" }}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </div>

          {/* Right column - Experiences + Contact */}
          <div className="flex flex-col gap-3">
            <span className="font-jost text-[11px] font-normal uppercase tracking-[0.15em] mb-2" style={{ color: "#C9A84C" }}>
              {t("exp_title")}
            </span>
            {experienceLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="font-jost text-[13px] font-light transition-colors duration-300 hover:text-[#FAFAF8]"
                style={{ color: "#9a9a9a" }}
              >
                {t(`experiences.${link.key}`)}
              </Link>
            ))}

            <div className="mt-6 flex flex-col gap-2">
              <span className="font-jost text-[11px] font-normal uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>
                {t("book_title")}
              </span>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-jost text-[14px] font-light flex items-center gap-2"
                style={{ color: "#FAFAF8" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" style={{ color: "#25D366" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("phone")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
