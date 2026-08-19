import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const practices = [
  { title: 'Risk-proof Project Scoping', desc: 'We accurately scope projects at the start and help assess feasibility of alterations to avoid scope creep.' },
  { title: 'Realistic Cost Estimation', desc: 'We analyze projects from different perspectives to factor in all risks and estimate costs precisely.' },
  { title: 'Focus on User Experience', desc: 'We research user expectations to design winning UX and UI and ensure high user adoption.' },
  { title: 'Healthy Collaboration', desc: 'We foster collaboration between stakeholders based on transparency, efficiency, and mutual respect.' },
  { title: 'Quality throughout SDLC', desc: 'We introduce quality control mechanisms at every stage to detect and solve issues early.' },
  { title: 'Top Security', desc: 'We implement a robust security management system to safeguard your project environment and data.' }
]

export default function Process(){
  return (
    <section id="process" className="py-16">
      <div className="max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-4">Software Development and Project Management Best Practices</h2>
        <p className="text-slate-600 text-lg">We implement industry-leading practices to ensure your consulting and development projects succeed.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {practices.map((p, i) => (
          <div key={i} className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="text-[#BAFF39] flex-shrink-0 mt-1" size={20} />
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
