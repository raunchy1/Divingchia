import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Diving near Chia: Pula, Teulada, Capoterra — South Sardinia',
  description:
    'Scuba diving in South Sardinia: Chia, Pula, Teulada, and Capoterra area. Certified diving center based in Chia, covering the best dive sites in the region since 1996.',
  keywords: ['diving pula', 'diving teulada', 'diving capoterra', 'scuba diving south sardinia', 'diving near chia', 'immersioni pula teulada'],
  openGraph: {
    title: 'Diving near Chia: Pula, Teulada, Capoterra — South Sardinia',
    description: 'Certified diving center in Chia covering the best dive sites in South Sardinia: Chia, Pula, Teulada, Capoterra. Since 1996.',
    url: 'https://www.divingchia.com/diving-pula-teulada-capoterra',
  },
}

export default function DivingPulaTeuladaCapoterraPage() {
  return (
    <div className="pt-20">
      <div className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            South Sardinia
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Diving near Chia
          </h1>
          <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
            Chia, Pula, Teulada, Capoterra — South Sardinia&apos;s coastline
            is one of the richest diving areas in the Mediterranean. We know
            it well.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 font-inter text-gray-700 leading-relaxed text-lg">
          <p>
            Our base is in Chia, but the waters we know extend along the entire
            southwestern coast of Sardinia — from Capoterra in the north, past
            Pula and Chia, to the cape of Teulada in the south. This stretch
            of coastline contains some of the most varied and pristine underwater
            environments in the island.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Diving near Pula
          </h2>
          <p>
            The waters around Nora, near Pula, hold particular historical
            interest — the ancient Phoenician-Roman city of Nora extends
            partially underwater, and the surrounding seabed is rich with fish
            life. The protected marine environment here means visibility is
            consistently excellent.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Diving near Teulada
          </h2>
          <p>
            Teulada sits at the southwestern tip of Sardinia, where military
            zone restrictions have protected the marine environment for decades.
            The result is some of the most pristine diving in Sardinia — rocky
            walls, posidonia meadows, and abundant marine life including large
            grouper and frequent pelagic sightings.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            How to reach us from Pula and Cagliari
          </h2>
          <p>
            We are based in Chia, easily reachable from Pula (20 minutes),
            Cagliari (50 minutes via the SS195), and Capoterra (40 minutes).
            We can advise on parking and meeting points when you book.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Guided Dives', href: '/esperienze/guided-dives' },
            { label: 'Diving Courses', href: '/corsi' },
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
            Diving South Sardinia with us
          </h2>
          <p className="text-white/60 font-inter mb-6">
            Contact us to discuss the best sites for your level and dates.
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
