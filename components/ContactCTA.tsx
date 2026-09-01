'use client'

import React from 'react'
import VideoBackground from './VideoBackground'
import { ArrowRight, Calendar, MessageSquare, Phone, Mail, MapPin } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="relative text-white overflow-hidden">
      <VideoBackground
        localSrc="/videos/cta.mp4"
        fallbackSrc="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-keyboard-41553-large.mp4"
        poster="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80"
        overlayClass="bg-[#0f172a]/85 backdrop-blur-sm"
        heightClass="py-24"
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7eb7a]/40 bg-[#d7eb7a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d7eb7a]">
              GET IN TOUCH
            </span>

            <h2 className="mt-6 text-4xl sm:text-6xl font-black tracking-[-0.05em] text-white leading-tight">
              Ready to Build <span className="text-[#d7eb7a]">Something Great?</span>
            </h2>

            <p className="mt-4 text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Tell us what you&apos;re building — we&apos;ll reply with a clear plan, timeline, and next steps within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7eb7a] px-8 py-4 text-base font-bold text-[#1f2937] shadow-[0_12px_30px_rgba(215,235,122,0.3)] hover:brightness-110 hover:scale-105 transition"
              >
                <MessageSquare size={18} /> Start a Conversation
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md hover:bg-white/20 transition"
              >
                <Calendar size={18} /> Book Consultation
              </a>
            </div>

            {/* Quick Contact Bar */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/10 max-w-3xl mx-auto text-sm text-slate-300">
              <a href="tel:+971502681703" className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#d7eb7a] hover:text-[#d7eb7a] transition">
                <Phone size={16} className="text-[#d7eb7a]" />
                <span>+971 50 2681703</span>
              </a>
              <a href="mailto:sasikumar7688@gmail.com" className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#d7eb7a] hover:text-[#d7eb7a] transition">
                <Mail size={16} className="text-[#d7eb7a]" />
                <span>sasikumar7688@gmail.com</span>
              </a>
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                <MapPin size={16} className="text-[#d7eb7a]" />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </VideoBackground>
    </section>
  )
}
