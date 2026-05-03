import type { Metadata } from 'next'
import ExperiencePageTemplate from '@/components/ExperiencePageTemplate'

export const metadata: Metadata = {
  title: 'Private & Custom Boat Tours in Chia, Sardinia',
  description:
    'Tailor-made sea experiences in Chia for couples, families and groups. Combine diving and snorkeling, choose your spots, set your pace. Contact us for a custom quote.',
  keywords: ['private boat tours chia', 'custom diving chia', 'private snorkeling sardinia', 'tailor made sea experience chia'],
  openGraph: {
    title: 'Private & Custom Tours — Chia, South Sardinia',
    description:
      'Your group, your pace, your experience. We design private sea experiences around you — diving, snorkeling, or both.',
    url: 'https://www.divingchia.com/esperienze/private-tours',
  },
}

export default function PrivateToursPage() {
  return (
    <ExperiencePageTemplate
      title="Private & Custom Tours"
      subtitle="Tailor-made · Your group, your rules"
      heroImage="/images/private-tours.jpg"
      description="When you want the sea to yourself. Private tours give your group exclusive access to our boat, our guide, and our knowledge of the waters around Chia. You decide the mix: diving only, snorkeling only, or a combination. You tell us who's coming — beginners, experienced divers, kids, couples — and we design an itinerary that actually fits."
      additionalInfo="Private tours are ideal for anniversary celebrations, family reunions, groups with mixed experience levels, or simply anyone who doesn't want to share their morning with strangers. We also offer diving and snorkeling combo tours — the group splits: some dive, some snorkel from the boat at the same site."
      price="Custom quote — contact us"
      duration="Flexible — 2 to 6 hours"
      departurePoint="Chia, South Sardinia"
      groupSize="2 to 12 people"
      included={[
        { text: 'Exclusive use of boat and guide for your group' },
        { text: 'Full equipment for all activities chosen' },
        { text: 'Customised itinerary based on your group and preferences' },
        { text: 'Refreshments on board (water and drinks)' },
        { text: 'Flexibility on departure time and duration' },
        { text: 'Snorkeling and/or diving combined if needed' },
      ]}
      whoFor={[
        { icon: '💑', label: 'Couples & honeymoons' },
        { icon: '👨‍👩‍👧‍👦', label: 'Families' },
        { icon: '🎉', label: 'Special occasions' },
        { icon: '🧑‍🤝‍🧑', label: 'Friend groups' },
        { icon: '🤿🏊', label: 'Mixed levels (divers + snorkelers)' },
        { icon: '🏢', label: 'Corporate groups' },
      ]}
      whatToBring={[
        'Swimwear',
        'Towel',
        'Sunscreen (reef-safe)',
        'Water and snacks',
        'Certification card if diving',
        'Comfortable footwear',
      ]}
      relatedSlugs={['snorkeling-boat', 'sunset-experience', 'guided-dives']}
    />
  )
}
