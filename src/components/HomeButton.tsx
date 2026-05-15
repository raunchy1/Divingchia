"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export default function HomeButton() {
  const locale = useLocale();
  const pathname = usePathname();

  const isHome =
    pathname === `/${locale}` ||
    pathname === `/${locale}/` ||
    pathname === "/" ||
    pathname === "";

  if (isHome) return null;

  return (
    <Link
      href={`/${locale}`}
      className="fixed bottom-5 left-5 md:bottom-8 md:left-8 z-50 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105"
      style={{ backgroundColor: "#0D1B2A", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)" }}
      aria-label="Torna alla home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FAFAF8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 md:h-7 md:w-7"
      >
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1V9.5z" />
      </svg>
    </Link>
  );
}
