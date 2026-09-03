'use client'

import React, { useState } from 'react'
import VideoBackground from './VideoBackground'
import { Layers, ArrowDown, CheckCircle2 } from 'lucide-react'

const pipelineSteps = [
  { id: 'frontend', name: 'Frontend', tech: 'React.js, Next.js, TypeScript, HTML5/CSS3', desc: 'High-performance UI & single page applications' },
  { id: 'api', name: 'API Layer', tech: 'REST, GraphQL, Swagger, API Gateways', desc: 'Secure, versioned endpoint interfaces & specs' },
  { id: 'microservices', name: 'Microservices', tech: 'Node.js, .NET Core, Java Spring', desc: 'Decoupled, modular domain services' },
  { id: 'business', name: 'Business Logic', tech: 'Rules Engine, Payment Gateways', desc: 'Aviation booking, transactional processing & logic' },
  { id: 'database', name: 'Database', tech: 'SQL Server, Oracle, MySQL, Redis', desc: 'Relational data structures & caching' },
  { id: 'cloud', name: 'Cloud Infrastructure', tech: 'Microsoft Azure, AWS, Docker', desc: 'High availability cloud hosting & security' },
  { id: 'cicd', name: 'CI/CD Pipelines', tech: 'Jenkins, Git, PowerShell, Groovy', desc: 'Automated test, build & deployment automation' },
  { id: 'monitoring', name: 'Monitoring & Security', tech: 'Selenium, SonarQube, Postman, OWASP', desc: 'Continuous testing, vulnerability scanning & SLAs' }
]

const techBadges = [
  { name: 'React', category: 'Frontend' },
  { name: '.NET', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Java', category: 'Backend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'SQL Server', category: 'Database' },
  { name: 'Oracle', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'Jenkins', category: 'DevOps' },
  { name: 'Git', category: 'DevOps' },
  { name: 'Selenium', category: 'Testing' },
  { name: 'SonarQube', category: 'Quality' },
  { name: 'Postman', category: 'API' }
]

export default function Technology() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="technology" className="relative text-white overflow-hidden">
      <VideoBackground
        localSrc="/videos/technology.mp4"
        fallbackSrc="https://assets.mixkit.co/videos/preview/mixkit-[#061a2d]-digital-network-lines-41552-large.mp4"
        poster="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80"
        overlayClass="bg-[#0f172a]/90 backdrop-blur-sm"
        heightClass="py-24"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7eb7a]/40 bg-[#d7eb7a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d7eb7a]">
              <Layers size={14} /> System Architecture & Tech Stack
            </span>
            <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl text-white">
              Engineering Digital <span className="text-[#d7eb7a]">Solutions That Scale</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Explore our end-to-end software pipeline — built for high availability, security, and enterprise reliability.
            </p>
          </div>

          {/* Interactive Technology Ecosystem Pipeline Flow */}
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center mb-20">
            {/* Step Pipeline List */}
            <div className="grid gap-3 sm:grid-cols-2">
              {pipelineSteps.map((step, idx) => (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all duration-300 ${
                    activeStep === idx
                      ? 'border-[#d7eb7a] bg-[#d7eb7a]/20 backdrop-blur-md shadow-lg shadow-[#d7eb7a]/10 scale-[1.02]'
                      : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#d7eb7a]">
                      Step 0{idx + 1}
                    </span>
                    {idx < pipelineSteps.length - 1 && (
                      <ArrowDown size={14} className="text-slate-300 rotate-[-45deg]" />
                    )}
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-white">{step.name}</h3>
                  <p className="mt-1 text-xs text-slate-300">{step.tech}</p>
                </div>
              ))}
            </div>

            {/* Step Detail Card */}
            <div className="rounded-[28px] border border-[#d7eb7a]/30 bg-[#0f172a]/95 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d7eb7a]">
                  Layer 0{activeStep + 1} Architecture Detail
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d7eb7a] text-[#1f2937] font-black text-sm">
                  ✓
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-black text-white">
                {pipelineSteps[activeStep].name}
              </h3>
              <p className="mt-3 text-base text-slate-200 leading-relaxed">
                {pipelineSteps[activeStep].desc}
              </p>

              <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#d7eb7a] mb-2">
                  Technologies Used
                </div>
                <div className="text-sm font-semibold text-white">
                  {pipelineSteps[activeStep].tech}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#d7eb7a] px-6 py-3.5 text-sm font-bold text-[#1f2937] shadow-lg shadow-[#d7eb7a]/20 hover:brightness-110 transition"
                >
                  Request Architecture Blueprint →
                </a>
              </div>
            </div>
          </div>

          {/* Technology Badges Marquee Carousel */}
          <div className="rounded-[28px] border border-white/15 bg-white/5 p-8 backdrop-blur-md overflow-hidden">
            <h3 className="text-center text-xl font-black text-white uppercase tracking-wider mb-8">
              Verified Enterprise Tech Stack Badges
            </h3>

            <div className="relative w-full overflow-hidden mask-gradient">
              {/* Left and Right Fade Gradients */}
              <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />

              <div className="flex w-max animate-marquee gap-3 py-2">
                {[...techBadges, ...techBadges].map((badge, idx) => (
                  <div
                    key={`${badge.name}-${idx}`}
                    className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:border-[#d7eb7a] hover:bg-[#d7eb7a] hover:text-[#1f2937] shrink-0"
                  >
                    <CheckCircle2 size={16} className="text-[#d7eb7a] group-hover:text-[#1f2937] transition-colors" />
                    <span>{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </VideoBackground>
    </section>
  )
}
