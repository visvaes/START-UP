'use client'

import React, { useState } from 'react'
import { ChevronDown, CheckCircle2 } from 'lucide-react'

const services = [
  {
    num: '01',
    id: 'enterprise',
    title: 'Enterprise Software Delivery',
    desc: '14 years of experience delivering high-impact applications for HR, media, education, travel, and e-commerce environments with a focus on reliability and business value.',
    tags: ['Enterprise Architecture', 'Scalable Systems', 'Legacy Modernization'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80'
  },
  {
    num: '02',
    id: 'ai',
    title: 'AI-Assisted Engineering',
    desc: 'Using GitHub Copilot, ChatGPT, and AI-enabled review and automation workflows to improve productivity, code quality, and delivery speed.',
    tags: ['GitHub Copilot', 'AI Workflows', 'Automated QA'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=900&q=80'
  },
  {
    num: '03',
    id: 'webapps',
    title: 'React, .NET & Node Solutions',
    desc: 'Building modern user experiences and robust backend services using React, Node.js, .NET, Java, SQL, and enterprise integration patterns.',
    tags: ['React.js', '.NET Core', 'Node.js', 'SQL Server'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80'
  },
  {
    num: '04',
    id: 'devops',
    title: 'CI/CD & DevOps Automation',
    desc: 'Automating delivery pipelines with Jenkins, Git, Selenium, PowerShell, Groovy, and monitoring tools to improve release quality and production stability.',
    tags: ['Jenkins', 'Git', 'Selenium', 'Groovy', 'PowerShell'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'
  },
  {
    num: '05',
    id: 'travel',
    title: 'Aviation & Travel Booking Systems',
    desc: 'Specialized in secure flight booking and commerce systems requiring strong rules engine logic, data integrity, payment flows, and operational visibility.',
    tags: ['Aviation Systems', 'Flight Booking Engine', 'PCI Compliance'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80'
  },
  {
    num: '06',
    id: 'security',
    title: 'Secure & Compliant Engineering',
    desc: 'Applying OWASP, PCI DSS awareness, production support expertise, and secure coding practices to protect business-critical systems and customer data.',
    tags: ['OWASP', 'PCI DSS', 'Security Audits', 'Data Encryption'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80'
  },
  {
    num: '07',
    id: 'microservices',
    title: 'Microservices & APIs',
    desc: 'Designing modular, distributed systems with REST/JSON services, secure integrations, and scalable service boundaries for enterprise-grade platforms.',
    tags: ['REST/JSON', 'API Gateways', 'Distributed Systems'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
  },
  {
    num: '08',
    id: 'architecture',
    title: 'Architecture & Design Leadership',
    desc: 'Translating business requirements into architecture, design reviews, project plans, estimations, and scalable technical roadmaps for distributed systems.',
    tags: ['Technical Roadmaps', 'System Design', 'Project Scoping'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
  },
  {
    num: '09',
    id: 'support',
    title: 'Production Support & Team Leadership',
    desc: 'Driving sprint planning, retrospectives, burndown tracking, production support, and mentorship to keep cross-functional teams aligned and effective.',
    tags: ['Agile / Scrum', 'Production Incident SLA', 'Team Mentorship'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80'
  }
]

export default function Services(){
  const [activeService, setActiveService] = useState(0)
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0)

  return (
    <section id="services" className="bg-[#f3f4ee] py-20 text-[#111827]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
            EXPERT CAPABILITIES
          </span>
        </div>

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#111827] sm:text-6xl">
              Engineering digital
              <span className="block text-[#9bbd2d]">solutions that scale</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#4b5563]">
              From microservices to flight booking platforms, explore our enterprise software engineering services built for performance and growth.
            </p>
          </div>
        </div>

        {/* Desktop Interactive Layout (Side by Side hover list + visual preview) */}
        <div className="hidden lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* List of numbered interactive service rows */}
          <div className="space-y-3">
            {services.map((s, idx) => (
              <div
                key={s.id}
                onMouseEnter={() => setActiveService(idx)}
                className={`group cursor-pointer rounded-[22px] border p-5 transition-all duration-300 ${
                  activeService === idx
                    ? 'border-[#9bbd2d] bg-white shadow-xl shadow-[#111827]/5 translate-x-2'
                    : 'border-[#dfe6d4] bg-[#f8f9f5] hover:bg-white hover:border-[#bfd85d]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl font-black ${activeService === idx ? 'text-[#9bbd2d]' : 'text-[#6b7280]'}`}>
                      {s.num}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-[#111827]">
                      {s.title}
                    </h3>
                  </div>
                </div>

                {activeService === idx && (
                  <div className="mt-4 pt-3 border-t border-[#dfe5d5]">
                    <p className="text-sm leading-relaxed text-[#4b5563]">{s.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 rounded-full border border-[#bfd85d]/60 bg-[#edf4d3] px-3 py-1 text-xs font-semibold text-[#4e5d1d]">
                          <CheckCircle2 size={12} /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Side Sticky Visual Panel */}
          <div className="sticky top-28 overflow-hidden rounded-[28px] border border-[#dfe6d4] bg-white p-6 shadow-2xl">
            <div className="relative h-72 w-full overflow-hidden rounded-[20px]">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="h-full w-full object-cover transition-all duration-700 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d7eb7a]">
                  Service {services[activeService].num}
                </span>
                <h4 className="text-xl font-bold mt-0.5">{services[activeService].title}</h4>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h5 className="text-sm font-bold uppercase tracking-wider text-[#111827]">Tech Focus & Tags</h5>
              <div className="flex flex-wrap gap-2">
                {services[activeService].tags.map((t) => (
                  <span key={t} className="rounded-lg bg-[#f8f9f5] border border-[#dfe5d5] px-3 py-1.5 text-xs font-bold text-[#1f2937]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[#dfe5d5]">
                <a
                  href="/contact"
                  className="block text-center rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1f2937]"
                >
                  Book Service Consultation →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden space-y-4">
          {services.map((s, idx) => {
            const isOpen = expandedMobile === idx
            return (
              <div
                key={s.id}
                className="rounded-[20px] border border-[#dfe6d4] bg-[#f8f9f5] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setExpandedMobile(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-[#111827]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-black text-[#9bbd2d]">{s.num}</span>
                    <span className="text-lg font-bold">{s.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#9bbd2d]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-[#dfe5d5]">
                    <p className="text-sm leading-relaxed text-[#4b5563]">{s.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="rounded-full bg-[#edf4d3] border border-[#bfd85d] px-3 py-1 text-xs font-semibold text-[#4e5d1d]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 overflow-hidden rounded-xl">
                      <img src={s.image} alt={s.title} className="h-44 w-full object-cover" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
