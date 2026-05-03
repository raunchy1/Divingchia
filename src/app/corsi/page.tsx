import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import BookingCTA from '@/components/BookingCTA'
import { WA_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Diving Courses in Chia — PADI & SSI Certification, South Sardinia',
  description:
    'Get your diving certification in the crystal waters of Chia, South Sardinia. PADI and SSI courses available: Open Water, Advanced, specialty courses. Book on WhatsApp.',
  keywords: ['diving courses chia', 'PADI chia sardinia', 'SSI chia', 'open water certification sardinia', 'diving school chia'],
  openGraph: {
    title: 'Diving Courses in Chia — PADI & SSI Certification',
    description: 'Get certified to dive in one of the most beautiful spots in the Mediterranean. Open Water, Advanced, and specialty courses in Chia, South Sardinia.',
    url: 'https://www.divingchia.com/corsi',
  },
}

const courses = [
  {
    title: 'Open Water Diver',
    org: 'PADI / SSI',
    duration: '3–4 days',
    depth: 'to 18m',
    level: 'Beginner',
    description:
      'The most recognised diving certification in the world. Three days of theory, confined water training, and four open water dives in the sea. You finish certified to dive anywhere in the world with a buddy.',
    included: [
      'All learning materials (digital)',
      'Pool training sessions',
      'Four open water dives with instructor',
      'All equipment throughout the course',
      'PADI or SSI certification fee',
    ],
  },
  {
    title: 'Advanced Open Water',
    org: 'PADI / SSI',
    duration: '2 days',
    depth: 'to 30m',
    level: 'Open Water certified',
    description:
      'Expand your diving skills and depth range. Five adventure dives including deep dive and navigation. Become a more confident, capable diver in the diverse underwater environment of South Sardinia.',
    included: [
      'Five guided adventure dives',
      'Deep dive and underwater navigation (mandatory)',
      'Three elective adventure dives of your choice',
      'All equipment',
      'PADI or SSI certification',
    ],
  },
  {
    title: 'Specialty Courses',
    org: 'PADI / SSI',
    duration: '1–2 days',
    depth: 'Varies',
    level: 'Open Water certified',
    description:
      'Underwater photography, night diving, fish identification, buoyancy, wreck diving — we offer a range of specialty courses tailored to what interests you most about the underwater world.',
    included: [
      'Specialised instruction and dives',
      'All equipment',
      'Course materials',
      'Certification on completion',
    ],
  },
  {
    title: 'Rescue Diver',
    org: 'PADI / SSI',
    duration: '3 days',
    depth: 'to 30m',
    level: 'Advanced Open Water + First Aid',
    description:
      'One of the most rewarding courses in diving. Learn to recognise and manage problems in the water, help other divers, and handle emergency scenarios. This course changes how you think about diving.',
    included: [
      'Emergency First Response (EFR) training',
      'In-water rescue scenarios',
      'All equipment',
      'PADI or SSI Rescue Diver certification',
    ],
  },
]

export default function CorsiPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Get certified
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Diving Courses
          </h1>
          <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
            PADI and SSI certification courses in one of the most beautiful
            diving destinations in the Mediterranean. Learn to dive where the
            fish are.
          </p>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-sand-light rounded-3xl p-8 border border-sand/60"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-aqua">
                    {course.org}
                  </span>
                  <h2 className="font-playfair text-2xl font-bold text-navy mt-1">
                    {course.title}
                  </h2>
                </div>
                <span className="bg-navy text-white text-xs font-mono px-3 py-1.5 rounded-full whitespace-nowrap">
                  {course.level}
                </span>
              </div>

              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="font-mono text-[10px] uppercase text-gray-400">Duration</div>
                  <div className="font-semibold text-navy text-sm">{course.duration}</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-[10px] uppercase text-gray-400">Max depth</div>
                  <div className="font-semibold text-navy text-sm">{course.depth}</div>
                </div>
              </div>

              <p className="font-inter text-gray-600 text-sm leading-relaxed mb-5">
                {course.description}
              </p>

              <ul className="space-y-2 mb-6">
                {course.included.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-3.5 h-3.5 text-aqua mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-aqua transition-colors"
              >
                Ask for availability →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-navy rounded-3xl p-8 text-white text-center">
          <h2 className="font-playfair text-2xl font-bold mb-3">
            Not sure which course is right for you?
          </h2>
          <p className="text-white/60 mb-6 font-inter">
            Tell us your current level and what you want to achieve. We&apos;ll
            help you choose.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1ebe5d] transition-colors"
          >
            Ask on WhatsApp →
          </a>
        </div>
      </div>

      <BookingCTA />
    </div>
  )
}
