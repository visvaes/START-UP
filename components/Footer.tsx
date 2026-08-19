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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BAFF39] font-bold text-[#1f2937]">SC</div>
              <div>
                <div className="font-semibold text-white">SoftCorp</div>
                <div className="text-xs text-slate-200">Consulting</div>
              </div>
            </div>
            <p className="text-sm text-slate-300">Expert software consulting services for businesses worldwide.</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="transition hover:text-white">Consulting</a></li>
              <li><a href="#services" className="transition hover:text-white">Development</a></li>
              <li><a href="#services" className="transition hover:text-white">Architecture</a></li>
              <li><a href="#services" className="transition hover:text-white">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="transition hover:text-white">About Us</a></li>
              <li><a href="#projects" className="transition hover:text-white">Case Studies</a></li>
              <li><a href="#testimonials" className="transition hover:text-white">Testimonials</a></li>
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
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#BAFF39]" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 3.48 20.52L2.5 22l1.56-.98a11.86 11.86 0 0 0 17.46-17.54Zm-6.3 4.3c-.27-.27-.74-.27-1.02 0l-.84.84a.78.78 0 0 1-.97-.07c-.62-.61-1.07-1.23-1.38-1.84a.77.77 0 0 1 .16-.89l.69-.69c.28-.28.28-.74 0-1.02l-.54-.54a.72.72 0 0 0-1.02 0L7.9 5.33a1.5 1.5 0 0 0-.38 1.75c.35.9.9 1.72 1.64 2.46.76.75 1.61 1.33 2.55 1.7.92.35 1.9.43 2.8.17a1.49 1.49 0 0 0 1.08-1.36l-.09-.72a.72.72 0 0 0-.72-.6h-.03l-.88.02c-.28 0-.52-.18-.61-.44l-.38-.9c-.09-.24-.34-.4-.6-.4h-.02c-.26 0-.5.13-.64.35l-.45.72c-.14.22-.39.35-.65.35h-.04c-.16 0-.31-.08-.41-.22l-.54-.7a.72.72 0 0 0-1.02 0l-.82.82c-.28.28-.28.74 0 1.02l.57.57c.08.08.12.19.12.31 0 .12-.04.24-.12.32-.14.14-.3.27-.47.39-.18.12-.32.27-.42.45l-.69 1.14c-.2.32-.16.73.09 1l.38.38c.29.29.71.38 1.09.24.72-.28 1.45-.67 2.12-1.13.71-.5 1.34-1.12 1.88-1.77.55-.66 1-1.42 1.35-2.18.18-.38.16-.83-.1-1.18l-.74-.99Z"/>
                </svg>
                <a href="https://wa.me/971502681703" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">WhatsApp</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#BAFF39]" />
                <span>5900 S. Lake Forest Dr, Dallas, TX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-sm text-slate-400">
              © {currentYear} SoftCorp Consulting. All rights reserved.
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
