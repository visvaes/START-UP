'use client'

import React from 'react'
import { ShieldCheck, CheckCircle2, Lock, Cpu, Clock, Award } from 'lucide-react'

const trustPillars = [
  {
    title: 'Reliable Delivery',
    desc: 'Structured sprint execution with predictable release milestones, clear scope management, and zero production surprises.',
    icon: Clock
  },
  {
    title: 'Technical Expertise',
    desc: 'Deep mastery across React, .NET Core, Node.js, Java, SQL, and microservices architecture verified over 14+ years.',
    icon: Award
  },
  {
    title: 'Secure Systems',
    desc: 'Security-by-design incorporating OWASP guidelines, PCI DSS data protection standards, and encrypted communications.',
    icon: Lock
  },
  {
    title: 'Long-Term Maintainability',
    desc: 'Clean code practices, thorough documentation, automated test suites, and decoupled service boundaries.',
    icon: Cpu
  },
  {
    title: 'Enterprise Engineering',
    desc: 'High availability system design, disaster recovery planning, and robust operational support SLAs for business stability.',
    icon: ShieldCheck
  }
]

export default function Testimonials(){
  return (
    <section id="trust" className="bg-[#f3f4ee] py-20 text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
            QUALITY & COMMITMENT
          </span>
          <h2 className="mt-4 text-4xl sm:text-6xl font-black tracking-[-0.05em] text-[#111827]">
            Trusted Engineering <span className="text-[#9bbd2d]">Approach</span>
          </h2>
          <p className="mt-3 text-[#4b5563] text-lg">
            We partner with organizations requiring high technical standards, transparent communication, and software built to last.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPillars.map((p, idx) => {
            const Icon = p.icon
            return (
              <div
                key={idx}
                className="group rounded-[28px] border border-[#dfe6d4] bg-[#f8f9f5] p-8 shadow-sm transition-all duration-300 hover:border-[#bfd85d] hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7eb7a] text-[#1f2937] shadow-md">
                    <Icon size={24} />
                  </div>
                  <CheckCircle2 size={20} className="text-[#9bbd2d]" />
                </div>

                <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#9bbd2d] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
