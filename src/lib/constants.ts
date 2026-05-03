// ⚠️  UPDATE THIS: Replace with the actual phone number from divingchia.com
export const PHONE_NUMBER = '393338858000'

export const WA_MESSAGE = encodeURIComponent(
  'Hi, I would like to book an experience.\nDate:\nPeople:\nActivity:\nLevel:\nWhere are you staying?'
)

export const WA_URL = `https://wa.me/${PHONE_NUMBER}?text=${WA_MESSAGE}`

export const SITE_URL = 'https://www.divingchia.com'

export const SITE_NAME = 'Diving Chia'

export const SITE_TAGLINE = 'Diving in Chia since 1996'

export const CONTACT_EMAIL = 'info@divingchia.com'

export const GOOGLE_MAPS_URL =
  'https://maps.google.com/?q=Chia,+Sud+Sardegna,+Italia'

export const SERVICES = [
  {
    slug: 'try-scuba',
    title: 'Try Scuba',
    subtitle: 'First dive, no license needed',
    description:
      'Your first breath underwater. No experience required — our certified instructors guide you every step of the way in the crystal waters of Chia.',
    price: 'from €60/person',
    duration: '3 hours',
    href: '/esperienze/try-scuba',
    image: '/images/try-scuba.jpg',
    color: '#0A2342',
  },
  {
    slug: 'guided-dives',
    title: 'Guided Dives',
    subtitle: 'For certified divers',
    description:
      'Explore the underwater world of South Sardinia with a local expert who knows every reef, every current, every secret spot.',
    price: 'from €45/person',
    duration: '2–3 hours',
    href: '/esperienze/guided-dives',
    image: '/images/guided-dives.jpg',
    color: '#1A8FBD',
  },
  {
    slug: 'snorkeling-boat',
    title: 'Snorkeling Boat',
    subtitle: 'Crystal waters by inflatable boat',
    description:
      'We take you where the sea is most spectacular — by boat. Access the best snorkeling spots in Chia that you simply cannot reach on foot.',
    price: 'from €35/person',
    duration: '2–3 hours',
    href: '/esperienze/snorkeling-boat',
    image: '/images/snorkeling-boat.jpg',
    color: '#0A2342',
  },
  {
    slug: 'private-tours',
    title: 'Private & Custom Tours',
    subtitle: 'Tailor-made for you',
    description:
      'For couples, families, and groups who want something more. We design the experience around your group, your pace, your level.',
    price: 'Custom quote',
    duration: 'Flexible',
    href: '/esperienze/private-tours',
    image: '/images/private-tours.jpg',
    color: '#1A8FBD',
  },
  {
    slug: 'sunset-experience',
    title: 'Sunset Boat Experience',
    subtitle: 'Aperitivo included',
    description:
      'The sea at golden hour, from a boat. Snorkeling, swimming, and an aperitivo as the sun drops behind the Sardinian headlands.',
    price: 'from €55/person',
    duration: '3 hours',
    href: '/esperienze/sunset-experience',
    image: '/images/sunset-experience.jpg',
    color: '#0A2342',
  },
  {
    slug: 'courses',
    title: 'Diving Courses',
    subtitle: 'PADI & SSI certification',
    description:
      'Get certified in one of the most beautiful diving destinations in the Mediterranean. Open Water, Advanced, and specialty courses available.',
    price: 'On request',
    duration: '2–4 days',
    href: '/corsi',
    image: '/images/courses.jpg',
    color: '#1A8FBD',
  },
]

export const FAQS = [
  {
    question: 'Do I need a diving license?',
    answer:
      'Not for Try Scuba or snorkeling experiences. For guided dives you need an Open Water certification (PADI, SSI, or equivalent). We offer full courses if you want to get certified.',
  },
  {
    question: 'Can complete beginners participate?',
    answer:
      'Absolutely. Try Scuba is designed specifically for first-timers. Our instructors will brief you fully, accompany you the entire time, and ensure you feel comfortable in the water before going deeper.',
  },
  {
    question: 'What happens if sea conditions are bad?',
    answer:
      'Your safety comes first. If conditions are unsafe we will reschedule at no cost. We monitor weather and sea conditions daily and will contact you in advance if we need to move your booking.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Swimwear, a towel, sunscreen (reef-safe preferred), and water. For snorkeling tours: comfortable shoes for the boat. Everything else — wetsuit, mask, fins, tanks — is provided by us.',
  },
  {
    question: 'Is equipment included?',
    answer:
      'Yes. All equipment is included in the price and is maintained and checked by our team before every outing. You do not need to bring or rent anything separately.',
  },
  {
    question: 'How long does the experience last?',
    answer:
      'Try Scuba and snorkeling tours run for approximately 2–3 hours. Guided dives are typically 2–3 hours including briefing and surface intervals. Courses run over multiple days depending on the certification.',
  },
  {
    question: 'Where do we meet and depart from?',
    answer:
      'We depart from Chia, South Sardinia. Exact meeting point is confirmed at booking. We are happy to help with directions or pickup coordination from nearby hotels and accommodations.',
  },
  {
    question: 'Are snacks or photos included?',
    answer:
      'The Sunset Boat Experience includes an aperitivo. For other experiences, we recommend bringing water and snacks. Underwater photos are available as an optional add-on — ask us when booking.',
  },
]
