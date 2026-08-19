import React from 'react'
import { Code, LayoutList, ServerCog, Zap, CheckCircle, TrendingUp, Shield, Lightbulb } from 'lucide-react'

const services = [
  {
    id: 'stack',
    title: 'Software Stack Assessment',
    desc: 'Auditing current software performance and planning improvements. Software modernization and refactoring.',
    icon: <CheckCircle />
  },
  {
    id: 'architecture',
    title: 'Software Architecture Redesign',
    desc: 'Identifying architectural flaws affecting performance and security. Redesigning for resilience and scalability.',
    icon: <TrendingUp />
  },
  {
    id: 'modernization',
    title: 'Software Modernization',
    desc: 'Gradual transition to modern technologies without disrupting operations. Legacy transformation.',
    icon: <Lightbulb />
  },
  {
    id: 'selection',
    title: 'Software Selection',
    desc: 'Evaluating vendors and pricing plans. Providing software comparison and recommendations.',
    icon: <Code />
  },
  {
    id: 'development',
    title: 'Custom Software Development',
    desc: 'Working out software solutions for your business needs with full project team assembly.',
    icon: <ServerCog />
  },
  {
    id: 'compliance',
    title: 'Software Compliance Consulting',
    desc: 'Assessing compliance with industry laws and regulations. Licensing and security validation.',
    icon: <Shield />
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    desc: 'Building effective DevOps pipelines to speed up software delivery and deployment.',
    icon: <Zap />
  },
  {
    id: 'process',
    title: 'SDLC & Process Consulting',
    desc: 'Reviewing development processes and tools. Implementing best practices and Agile adoption.',
    icon: <LayoutList />
  }
]

export default function Services(){
  return (
    <section id="services" className="py-16">
      <div className="max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Service Scope: Technology Advisory and Beyond</h2>
        <p className="text-slate-600 text-lg">Software consulting services help see and realize full business value that software can potentially deliver, and make reasonable future-proof software decisions.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s)=> (
          <article key={s.id} className="bg-white rounded-lg p-6 border border-[#BAFF39] transition-all duration-200 hover:bg-[#eef0ee] hover:shadow-[0_8px_20px_rgba(110,110,110,0.08)] hover:-translate-y-1">
            <div className="text-[#BAFF39] text-3xl mb-4">{s.icon}</div>
            <h4 className="font-semibold text-lg mb-3 text-slate-900">{s.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
