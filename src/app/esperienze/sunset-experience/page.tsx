import type { Metadata } from 'next'
import ExperiencePageTemplate from '@/components/ExperiencePageTemplate'

export const metadata: Metadata = {
  title: 'Sunset Boat Experience in Chia — Snorkeling & Aperitivo at Dusk',
  description:
    'Evening boat experience in Chia: snorkeling, swimming in secret coves, and an aperitivo as the sun sets over South Sardinia. Small groups. Book on WhatsApp.',
  keywords: ['sunset boat chia', 'sunset experience sardinia', 'aperitivo snorkeling chia', 'evening boat tour chia'],
  openGraph: {
    title: 'Sunset Boat Experience — Chia, South Sardinia',
    description:
      'Evening snorkeling, secret coves, and an aperitivo as the sun sets over Sardinia. The best way to end a day in Chia.',
    url: 'https://www.divingchia.com/esperienze/sunset-experience',
  },
}

export default function SunsetExperiencePage() {
  return (
    <ExperiencePageTemplate
      title="Sunset Boat Experience"
      subtitle="Golden hour · Aperitivo included"
      heroImage="/images/sunset-experience.jpg"
      description="Late afternoon, the crowds have left the beach, the light has changed, and the sea is at its most beautiful. We leave as the sun starts dropping — by boat, into the quiet parts of the coast that only the locals know. Snorkeling in coves that glow amber and orange. Then the boat drifts, the aperitivo comes out, and you watch the sun go down behind the Sardinian headlands."
      additionalInfo="No diving experience needed. This is a snorkeling and swimming experience, not a dive. We stay in calm, sheltered waters and take our time. The aperitivo includes local wine or prosecco, Sardinian cured meats, cheeses, and something sweet."
      price="from €55/person"
      duration="3 hours (late afternoon)"
      departurePoint="Chia, South Sardinia"
      groupSize="Max 8 people"
      included={[
        { text: 'Boat transfer to sunset coves and snorkeling spots' },
        { text: 'Full snorkeling kit: mask, fins, snorkel' },
        { text: 'Wetsuit or lycra suit included' },
        { text: 'Sardinian aperitivo: wine/prosecco, local cheeses, cold cuts' },
        { text: 'Experienced guide on board throughout' },
        { text: 'Water and soft drinks' },
      ]}
      whoFor={[
        { icon: '💑', label: 'Couples & romantics' },
        { icon: '🧑‍🤝‍🧑', label: 'Small groups of friends' },
        { icon: '🎉', label: 'Special occasions' },
        { icon: '🌊', label: 'All swimming levels' },
        { icon: '🍷', label: 'Aperitivo lovers' },
      ]}
      whatToBring={[
        'Swimwear',
        'Towel',
        'Light jacket for the return trip',
        'Sunglasses',
        'Camera or waterproof phone case',
        'Comfortable footwear',
      ]}
      relatedSlugs={['snorkeling-boat', 'private-tours', 'try-scuba']}
    />
  )
}
