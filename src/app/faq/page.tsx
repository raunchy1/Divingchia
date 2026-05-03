import type { Metadata } from 'next'
import FAQSection from '@/components/FAQSection'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'FAQ — Diving Chia, South Sardinia',
  description:
    'Answers to common questions about diving and snorkeling in Chia: do you need a license, what to bring, what\'s included, weather policy, and more.',
  openGraph: {
    title: 'FAQ — Diving Chia',
    description: 'Everything you need to know before booking your diving or snorkeling experience in Chia, South Sardinia.',
    url: 'https://www.divingchia.com/faq',
  },
}

export default function FAQPage() {
  return (
    <div className="pt-20">
      <div className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Questions & answers
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3 mb-5">
            Before You Dive
          </h1>
          <p className="font-inter text-lg text-white/70">
            Everything you need to know. If your question isn&apos;t here,
            message us on WhatsApp.
          </p>
        </div>
      </div>
      <FAQSection />
      <BookingCTA />
    </div>
  )
}
