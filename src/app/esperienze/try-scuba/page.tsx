import type { Metadata } from 'next'
import ExperiencePageTemplate from '@/components/ExperiencePageTemplate'

export const metadata: Metadata = {
  title: 'Try Scuba — First Dive in Chia, No License Needed',
  description:
    'Your first breath underwater in Chia, South Sardinia. No experience required. Our certified instructors guide you in the crystal waters. Book on WhatsApp.',
  keywords: ['try scuba chia', 'first dive sardinia', 'beginner diving chia', 'scuba experience no license'],
  openGraph: {
    title: 'Try Scuba in Chia — First Dive, No License Needed',
    description:
      'Your first breath underwater in the crystal waters of Chia, South Sardinia. No experience needed — our certified instructors are with you every step.',
    url: 'https://www.divingchia.com/esperienze/try-scuba',
  },
}

export default function TryScubaPage() {
  return (
    <ExperiencePageTemplate
      title="Try Scuba"
      subtitle="First dive · No license needed"
      heroImage="/images/try-scuba.jpg"
      description="You've never breathed underwater. That's about to change. Try Scuba is designed for complete beginners — no certification, no prior experience, nothing required except curiosity. We brief you on land, walk through everything at your own pace, then take you into the shallow, crystal waters of Chia. Your instructor stays with you throughout. The fish don't care that it's your first time."
      additionalInfo="We work in small groups — always. This isn't a production line. Your first dive deserves proper attention, and that's exactly what you'll get. Most people go down nervous and come up already asking about the next dive."
      price="from €60/person"
      duration="3 hours total"
      departurePoint="Chia, South Sardinia"
      groupSize="Max 4 people"
      included={[
        { text: 'Full equipment: wetsuit, mask, fins, BCD, regulator, tank' },
        { text: 'Land briefing and pool/shallow water practice' },
        { text: 'Certified PADI/SSI instructor, 1:2 ratio maximum' },
        { text: 'Underwater guided experience to 5–6 metres depth' },
        { text: 'Insurance included' },
        { text: 'Photos on request (optional add-on)' },
      ]}
      whoFor={[
        { icon: '🌊', label: 'Complete beginners' },
        { icon: '👨‍👩‍👧', label: 'Families with children 10+' },
        { icon: '💑', label: 'Couples' },
        { icon: '🧑‍🤝‍🧑', label: 'Small friend groups' },
        { icon: '😰', label: 'Nervous first-timers' },
      ]}
      whatToBring={[
        'Swimwear',
        'Towel',
        'Reef-safe sunscreen',
        'Water bottle',
        'Sandals or boat shoes',
        'Light change of clothes',
      ]}
      relatedSlugs={['guided-dives', 'snorkeling-boat', 'private-tours']}
    />
  )
}
