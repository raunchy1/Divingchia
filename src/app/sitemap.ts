import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.divingchia.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/esperienze/try-scuba',
    '/esperienze/guided-dives',
    '/esperienze/snorkeling-boat',
    '/esperienze/private-tours',
    '/esperienze/sunset-experience',
    '/corsi',
    '/prezzi',
    '/sicurezza-attrezzatura',
    '/galleria',
    '/faq',
    '/contatti',
    '/diving-chia',
    '/snorkeling-chia',
    '/try-scuba-chia',
    '/diving-pula-teulada-capoterra',
    '/snorkeling-pula-teulada',
    '/private-boat-tours-chia',
    '/sunset-boat-experience-chia',
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/esperienze') ? 0.9 : 0.7,
  }))
}
