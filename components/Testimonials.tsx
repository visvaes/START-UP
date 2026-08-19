import React from 'react'

const testimonials = [
  {
    id: 1,
    quote: "The ScienceSoft's team has become an integrated part of our organization, and we appreciate their efforts and passion for the product. The team is flexible and willing to try various technologies and frameworks to find the best possible solution.",
    name: 'Morten Øien Eriksen',
    role: 'Technical Lead',
    company: 'Enonic',
    rating: 5,
    image: 'MO'
  },
  {
    id: 2,
    quote: "ScienceSoft's developers used the microservices approach to ensure the system's scalability, which is critical for us as our user base is growing. We were particularly pleased with neat alignment of the developed module with our requirements.",
    name: 'Wadih Pazos',
    role: 'Product Manager',
    company: 'Platform Solutions',
    rating: 5,
    image: 'WP'
  },
  {
    id: 3,
    quote: "ScienceSoft's team members proved to be extremely flexible and responsive. They stayed in daily contact with us, which allowed us to adjust the scope of works promptly and implement new requirements on the fly.",
    name: 'Heather Owen Nigl',
    role: 'Project Manager',
    company: 'Enterprise Corp',
    rating: 5,
    image: 'HN'
  }
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-4">What Clients Say about Our Consulting</h2>
        <p className="text-slate-600 text-lg">Read honest insights from clients who have worked with us on their consulting projects.</p>
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

      <div className="mt-12 text-center">
        <p className="text-slate-600 mb-4">Looking for direct client references?</p>
        <p className="text-slate-600 text-sm mb-6 max-w-2xl mx-auto">We're ready to connect you directly with our clients in relevant industries, regions, or technology fields, so you can get honest insights straight from the source.</p>
        <a href="#contact"><button className="btn-primary">Request Client Contacts</button></a>
      </div>
    </section>
  )
}
