import type { Metadata } from 'next'
import ExperiencePageTemplate from '@/components/ExperiencePageTemplate'

export const metadata: Metadata = {
  title: 'Guided Dives in Chia — For Certified Divers',
  description:
    'Guided scuba dives in the waters of South Sardinia for certified divers. Explore reefs, walls and marine life with a local expert. Small groups only.',
  keywords: ['guided dives chia', 'scuba diving chia', 'certified diving sardinia', 'diving south sardinia'],
  openGraph: {
    title: 'Guided Dives in Chia — For Certified Divers',
    description:
      'Dive with a local expert who knows every reef and current in South Sardinia. Small groups, premium equipment, unforgettable sites.',
    url: 'https://www.divingchia.com/esperienze/guided-dives',
  },
}

export default function GuidedDivesPage() {
  return (
    <ExperiencePageTemplate
      title="Guided Dives"
      subtitle="For certified divers"
      heroImage="/images/guided-dives.jpg"
      description="You have your certification. Now dive with someone who knows these waters intimately. The reefs off the coast of Chia hold a different world — posidonia meadows that filter the light, rocky walls where grouper patrol, sandy channels where rays rest in the afternoon. We know the sites, we know the currents, and we keep the groups small enough that you actually get to enjoy it."
      additionalInfo="We accept all recognised certifications: PADI Open Water and above, SSI, CMAS, BSAC, and equivalents. Minimum certification required. If you're not certified yet, our courses will get you there."
      price="from €45/person"
      duration="2–3 hours per dive"
      departurePoint="Chia, South Sardinia"
      groupSize="Max 6 divers"
      included={[
        { text: 'Full equipment: tank, BCD, regulator, wetsuit, mask, fins' },
        { text: 'Pre-dive briefing and site introduction' },
        { text: 'Certified divemaster/instructor guide throughout' },
        { text: 'Surface support and safety equipment' },
        { text: 'Insurance included' },
        { text: 'Multi-dive discounts available — ask when booking' },
      ]}
      whoFor={[
        { icon: '🤿', label: 'Open Water certified divers' },
        { icon: '🏅', label: 'Advanced divers' },
        { icon: '🧑‍🤝‍🧑', label: 'Small dive groups' },
        { icon: '💑', label: 'Diving couples' },
        { icon: '🗺️', label: 'Explorers and naturalists' },
      ]}
      whatToBring={[
        'Your certification card (C-card)',
        'Dive logbook if you have one',
        'Swimwear',
        'Towel',
        'Water and snacks',
        'Sunscreen (reef-safe)',
      ]}
      relatedSlugs={['try-scuba', 'private-tours', 'courses']}
    />
  )
}
