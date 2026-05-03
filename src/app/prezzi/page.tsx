import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { WA_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Prices & Packages — Diving Chia, South Sardinia',
  description:
    'Transparent pricing for all diving and snorkeling experiences in Chia. Try Scuba from €60, Guided Dives from €45, Snorkeling Boat from €35. No hidden fees. All equipment included.',
  keywords: ['diving chia prices', 'snorkeling chia prices', 'how much diving chia', 'diving sardinia cost'],
  openGraph: {
    title: 'Transparent Pricing — Diving Chia',
    description: 'Clear pricing for all our sea experiences in Chia, South Sardinia. Equipment always included. No hidden fees.',
    url: 'https://www.divingchia.com/prezzi',
  },
}

const prices = [
  {
    name: 'Try Scuba',
    price: '€60',
    unit: 'per person',
    duration: '3 hours',
    groupSize: 'Max 4',
    highlight: false,
    description: 'First dive for complete beginners. No license needed.',
    includes: [
      'Full equipment',
      'Certified instructor (max 1:2)',
      'Land briefing + practical session',
      'Insurance',
    ],
  },
  {
    name: 'Guided Dive',
    price: '€45',
    unit: 'per person',
    duration: '2–3 hours',
    groupSize: 'Max 6',
    highlight: true,
    description: 'For Open Water certified divers. Local expert guide.',
    includes: [
      'Full equipment',
      'Certified divemaster guide',
      'Pre-dive site briefing',
      'Insurance',
    ],
  },
  {
    name: 'Snorkeling Boat',
    price: '€35',
    unit: 'per person',
    duration: '2–3 hours',
    groupSize: 'Max 8',
    highlight: false,
    description: 'Boat snorkeling in crystal waters. All levels welcome.',
    includes: [
      'Snorkeling kit (mask, fins, snorkel)',
      'Wetsuit/lycra suit',
      'Guide on board',
      'Multiple stops',
    ],
  },
  {
    name: 'Sunset Boat Experience',
    price: '€55',
    unit: 'per person',
    duration: '3 hours',
    groupSize: 'Max 8',
    highlight: false,
    description: 'Evening snorkeling + Sardinian aperitivo.',
    includes: [
      'Snorkeling kit',
      'Aperitivo: wine, local cheeses & cold cuts',
      'Guide on board',
      'Water and drinks',
    ],
  },
  {
    name: 'Private & Custom Tour',
    price: 'Custom',
    unit: 'for your group',
    duration: '2–6 hours',
    groupSize: '2–12 people',
    highlight: false,
    description: 'Exclusive boat for your group. Diving, snorkeling, or both.',
    includes: [
      'Exclusive boat',
      'Customised itinerary',
      'All equipment for chosen activities',
      'Refreshments on board',
    ],
  },
  {
    name: 'Diving Courses',
    price: 'On request',
    unit: '',
    duration: '2–4 days',
    groupSize: 'Individual or small group',
    highlight: false,
    description: 'PADI & SSI certification courses, Open Water to specialty.',
    includes: [
      'All course materials',
      'Pool + open water sessions',
      'All equipment',
      'Certification fee',
    ],
  },
]

export default function PrezziPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            No surprises
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Transparent Pricing
          </h1>
          <p className="font-inter text-lg text-white/70">
            We believe in clarity, not hidden fees. What you see below is what
            you pay. All prices include equipment.
          </p>
        </div>
      </div>

      {/* Prices grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prices.map((item, i) => (
            <div
              key={i}
              className={`rounded-3xl p-7 border ${
                item.highlight
                  ? 'bg-navy border-aqua/40 text-white'
                  : 'bg-sand-light border-sand/60 text-navy'
              } relative`}
            >
              {item.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-aqua text-white text-xs font-mono px-3 py-1 rounded-full uppercase tracking-widest">
                    Most popular
                  </span>
                </div>
              )}
              <div className="mb-4">
                <h2
                  className={`font-playfair text-xl font-bold ${
                    item.highlight ? 'text-white' : 'text-navy'
                  }`}
                >
                  {item.name}
                </h2>
                <p
                  className={`font-inter text-sm mt-1 ${
                    item.highlight ? 'text-white/60' : 'text-gray-500'
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-playfair text-4xl font-bold ${
                      item.highlight ? 'text-aqua' : 'text-navy'
                    }`}
                  >
                    {item.price}
                  </span>
                  {item.unit && (
                    <span
                      className={`font-inter text-sm ${
                        item.highlight ? 'text-white/40' : 'text-gray-400'
                      }`}
                    >
                      {item.unit}
                    </span>
                  )}
                </div>
                <div
                  className={`flex gap-3 mt-2 font-mono text-[10px] uppercase ${
                    item.highlight ? 'text-white/50' : 'text-gray-400'
                  }`}
                >
                  <span>{item.duration}</span>
                  <span>·</span>
                  <span>{item.groupSize}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {item.includes.map((inc, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-2 text-sm ${
                      item.highlight ? 'text-white/70' : 'text-gray-600'
                    }`}
                  >
                    <Check
                      className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                        item.highlight ? 'text-aqua' : 'text-aqua'
                      }`}
                    />
                    {inc}
                  </li>
                ))}
              </ul>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center text-sm font-semibold px-5 py-3 rounded-2xl transition-colors ${
                  item.highlight
                    ? 'bg-[#25D366] text-white hover:bg-[#1ebe5d]'
                    : 'bg-navy text-white hover:bg-aqua'
                }`}
              >
                Book on WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 bg-sand-light rounded-2xl p-6 border border-sand/60">
          <p className="font-inter text-gray-600 text-sm text-center leading-relaxed">
            All prices include equipment. Private groups receive custom packages
            — contact us for a tailored quote. Multi-dive discounts available
            for guided dives. Prices may vary by season — confirm at booking.
          </p>
        </div>
      </div>
    </div>
  )
}
