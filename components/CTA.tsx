import React from 'react'
import { ArrowUpRight, ShieldCheck, Gauge, Zap } from 'lucide-react'

const reasons = [
  {
    title: 'Architecture First',
    text: 'Every engagement begins with structured system design to ensure scalability, maintainability, and technical clarity.',
    icon: <ShieldCheck size={24} />
  },
  {
    title: 'Performance & Reliability',
    text: 'Optimized infrastructure, secure deployments, and resilient systems built to operate at scale.',
    icon: <Gauge size={24} />
  },
  {
    title: 'Results That Scale',
    text: 'Execution focused on business impact — not just delivery, but long-term growth enablement.',
    icon: <Zap size={24} />
  }
]

export default function CTA(){
  return (
    <section className="bg-[#f3f4ee] py-16 md:py-20 text-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.9] text-[#111827]">
            Why <span className="text-[#9bbd2d]">Choose Us</span>
          </h2>

          <p className="mt-5 max-w-3xl text-xl text-[#4b5563]">
            Structured engineering, predictable delivery, and systems built to scale.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((item, index) => (
            <article key={index} className="rounded-[28px] border border-[#dfe6d4] bg-[#f8f9f5] p-7 md:p-8 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-3xl md:text-[2.1rem] font-semibold tracking-[-0.04em] text-[#111827] leading-none">
                  {item.title}
                </h3>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7eb7a] text-[#1d2a12] shadow-lg shadow-[#d7eb7a]/30">
                  {item.icon}
                </div>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-[#4b5563]">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-[#dfe6d4] bg-[radial-gradient(circle_at_top_left,_rgba(207,231,109,0.2),_transparent_45%),linear-gradient(135deg,#eaf1d3_0%,#dcebb2_28%,#d9efc0_100%)] p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-black tracking-[-0.05em] text-[#111827] leading-none">
                Ready to build something scalable?
              </h3>
              <p className="mt-5 text-lg text-[#374151]">
                Explore our case studies and see how we deliver high-performance systems with clear execution and measurable results.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#0f172a] px-6 py-4 text-base font-semibold text-white shadow-xl shadow-black/10 transition hover:brightness-110">
                Start a Conversation
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-[#0f172a]/20 bg-white/60 px-6 py-4 text-base font-semibold text-[#111827] transition hover:bg-white">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
