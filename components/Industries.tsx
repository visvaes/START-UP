'use client'

import React, { useRef } from 'react'
import { ArrowRight, Plane, Compass, GraduationCap, Tv, Users, ShoppingCart, Building, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react'

const industries = [
  {
    name: 'Aviation',
    icon: Plane,
    desc: 'High-availability flight booking engines, rules-based pricing, and real-time inventory systems.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Travel & Hospitality',
    desc: 'End-to-end booking platforms, payment gateways, reservation flows, and loyalty management.',
    icon: Compass,
    desc2: 'Global booking solutions built for scale.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Education',
    desc: 'LMS platforms, student analytics, assessment engines, and digital learning portals.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Media & Streaming',
    desc: 'Digital content management, high-throughput delivery systems, and interactive media apps.',
    icon: Tv,
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'HR & Workforce',
    desc: 'HR tech, talent management platforms, payroll integration, and employee workflow automation.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'E-Commerce',
    desc: 'Scalable online storefronts, catalog search engines, checkout optimizations, and inventory sync.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1556742049-0a6796d7c782?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Enterprise Software',
    desc: 'B2B SaaS platforms, workflow automation, legacy system modernization, and secure APIs.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Digital Commerce',
    desc: 'Omnichannel commerce platforms, payment gateway integrations, and subscription billing.',
    icon: CreditCard,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80'
  }
]

export default function Industries() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="industries" className="bg-[#f3f4ee] py-20 overflow-hidden text-[#111827]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
              DOMAINS WE SERVE
            </span>
            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#111827] sm:text-6xl">
              Industry-tailored <span className="text-[#9bbd2d]">engineering</span>
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-[#4b5563]">
              Deep domain knowledge in building mission-critical platforms across key global sectors.
            </p>
          </div>

          {/* Carousel Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dfe6d4] bg-white text-[#111827] shadow-sm transition hover:bg-[#d7eb7a] hover:border-[#d7eb7a]"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dfe6d4] bg-white text-[#111827] shadow-sm transition hover:bg-[#d7eb7a] hover:border-[#d7eb7a]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {industries.map((ind, idx) => {
            const Icon = ind.icon
            return (
              <div
                key={idx}
                className="group relative h-[380px] min-w-[300px] sm:min-w-[340px] snap-start overflow-hidden rounded-[28px] border border-[#dfe6d4] bg-[#0f172a] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Background Image */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
                />

                {/* Dark Overlay Gradient with Brand Highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />

                {/* Card Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-7 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7eb7a] text-[#1f2937] shadow-lg shadow-[#d7eb7a]/20">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#d7eb7a]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#d7eb7a] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {ind.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#d7eb7a] group-hover:translate-x-2 transition-transform">
                      <span>Explore Domain</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
