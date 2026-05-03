import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery — Diving Chia, South Sardinia',
  description:
    'Photo gallery from Diving Chia: underwater dives, snorkeling in crystal waters, boat trips, equipment, and the team. Chia, South Sardinia.',
  openGraph: {
    title: 'Gallery — Diving Chia',
    description: 'Photos from our diving and snorkeling experiences in Chia, South Sardinia.',
    url: 'https://www.divingchia.com/galleria',
  },
}

export default function GalleriaPage() {
  return <GalleryClient />
}
