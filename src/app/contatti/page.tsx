import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { WA_URL, CONTACT_EMAIL, GOOGLE_MAPS_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact & Booking — Diving Chia, South Sardinia',
  description:
    'Contact Diving Chia to book your experience. Book on WhatsApp for fastest response. Based in Chia, South Sardinia. Open season: April to October.',
  openGraph: {
    title: 'Contact & Booking — Diving Chia',
    description: 'Get in touch with Diving Chia to book your sea experience. WhatsApp, email, or find us in Chia, South Sardinia.',
    url: 'https://www.divingchia.com/contatti',
  },
}

export default function ContattiPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Get in touch
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Contact & Booking
          </h1>
          <p className="font-inter text-lg text-white/70">
            The fastest way to book is WhatsApp. We reply within a few hours.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-navy mb-6">
                Reach Us
              </h2>
              <p className="font-inter text-gray-600 leading-relaxed">
                We&apos;re based in Chia, South Sardinia, and we&apos;re active
                from April to October. The best way to book is WhatsApp — we
                confirm quickly and can help you choose the right experience for
                your group.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-navy font-inter">
                    WhatsApp (recommended)
                  </div>
                  <div className="text-sm text-gray-500 font-inter mt-0.5">
                    Fastest response — we reply within a few hours
                  </div>
                  <div className="text-sm text-[#25D366] font-mono mt-1 group-hover:underline">
                    Send us a message →
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-start gap-4 p-5 bg-sand-light border border-sand/60 rounded-2xl hover:bg-sand/30 transition-colors"
              >
                <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-navy" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-semibold text-navy font-inter">Email</div>
                  <div className="text-sm text-gray-500 font-inter mt-0.5">
                    {CONTACT_EMAIL}
                  </div>
                </div>
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-sand-light border border-sand/60 rounded-2xl hover:bg-sand/30 transition-colors"
              >
                <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-navy" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-semibold text-navy font-inter">Location</div>
                  <div className="text-sm text-gray-500 font-inter mt-0.5">
                    Chia, Sud Sardegna, Sardinia, Italy
                    <br />
                    <span className="text-aqua">View on Google Maps →</span>
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-sand-light border border-sand/60 rounded-2xl">
                <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-navy" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-semibold text-navy font-inter">Season</div>
                  <div className="text-sm text-gray-500 font-inter mt-0.5">
                    April to October
                    <br />
                    Daily departures (weather permitting)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking info / message guide */}
          <div className="bg-navy rounded-3xl p-8 text-white">
            <h2 className="font-playfair text-2xl font-bold mb-2">
              What to Include When You Book
            </h2>
            <p className="text-white/60 text-sm font-inter mb-6">
              Send us these details via WhatsApp and we&apos;ll confirm quickly:
            </p>
            <div className="space-y-4">
              {[
                { label: 'Date', hint: 'Your preferred date (or a range of dates)' },
                { label: 'People', hint: 'Number of people and ages if children' },
                { label: 'Activity', hint: 'Which experience you\'re interested in' },
                { label: 'Level', hint: 'Diving certification level (if applicable)' },
                { label: 'Where you\'re staying', hint: 'Hotel or area in Chia / nearby' },
              ].map((field, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 bg-aqua/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-aqua text-xs font-mono">{i + 1}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white font-inter text-sm">
                      {field.label}
                    </div>
                    <div className="text-white/50 text-xs font-inter">{field.hint}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl hover:bg-[#1ebe5d] transition-colors"
            >
              Open WhatsApp →
            </a>
            <p className="text-white/30 text-xs text-center mt-3 font-mono">
              Available in English and Italian
            </p>
          </div>
        </div>

        {/* Map embed placeholder */}
        <div className="mt-14 rounded-3xl overflow-hidden bg-sand-light border border-sand/60 h-64 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-navy/30 mx-auto mb-2" />
            <p className="text-gray-400 text-sm font-inter">
              Chia, Sud Sardegna, Sardinia
            </p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-aqua text-sm font-semibold hover:underline mt-1 inline-block"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
