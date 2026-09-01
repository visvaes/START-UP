'use client'

import React from 'react'
import { Award, Users, CheckCircle2, Code } from 'lucide-react'

const metrics = [
  { value: '14+', label: 'Years Experience', note: 'Enterprise software architecture & development', icon: Award },
  { value: '8+', label: 'Team Members Led', note: 'Sprint planning, retrospectives & mentoring', icon: Users },
  { value: 'Enterprise', label: 'Projects Delivered', note: 'Aviation, HR, media, e-commerce platforms', icon: CheckCircle2 },
  { value: 'Full Stack', label: 'Engineering Expertise', note: 'React, .NET, Node.js, SQL & DevOps', icon: Code }
]

export default function Achievements() {
  return (
    <section className="bg-[#0f172a] text-white py-20 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(215,235,122,0.15),_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d7eb7a]/40 bg-[#d7eb7a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d7eb7a]">
            TRACK RECORD & METRICS
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl text-white">
            Proven Delivery <span className="text-[#d7eb7a]">At Enterprise Scale</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            A history of consistent execution across complex software systems and cross-functional teams.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon
            return (
              <div
                key={idx}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-[#d7eb7a] hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7eb7a] text-[#1f2937] font-bold shadow-lg shadow-[#d7eb7a]/20">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#d7eb7a]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-4xl font-black text-white group-hover:text-[#d7eb7a] transition-colors">
                  {m.value}
                </div>
                <div className="mt-2 text-base font-bold text-white">{m.label}</div>
                <div className="mt-1 text-xs text-slate-300 leading-relaxed">{m.note}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
