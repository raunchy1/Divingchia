import type { Metadata } from 'next'
import { Playfair_Display, Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Diving Chia — Scuba Diving & Snorkeling in South Sardinia',
    template: '%s | Diving Chia',
  },
  description:
    'Premium scuba diving and snorkeling experiences in Chia, South Sardinia. Small groups, certified instructors, active since 1996. Try Scuba, guided dives, private tours, snorkeling boat, and sunset experiences.',
  keywords: [
    'diving chia',
    'snorkeling chia',
    'scuba diving sardinia',
    'diving south sardinia',
    'try scuba chia',
    'diving center chia',
    'snorkeling sardinia',
    'private boat tours chia',
    'sunset boat experience chia',
    'PADI sardinia',
    'SSI sardinia',
  ],
  authors: [{ name: 'Diving Chia' }],
  creator: 'Diving Chia',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.divingchia.com',
    siteName: 'Diving Chia',
    title: 'Diving Chia — Scuba Diving & Snorkeling in South Sardinia',
    description:
      'Premium scuba diving and snorkeling experiences in Chia, South Sardinia. Small groups, certified instructors, active since 1996.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Diving Chia — Crystal waters of South Sardinia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diving Chia — Scuba Diving & Snorkeling in South Sardinia',
    description:
      'Premium scuba diving and snorkeling experiences in Chia, South Sardinia. Small groups, certified instructors, since 1996.',
    images: ['/images/og-image.jpg'],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
