import { Award, Users, Star, Shield, Sliders, Anchor, Map, Waves } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Since 1996',
    description: 'Over 25 years of experience in the waters of Chia.',
  },
  {
    icon: Users,
    title: 'Small Groups',
    description: 'Maximum attention, minimum crowd. We keep numbers tight.',
  },
  {
    icon: Star,
    title: 'Premium Service',
    description: "We don't do mass tourism. Your experience is curated.",
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Equipment checked and managed by our team before every dive.',
  },
  {
    icon: Sliders,
    title: 'Custom Experiences',
    description: 'Built around your group, your pace, and your skill level.',
  },
  {
    icon: Anchor,
    title: 'Boat Snorkeling Tours',
    description: 'We take you to the spots you cannot reach from the shore.',
  },
  {
    icon: Map,
    title: 'Local Knowledge',
    description: 'We know every reef, every current, every secret spot.',
  },
  {
    icon: Waves,
    title: 'All Levels Welcome',
    description: 'From total beginners to experienced divers — everyone fits.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Why us
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Why Diving Chia
          </h2>
          <p className="font-inter text-lg text-white/60 max-w-xl mx-auto">
            We&apos;ve been in these waters since 1996. We know where the fish
            are.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 bg-aqua/20 rounded-xl flex items-center justify-center mb-4">
                <reason.icon className="w-5 h-5 text-aqua" strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair text-lg font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="font-inter text-sm text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
