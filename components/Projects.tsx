'use client'

import React, { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'

const projects = [
  {
    id: 5,
    title: 'AI-Powered E-Commerce Fashion Platform',
    subtitle: 'Mazhai Boutique',
    desc: 'Built a full-featured e-commerce platform for premium traditional Indian fashion. Integrated AI assistance for personalized product recommendations and styling guidance. Features handpicked sarees, kurtas, lehengas with authenticated artisan collections.',
    fullDesc: 'A sophisticated e-commerce platform dedicated to premium traditional and contemporary Indian fashion. The platform showcases handcrafted collections from authenticated artisans with over a decade of experience. The integrated AI assistant provides personalized styling recommendations, helping customers discover perfect pieces for every occasion.',
    results: ['AI-powered styling assistant', 'Product recommendation engine', 'Premium e-commerce platform', '10+ years of artisan partnership'],
    tags: ['AI/ML', 'E-Commerce', 'React', 'Fashion'],
    challenges: ['Personalized recommendations at scale', 'Artisan collection curation', 'Premium user experience'],
    solution: 'Implemented machine learning recommendation engine, built intuitive product discovery, and created seamless checkout experience with secure payment integration.',
    link: 'https://www.mazhaiboutique.com/',
    image: '/mazhai-case-study.png'
  }
]

export default function Projects(){
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)

  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Software Consulting Projects</h2>
        <p className="text-slate-600 text-lg">Real-world examples of how we deliver consulting and development results for clients across industries.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-white rounded-lg border border-[#BAFF39] overflow-hidden hover:shadow-lg transition cursor-pointer">
            <div className="h-64 bg-gradient-to-br from-[#eeeeeb] to-[#dfe3df] flex items-center justify-center overflow-hidden">
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              ) : (
                <div className="text-slate-400 text-center">
                  <div className="text-4xl font-bold text-[#dfe3df]">{p.id}</div>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="text-sm text-[#4d4d4d] font-semibold mb-1">{p.subtitle}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{p.desc}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Results:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  {p.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#b5b7b2] mt-1">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-[#e5e7eb] text-[#2f2f2f] px-3 py-1 rounded-full border border-[#dfe3df]">
                    {tag}
                  </span>
                ))}
              </div>

              <button onClick={() => setSelectedProject(p)} className="mt-4 inline-flex items-center gap-2 text-[#4d4d4d] hover:text-[#1f2937] font-semibold text-sm">
                View Project Details <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-slate-600 text-sm mb-4">Featured case study</p>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#BAFF39]">
            <div className="sticky top-0 bg-white border-b border-[#BAFF39] p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h2>
              <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {selectedProject.image && (
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              )}

              <div className="mb-6">
                <h3 className="text-sm text-[#4d4d4d] font-semibold mb-2">{selectedProject.subtitle}</h3>
                <p className="text-slate-700 mb-4">{selectedProject.fullDesc}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Challenges</h4>
                  <ul className="space-y-2">
                    {selectedProject.challenges?.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="text-[#b5b7b2] mt-1">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-slate-900 mb-3">Solution</h4>
                <p className="text-slate-600 text-sm">{selectedProject.solution}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-[#e5e7eb] text-[#2f2f2f] px-3 py-1 rounded-full border border-[#dfe3df]">
                    {tag}
                  </span>
                ))}
              </div>

              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#BAFF39] text-[#1f2937] px-6 py-2 rounded-lg hover:brightness-110 font-semibold">
                  Visit Project Website <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
