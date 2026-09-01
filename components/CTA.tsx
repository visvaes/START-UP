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
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[0.9] tracking-[-0.05em] text-[#111827] md:mt-8 md:text-6xl">
            Why <span className="text-[#9bbd2d]">choose us</span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg text-[#4b5563] md:text-xl">
            Structured engineering, predictable delivery, and systems built to scale with business demands.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((item, index) => (
            <article key={index} className="rounded-[28px] border border-[#dfe6d4] bg-[#f8f9f5] p-7 shadow-[0_12px_30px_rgba(17,24,39,0.04)] transition hover:-translate-y-1 md:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-3xl font-semibold leading-none tracking-[-0.04em] text-[#111827] md:text-[2.1rem]">
                  {item.title}
                </h3>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7eb7a] text-[#1d2a12] shadow-lg shadow-[#d7eb7a]/30">
                  {item.icon}
                </div>
              </div>

              <p className="text-base leading-relaxed text-[#4b5563] md:text-lg">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-[#dfe6d4] bg-[radial-gradient(circle_at_top_left,_rgba(207,231,109,0.22),_transparent_38%),linear-gradient(135deg,#edf5d4_0%,#dfeeb1_35%,#d4e797_100%)] p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-black leading-none tracking-[-0.05em] text-[#111827] md:text-5xl">
                Ready to build something scalable?
              </h3>
              <p className="mt-5 text-lg text-[#374151]">
                Explore how our engineering practice combines strategy, architecture, and execution to help teams ship reliable digital products faster.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#1f2937] px-6 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/10 transition hover:bg-[#111827]">
                Start a Conversation
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-[#1f2937]/20 bg-white/60 px-6 py-4 text-base font-semibold text-[#111827] transition hover:bg-white">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
