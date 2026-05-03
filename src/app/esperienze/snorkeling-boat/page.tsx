import type { Metadata } from 'next'
import ExperiencePageTemplate from '@/components/ExperiencePageTemplate'

export const metadata: Metadata = {
  title: 'Snorkeling Boat Experience in Chia — Crystal Waters by Inflatable Boat',
  description:
    'Snorkeling by inflatable boat in the crystal waters of Chia, South Sardinia. Access secret coves and marine reserves unreachable from shore. All levels welcome.',
  keywords: ['snorkeling boat chia', 'snorkeling sardinia', 'boat snorkeling chia', 'snorkeling gommone chia'],
  openGraph: {
    title: 'Snorkeling Boat Experience in Chia',
    description:
      'We take you where the sea is most spectacular — by boat. Crystal coves, marine life, and Sardinian coastline at its finest.',
    url: 'https://www.divingchia.com/esperienze/snorkeling-boat',
  },
}

export default function SnorkelingBoatPage() {
  return (
    <ExperiencePageTemplate
      title="Snorkeling Boat Experience"
      subtitle="Crystal waters · By inflatable boat"
      heroImage="/images/snorkeling-boat.jpg"
      description="Some of the best snorkeling spots in Chia are completely inaccessible on foot. We take you there by inflatable boat — fast, stable, perfect for the task. You'll explore hidden coves with turquoise water over white sand, rocky promontories where octopus and fish gather, and stretches of coast that most tourists never see."
      additionalInfo="No diving experience required. If you can put your face in the water, you can do this. We provide all equipment and briefing. Children are welcome from age 6 with an accompanying adult."
      price="from €35/person"
      duration="2–3 hours"
      departurePoint="Chia, South Sardinia"
      groupSize="Max 8 people"
      included={[
        { text: 'Inflatable boat transfer to best snorkeling spots' },
        { text: 'Full snorkeling kit: mask, fins, snorkel' },
        { text: 'Wetsuit or lycra suit (depending on season)' },
        { text: 'Experienced guide on board throughout' },
        { text: 'Multiple stops in different locations' },
        { text: 'Safety equipment and life jackets' },
      ]}
      whoFor={[
        { icon: '👨‍👩‍👧‍👦', label: 'Families with children 6+' },
        { icon: '💑', label: 'Couples' },
        { icon: '🧑‍🤝‍🧑', label: 'Friend groups' },
        { icon: '🌊', label: 'Complete beginners' },
        { icon: '🏖️', label: 'Beach holidaymakers' },
      ]}
      whatToBring={[
        'Swimwear',
        'Towel',
        'Reef-safe sunscreen',
        'Water and snacks',
        'Hat for the boat',
        'Waterproof bag for phone/valuables',
      ]}
      relatedSlugs={['try-scuba', 'private-tours', 'sunset-experience']}
    />
  )
}
