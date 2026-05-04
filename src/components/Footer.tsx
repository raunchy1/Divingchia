"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const lp = (path: string) => `/${locale}${path}`;

  const experienceLinks = [
    { label: "Try Scuba", href: "/try-scuba" },
    { label: "Guided Dives", href: "/guided-dives" },
    { label: "Snorkeling Boat", href: "/snorkeling" },
    { label: "Private Tours", href: "/private-tours" },
    { label: "Sunset Experience", href: "/sunset" },
    { label: "Courses", href: "/courses" },
  ];

  const companyLinks = [
    { label: "Safety & Equipment", href: "/safety" },
    { label: "Gallery", href: "/gallery" },
    { label: "Prices", href: "/prices" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-[#0A2342] w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 md:px-16 py-24 max-w-[1440px] mx-auto">
        <div>
          <div className="text-xl font-serif text-[#F8F6F1] tracking-[0.3em] uppercase mb-8">
            DIVING CHIA
          </div>
          <p className="font-serif text-xs tracking-widest uppercase text-[#F8F6F1]/60 leading-loose">
            {t("tagline")}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="font-serif text-xs tracking-[0.1em] uppercase text-[#F8F6F1] mb-2">
            {t("experiences")}
          </h5>
          {experienceLinks.map((link) => (
            <Link
              key={link.href}
              href={lp(link.href)}
              className="font-serif text-xs tracking-widest uppercase text-[#F8F6F1]/60 hover:text-[#F8F6F1] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="font-serif text-xs tracking-[0.1em] uppercase text-[#F8F6F1] mb-2">
            {t("company")}
          </h5>
          {companyLinks.map((link) => (
            <Link
              key={link.href}
              href={lp(link.href)}
              className="font-serif text-xs tracking-widest uppercase text-[#F8F6F1]/60 hover:text-[#F8F6F1] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="font-serif text-xs tracking-[0.1em] uppercase text-[#F8F6F1] mb-2">
            {t("location")}
          </h5>
          <p className="font-serif text-xs tracking-widest uppercase text-[#F8F6F1]/60 leading-loose">
            Chia, Domus de Maria,<br />
            South Sardinia, Italy.<br />
            Open: June — September
          </p>
          <a
            href="tel:+393388585504"
            className="font-serif text-xs tracking-widest uppercase text-[#F8F6F1]/60 hover:text-[#F8F6F1] transition-colors mt-2"
          >
            +39 338 858 5504
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-8 px-8 md:px-16 text-center">
        <p className="font-serif text-xs tracking-widest uppercase text-[#F8F6F1]/40">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
