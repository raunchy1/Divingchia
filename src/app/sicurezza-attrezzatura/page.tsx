import type { Metadata } from 'next'
import { Shield, Wrench, Award, Radio } from 'lucide-react'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Safety & Equipment — Diving Chia, South Sardinia',
  description:
    'Safety is our first priority at Diving Chia. Learn about our equipment maintenance, safety procedures, certifications, and how we ensure every dive is safe.',
  openGraph: {
    title: 'Safety & Equipment — Diving Chia',
    description: 'How we keep you safe in the water: equipment, procedures, certifications, and our approach to risk management.',
    url: 'https://www.divingchia.com/sicurezza-attrezzatura',
  },
}

const equipment = [
  'BCD (buoyancy control devices) — maintained and serviced annually',
  'Regulators — professionally serviced each season',
  'Wetsuits — 3mm and 5mm, all sizes available',
  'Masks, fins, snorkels — full range of sizes including children\'s',
  'Dive computers — carried by all guides',
  'First aid oxygen kit — on every boat',
  'First aid kit — fully stocked',
  'VHF radio — constant contact with shore',
  'GPS and communication equipment',
  'Dive flag and surface marker buoys (SMBs)',
]

const safetyProcedures = [
  {
    icon: Shield,
    title: 'Pre-dive briefing — always',
    description:
      'Every experience, no matter how experienced the group, starts with a briefing. We cover the site, expected conditions, communication signals, and emergency procedures.',
  },
  {
    icon: Wrench,
    title: 'Equipment check — every time',
    description:
      'Our team inspects and assembles all equipment before each outing. You don\'t manage the gear — we do. You focus on the dive.',
  },
  {
    icon: Radio,
    title: 'Constant shore communication',
    description:
      'Our boats maintain VHF radio contact with shore throughout. We monitor weather conditions before and during every outing.',
  },
  {
    icon: Award,
    title: 'Certified instructors',
    description:
      'All guides and instructors hold current PADI and/or SSI certifications with regular recertification and first aid updates.',
  },
]

export default function SicurezzaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Our commitment
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Safety & Equipment
          </h1>
          <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
            We&apos;ve been managing dives and snorkeling trips in these waters
            since 1996. Safety is not a checklist item — it&apos;s embedded in
            how we work.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* Safety procedures */}
        <div>
          <h2 className="font-playfair text-3xl font-bold text-navy mb-10">
            How We Keep You Safe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyProcedures.map((item, i) => (
              <div
                key={i}
                className="bg-sand-light rounded-2xl p-6 border border-sand/50"
              >
                <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div>
          <h2 className="font-playfair text-3xl font-bold text-navy mb-6">
            Our Equipment
          </h2>
          <p className="font-inter text-gray-600 mb-8 leading-relaxed">
            All equipment is owned, maintained, and checked by our team. You
            don&apos;t need to bring anything — and you don&apos;t need to worry
            about the condition of what you&apos;re using. That&apos;s our
            job.
          </p>
          <div className="bg-navy rounded-3xl p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {equipment.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-sm font-inter">
                  <span className="w-1.5 h-1.5 bg-aqua rounded-full mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Weather policy */}
        <div className="bg-sand-light rounded-3xl p-8 border border-sand/60">
          <h2 className="font-playfair text-2xl font-bold text-navy mb-4">
            Weather & Cancellation Policy
          </h2>
          <p className="font-inter text-gray-600 leading-relaxed mb-4">
            We monitor sea and weather conditions every morning. If conditions
            are unsafe — strong winds, poor visibility, rough seas — we will
            contact you to reschedule. Your safety is not negotiable.
          </p>
          <p className="font-inter text-gray-600 leading-relaxed">
            Rescheduling due to weather is always free of charge. We will work
            with you to find an alternative date or, if that&apos;s not
            possible, offer a full refund.
          </p>
        </div>
      </div>

      <BookingCTA />
    </div>
  )
}
