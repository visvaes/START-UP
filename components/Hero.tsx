import React from 'react'

export default function Hero(){
  return (
    <div className="w-full bg-[#f3f4ee] px-4 py-16 text-[#111827] md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
              Digital Engineering Studio
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[#111827] md:text-6xl xl:text-7xl">
              We build the digital systems businesses trust to grow.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4b5563] md:text-lg">
              Saspal Technologies helps startups and enterprise teams design and deliver scalable SaaS platforms, web products, automation workflows, and modern digital experiences with measurable business impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-[#d7eb7a] px-6 py-3.5 text-sm font-semibold text-[#1f2937] shadow-[0_12px_28px_rgba(215,235,122,0.3)] transition hover:brightness-105">
                Explore Services
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#1f2937]/20 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#1f2937] transition hover:bg-white">
                Book a Consultation
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#dfe6d4] bg-[#f8f9f5] p-4 shadow-sm">
                <div className="text-3xl font-black text-[#111827]">14+</div>
                <div className="mt-1 text-sm text-[#4b5563]">Years of software delivery</div>
              </div>
              <div className="rounded-2xl border border-[#dfe6d4] bg-[#f8f9f5] p-4 shadow-sm">
                <div className="text-3xl font-black text-[#111827]">UAE</div>
                <div className="mt-1 text-sm text-[#4b5563]">Dubai-based team</div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#dfe6d4] bg-white p-5 shadow-[0_20px_50px_rgba(17,24,39,0.06)]">
            <div className="rounded-[24px] bg-[#f8f9f5] p-5 border border-[#dfe6d4]">
              <div className="flex items-center justify-between border-b border-[#dfe5d5] pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#4b5563]">Delivery model</p>
                  <h2 className="mt-2 text-2xl font-bold text-[#111827]">Product engineering</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d7eb7a] text-[#1f2937] font-black">S</div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  'Architecture-first strategy',
                  'Secure, scalable delivery',
                  'DevOps and automation',
                  'Modern product execution'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#dfe5d5] bg-white px-3 py-3 text-sm text-[#111827]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d7eb7a] text-[#1f2937] text-xs font-black">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
