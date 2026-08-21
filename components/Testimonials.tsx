import React from 'react'

const testimonials = [
  {
    id: 1,
    quote: 'Brought structure to delivery, improved release quality, and helped modernize key platform flows without disrupting operations.',
    name: 'Confidential Client',
    role: 'Enterprise FMCG',
    company: 'Operations Leadership',
    rating: 5,
    image: 'CC'
  },
  {
    id: 2,
    quote: 'Clear planning, fast execution, and solid technical guidance from MVP decisions through production readiness.',
    name: 'Confidential Client',
    role: 'Startup Founder',
    company: 'Product Team',
    rating: 5,
    image: 'SF'
  },
  {
    id: 3,
    quote: 'Improved platform stability, streamlined release coordination, and supported ongoing optimization with predictable delivery.',
    name: 'Confidential Client',
    role: 'E-Commerce Operations',
    company: 'Growth & Digital',
    rating: 5,
    image: 'EO'
  }
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl font-bold mb-4">What Teams Value</h2>
          <p className="text-slate-600 text-lg">Structured engineering, predictable delivery, and systems built to scale.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-lg border border-[#d9f68a] p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6E6E6E] to-[#4d4d4d] flex items-center justify-center text-white font-bold text-sm">
                  {t.image}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-600">{t.role}</div>
                  <div className="text-xs text-[#4d4d4d] font-medium">{t.company}</div>
                </div>
              </div>
            </div>
            
            <p className="text-slate-700 mb-4 italic leading-relaxed">"{t.quote}"</p>
            
            <div className="flex gap-1">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
