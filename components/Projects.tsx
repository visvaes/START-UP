'use client'

import React, { useState } from 'react'
import { ExternalLink, X, ArrowUpRight, CheckCircle2 } from 'lucide-react'

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
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80'
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
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80'
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
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
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
    image: 'https://images.unsplash.com/photo-1556742049-0a6796d7c782?auto=format&fit=crop&w=1200&q=80'
  }
]

export default function Projects(){
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)

  return (
    <section id="projects" className="py-24 bg-[#f3f4ee] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
            SELECTED CASE STUDIES
          </span>
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.05em] text-[#111827] leading-[0.95]">
            Featured <span className="text-[#9bbd2d]">Engineering Projects</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg sm:text-xl leading-relaxed">
            We partner with businesses to design and deliver scalable digital systems that support long-term growth, performance, and operational clarity.
          </p>
        </div>

        {/* Large Enterprise Case Study Card Layout */}
        <div className="space-y-12">
          {projects.map((p, idx) => (
            <div
              key={p.id}
              className="group overflow-hidden rounded-[32px] border border-[#dfe6d4] bg-[#f8f9f5] shadow-[0_12px_35px_rgba(17,24,39,0.05)] transition-all duration-500 hover:shadow-2xl hover:border-[#bfd85d]"
            >
              <div className="grid lg:grid-cols-12 gap-0 items-center">
                {/* Left Side Visual Image */}
                <div className={`lg:col-span-5 relative h-72 lg:h-full min-h-[320px] overflow-hidden ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-6 left-6 rounded-full bg-[#1f2937]/90 px-4 py-1.5 text-xs font-bold text-[#d7eb7a] backdrop-blur-md border border-white/10">
                    0{p.id} • {p.subtitle}
                  </div>
                </div>

                {/* Right Side Content Details */}
                <div className={`lg:col-span-7 p-8 lg:p-12 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="hidden lg:inline-block text-xs font-bold uppercase tracking-widest text-[#9bbd2d] mb-2">
                    Case Study 0{p.id} — {p.subtitle}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight leading-snug mb-4">
                    {p.title}
                  </h3>
                  <p className="text-base text-[#4b5563] leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-3">Key Results Delivered:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {p.results.map((r, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#374151]">
                          <CheckCircle2 size={15} className="text-[#9bbd2d] shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#edf4d3] border border-[#bfd85d]/60 px-3.5 py-1 text-xs font-semibold text-[#4e5d1d]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(p)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1f2937] transition"
                  >
                    Explore Case Study Details <ArrowUpRight size={16} className="text-[#d7eb7a]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-[#0f172a]/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-[28px] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#bfd85d] shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-[#dfe5d5] p-6 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#9bbd2d]">{selectedProject.subtitle}</span>
                <h2 className="text-2xl font-black text-[#111827]">{selectedProject.title}</h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f9f5] border border-[#dfe5d5] text-[#111827] hover:bg-[#d7eb7a]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="rounded-2xl overflow-hidden h-64 w-full">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">Overview</h3>
                <p className="text-base text-[#4b5563] leading-relaxed">{selectedProject.fullDesc}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-[#dfe5d5]">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-red-600 mb-2">Challenges Addressed</h4>
                  <ul className="space-y-2 text-sm text-[#4b5563]">
                    {selectedProject.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#9bbd2d] mb-2">Engineering Solution</h4>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#dfe5d5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="rounded-full bg-[#edf4d3] border border-[#bfd85d] px-3 py-1 text-xs font-semibold text-[#4e5d1d]">{t}</span>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7eb7a] px-6 py-3 text-sm font-bold text-[#1f2937]"
                >
                  Discuss Similar Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
