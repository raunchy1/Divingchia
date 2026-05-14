"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLabel from "@/components/GoldLabel";
import { getWhatsAppLinkWithData } from "@/lib/whatsapp";

const attivitaOptions = [
  "Try Scuba",
  "Immersioni Guidate",
  "Snorkeling",
  "Tour Privato",
  "Tramonto in Barca",
  "Corso Sub",
];

const livelloOptions = [
  "Mai immersioni",
  "Principiante",
  "Avanzato",
  "Esperto",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefono: "",
    data: "",
    persone: "",
    attivita: "",
    livello: "",
    hotel: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = getWhatsAppLinkWithData({
      nome: formData.nome,
      telefono: formData.telefono,
      data: formData.data,
      persone: formData.persone,
      attivita: formData.attivita,
      livello: formData.livello,
      hotel: formData.hotel,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="flex min-h-[60vh] items-center px-8 pb-16 pt-44 md:pt-40 lg:pt-44 md:px-6 md:px-16 lg:px-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <GoldLabel centered={false}>Prenota Ora</GoldLabel>
          <h1
            className="mb-6 max-w-[700px] font-cormorant text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[-0.02em] lg:text-[72px]"
            style={{ color: "#FAFAF8" }}
          >
            Contatti e Prenotazioni
          </h1>
          <p
            className="mb-4 max-w-[520px] font-jost text-lg font-light leading-[1.8]"
            style={{ color: "#9a9a9a" }}
          >
            Scrivici per prenotare la tua esperienza. Ti risponderemo in pochi minuti.
          </p>
          <p
            className="max-w-[520px] font-jost text-base font-light"
            style={{ color: "#9a9a9a" }}
          >
            Contact & Booking — We will reply within minutes.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="px-8 py-16 md:py-32 md:px-6 md:px-16 md:py-36 lg:px-20 lg:py-40" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left — Form */}
            <ScrollReveal>
              <h2
                className="mb-8 font-cormorant text-[32px] font-light leading-[1.2] md:text-[40px]"
                style={{ color: "#1a1a1a" }}
              >
                Richiedi Prenotazione
              </h2>
              <p className="mb-10 font-jost text-base font-light leading-[1.8]" style={{ color: "#6b6b6b" }}>
                Compila il form e ti invieremo una conferma via WhatsApp
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Nome */}
                <div>
                  <label
                    className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                    style={{ color: "#6b6b6b" }}
                  >
                    Nome / Name *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Il tuo nome completo"
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }}
                  />
                </div>

                {/* Telefono */}
                <div>
                  <label
                    className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                    style={{ color: "#6b6b6b" }}
                  >
                    Telefono / Phone *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+39 ..."
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }}
                  />
                </div>

                {/* Data */}
                <div>
                  <label
                    className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                    style={{ color: "#6b6b6b" }}
                  >
                    Data / Date *
                  </label>
                  <input
                    type="date"
                    name="data"
                    required
                    value={formData.data}
                    onChange={handleChange}
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }}
                  />
                </div>

                {/* Numero Persone */}
                <div>
                  <label
                    className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                    style={{ color: "#6b6b6b" }}
                  >
                    Numero di Persone / Number of People
                  </label>
                  <input
                    type="text"
                    name="persone"
                    value={formData.persone}
                    onChange={handleChange}
                    placeholder="Es: 2 adulti + 1 bambino"
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }}
                  />
                </div>

                {/* Attivita */}
                <div>
                  <label
                    className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                    style={{ color: "#6b6b6b" }}
                  >
                    Attivit&agrave; / Activity *
                  </label>
                  <select
                    name="attivita"
                    required
                    value={formData.attivita}
                    onChange={handleChange}
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: formData.attivita ? "#1a1a1a" : "#9a9a9a" }}
                  >
                    <option value="" disabled>
                      Seleziona un&apos;attivit&agrave;...
                    </option>
                    {attivitaOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Livello Sub */}
                <div>
                  <label
                    className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                    style={{ color: "#6b6b6b" }}
                  >
                    Livello Sub / Diving Level
                  </label>
                  <select
                    name="livello"
                    value={formData.livello}
                    onChange={handleChange}
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: formData.livello ? "#1a1a1a" : "#9a9a9a" }}
                  >
                    <option value="" disabled>
                      Seleziona il tuo livello...
                    </option>
                    {livelloOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Hotel */}
                <div>
                  <label
                    className="mb-2 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                    style={{ color: "#6b6b6b" }}
                  >
                    Hotel / Zona / Hotel / Area
                  </label>
                  <input
                    type="text"
                    name="hotel"
                    value={formData.hotel}
                    onChange={handleChange}
                    placeholder="Dove alloggi?"
                    className="w-full border-b bg-transparent py-3 font-jost text-[15px] font-light outline-none transition-colors duration-200 focus:border-[#C9A84C]"
                    style={{ borderColor: "#E5E3DE", color: "#1a1a1a" }}
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 font-jost text-[12px] font-normal uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90 md:w-auto md:px-16"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    Invia Richiesta via WhatsApp
                  </button>
                </div>
              </form>
            </ScrollReveal>

            {/* Right — Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-10">
                {/* Contact Details */}
                <div>
                  <h3
                    className="mb-6 font-cormorant text-[24px] font-light leading-[1.3]"
                    style={{ color: "#1a1a1a" }}
                  >
                    Contatti Diretti
                  </h3>
                  <div className="flex flex-col gap-6">
                    {/* WhatsApp */}
                    <div>
                      <span
                        className="mb-1 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                        style={{ color: "#9a9a9a" }}
                      >
                        WhatsApp
                      </span>
                      <a
                        href="https://wa.me/393388585504"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-jost text-[18px] font-light"
                        style={{ color: "#1a1a1a" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" style={{ color: "#25D366" }}>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        +39 338 858 5504
                      </a>
                    </div>

                    {/* Location */}
                    <div>
                      <span
                        className="mb-1 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                        style={{ color: "#9a9a9a" }}
                      >
                        Dove Siamo
                      </span>
                      <span className="font-jost text-[18px] font-light" style={{ color: "#1a1a1a" }}>
                        Chia, Sud Sardegna, Italia
                      </span>
                    </div>

                    {/* Hours */}
                    <div>
                      <span
                        className="mb-1 block font-jost text-[11px] font-normal uppercase tracking-[0.15em]"
                        style={{ color: "#9a9a9a" }}
                      >
                        Orari
                      </span>
                      <span className="font-jost text-[18px] font-light" style={{ color: "#1a1a1a" }}>
                        8:00 — 20:00, Aprile — Ottobre
                      </span>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div
                  className="h-[300px] w-full"
                  style={{ backgroundColor: "#E5E3DE" }}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-jost text-[13px] font-light uppercase tracking-[0.1em]" style={{ color: "#9a9a9a" }}>
                      Mappa — Chia, Sardegna
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
