'use client'

import React, { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Enterprise Digital Platform Modernization',
    subtitle: 'FMCG / Manufacturing',
    desc: 'Led a large-scale digital modernization initiative transforming fragmented legacy platforms into a modular, headless, performance-optimized ecosystem with structured governance and SLA-backed support.',
    fullDesc: 'This modernization program reworked legacy systems into a modular, scalable digital platform aligned with business growth and operational control. The goal was to improve platform structure, release quality, and speed without disrupting core operations.',
    results: ['Modular platform architecture', 'Improved release quality', 'Operational governance', 'Performance optimization'],
    tags: ['Platform Modernization', 'Enterprise Systems', 'Architecture', 'Automation'],
    challenges: ['Fragmented legacy stacks', 'Low release predictability', 'Limited scalability'],
    solution: 'We redesigned the platform around a cleaner architecture, modernized key workflows, and introduced process controls to create a more resilient operational foundation.',
    link: '#contact',
    image: ''
  },
  {
    id: 2,
    title: 'End-to-End SaaS Product Engineering',
    subtitle: 'Logistics / B2B SaaS',
    desc: 'Designed and engineered a scalable multi-tenant SaaS platform with secure APIs, operational dashboards, automation workflows, and real-time integrations for a growing business.',
    fullDesc: 'The product required a clear architecture, secure integrations, and a flexible data model to support multiple business operations. We built the foundation for scalable growth while ensuring maintainability and high operational visibility.',
    results: ['Multi-tenant SaaS foundation', 'Secure integrations', 'Operational dashboards', 'Workflow automation'],
    tags: ['SaaS', 'API Design', 'Dashboards', 'B2B'],
    challenges: ['Scale with multiple tenants', 'Workflow complexity', 'Reliable integrations'],
    solution: 'We created a robust SaaS architecture with modular services, real-time operational visibility, and automation capabilities that simplified daily management.',
    link: '#contact',
    image: ''
  },
  {
    id: 3,
    title: 'Scalable Commerce Architecture & Optimization',
    subtitle: 'Retail / DTC',
    desc: 'Engineered a high-performance commerce ecosystem with optimized UX, secure payments, logistics integrations, and conversion-focused tracking architecture.',
    fullDesc: 'The project focused on building a growth-ready commerce platform that could support customer acquisition and conversion improvements while maintaining a strong operational backend.',
    results: ['Conversion-focused UX', 'Secure checkout flow', 'Logistics integration', 'Commerce optimization'],
    tags: ['E-Commerce', 'UX', 'Payments', 'Growth'],
    challenges: ['Checkout friction', 'Operational complexity', 'Low visibility'],
    solution: 'We redesigned the storefront and commerce architecture around conversion, reliability, and visibility, enabling a stronger digital customer experience.',
    link: '#contact',
    image: ''
  }
]

export default function Projects(){
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)

  return (
    <section id="projects" className="py-16 bg-[#f3f4ee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mb-12">
          <h2 className="text-6xl md:text-7xl font-black tracking-[-0.06em] text-[#111827] mb-4">Selected Work</h2>
          <p className="text-[#4b5563] text-xl leading-relaxed">We partner with businesses to design and deliver scalable digital systems that support long-term growth, performance, and operational clarity.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-[#f8f9f5] rounded-[22px] border border-[#dfe6d4] shadow-[0_10px_30px_rgba(17,24,39,0.04)] hover:-translate-y-1 transition cursor-pointer p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-5xl font-black tracking-[-0.08em] text-[#dfe3df]">0{p.id}</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7eb7a] text-[#1d2a12] shadow-lg shadow-[#d7eb7a]/30">
                <ExternalLink size={18} />
              </div>
            </div>

            <div className="text-sm text-[#4b5563] font-semibold mb-4">{p.subtitle}</div>
            <h3 className="text-2xl md:text-[2.1rem] font-bold tracking-[-0.04em] text-[#111827] mb-4 leading-tight">{p.title}</h3>
            <p className="text-[#4b5563] text-base leading-relaxed mb-5">{p.desc}</p>

            <div className="mb-5">
              <h4 className="text-sm font-semibold text-[#111827] mb-2">Key Results:</h4>
              <ul className="text-sm text-[#4b5563] space-y-1">
                {p.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#9bbd2d] mt-1">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs bg-[#edf4d3] text-[#2f2f2f] px-3 py-1 rounded-full border border-[#dfe3df]">
                  {tag}
                </span>
              ))}
            </div>

            <button onClick={() => setSelectedProject(p)} className="mt-5 inline-flex items-center gap-2 text-[#111827] hover:text-[#1f2937] font-semibold text-sm">
              Explore <ExternalLink size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#BAFF39]">
            <div className="sticky top-0 bg-white border-b border-[#BAFF39] p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h2>
              <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-sm text-[#4d4d4d] font-semibold mb-2">{selectedProject.subtitle}</h3>
                <p className="text-slate-700 mb-4">{selectedProject.fullDesc}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Challenges</h4>
                  <ul className="space-y-2">
                    {selectedProject.challenges?.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="text-[#b5b7b2] mt-1">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-slate-900 mb-3">Solution</h4>
                <p className="text-slate-600 text-sm">{selectedProject.solution}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-[#e5e7eb] text-[#2f2f2f] px-3 py-1 rounded-full border border-[#dfe3df]">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={selectedProject.link} className="inline-flex items-center gap-2 bg-[#BAFF39] text-[#1f2937] px-6 py-2 rounded-lg hover:brightness-110 font-semibold">
                Start a Conversation <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
