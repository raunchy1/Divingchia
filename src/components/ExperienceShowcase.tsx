import Link from 'next/link'
import Image from 'next/image'

const showcases = [
  {
    title: 'Private & Custom Tours',
    subtitle: 'Built around you',
    body: "You don't fit into a standard package — that's fine. We plan the experience around your group: how many people, what skill levels, what you want to see. Couples, families, groups of friends. We take care of everything.",
    cta: 'Plan your tour',
    href: '/esperienze/private-tours',
    image: '/images/private-tours-showcase.jpg',
    imageLeft: true,
  },
  {
    title: 'Sunset Boat Experience',
    subtitle: 'The sea at golden hour',
    body: 'As the sun drops behind the Sardinian headlands, the light turns the water to bronze and the rocks to fire. We snorkel, we swim, we drift. Then the aperitivo appears. This is how you end a day in Sardinia.',
    cta: 'Book sunset experience',
    href: '/esperienze/sunset-experience',
    image: '/images/sunset-showcase.jpg',
    imageLeft: false,
  },
]

export default function ExperienceShowcase() {
  return (
    <section className="py-24 bg-sand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Featured
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-navy mt-3">
            The Full Picture
          </h2>
        </div>

        <div className="space-y-20">
          {showcases.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                item.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-80 lg:h-[440px] rounded-3xl overflow-hidden bg-gradient-to-br from-navy to-aqua">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <span className="font-mono text-xs uppercase tracking-widest text-aqua">
                  {item.subtitle}
                </span>
                <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mt-3 mb-5">
                  {item.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed text-lg mb-8">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3.5 rounded-full hover:bg-aqua transition-colors"
                >
                  {item.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
