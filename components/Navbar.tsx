'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technologies', href: '#skills' },
  { label: 'Share Needs', href: '/share-needs' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  
  return (
    <header className="fixed w-full z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#BAFF39] flex items-center justify-center text-[#1f2937] font-bold text-sm shadow-sm">SC</div>
          <div>
            <div className="font-bold text-[#4d4d4d]">SoftCorp</div>
            <div className="text-xs text-slate-500">Consulting</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link font-medium text-sm"
              >
                {item.label}
              </Link>
            ) : (
              <a 
                key={item.label}
                href={item.href} 
                className="nav-link font-medium text-sm"
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        <div className="hidden md:flex">
          <a href="#contact">
            <button className="btn-primary">Get in Touch</button>
          </a>
        </div>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 text-slate-900">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-6 pb-6 flex flex-col gap-3 pt-4">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="nav-link py-2 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  key={item.label}
                  href={item.href} 
                  onClick={() => setOpen(false)} 
                  className="nav-link py-2 font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <button className="mt-4 btn-primary w-full">Get in Touch</button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
