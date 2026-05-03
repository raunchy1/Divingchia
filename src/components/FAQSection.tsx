'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '@/lib/constants'

interface FAQSectionProps {
  preview?: boolean
}

export default function FAQSection({ preview = false }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null)
  const items = preview ? FAQS.slice(0, 5) : FAQS

  return (
    <section className="py-24 bg-sand-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Questions
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-navy mt-3 mb-4">
            Before You Dive
          </h2>
          <p className="font-inter text-gray-500">
            Everything you need to know before you book.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {items.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-sand/60 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-inter font-semibold text-navy text-sm sm:text-base">
                  {faq.question}
                </span>
                <span className="shrink-0 w-6 h-6 bg-sand rounded-full flex items-center justify-center">
                  {open === i ? (
                    <Minus className="w-3 h-3 text-navy" />
                  ) : (
                    <Plus className="w-3 h-3 text-navy" />
                  )}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="font-inter text-gray-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Link to full FAQ */}
        {preview && (
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-aqua font-semibold hover:text-navy transition-colors"
            >
              View all FAQs →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
