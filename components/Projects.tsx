'use client'

import React, { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Aviation & Flight Booking Platform',
    subtitle: 'Aviation / Travel Operations',
    desc: 'Delivered booking and travel technology solutions for aviation and e-commerce environments, covering secure flight booking flows, customer-facing journeys, and operational integrations.',
    fullDesc: 'This work focused on enterprise-grade travel systems where reliability, data accuracy, and secure processing are critical. The platform needed to support booking workflows, operational visibility, and integration with downstream systems without compromising performance or compliance requirements.',
    results: ['Secure booking workflows', 'Operational visibility', 'Integrations across systems', 'Production support excellence'],
    tags: ['Aviation', 'Flight Booking', 'Travel Tech', 'Enterprise Systems'],
    challenges: ['Complex business rules', 'High transaction sensitivity', 'System integration across services'],
    solution: 'Built a structured approach to booking logic, integration, and support operations that strengthened reliability and improved business continuity for critical travel workflows.',
    link: '#contact',
    image: ''
  },
  {
    id: 2,
    title: 'Enterprise Web Application Modernization',
    subtitle: 'HR / Media / Education',
    desc: 'Developed and modernized enterprise web applications across multiple domains, improving usability, maintainability, and operational efficiency for business-critical workflows.',
    fullDesc: 'The projects spanned HR, media, and education platforms where stakeholders needed scalable applications with structured collaboration, reporting, and access control. The focus was on delivering stable, maintainable systems that could support growing business demands.',
    results: ['Improved application quality', 'Scalable business workflows', 'Faster delivery cycles', 'Structured architecture'],
    tags: ['Java', '.NET', 'React', 'Enterprise Apps', 'Web Development'],
    challenges: ['Legacy constraints', 'Process fragmentation', 'Need for maintainable delivery'],
    solution: 'Reworked workflows and application design using modern technical patterns, better architecture, and a stronger CI/CD process to improve release confidence and system performance.',
    link: '#contact',
    image: ''
  },
  {
    id: 3,
    title: 'Microservices & CI/CD Transformation',
    subtitle: 'Distributed Systems / DevOps',
    desc: 'Led modernization efforts for distributed applications by introducing microservice-oriented design, automation, and production monitoring for higher team velocity and system resilience.',
    fullDesc: 'The objective was to move from fragmented delivery cycles to a more scalable, observable, and repeatable engineering model. This included service decomposition, automation, and structured operational support practices that supported rapid, reliable changes.',
    results: ['Microservices adoption', 'CI/CD automation', 'Observability and support', 'Higher release confidence'],
    tags: ['Microservices', 'CI/CD', 'Jenkins', 'Monitoring', 'Automation'],
    challenges: ['Manual delivery burden', 'Limited visibility', 'Deployment risk'],
    solution: 'Introduced deployment automation, quality gates, service-level structure, and monitoring capabilities so the systems could be delivered and supported with much greater reliability.',
    link: '#contact',
    image: ''
  },
  {
    id: 4,
    title: 'Secure E-Commerce & Business Platform Delivery',
    subtitle: 'E-Commerce / Digital Commerce',
    desc: 'Built and supported commerce-focused solutions with secure handling of customer transactions, integrations, and operational workflows to support business growth.',
    fullDesc: 'The work combined customer-facing digital experiences with backend reliability, secure architecture, and business process alignment. These initiatives required strong attention to integration, data, and operational support across multiple systems.',
    results: ['Secure commerce flows', 'Workflow automation', 'Business continuity', 'Operational efficiency'],
    tags: ['E-Commerce', 'Secure Coding', 'Integrations', 'Business Platforms'],
    challenges: ['Payment and safety considerations', 'Data consistency', 'System complexity'],
    solution: 'Designed services and workflows around compliance awareness, robust integrations, and measurable operational support to keep critical customer journeys stable and scalable.',
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
          <h2 className="text-4xl md:text-7xl font-black tracking-[-0.06em] text-[#111827] mb-4">Selected Work</h2>
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
