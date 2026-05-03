import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Snorkeling in Chia, South Sardinia — By Boat, Crystal Waters',
  description:
    'Snorkeling in Chia, South Sardinia. Boat tours to the best coves and marine spots, all levels welcome. Families, couples, and groups. Book on WhatsApp.',
  keywords: ['snorkeling chia', 'snorkeling sardinia', 'snorkeling boat chia', 'snorkeling cove chia', 'snorkeling tour chia'],
  openGraph: {
    title: 'Snorkeling in Chia, South Sardinia',
    description: 'Crystal water snorkeling tours in Chia by inflatable boat. Access the best spots unreachable from shore. All levels, families welcome.',
    url: 'https://www.divingchia.com/snorkeling-chia',
  },
}

export default function SnorkelingChiaPage() {
  return (
    <div className="pt-20">
      <div className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Chia · South Sardinia
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Snorkeling in Chia
          </h1>
          <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
            Some of the best snorkeling in Sardinia is in and around Chia. We
            take you there by boat — to the coves, rocks, and patches of sea
            floor that most visitors never reach.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 font-inter text-gray-700 leading-relaxed text-lg">
          <p>
            Chia&apos;s coastline is full of places that are extraordinary
            underwater — but that you cannot reach on foot. Private coves
            accessible only by boat. Rocky promontories where the fish gather.
            Stretches of white sand seabed in water so clear it barely looks
            real. This is where we take you.
          </p>

          <p>
            Our snorkeling boat tours run by inflatable boat — fast, stable,
            and able to reach shallow spots that larger vessels cannot. We stop
            at multiple locations in one trip, moving with the conditions and
            the light to find the best spots of the day.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            No experience needed
          </h2>
          <p>
            If you can put your face in the water, you can snorkel with us.
            Children are welcome from age 6. We provide all equipment — mask,
            fins, snorkel, wetsuit or lycra suit depending on the season — and
            brief everyone before entering the water.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            The Sunset Snorkeling Experience
          </h2>
          <p>
            For something more special, our Sunset Boat Experience combines
            late-afternoon snorkeling with a Sardinian aperitivo as the sun
            goes down. The light at golden hour does something to the water
            that you have to see to understand. Couples and small groups love
            this one particularly.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Private snorkeling tours
          </h2>
          <p>
            Groups with children or mixed ages often prefer a private tour —
            exclusive use of the boat and guide for your group. You set the
            pace, we set the route. Contact us for a custom quote.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Snorkeling Boat Experience', href: '/esperienze/snorkeling-boat' },
            { label: 'Sunset Boat Experience', href: '/esperienze/sunset-experience' },
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
            Book snorkeling in Chia
          </h2>
          <p className="text-white/60 font-inter mb-6">
            Tell us your dates, group size, and we&apos;ll confirm quickly.
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
