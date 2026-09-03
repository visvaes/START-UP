'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react'

const industryCards = [
  {
    id: 1,
    stat: '200+',
    title: 'Enterprise Deliveries',
    subtitle: 'Aviation, HR, Media & E-Commerce systems since 2010',
    glowColor: 'from-[#9bbd2d] to-[#d7eb7a]',
    glowShadow: 'rgba(215, 235, 122, 0.4)'
  },
  {
    id: 2,
    stat: '14+',
    title: 'Years Engineering',
    subtitle: 'Scalable SaaS, Microservices & Product Engineering',
    glowColor: 'from-[#0ea5e9] to-[#38bdf8]',
    glowShadow: 'rgba(14, 165, 233, 0.4)'
  },
  {
    id: 3,
    stat: '100%',
    title: 'On-Time Releases',
    subtitle: 'PCI-DSS & OWASP Compliant Secure Execution',
    glowColor: 'from-[#10b981] to-[#34d399]',
    glowShadow: 'rgba(16, 185, 129, 0.4)'
  },
  {
    id: 5,
    stat: '50+',
    title: 'Microservices Built',
    subtitle: 'High-availability REST & Distributed Architectures',
    glowColor: 'from-[#a855f7] to-[#c084fc]',
    glowShadow: 'rgba(168, 85, 247, 0.4)'
  }
]

export default function Industries() {
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startRotation, setStartRotation] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-rotation effect (smooth continuous 3D spin when not dragging or hovering)
  useEffect(() => {
    let animationFrameId: number

    const autoRotate = () => {
      if (!isDragging && !isHovered) {
        setRotation(prev => prev - 0.15)
      }
      animationFrameId = requestAnimationFrame(autoRotate)
    }

    animationFrameId = requestAnimationFrame(autoRotate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDragging, isHovered])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setStartRotation(rotation)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const deltaX = e.clientX - startX
    setRotation(startRotation + deltaX * 0.3)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setStartRotation(rotation)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const deltaX = e.touches[0].clientX - startX
    setRotation(startRotation + deltaX * 0.3)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const spinLeft = () => {
    setRotation(prev => prev + 60)
  }

  const spinRight = () => {
    setRotation(prev => prev - 60)
  }

  return (
    <section id="industries" className="relative bg-[#080d19] text-white py-24 overflow-hidden selection:bg-[#d7eb7a] selection:text-[#0f172a]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(215,235,122,0.08),_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7eb7a]/40 bg-[#d7eb7a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d7eb7a]">
              INDUSTRY-TAILORED ENGINEERING
            </span>
            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl">
              Engineered for <span className="text-[#d7eb7a]">scale & growth.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base sm:text-lg text-slate-300">
              Key benchmarks and chapters from inside Saspal Technologies, delivered across global industries.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300 mr-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#d7eb7a] animate-ping" />
              DRAG TO SPIN
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={spinLeft}
                aria-label="Spin Left"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:bg-[#d7eb7a] hover:text-[#0f172a] hover:scale-105 active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={spinRight}
                aria-label="Spin Right"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:bg-[#d7eb7a] hover:text-[#0f172a] hover:scale-105 active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Perspective Drag-To-Spin Carousel Container */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setIsDragging(false)
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative min-h-[460px] sm:min-h-[500px] w-full cursor-grab active:cursor-grabbing flex items-center justify-center select-none py-8"
          style={{ perspective: '1200px' }}
        >
          <div
            className="relative w-full max-w-[320px] sm:max-w-[360px] h-[390px] sm:h-[420px] transition-transform duration-100 ease-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg)`
            }}
          >
            {industryCards.map((card, index) => {
              const angle = (360 / industryCards.length) * index
              const radius = 220

              return (
                <div
                  key={card.id}
                  className="absolute inset-0 rounded-[32px] border border-white/15 bg-gradient-to-b from-[#131d33] via-[#0d1627] to-[#080d19] p-8 shadow-2xl flex flex-col justify-between transition-all duration-300 group hover:border-[#d7eb7a]"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden',
                    boxShadow: `0 25px 50px -12px ${card.glowShadow}`
                  }}
                >
                  {/* Top Ambient Glow Edge */}
                  <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${card.glowColor}`} />

                  {/* Top Huge Metric Stat */}
                  <div className="pt-2">
                    <span className="text-6xl sm:text-7xl font-black tracking-tighter text-white group-hover:scale-105 transition-transform duration-300 inline-block drop-shadow-md">
                      {card.stat}
                    </span>
                  </div>

                  {/* Bottom Title and Subtitle Info */}
                  <div className="relative z-10 pt-6 border-t border-white/10">
                    <h3 className="text-2xl font-black text-white group-hover:text-[#d7eb7a] transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 font-medium leading-relaxed">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Glowing Bottom Reflection Bar */}
                  <div
                    className={`absolute bottom-0 inset-x-6 h-2 rounded-t-full bg-gradient-to-r ${card.glowColor} opacity-70 blur-[3px] group-hover:opacity-100 transition-opacity`}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile helper hint */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-[#d7eb7a] sm:hidden">
          <RotateCw size={14} className="animate-spin text-[#d7eb7a]" />
          <span>Swipe or Drag to Rotate</span>
        </div>
      </div>
    </section>
  )
}
