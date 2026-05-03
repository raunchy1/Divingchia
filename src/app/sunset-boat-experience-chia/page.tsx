import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sunset Boat Experience in Chia — Evening Snorkeling & Aperitivo',
  description:
    'Sunset boat experience in Chia, South Sardinia. Evening snorkeling in secret coves followed by a Sardinian aperitivo on the water. Perfect for couples and groups.',
  keywords: ['sunset boat chia', 'sunset experience chia', 'aperitivo boat sardinia', 'evening snorkeling chia', 'romantic boat tour sardinia'],
  openGraph: {
    title: 'Sunset Boat Experience in Chia, Sardinia',
    description: 'Evening snorkeling in golden-hour coves followed by a Sardinian aperitivo on the water. The best way to end a day in Chia.',
    url: 'https://www.divingchia.com/sunset-boat-experience-chia',
  },
}

export default function SunsetBoatExperienceChiaPage() {
  return (
    <div className="pt-20">
      <div className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Golden hour · Chia
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Sunset Boat Experience
          </h1>
          <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
            Late afternoon in Chia. The light shifts. The water changes colour.
            This is when we go out.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 font-inter text-gray-700 leading-relaxed text-lg">
          <p>
            The Sunset Boat Experience starts in the late afternoon, when the
            day tourists have gone back to their hotels and the sea belongs to
            the people who know where to look. We board the inflatable boat and
            head for coves accessible only by water — the kind of spots that
            don&apos;t appear on maps.
          </p>

          <p>
            We snorkel in the golden light. The water in the late afternoon is
            calmer, the visibility is excellent, and the fish are more active as
            they feed before dusk. Then we drift. The sun starts to drop. The
            aperitivo appears.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            The aperitivo
          </h2>
          <p>
            Local Sardinian wine or prosecco. Cured meats — prosciutto,
            salami, lonza. Pecorino and fresh cheeses. Bread and something
            sweet. We eat and drink on the water as the sky changes behind the
            headland. Sardinian sunsets are a different category.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Perfect for couples
          </h2>
          <p>
            The Sunset Boat Experience is probably our most popular choice for
            couples — particularly those celebrating something. An anniversary,
            a first holiday together, a proposal (it happens). We keep the
            group small, the atmosphere quiet, and the experience genuinely
            personal.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Practical details
          </h2>
          <p>
            The experience runs for approximately 3 hours in the late afternoon.
            No diving experience needed — this is a snorkeling and swimming
            experience. We provide all equipment. Bring a light jacket for the
            return trip as it cools after sunset.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Sunset Experience — Full Details', href: '/esperienze/sunset-experience' },
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
            Book the sunset experience
          </h2>
          <p className="text-white/60 font-inter mb-6">
            From €55/person · Aperitivo included · Max 8 people
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
