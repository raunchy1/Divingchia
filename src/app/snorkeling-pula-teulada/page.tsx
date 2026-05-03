import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Snorkeling near Chia, Pula & Teulada — South Sardinia',
  description:
    'Snorkeling tours in South Sardinia: Chia, Pula, and Teulada area. Boat access to the best snorkeling coves. All levels welcome. Based in Chia since 1996.',
  keywords: ['snorkeling pula', 'snorkeling teulada', 'snorkeling south sardinia', 'snorkeling near chia', 'boat snorkeling sardinia'],
  openGraph: {
    title: 'Snorkeling near Chia, Pula & Teulada',
    description: 'Boat snorkeling tours in South Sardinia. Access the best coves around Chia, Pula, and Teulada. All levels, families welcome.',
    url: 'https://www.divingchia.com/snorkeling-pula-teulada',
  },
}

export default function SnorkelingPulaTeuladaPage() {
  return (
    <div className="pt-20">
      <div className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            South Sardinia coastline
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Snorkeling near Pula & Teulada
          </h1>
          <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
            The southwestern coast of Sardinia has some of the clearest,
            calmest water in the island. We take you to the best of it.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 font-inter text-gray-700 leading-relaxed text-lg">
          <p>
            The stretch of coast between Pula and Teulada — passing through
            Chia — contains some of the finest shallow water snorkeling in
            Sardinia. Protected coves with sandy bottoms and crystal visibility.
            Rocky passages where fish gather. Isolated beaches accessible only
            by boat that almost nobody reaches.
          </p>

          <p>
            We operate from Chia, and our snorkeling tours by inflatable boat
            can reach spots along this entire coastline. What we choose on the
            day depends on wind, swell, and what the sea is doing — local
            knowledge, built over nearly 30 years.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Best for families
          </h2>
          <p>
            The sheltered bays between Pula and Teulada are ideal for families.
            Calm water, good visibility, sandy seabeds, and fish that are used
            to humans. Children from age 6 are welcome. We match the itinerary
            to the group.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Getting to us from Pula
          </h2>
          <p>
            We are based in Chia, about 20 minutes from Pula on the coastal
            road. If you&apos;re staying in Pula or Santa Margherita di Pula,
            we can advise on the best meeting point when you book.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Snorkeling Boat Experience', href: '/esperienze/snorkeling-boat' },
            { label: 'Private & Custom Tours', href: '/esperienze/private-tours' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block bg-sand-light border border-sand rounded-2xl p-5 text-navy font-semibold hover:bg-sand transition-colors text-center"
            >
              {link.label} →
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-navy rounded-3xl p-8 text-center text-white">
          <h2 className="font-playfair text-2xl font-bold mb-3">
            Book snorkeling in South Sardinia
          </h2>
          <p className="text-white/60 font-inter mb-6">
            From €35/person · Equipment included · All levels welcome
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#1ebe5d] transition-colors"
          >
            Book on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  )
}
