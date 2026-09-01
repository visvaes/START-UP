'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Cpu, Layers, Smartphone, Globe, Terminal, Cloud, Sparkles, Server } from 'lucide-react'

function BuildingIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )
}

const megaMenuItems = [
  { title: 'Enterprise Software', desc: 'Custom enterprise applications & core systems', icon: BuildingIcon, href: '#services' },
  { title: 'Web Applications', desc: 'Modern responsive web platforms & portals', icon: Globe, href: '#services' },
  { title: 'Mobile Applications', desc: 'Native & cross-platform iOS/Android apps', icon: Smartphone, href: '#services' },
  { title: 'SaaS Development', desc: 'Multi-tenant cloud architecture & product engineering', icon: Cloud, href: '#services' },
  { title: 'Microservices & APIs', desc: 'REST/JSON services & modular architecture', icon: Server, href: '#services' },
  { title: 'React / .NET / Node', desc: 'Full-stack enterprise tech stack execution', icon: Layers, href: '#services' },
  { title: 'CI/CD & DevOps', desc: 'Automated build, test & deployment pipelines', icon: Terminal, href: '#services' },
  { title: 'Cloud Solutions', desc: 'Azure/AWS migration, security & scalability', icon: Cpu, href: '#services' },
  { title: 'AI-Assisted Engineering', desc: 'Copilot, automation & AI developer tooling', icon: Sparkles, href: '#services' }
]

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setMegaMenuOpen(false)
    setMobileOpen(false)
    if (!href.startsWith('#')) return

    const el = document.querySelector(href) as HTMLElement | null
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', href)
    } else {
      window.location.hash = href
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d7eb7a] font-black text-[#1f2937] shadow-lg shadow-[#d7eb7a]/20 group-hover:scale-105 transition-transform">
            S
          </div>
          <div className="text-xl md:text-2xl font-black tracking-tight text-white">
            Saspal <span className="text-[#d7eb7a]">Technologies</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {/* Services Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className="flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-[#d7eb7a] py-2 transition"
            >
              Services <ChevronDown size={15} className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#d7eb7a]' : ''}`} />
            </button>

            {/* Services Mega Menu dropdown */}
            {megaMenuOpen && (
              <div className="absolute top-full -left-20 w-[680px] bg-[#0f172a]/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-4 animate-in fade-in duration-200">
                {megaMenuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                      className="group flex flex-col gap-1 p-3 rounded-xl hover:bg-white/10 transition border border-transparent hover:border-white/10"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#d7eb7a]/20 text-[#d7eb7a] group-hover:bg-[#d7eb7a] group-hover:text-[#1f2937] transition">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-white group-hover:text-[#d7eb7a] transition">{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-snug mt-1 pl-1">{item.desc}</p>
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          <a
            href="#industries"
            onClick={(e) => { e.preventDefault(); scrollToSection('#industries') }}
            className="text-sm font-semibold text-white/90 hover:text-[#d7eb7a] transition"
          >
            Industries
          </a>

          <a
            href="#technology"
            onClick={(e) => { e.preventDefault(); scrollToSection('#technology') }}
            className="text-sm font-semibold text-white/90 hover:text-[#d7eb7a] transition"
          >
            Solutions
          </a>

          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollToSection('#projects') }}
            className="text-sm font-semibold text-white/90 hover:text-[#d7eb7a] transition"
          >
            Projects
          </a>

          <a
            href="#why-us"
            onClick={(e) => { e.preventDefault(); scrollToSection('#why-us') }}
            className="text-sm font-semibold text-white/90 hover:text-[#d7eb7a] transition"
          >
            About
          </a>

          <a
            href="/contact"
            className="text-sm font-semibold text-white/90 hover:text-[#d7eb7a] transition"
          >
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d7eb7a] px-5 py-2.5 text-sm font-bold text-[#1f2937] shadow-[0_10px_25px_rgba(215,235,122,0.3)] hover:brightness-110 hover:scale-105 transition duration-200"
          >
            Book Consultation →
          </Link>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f172a] border-b border-white/15 px-6 pt-4 pb-8 space-y-4 shadow-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#d7eb7a]">Navigation</div>

          <div className="flex flex-col gap-3">
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); scrollToSection('#services') }}
              className="text-base font-semibold text-white hover:text-[#d7eb7a]"
            >
              Services & Capabilities
            </a>
            <a
              href="#industries"
              onClick={(e) => { e.preventDefault(); scrollToSection('#industries') }}
              className="text-base font-semibold text-white hover:text-[#d7eb7a]"
            >
              Industries
            </a>
            <a
              href="#technology"
              onClick={(e) => { e.preventDefault(); scrollToSection('#technology') }}
              className="text-base font-semibold text-white hover:text-[#d7eb7a]"
            >
              Solutions & Tech
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection('#projects') }}
              className="text-base font-semibold text-white hover:text-[#d7eb7a]"
            >
              Case Studies & Projects
            </a>
            <a
              href="#why-us"
              onClick={(e) => { e.preventDefault(); scrollToSection('#why-us') }}
              className="text-base font-semibold text-white hover:text-[#d7eb7a]"
            >
              Why Choose Us
            </a>
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-white hover:text-[#d7eb7a]"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-4 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center rounded-xl bg-[#d7eb7a] px-5 py-3 text-sm font-bold text-[#1f2937]"
            >
              Book Consultation →
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
