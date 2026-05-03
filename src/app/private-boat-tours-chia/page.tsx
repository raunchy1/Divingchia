import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Private Boat Tours in Chia, Sardinia — Custom Sea Experiences',
  description:
    'Private boat tours in Chia, South Sardinia. Exclusive boat for your group: diving, snorkeling, swimming, or a mix. Couples, families, and groups. Custom quote on WhatsApp.',
  keywords: ['private boat tours chia', 'private boat sardinia', 'private tour chia', 'exclusive boat chia', 'boat rental chia sardinia'],
  openGraph: {
    title: 'Private Boat Tours in Chia — South Sardinia',
    description: 'Exclusive boat experiences in Chia, custom-built for your group. Diving, snorkeling, swimming, aperitivo — your choice.',
    url: 'https://www.divingchia.com/private-boat-tours-chia',
  },
}

export default function PrivateBoatToursChiaPage() {
  return (
    <div className="pt-20">
      <div className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            For your group
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Private Boat Tours in Chia
          </h1>
          <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
            Exclusive use of our boat and guide for your group. You choose the
            activities, we take care of everything else.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 font-inter text-gray-700 leading-relaxed text-lg">
          <p>
            A private boat tour in Chia means exactly that: the boat is yours.
            Your group, your timing, your programme. We don&apos;t mix private
            bookings with other guests.
          </p>

          <p>
            Popular options include full-day snorkeling tours of the Chia
            coastline, combined diving and snorkeling for groups with mixed
            experience levels, private sunset aperitivo experiences, and
            tailor-made itineraries for special occasions.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Mixed groups: divers and snorkelers together
          </h2>
          <p>
            Private tours are perfect when your group has a mix of certified
            divers and non-divers. The certified divers go in for a guided
            dive while the others snorkel from the boat at the same site. Same
            experience, same location, different depths. We manage both groups
            simultaneously with our team.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Special occasions
          </h2>
          <p>
            Anniversaries, birthdays, proposals, team outings — we&apos;ve done
            them all. If you have something specific in mind, tell us. We know
            how to make a day on the water in Sardinia memorable.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Pricing
          </h2>
          <p>
            Private tours are priced based on the number of people, duration,
            and activities chosen. Contact us on WhatsApp with your group
            details and we&apos;ll send a custom quote promptly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Private & Custom Tours', href: '/esperienze/private-tours' },
            { label: 'View Prices', href: '/prezzi' },
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
            Get your custom quote
          </h2>
          <p className="text-white/60 font-inter mb-6">
            Tell us your group size, dates, and preferred activities.
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
