import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti e Prenotazioni — Diving Chia",
  description: "Prenota la tua esperienza subacquea a Chia, Sud Sardegna. Contattaci via WhatsApp per disponibilità e prenotazioni.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
