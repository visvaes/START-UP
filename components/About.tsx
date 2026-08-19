import React from 'react'
import { Award, Users, Zap, Target } from 'lucide-react'

export default function About(){
  const expertise = [
    { icon: <Users />, title: 'Experienced Team', desc: '750+ IT experts with 7-20 years experience' },
    { icon: <Target />, title: 'Industry Focus', desc: 'Deepest expertise in Healthcare and BFSI' },
    { icon: <Zap />, title: 'Proven Results', desc: '4,300+ success stories across industries' },
    { icon: <Award />, title: 'Recognized', desc: 'Multiple partnerships and industry awards' }
  ]

  const partnerships = [
    'Microsoft Partner',
    'AWS Partner',
    'ISO 9001-certified',
    'ISO 27001-certified',
    'Named in Global Outsourcing 100',
    'Financial Times Fastest-Growing'
  ]

  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-4">About Our Consulting Company</h2>
        <p className="text-slate-600 text-lg">Over the years, we've helped companies from 30+ industries revamp business and IT processes towards better efficiency, resilience and agility. Our software consultants specialize in various IT processes, programming languages and frameworks, cloud computing, and advanced technologies.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {expertise.map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-6 border border-[#BAFF39] shadow-[0_10px_30px_rgba(110,110,110,0.04)]">
            <div className="text-[#BAFF39] text-3xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#efefec] rounded-lg p-8 border border-[#BAFF39]">
        <h3 className="text-2xl font-bold mb-6 text-slate-900">Partnerships & Recognitions</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {partnerships.map((p) => (
            <div key={p} className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#BAFF39] rounded-full" />
              <span className="text-slate-700">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
