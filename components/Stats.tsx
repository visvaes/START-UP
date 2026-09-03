'use client'

import React from 'react'
import { Award, Globe, Code2, Building2 } from 'lucide-react'

const statsData = [
  {
    number: '14+',
    label: 'Years of Software Delivery',
    subtext: 'Enterprise engineering & architecture across global products',
    icon: Award
  },
  {
    number: 'UAE',
    label: 'Dubai-Based Headquarters',
    subtext: 'Serving Middle East, US & global enterprise clients',
    icon: Globe
  },
  {
    number: 'Full Stack',
    label: 'Engineering Expertise',
    subtext: 'React, Node.js, .NET, Microservices & Cloud Native',
    icon: Code2
  },
  {
    number: 'Enterprise',
    label: 'Product Engineering',
    subtext: 'High-availability platforms, aviation & payment systems',
    icon: Building2
  }
]

export default function Stats() {
  return (
    <section id="stats" className="relative z-20 -mt-10 mx-4 md:mx-6">
      <div className="container mx-auto">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="group live-card relative overflow-hidden rounded-[24px] border border-[#dfe6d4] bg-[#f8f9f5] p-6 shadow-[0_10px_30px_rgba(17,24,39,0.05)] hover:border-[#bfd85d]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black tracking-tight text-[#111827] group-hover:text-[#9bbd2d] transition-colors">
                    {stat.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4d3] text-[#4e5d1d] group-hover:bg-[#d7eb7a] group-hover:text-[#1f2937] transition duration-300">
                    <Icon size={24} />
                  </div>
                </div>

                <h3 className="mt-4 text-base font-bold text-[#111827]">{stat.label}</h3>
                <p className="mt-1 text-xs text-[#6b7280] leading-relaxed">{stat.subtext}</p>
                <div className="mt-4 h-1 w-12 rounded-full bg-[#d7eb7a] transition-all duration-300 group-hover:w-full" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
