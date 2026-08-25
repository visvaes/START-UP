import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Insights(){
  return (
    <section id="insights" className="bg-[#f3f4ee] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
              OUR BLOG
            </span>
            <h2 className="mt-6 md:mt-8 text-4xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9] text-[#111827]">
              Latest <span className="text-[#9bbd2d]">Insights</span>
            </h2>
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 self-start rounded-full bg-[#d7eb7a] px-5 py-3 text-sm font-semibold text-[#1d2a12] shadow-lg shadow-[#d7eb7a]/30 transition hover:brightness-105">
            View All Posts <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((cardNumber) => (
            <article key={cardNumber} className="min-h-[510px] overflow-hidden rounded-[22px] border border-[#dfe6d4] bg-[#f8f9f5] shadow-[0_10px_30px_rgba(17,24,39,0.04)]" />
          ))}
        </div>
      </div>
    </section>
  )
}