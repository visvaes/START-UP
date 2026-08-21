'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#home' },
  { label: 'What We Do', href: '#services' },
  { label: 'Case Studies', href: '#projects' },
  { label: 'Blog', href: '#insights' },
  { label: 'Contact', href: '/contact' }
]

export default function Navbar(){
  const [open, setOpen] = useState(false)

  const scrollToSection = (href: string) => {
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
    <header className="fixed w-full z-40 bg-white shadow-none">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="font-black tracking-tight text-[#0f172a] text-3xl"><span>Zyron</span> <span className="text-[#9bbd2d]">Tech</span></div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium text-sm text-[#111827] transition hover:text-[#7aa21d]"
              >
                {item.label}
              </Link>
            ) : (
              <a 
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(item.href)
                }}
                className="font-medium text-sm text-[#111827] transition hover:text-[#7aa21d]"
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 rounded-full border border-[#dfe5d5] bg-white text-[#111827] hover:border-[#7aa21d] transition">
            ☼
          </button>
          <a
            href="/contact"
          >
            <button className="bg-[#d7eb7a] text-[#0f172a] font-semibold px-5 py-2.5 rounded-full shadow-[0_10px_25px_rgba(215,235,122,0.3)] hover:brightness-105 transition">Get In Touch →</button>
          </a>
        </div>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-[#edf0e7]">
          <div className="px-6 pb-6 flex flex-col gap-3 pt-4">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[#111827] py-2 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault()
                    setOpen(false)
                    scrollToSection(item.href)
                  }}
                  className="text-[#111827] py-2 font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
            >
              <button className="mt-4 bg-[#d7eb7a] text-[#0f172a] font-semibold px-5 py-2.5 rounded-full w-full shadow-[0_10px_25px_rgba(215,235,122,0.3)]">Get In Touch →</button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
