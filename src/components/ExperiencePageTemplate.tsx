import Image from 'next/image'
import Link from 'next/link'
import { Check, Clock, MapPin, Users, ArrowRight } from 'lucide-react'
import { WA_URL, SERVICES } from '@/lib/constants'

interface IncludedItem {
  text: string
}

interface WhoItem {
  icon: string
  label: string
}

interface ExperiencePageProps {
  title: string
  subtitle: string
  heroImage: string
  description: string
  price: string
  duration: string
  departurePoint: string
  groupSize: string
  included: IncludedItem[]
  whoFor: WhoItem[]
  whatToBring: string[]
  additionalInfo?: string
  relatedSlugs: string[]
}

export default function ExperiencePageTemplate({
  title,
  subtitle,
  heroImage,
  description,
  price,
  duration,
  departurePoint,
  groupSize,
  included,
  whoFor,
  whatToBring,
  additionalInfo,
  relatedSlugs,
}: ExperiencePageProps) {
  const relatedServices = SERVICES.filter((s) => relatedSlugs.includes(s.slug))

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] bg-gradient-to-br from-navy to-aqua">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-navy/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
            <span className="font-mono text-xs uppercase tracking-widest text-aqua">
              {subtitle}
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Quick stats bar */}
      <div className="bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap divide-x divide-white/10">
            {[
              { icon: Clock, label: 'Duration', value: duration },
              { icon: MapPin, label: 'Departure', value: departurePoint },
              { icon: Users, label: 'Group size', value: groupSize },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-4">
                <stat.icon className="w-4 h-4 text-aqua shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    {stat.label}
                  </div>
                  <div className="font-inter text-sm font-semibold text-white">
                    {stat.value}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 px-6 py-4 ml-auto">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  Price
                </div>
                <div className="font-playfair text-lg font-bold text-aqua">
                  {price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          {/* Left: description + details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <p className="font-inter text-gray-700 text-lg leading-relaxed">
                {description}
              </p>
              {additionalInfo && (
                <p className="font-inter text-gray-600 leading-relaxed mt-4">
                  {additionalInfo}
                </p>
              )}
            </div>

            {/* What's included */}
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-5">
                What&apos;s Included
              </h2>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-aqua/15 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-aqua" strokeWidth={2.5} />
                    </div>
                    <span className="font-inter text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who it's for */}
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-5">
                Who It&apos;s For
              </h2>
              <div className="flex flex-wrap gap-3">
                {whoFor.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-sand-light border border-sand rounded-full px-4 py-2"
                  >
                    <span>{item.icon}</span>
                    <span className="font-inter text-sm text-navy font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to bring */}
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-5">
                What to Bring
              </h2>
              <ul className="grid grid-cols-2 gap-2">
                {whatToBring.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-600 font-inter"
                  >
                    <span className="w-1.5 h-1.5 bg-aqua rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: booking widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-navy rounded-3xl p-7 text-white">
              <div className="font-mono text-xs uppercase tracking-widest text-aqua mb-2">
                Book this experience
              </div>
              <div className="font-playfair text-3xl font-bold mb-1">{price}</div>
              <p className="text-white/50 text-xs mb-6">
                Equipment included · Small groups
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl hover:bg-[#1ebe5d] transition-colors mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
              <p className="text-white/30 text-xs text-center">
                We reply within a few hours
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Check className="w-3.5 h-3.5 text-aqua" />
                  <span>All equipment provided</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Check className="w-3.5 h-3.5 text-aqua" />
                  <span>Certified instructors</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Check className="w-3.5 h-3.5 text-aqua" />
                  <span>Free reschedule if sea conditions are bad</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Check className="w-3.5 h-3.5 text-aqua" />
                  <span>No hidden fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related experiences */}
      {relatedServices.length > 0 && (
        <div className="bg-sand-light py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-2xl font-bold text-navy mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-sand/50 hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40 bg-gradient-to-br from-navy to-aqua">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-card-gradient" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-playfair text-lg font-bold text-navy">
                      {service.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500 font-mono">
                        {service.price}
                      </span>
                      <span className="text-aqua text-sm group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
