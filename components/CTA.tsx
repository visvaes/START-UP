import React from 'react'
import { CheckCircle } from 'lucide-react'

export default function CTA(){
  const benefits = [
    'Expert consulting from experienced consultants',
    'Technology stack assessment & recommendations',
    'Risk mitigation & cost optimization',
    'Scalable architecture & future-proof solutions'
  ]

  return (
    <section className="py-16">
      <div className="bg-gradient-to-r from-[#6E6E6E] to-[#4d4d4d] rounded-xl p-12 text-white shadow-lg">
        <h2 className="text-4xl font-bold mb-4 max-w-2xl">Want an expert look at your initiative?</h2>
        <p className="text-slate-200 mb-8 max-w-xl text-lg">Describe briefly the challenges you face, and we will follow up within 30 minutes to agree on the most convenient format of further communication.</p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle size={20} className="flex-shrink-0 text-[#BAFF39]" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          <a href="#contact"><button className="bg-[#BAFF39] text-[#1f2937] hover:brightness-110 font-semibold px-8 py-3 rounded-lg transition">Share Your Needs</button></a>
          <a href="#contact"><button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition">Schedule a Call</button></a>
        </div>
      </div>
    </section>
  )
}
