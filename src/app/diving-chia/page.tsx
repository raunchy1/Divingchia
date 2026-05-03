import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Diving in Chia, South Sardinia — Diving Chia',
  description:
    'Scuba diving in Chia, South Sardinia. Certified center active since 1996. Try Scuba, guided dives, and courses in crystal-clear Mediterranean waters. Book on WhatsApp.',
  keywords: ['diving chia', 'scuba diving chia', 'diving south sardinia', 'diving center chia sardinia', 'immersioni chia'],
  openGraph: {
    title: 'Diving in Chia, South Sardinia',
    description: 'Certified diving center in Chia since 1996. Try Scuba, guided dives, and courses in crystal Mediterranean waters.',
    url: 'https://www.divingchia.com/diving-chia',
  },
}

export default function DivingChiaPage() {
  return (
    <div className="pt-20">
      <div className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Chia · South Sardinia
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Diving in Chia
          </h1>
          <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
            The waters off Chia, in South Sardinia, are among the clearest in
            the Mediterranean. Rocky seabeds, posidonia meadows, marine
            reserves — and a diving center that has been here since 1996.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose-custom">
        <div className="space-y-8 font-inter text-gray-700 leading-relaxed text-lg">
          <p>
            Chia sits at the southern tip of Sardinia, where the Mediterranean
            narrows and the water turns an improbable shade of blue. The
            coastline here is a series of protected bays, rocky headlands, and
            sandy channels — each one with its own underwater character.
          </p>

          <p>
            <strong className="text-navy">Diving Chia</strong> has been
            operating in these waters since 1996. That&apos;s nearly three
            decades of diving the same sites in every season, every condition,
            every light. We know where the grouper patrol at dusk. We know
            which channel the octopus prefer in summer. We know every current
            change and every rock formation by name.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            What you can dive in Chia
          </h2>
          <p>
            The dive sites around Chia range from shallow, calm bays suitable
            for first-timers to deeper walls and rocky reefs for experienced
            divers. Marine life is abundant: sea bream, grouper, moray eels,
            octopus, starfish, sea urchins, and seasonal pelagic visitors.
            Posidonia meadows — protected and essential to the ecosystem —
            filter the light and shelter dozens of species.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Who diving in Chia is for
          </h2>
          <p>
            We work with all levels. Complete beginners can try scuba diving —
            no license needed, just curiosity. Certified divers from Open Water
            upward can join guided dives with a local divemaster. Those who
            want to get certified can complete their PADI or SSI course in the
            waters of Chia — one of the best classrooms in the Mediterranean.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Small groups, premium service
          </h2>
          <p>
            We keep our groups small — maximum four for Try Scuba, six for
            guided dives. This isn&apos;t mass tourism. It&apos;s one-to-one
            attention, real instruction, and time to actually enjoy what
            you&apos;re seeing underwater.
          </p>
        </div>

        {/* Internal links */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Try Scuba in Chia', href: '/esperienze/try-scuba' },
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

        {/* CTA */}
        <div className="mt-12 bg-navy rounded-3xl p-8 text-center text-white">
          <h2 className="font-playfair text-2xl font-bold mb-3">
            Book your dive in Chia
          </h2>
          <p className="text-white/60 font-inter mb-6">
            WhatsApp is the fastest way. We confirm within hours.
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
