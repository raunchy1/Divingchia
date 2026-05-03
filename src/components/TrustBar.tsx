import { Award, Users, Star, Shield, Compass } from 'lucide-react'

const items = [
  { icon: Award, label: 'Diving in Chia since 1996' },
  { icon: Star, label: 'Licensed PADI & SSI Center' },
  { icon: Users, label: 'Small groups only' },
  { icon: Shield, label: 'Certified instructors' },
  { icon: Compass, label: 'Safety first approach' },
]

export default function TrustBar() {
  return (
    <section className="bg-navy py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <item.icon className="w-4 h-4 text-aqua shrink-0" strokeWidth={1.5} />
              <span className="font-mono text-[11px] text-white/70 uppercase tracking-widest whitespace-nowrap">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden sm:block text-white/20 ml-4">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
