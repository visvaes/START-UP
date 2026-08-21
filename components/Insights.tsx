import React from 'react'
import { ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react'

const insights = [
  {
    category: 'SaaS Development',
    title: 'Building Scalable SaaS Platforms in 2025',
    desc: 'A practical, architecture-first guide to building scalable SaaS products with resilient foundations and room to grow.',
    date: 'Dec 15, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85'
  },
  {
    category: 'Mobile Apps',
    title: 'The Complete Guide to Cross-Platform Mobile Development',
    desc: 'How to choose the right mobile approach, balance speed and quality, and create experiences that scale across devices.',
    date: 'Nov 28, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85'
  },
  {
    category: 'E-Commerce',
    title: 'E-Commerce Conversion Strategies That Work',
    desc: 'Practical ways to reduce checkout friction, improve storefront performance, and build a stronger digital buying journey.',
    date: 'Nov 10, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85'
  }
]

export default function Insights(){
  return (
    <section id="insights" className="bg-[#f3f4ee] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
              OUR BLOG
            </span>
            <h2 className="mt-8 text-6xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9] text-[#111827]">
              Latest <span className="text-[#9bbd2d]">Insights</span>
            </h2>
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 self-start rounded-full bg-[#d7eb7a] px-5 py-3 text-sm font-semibold text-[#1d2a12] shadow-lg shadow-[#d7eb7a]/30 transition hover:brightness-105">
            View All Posts <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {insights.map((insight) => (
            <article key={insight.title} className="group overflow-hidden rounded-[22px] border border-[#dfe6d4] bg-[#f8f9f5] shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition hover:-translate-y-1 hover:border-[#bfd85d]">
              <div className="relative h-56 overflow-hidden">
                <img src={insight.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-[#d7eb7a] px-3 py-2 text-xs font-semibold text-[#1d2a12]">
                  {insight.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold tracking-[-0.04em] leading-tight text-[#111827]">{insight.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">{insight.desc}</p>

                <div className="mt-6 flex items-center justify-between border-t border-[#dfe5d5] pt-4 text-xs text-[#6b7280]">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays size={14} />{insight.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock3 size={14} />{insight.readTime}</span>
                  </div>
                  <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#7da522] transition group-hover:text-[#1d2a12]">
                    Read <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}