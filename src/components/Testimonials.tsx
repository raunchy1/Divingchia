const testimonials = [
  {
    name: 'Sarah M.',
    country: '🇬🇧',
    rating: 5,
    text: "We did the Try Scuba with our kids and it was the highlight of our whole Sardinia trip. The instructor was calm, patient, and clearly knew what he was doing. Small group, no rush — exactly what we needed.",
  },
  {
    name: 'Thomas B.',
    country: '🇩🇪',
    rating: 5,
    text: "I'm a certified diver and have dived in a lot of places. The guided dive here was exceptional. They knew exactly where to go, the equipment was impeccable, and the dive sites are genuinely beautiful.",
  },
  {
    name: 'Camille D.',
    country: '🇫🇷',
    rating: 5,
    text: 'The sunset boat experience was magical. We snorkeled in coves accessible only by sea, then had aperitivo watching the sun go down. Nothing generic or touristy about it — it felt personal.',
  },
  {
    name: 'Marco P.',
    country: '🇮🇹',
    rating: 5,
    text: "Professionali, puntuali, attrezzatura in perfette condizioni. Piccoli gruppi come promesso. L'uscita in gommone con snorkeling è stata la migliore che abbia mai fatto in Sardegna.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Reviews
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-navy mt-3 mb-4">
            What People Say
          </h2>
          <p className="font-inter text-gray-500">
            Small groups. Real experiences. Real reviews.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-sand-light rounded-2xl p-7 border border-sand/50"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg
                    key={si}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-inter text-gray-700 leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <span className="text-lg">{t.country}</span>
                <span className="font-inter font-semibold text-navy text-sm">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
