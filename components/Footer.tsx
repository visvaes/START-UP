import React from 'react'
import { Linkedin, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 bg-[#4d4d4d] text-slate-200">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BAFF39] font-bold text-[#1f2937]">ZT</div>
              <div>
                <div className="font-semibold text-white"><span className="text-[#111827]">Zyron</span> <span className="text-[#BAFF39]">Tech</span></div>
                <div className="text-xs text-slate-200">Digital Engineering</div>
              </div>
            </div>
            <p className="text-sm text-slate-300">Digital engineering and growth studio building scalable platforms for ambitious teams worldwide.</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="transition hover:text-white">SaaS Development</a></li>
              <li><a href="#services" className="transition hover:text-white">Web Applications</a></li>
              <li><a href="#services" className="transition hover:text-white">Mobile Apps</a></li>
              <li><a href="#services" className="transition hover:text-white">E-Commerce</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="transition hover:text-white">What We Do</a></li>
              <li><a href="#projects" className="transition hover:text-white">Case Studies</a></li>
              <li><a href="#testimonials" className="transition hover:text-white">Client Feedback</a></li>
              <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#BAFF39]" />
                <a href="tel:+971502681703" className="transition hover:text-white">+971 50 2681703</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#BAFF39]" />
                <a href="mailto:sasikumar7688@gmail.com" className="transition hover:text-white">sasikumar7688@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#BAFF39]" />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-sm text-slate-400">
              © {currentYear} Zyron Tech – Digital Engineering Studio. All rights reserved.
            </div>

            <div className="flex gap-4">
              <a href="#" className="rounded-lg p-2 text-slate-400 transition hover:bg-[#3a3a3a] hover:text-[#BAFF39]">
                <Linkedin size={18} />
              </a>
              <a href="#" className="rounded-lg p-2 text-slate-400 transition hover:bg-[#3a3a3a] hover:text-[#BAFF39]">
                <Twitter size={18} />
              </a>
              <a href="#" className="rounded-lg p-2 text-slate-400 transition hover:bg-[#3a3a3a] hover:text-[#BAFF39]">
                <Facebook size={18} />
              </a>
              <a href="#" className="rounded-lg p-2 text-slate-400 transition hover:bg-[#3a3a3a] hover:text-[#BAFF39]">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
