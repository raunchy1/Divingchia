import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import ExperienceShowcase from '@/components/ExperienceShowcase'
import Testimonials from '@/components/Testimonials'
import BookingCTA from '@/components/BookingCTA'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Diving Chia — Scuba Diving & Snorkeling in South Sardinia',
  description:
    'Premium scuba diving and snorkeling experiences in Chia, South Sardinia. Try Scuba, guided dives, private tours, snorkeling boat, and sunset experiences. Small groups, certified instructors, since 1996.',
  openGraph: {
    title: 'Diving Chia — Scuba Diving & Snorkeling in South Sardinia',
    description:
      'Premium scuba diving and snorkeling experiences in Chia, South Sardinia. Small groups, certified instructors, since 1996.',
    url: 'https://www.divingchia.com',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <ExperienceShowcase />
      <Testimonials />
      <BookingCTA />
      <FAQSection preview />
    </>
  )
}
