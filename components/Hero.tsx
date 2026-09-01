'use client'

import React from 'react'
import VideoBackground from './VideoBackground'
import { ArrowDown, ChevronRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <VideoBackground
      localSrc="/videos/hero.mp4"
      fallbackSrc="https://assets.mixkit.co/videos/preview/mixkit-code-running-on-a-computer-screen-41551-large.mp4"
      poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
      overlayClass="bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/80 to-[#0f172a]/70"
      heightClass="min-h-screen pt-28 pb-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Hero Main Text Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7eb7a]/40 bg-[#d7eb7a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d7eb7a] backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#d7eb7a] animate-ping" />
              Saspal Technologies • Digital Engineering Studio
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl xl:text-7xl text-white">
              We build the digital systems <span className="text-[#d7eb7a]">businesses trust to grow.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Saspal Technologies helps startups and enterprise teams design and deliver scalable SaaS platforms, web products, automation workflows, and modern digital experiences with measurable business impact.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7eb7a] px-7 py-4 text-base font-bold text-[#1f2937] shadow-[0_12px_30px_rgba(215,235,122,0.3)] transition hover:brightness-110 hover:scale-105"
              >
                Explore Services <ChevronRight size={18} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white/40"
              >
                Book a Consultation
              </a>
            </div>

            {/* Quick Hero Features */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-8 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#d7eb7a]" />
                <span>Enterprise Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-[#d7eb7a]" />
                <span>High Performance Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#d7eb7a]" />
                <span>UAE & Global Footprint</span>
              </div>
            </div>
          </div>

          {/* Right Hero Product Engineering Feature Panel */}
          <div className="rounded-[30px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[24px] bg-[#0f172a]/90 p-6 border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7eb7a]">Delivery Model</p>
                  <h2 className="mt-1 text-2xl font-black text-white">Product Engineering</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7eb7a] text-[#1f2937] font-black text-xl shadow-lg shadow-[#d7eb7a]/20">
                  S
                </div>
              </div>

              <div className="mt-6 space-y-3.5">
                {[
                  { title: 'Architecture-First Strategy', detail: 'Clean distributed systems design' },
                  { title: 'Secure, Scalable Delivery', detail: 'PCI-DSS & OWASP compliant code' },
                  { title: 'DevOps & Automation', detail: 'CI/CD pipelines & automated tests' },
                  { title: 'Modern Product Execution', detail: 'React, .NET, Node.js & Cloud' }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-3.5 text-sm transition hover:bg-white/10">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d7eb7a] text-[#1f2937] text-xs font-black mt-0.5">✓</span>
                    <div>
                      <div className="font-bold text-white">{item.title}</div>
                      <div className="text-xs text-slate-300 mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Animated Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <a href="#stats" className="flex flex-col items-center text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-[#d7eb7a] transition group">
            <span>Scroll To Discover</span>
            <ArrowDown size={16} className="mt-2 text-[#d7eb7a] animate-bounce" />
          </a>
        </div>
      </div>
    </VideoBackground>
  )
}

