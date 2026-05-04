"use client";

import { getWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[9999] group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full scale-125 opacity-30 animate-pulse-ring" />
      <div className="relative bg-[#25D366] text-white w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
        <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.887-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.89-11.888 11.89-2.015 0-3.991-.51-5.741-1.478l-6.251 1.638zm5.921-4.45s.262.155.612.366c1.39.832 3.004 1.27 4.683 1.27 4.901 0 8.89-3.988 8.89-8.89 0-2.378-.925-4.612-2.607-6.294s-3.915-2.607-6.292-2.607c-4.902 0-8.89 3.991-8.89 8.892 0 1.735.502 3.426 1.453 4.888l.348.534-1.074 3.92 4.024-1.053z"/>
        </svg>
      </div>
      <div className="absolute right-28 bottom-6 bg-white px-5 py-2.5 shadow-xl font-serif text-xs tracking-[0.1em] uppercase text-[#000d22] whitespace-nowrap opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Chat with us
      </div>
    </a>
  );
}
