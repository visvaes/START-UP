'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ExternalLink, X, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play, RotateCw } from 'lucide-react'

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
  const [currentIdx, setCurrentIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)

  // Auto-carousel timer: transitions every 5 seconds unless paused, hovered, or modal open
  useEffect(() => {
    if (!isPlaying || isHovered || isDragging || selectedProject !== null) return

    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isPlaying, isHovered, isDragging, selectedProject])

  const nextProject = () => {
    setCurrentIdx((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIdx((prev) => (prev - 1 + projects.length) % projects.length)
  }

  // Manual Drag & Touch Gesture Handlers for Carousel Track
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return
    const diffX = e.clientX - startX
    if (diffX < -40) nextProject()
    if (diffX > 40) prevProject()
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return
    const diffX = e.changedTouches[0].clientX - startX
    if (diffX < -40) nextProject()
    if (diffX > 40) prevProject()
    setIsDragging(false)
  }

  return (
    <section id="projects" className="py-24 bg-[#0b1329] text-white overflow-hidden selection:bg-[#d7eb7a] selection:text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header & Controls */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <span className="inline-flex items-center rounded-full border border-[#d7eb7a]/40 bg-[#d7eb7a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d7eb7a]">
            SELECTED CASE STUDIES
          </span>

          {/* Carousel Control Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevProject}
              aria-label="Previous Project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#d7eb7a] hover:text-[#0f172a] hover:scale-105 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label="Toggle Auto Carousel Play"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#d7eb7a] hover:text-[#0f172a] hover:scale-105 active:scale-95"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>
            <button
              onClick={nextProject}
              aria-label="Next Project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#d7eb7a] hover:text-[#0f172a] hover:scale-105 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.05em] text-white leading-[0.95]">
            Featured <span className="text-[#d7eb7a]">Engineering Projects</span>
          </h2>
          <p className="mt-4 text-slate-300 text-lg sm:text-xl leading-relaxed">
            We partner with businesses to design and deliver scalable digital systems that support long-term growth, performance, and operational clarity.
          </p>
        </div>

        {/* Carousel Slider Card Container matching user's exact screenshot format */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setIsDragging(false)
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-[32px] border border-white/15 bg-[#152035] shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
        >
          {/* Animated Horizontal Slide Container */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIdx * 100}%)` }}
          >
            {projects.map((p) => (
              <div key={p.id} className="w-full shrink-0 grid lg:grid-cols-12 gap-0 items-stretch min-h-[480px]">
                {/* Left Side Visual Image */}
                <div className="lg:col-span-5 relative overflow-hidden min-h-[320px] lg:min-h-[480px]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#152035]/80 via-transparent to-transparent lg:hidden" />
                  
                  {/* Top-Left Pill Badge matching user screenshot */}
                  <div className="absolute top-6 left-6 rounded-full bg-[#0b1329]/90 px-4 py-2 text-xs font-bold text-[#d7eb7a] backdrop-blur-md border border-white/15 shadow-lg">
                    0{p.id} • {p.subtitle}
                  </div>
                </div>

                {/* Right Side Content matching user screenshot */}
                <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#d7eb7a] mb-2 block">
                      CASE STUDY 0{p.id} — {p.subtitle.toUpperCase()}
                    </span>

                    <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                      {p.title}
                    </h3>

                    <p className="text-base text-slate-300 leading-relaxed mb-6">
                      {p.desc}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#d7eb7a] mb-3">
                        KEY RESULTS DELIVERED:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {p.results.map((r, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-sm text-slate-200">
                            <CheckCircle2 size={16} className="text-[#d7eb7a] shrink-0" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-[#d7eb7a]/15 border border-[#d7eb7a]/40 px-3.5 py-1 text-xs font-semibold text-[#d7eb7a]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#d7eb7a] px-6 py-3.5 text-sm font-bold text-[#000000] hover:brightness-110 transition"
                    >
                      Explore Details <ArrowUpRight size={16} className="text-[#000000]" />
                    </button>

                    {/* Pagination Indicators */}
                    <div className="flex items-center gap-2">
                      {projects.map((proj, idx) => (
                        <button
                          key={proj.id}
                          onClick={() => setCurrentIdx(idx)}
                          aria-label={`Go to project ${idx + 1}`}
                          className={`h-3 rounded-full transition-all duration-300 ${
                            idx === currentIdx ? 'w-8 bg-[#d7eb7a]' : 'w-3 bg-white/20 hover:bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Auto-Progress Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10">
            <div
              key={currentIdx}
              className={`h-full bg-[#d7eb7a] ${isPlaying && !isHovered && !isDragging ? 'animate-progress-fill' : 'w-full'}`}
            />
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-[#0f172a]/85 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-[#152035] text-white rounded-[28px] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#d7eb7a]/40 shadow-2xl">
            <div className="sticky top-0 bg-[#152035] border-b border-white/10 p-6 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#d7eb7a]">{selectedProject.subtitle}</span>
                <h2 className="text-2xl font-black text-white">{selectedProject.title}</h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#d7eb7a] hover:text-[#0f172a]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="rounded-2xl overflow-hidden h-64 w-full">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">Overview</h3>
                <p className="text-base text-slate-300 leading-relaxed">{selectedProject.fullDesc}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-2">Challenges Addressed</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {selectedProject.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#d7eb7a] mb-2">Engineering Solution</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="rounded-full bg-[#d7eb7a]/15 border border-[#d7eb7a]/40 px-3 py-1 text-xs font-semibold text-[#d7eb7a]">{t}</span>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7eb7a] px-6 py-3 text-sm font-bold text-[#000000]"
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
