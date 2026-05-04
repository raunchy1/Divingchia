export const WHATSAPP_NUMBER = "393388585504";

export function getWhatsAppLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}

export function getWhatsAppLinkWithData(data: {
  nome?: string;
  telefono?: string;
  data?: string;
  persone?: string;
  attivita?: string;
  livello?: string;
  hotel?: string;
}): string {
  const lines = [
    "Ciao! Vorrei prenotare un'esperienza con Diving Chia.",
    "",
    data.nome ? `Nome: ${data.nome}` : "",
    data.data ? `Data: ${data.data}` : "",
    data.persone ? `Persone: ${data.persone}` : "",
    data.attivita ? `Attivita: ${data.attivita}` : "",
    data.livello ? `Livello: ${data.livello}` : "",
    data.hotel ? `Dove alloggio: ${data.hotel}` : "",
    data.telefono ? `Telefono: ${data.telefono}` : "",
  ].filter(Boolean);

  const text = lines.join("%0A");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
