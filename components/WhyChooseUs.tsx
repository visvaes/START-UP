'use client'

import React from 'react'
import { ShieldCheck, Gauge, Lock, Cpu, Terminal, Award, ArrowUpRight } from 'lucide-react'

const pillars = [
  {
    title: 'Architecture First',
    desc: 'Every engagement starts with clean, decoupled distributed systems design to eliminate technical debt and ensure future agility.',
    icon: ShieldCheck
  },
  {
    title: 'Performance & Reliability',
    desc: 'Optimized server response times, high availability SLAs, and resilient error recovery for mission-critical applications.',
    icon: Gauge
  },
  {
    title: 'Secure Engineering',
    desc: 'Deep security mindset using OWASP guidelines, PCI DSS compliance standards, and encrypted data flows.',
    icon: Lock
  },
  {
    title: 'Scalable Systems',
    desc: 'Stateless microservices, Redis caching layers, and database scaling to easily handle enterprise user volume.',
    icon: Cpu
  },
  {
    title: 'DevOps & Automation',
    desc: 'Automated CI/CD release pipelines with automated regression suites (Jenkins, Git, Selenium) for fast, safe deployments.',
    icon: Terminal
  },
  {
    title: 'Technical Leadership',
    desc: '14+ years of software engineering leadership driving sprints, design reviews, estimations, and delivery accuracy.',
    icon: Award
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#f3f4ee] py-24 text-[#111827]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
            OUR CORE ADVANTAGE
          </span>
          <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#111827] sm:text-6xl">
            Why Choose <span className="text-[#9bbd2d]">Saspal Technologies?</span>
          </h2>
          <p className="mt-4 text-lg text-[#4b5563]">
            Structured engineering, predictable delivery, and enterprise systems built to scale with business demands.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className="group relative rounded-[28px] border border-[#dfe6d4] bg-[#f8f9f5] p-8 shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#bfd85d] hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d7eb7a] text-[#1f2937] shadow-lg shadow-[#d7eb7a]/30 group-hover:scale-110 transition-transform">
                    <Icon size={26} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9bbd2d]">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-[#111827] mb-3 group-hover:text-[#9bbd2d] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-base leading-relaxed text-[#4b5563]">
                  {pillar.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-[#dfe5d5] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#6b7280] group-hover:text-[#111827]">
                  <span>Verified Standard</span>
                  <ArrowUpRight size={16} className="text-[#9bbd2d]" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Large Highlight Callout Banner */}
        <div className="rounded-[32px] border border-[#dfe6d4] bg-[radial-gradient(circle_at_top_left,_rgba(215,235,122,0.35),_transparent_50%),linear-gradient(135deg,#edf5d4_0%,#dfeeb1_40%,#d4e797_100%)] p-8 md:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4e5d1d]">
                Enterprise Partnership
              </span>
              <h3 className="mt-2 text-3xl font-black tracking-tight text-[#111827] sm:text-5xl leading-tight">
                Ready to build something scalable and bulletproof?
              </h3>
              <p className="mt-4 text-base text-[#374151] sm:text-lg">
                Talk directly with senior software architects in Dubai. We analyze your requirements, outline clear milestones, and execute with absolute quality.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0f172a] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-[#1f2937] hover:scale-105 transition duration-200"
              >
                Start a Conversation
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-[#0f172a]/20 bg-white/70 px-8 py-4 text-base font-bold text-[#111827] hover:bg-white transition"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
