import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: 'saas',
    title: 'SaaS Platforms',
    desc: 'Multi-tenant architecture with subscription billing and scalable APIs.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'web',
    title: 'Web Development',
    desc: 'High-performance apps built with modern frameworks for speed and scale.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile apps with seamless experiences on every device.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'ux',
    title: 'UI/UX Design',
    desc: 'Research-driven design systems that balance beauty with conversion.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    desc: 'Custom storefronts and checkout flows engineered for high conversion.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    desc: 'Data-driven SEO, acquisition, and conversion rate optimization.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'
  }
]

export default function Services(){
  return (
    <section id="services" className="bg-[#f3f4ee] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
            WHAT WE DO
          </span>
        </div>

        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.9] text-[#111827]">
            Engineering Digital
            <span className="block text-[#9bbd2d]">Excellence</span>
          </h2>

          <a href="#contact" className="inline-flex items-center gap-2 self-start rounded-full bg-[#d7eb7a] px-5 py-3 text-sm font-semibold text-[#1d2a12] shadow-lg shadow-[#d7eb7a]/30 transition hover:brightness-105">
            View All Capabilities <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <article key={s.id} className="group overflow-hidden rounded-[22px] border border-[#dfe6d4] bg-[#f8f9f5] p-4 shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition hover:-translate-y-1 hover:border-[#bfd85d]">
              <div className="flex items-center justify-between pb-4">
                <h3 className="text-[1.7rem] md:text-[1.9rem] font-semibold tracking-[-0.04em] text-[#111827] leading-none">{s.title}</h3>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7eb7a] text-[#1d2a12] shadow-lg shadow-[#d7eb7a]/30 flex-shrink-0">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="h-px w-full bg-[#dfe5d5] mb-4" />

              <p className="text-[0.97rem] leading-relaxed text-[#4b5563] min-h-[60px]">{s.desc}</p>

              <div className="mt-5 overflow-hidden rounded-[16px]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
