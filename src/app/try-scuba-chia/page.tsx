import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Try Scuba in Chia, Sardinia — First Dive, No License Needed',
  description:
    'Try scuba diving in Chia, South Sardinia. No experience or license required. Certified instructors, crystal waters, small groups. Book on WhatsApp.',
  keywords: ['try scuba chia', 'first dive chia', 'scuba experience sardinia', 'beginner diving chia', 'try diving chia no license'],
  openGraph: {
    title: 'Try Scuba in Chia — First Dive, No License Needed',
    description: 'Your first breath underwater in the crystal waters of Chia. Certified instructors, small groups, no experience required.',
    url: 'https://www.divingchia.com/try-scuba-chia',
  },
}

export default function TryScubaChiaPage() {
  return (
    <div className="pt-20">
      <div className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            No license needed
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Try Scuba in Chia
          </h1>
          <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
            Your first dive underwater. No certification, no prior experience.
            Just the sea, a certified instructor, and the best waters in South
            Sardinia.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 font-inter text-gray-700 leading-relaxed text-lg">
          <p>
            Most people who try scuba diving for the first time say the same
            thing when they surface: &ldquo;Why did I wait so long?&rdquo; The
            experience of breathing underwater — in clear, warm Mediterranean
            water, with fish visible in every direction — is unlike anything
            else.
          </p>

          <p>
            Our Try Scuba experience in Chia is designed specifically for
            first-timers. No prior knowledge required. We start with a full
            briefing on land, covering how the equipment works, how to
            communicate underwater, and what to do if anything feels
            uncomfortable. Then we move into shallow water for a short practice
            session. Only then do we go in for the dive itself.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Your instructor is with you the whole time
          </h2>
          <p>
            We run a maximum 1:2 instructor-to-diver ratio for Try Scuba. Your
            instructor stays beside you throughout the dive. If you want to go
            back up at any point, you go back up. There is no pressure to do
            anything that doesn&apos;t feel right.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            The dive itself
          </h2>
          <p>
            Try Scuba in Chia takes you to around 5–6 metres depth in calm,
            clear water. At this depth you can see the sandy bottom, the rocks,
            and the marine life that calls Chia home. Sea bream, wrasse, the
            occasional moray peering from a crevice. It&apos;s not deep — it
            doesn&apos;t need to be. The experience is in the breathing, the
            weightlessness, and the quiet.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-navy">
            Who can do it
          </h2>
          <p>
            Anyone in reasonable health from age 10 upward. No swimming
            certificate required, though you should be comfortable in water.
            Some medical conditions may require a doctor&apos;s clearance — ask
            us when booking and we&apos;ll advise.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Try Scuba — Full Details', href: '/esperienze/try-scuba' },
            { label: 'Diving Courses (Get Certified)', href: '/corsi' },
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
            Ready for your first dive?
          </h2>
          <p className="text-white/60 font-inter mb-6">
            Try Scuba from €60/person · Equipment included · Small groups
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
