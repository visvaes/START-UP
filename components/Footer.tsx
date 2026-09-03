'use client'

import React from 'react'
import Link from 'next/link'
import BrandLogo from './BrandLogo'
import { Linkedin, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t-4 border-[#d7eb7a]">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <BrandLogo className="h-12 w-12 md:h-14 md:w-14" showText textColor="text-white" />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Saspal Technologies is a digital engineering and growth studio building scalable software platforms, SaaS products, microservices, and automation workflows for ambitious global teams.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-[#d7eb7a] hover:text-[#1f2937]">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-[#d7eb7a] hover:text-[#1f2937]">
                <Twitter size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-[#d7eb7a] hover:text-[#1f2937]">
                <Facebook size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-[#d7eb7a] hover:text-[#1f2937]">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#d7eb7a]">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="transition hover:text-white">Enterprise Software</a></li>
              <li><a href="#services" className="transition hover:text-white">Microservices & APIs</a></li>
              <li><a href="#services" className="transition hover:text-white">React & Node.js</a></li>
              <li><a href="#services" className="transition hover:text-white">CI/CD & DevOps</a></li>
              <li><a href="#services" className="transition hover:text-white">Aviation & Travel Tech</a></li>
              <li><a href="#services" className="transition hover:text-[#d7eb7a]">AI-Assisted Dev</a></li>
            </ul>
          </div>

          {/* Industries & Solutions */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#d7eb7a]">Industries</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#industries" className="transition hover:text-white">Aviation & Flight Booking</a></li>
              <li><a href="#industries" className="transition hover:text-white">Travel & Hospitality</a></li>
              <li><a href="#industries" className="transition hover:text-white">HR & Workforce</a></li>
              <li><a href="#industries" className="transition hover:text-white">Education & Media</a></li>
              <li><a href="#industries" className="transition hover:text-white">E-Commerce & Digital</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#d7eb7a]">Contact Dubai</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#d7eb7a] shrink-0" />
                <a href="tel:+971502681703" className="transition hover:text-white">+971 50 2681703</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#d7eb7a] shrink-0" />
                <a href="mailto:sasikumar7688@gmail.com" className="transition hover:text-white">sasikumar7688@gmail.com</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#d7eb7a]" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} Saspal Technologies – Digital Engineering Studio. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/contact" className="hover:text-white">Privacy Policy</a>
            <a href="/contact" className="hover:text-white">Terms of Engagement</a>
            <a href="/contact" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
