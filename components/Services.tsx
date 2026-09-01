import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: 'enterprise',
    title: 'Enterprise Software Delivery',
    desc: '14 years of experience delivering high-impact applications for HR, media, education, travel, and e-commerce environments with a focus on reliability and business value.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'microservices',
    title: 'Microservices & APIs',
    desc: 'Designing modular, distributed systems with REST/JSON services, secure integrations, and scalable service boundaries for enterprise-grade platforms.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'webapps',
    title: 'React, .NET & Node Solutions',
    desc: 'Building modern user experiences and robust backend services using React, Node.js, .NET, Java, SQL, and enterprise integration patterns.',
    image: 'https://nagpurwebdesign.com/wp-content/uploads/2026/05/nagpur-website-design.jpg'
  },
  {
    id: 'devops',
    title: 'CI/CD & DevOps Automation',
    desc: 'Automating delivery pipelines with Jenkins, Git, Selenium, PowerShell, Groovy, and monitoring tools to improve release quality and production stability.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'travel',
    title: 'Aviation & Travel Booking Systems',
    desc: 'Specialized in secure flight booking and commerce systems requiring strong rules engine logic, data integrity, payment flows, and operational visibility.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'security',
    title: 'Secure, Compliant Engineering',
    desc: 'Applying OWASP, PCI DSS awareness, production support expertise, and secure coding practices to protect business-critical systems and customer data.',
    image: 'https://img.magnific.com/free-vector/e-commerce-flat-concept_1284-22119.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: 'ai',
    title: 'AI-Assisted Engineering',
    desc: 'Using GitHub Copilot, ChatGPT, and AI-enabled review and automation workflows to improve productivity, code quality, and delivery speed.',
    image: 'https://www.growthaccelerationpartners.com/wp-content/uploads/2025/02/website-wireframe-design-whiteboard.webp'
  },
  {
    id: 'architecture',
    title: 'Architecture & Design Leadership',
    desc: 'Translating business requirements into architecture, design reviews, project plans, estimations, and scalable technical roadmaps for distributed systems.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'support',
    title: 'Production Support & Team Leadership',
    desc: 'Driving sprint planning, retrospectives, burndown tracking, production support, and mentorship to keep cross-functional teams aligned and effective.',
    image: 'https://cdn.pixabay.com/photo/2023/11/10/10/21/mobile-app-development-company-8379091_1280.png'
  }
]

export default function Services(){
  return (
    <section id="services" className="bg-[#f3f4ee] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
            WHAT WE DO
          </span>
        </div>

        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl md:text-7xl font-black tracking-[-0.05em] leading-[0.9] text-[#111827]">
            Engineering Digital
            <span className="block text-[#9bbd2d]">Excellence</span>
          </h2>

          <a href="#contact" className="inline-flex items-center gap-2 self-start rounded-full bg-[#d7eb7a] px-5 py-3 text-sm font-semibold text-[#1d2a12] shadow-lg shadow-[#d7eb7a]/30 transition hover:brightness-105">
            View All Capabilities <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <article key={s.id} className="group overflow-hidden rounded-[22px] border border-[#dfe6d4] bg-[#f8f9f5] p-4 shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition hover:-translate-y-1 hover:border-[#bfd85d]">
              <div className="flex items-center justify-between pb-4">
                <h3 className="text-[1.7rem] md:text-[1.9rem] font-semibold tracking-[-0.04em] text-[#111827] leading-none">{s.title}</h3>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7eb7a] text-[#1d2a12] shadow-lg shadow-[#d7eb7a]/30 flex-shrink-0">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="h-px w-full bg-[#dfe5d5] mb-4" />

              <p className="text-[0.97rem] leading-relaxed text-[#4b5563] min-h-[60px]">{s.desc}</p>

              <div className="mt-5 overflow-hidden rounded-[16px]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
