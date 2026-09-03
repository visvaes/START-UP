'use client'

import React, { useState, useEffect } from 'react'
import VideoBackground from './VideoBackground'
import BrandLogo from './BrandLogo'
import { ArrowDown, ChevronRight, ChevronLeft, ShieldCheck, Zap, CheckCircle2, Play, Pause, ShoppingBag, PhoneCall, TrendingUp, Cpu } from 'lucide-react'

const heroSlides = [
  {
    id: 1,
    tag: 'Saspal Technologies • Digital Engineering & AI Solutions',
    badges: ['Enterprise Software', 'Product Engineering'],
    title: 'We build the digital systems ',
    highlight: 'businesses trust to grow.',
    desc: 'Saspal Technologies helps startups and enterprise teams design and deliver scalable SaaS platforms, web products, automation workflows, and modern digital experiences with measurable business impact.',
    ctaPrimary: 'Explore Services',
    ctaPrimaryLink: '#services',
    ctaSecondary: 'Book a Consultation',
    ctaSecondaryLink: '/contact',
    videoSrc: '/videos/hero.mp4',
    fallbackSrc: 'https://assets.mixkit.co/videos/preview/mixkit-code-running-on-a-computer-screen-41551-large.mp4',
    poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
    orbitTitle: 'PRODUCT ENGINEERING',
    orbitNodes: [
      { name: 'Commerce', icon: ShoppingBag, color: 'bg-sky-500/20 text-sky-400 border-sky-400/40', pos: 'top-2 right-4' },
      { name: 'Ops', icon: Cpu, color: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/40', pos: 'top-10 left-4' },
      { name: 'Service', icon: PhoneCall, color: 'bg-amber-500/20 text-amber-400 border-amber-400/40', pos: 'top-1/2 -right-4' },
      { name: 'Sales', icon: TrendingUp, color: 'bg-purple-500/20 text-purple-400 border-purple-400/40', pos: 'bottom-4 right-10' }
    ],
    metrics: [
      { value: '14+', label: 'Years Delivery' },
      { value: '100%', label: 'On-Time SLA' },
      { value: '3x', label: 'Productivity' },
      { value: '99.9%', label: 'Uptime' }
    ]
  },
  {
    id: 2,
    tag: 'AI-Powered Software & Automation',
    badges: ['AI Integration'],
    title: 'Ship Autonomous Systems ',
    highlight: 'With AI At Scale.',
    desc: 'We design, build, and operate custom AI agents, automated workflows, and high-performance developer ecosystems that scale with security, grounding, and revenue outcomes.',
    ctaPrimary: 'Deploy AI Workflows →',
    ctaPrimaryLink: '/contact',
    ctaSecondary: 'Explore Use Cases',
    ctaSecondaryLink: '#technology',
    videoSrc: '/videos/technology.mp4',
    fallbackSrc: 'https://assets.mixkit.co/videos/preview/mixkit-[#061a2d]-digital-network-lines-41552-large.mp4',
    poster: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1920&q=80',
    orbitTitle: 'AI AUTOMATION HUB',
    orbitNodes: [
      { name: 'Agents', icon: Cpu, color: 'bg-[#d7eb7a]/20 text-[#d7eb7a] border-[#d7eb7a]/40', pos: 'top-4 right-2' },
      { name: 'Workflows', icon: Zap, color: 'bg-[#0ea5e9]/20 text-[#0ea5e9] border-[#0ea5e9]/40', pos: 'top-12 left-2' },
      { name: 'Data Pipeline', icon: ShieldCheck, color: 'bg-purple-500/20 text-purple-400 border-purple-400/40', pos: 'top-1/2 -right-6' },
      { name: 'Monitoring', icon: CheckCircle2, color: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/40', pos: 'bottom-2 right-8' }
    ],
    metrics: [
      { value: '50+', label: 'AI Workflows' },
      { value: '45%', label: 'Cost Reduction' },
      { value: '4x', label: 'Speed To Market' },
      { value: '98%', label: 'Accuracy Rate' }
    ]
  },
  {
    id: 3,
    tag: 'Cloud-Native & Distributed Microservices',
    badges: ['Azure & AWS', 'Microservices Architecture'],
    title: 'Modernize Platform Systems ',
    highlight: 'For Zero Downtime.',
    desc: 'Transform legacy web applications into decoupled, cloud-native microservices backed by automated CI/CD release pipelines and 24/7 enterprise production support.',
    ctaPrimary: 'Request Architecture Blueprint',
    ctaPrimaryLink: '/contact',
    ctaSecondary: 'View Case Studies',
    ctaSecondaryLink: '#projects',
    videoSrc: '/videos/engineering.mp4',
    fallbackSrc: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-keyboard-41553-large.mp4',
    poster: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80',
    orbitTitle: 'CLOUD & MICROSERVICES',
    orbitNodes: [
      { name: 'Kubernetes', icon: Cpu, color: 'bg-blue-500/20 text-blue-400 border-blue-400/40', pos: 'top-2 right-6' },
      { name: 'CI/CD Pipelines', icon: Zap, color: 'bg-[#d7eb7a]/20 text-[#d7eb7a] border-[#d7eb7a]/40', pos: 'top-14 left-0' },
      { name: 'Security Audit', icon: ShieldCheck, color: 'bg-red-500/20 text-red-400 border-red-400/40', pos: 'top-1/2 -right-4' },
      { name: 'API Gateway', icon: CheckCircle2, color: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/40', pos: 'bottom-4 right-6' }
    ],
    metrics: [
      { value: '200+', label: 'Global Systems' },
      { value: '0', label: 'Unplanned Downtime' },
      { value: '100%', label: 'OWASP Compliant' },
      { value: '24/7', label: 'Support SLA' }
    ]
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [isPlaying])

  const slide = heroSlides[currentSlide]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <>
    <VideoBackground
      localSrc={slide.videoSrc}
      fallbackSrc={slide.fallbackSrc}
      poster={slide.poster}
      overlayClass="bg-gradient-to-r from-[#080d1a]/95 via-[#080d1a]/85 to-[#080d1a]/75"
      heightClass="min-h-screen pt-24 pb-12"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Main Hero Slide Content */}
          <div className="text-white animate-in fade-in duration-500">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {slide.badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center rounded-full border border-[#d7eb7a]/40 bg-[#d7eb7a]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d7eb7a] backdrop-blur-md"
                >
                  {b}
                </span>
              ))}
            </div>

            <h1 className="max-w-3xl text-2xl font-black leading-[0.98] tracking-[-0.05em] sm:text-4xl xl:text-5xl text-white">
              {slide.title}
              <span className="text-[#d7eb7a]">{slide.highlight}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {slide.desc}
            </p>
          </div>

          {/* Right Interactive Orbit Ring Visual (SDLC Corp Reference Graphic) */}
          <div className="flex flex-col">
          <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[420px]">
            {/* Outer Orbit Rings */}
            <div className="absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="absolute h-52 w-52 sm:h-72 sm:w-72 rounded-full border border-dashed border-[#d7eb7a]/20 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />

            {/* Center Core Hub */}
            <div className="relative z-10 flex h-24 w-24 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full bg-[#0a222b] border-2 border-[#d7eb7a]">
              <BrandLogo className="h-10 w-10" />
              <span className="mt-1 text-[10px] font-black uppercase tracking-widest text-[#d7eb7a]">
                SASPAL
              </span>
            </div>

            {/* Orbiting Satellite Tech Chips */}
            {slide.orbitNodes.map((node, idx) => {
              const Icon = node.icon
              return (
                <div
                  key={idx}
                  className={`absolute z-20 flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-110 ${node.color} ${node.pos}`}
                >
                  <Icon size={16} />
                  <span>{node.name}</span>
                </div>
              )
            })}
          </div>

          {/* Slide Controls: parallel to the metrics row on the left */}
          <div className="mt-10 flex items-center justify-center gap-2 border-t border-white/10 pt-8">
            <button
              onClick={prevSlide}
              aria-label="Previous Hero Slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#d7eb7a] hover:text-[#0f172a]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label="Toggle Auto Carousel Playback"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#d7eb7a] hover:text-[#0f172a]"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Hero Slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#d7eb7a] hover:text-[#0f172a]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <a href="#stats" className="flex flex-col items-center text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-[#d7eb7a] transition group">
            <span>Scroll To Discover</span>
            <ArrowDown size={16} className="mt-2 text-[#d7eb7a] animate-bounce" />
          </a>
        </div>
      </div>
    </VideoBackground>
    </>
  )
}
