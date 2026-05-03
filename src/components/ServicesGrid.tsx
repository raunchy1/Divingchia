import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            What we offer
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-navy mt-3 mb-4">
            Choose Your Experience
          </h2>
          <p className="font-inter text-lg text-gray-500 max-w-xl mx-auto">
            Every dive is designed around you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group relative rounded-2xl overflow-hidden card-hover bg-sand-light border border-sand/50 block"
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-navy to-aqua overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-card-gradient" />
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-white/95 text-navy text-xs font-mono font-bold px-3 py-1.5 rounded-full">
                  {service.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-aqua">
                  {service.duration}
                </span>
                <h3 className="font-playfair text-xl font-bold text-navy mt-1 mb-2">
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-aqua text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Discover
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
