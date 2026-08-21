'use client'

import React, { FormEvent, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CalendarClock, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const contactItems = [
  {
    icon: Mail,
    title: 'Email us',
    value: 'sasikumar7688@gmail.com',
    note: 'General enquiries and project briefs',
    href: 'mailto:sasikumar7688@gmail.com'
  },
  {
    icon: Phone,
    title: 'Call us',
    value: '+971 50 2681703',
    note: 'Available for calls and WhatsApp',
    href: 'tel:+971502681703'
  },
  {
    icon: MapPin,
    title: 'Based in',
    value: 'Dubai, UAE',
    note: 'Supporting ambitious teams worldwide',
    href: '#brief'
  },
  {
    icon: CalendarClock,
    title: 'Response time',
    value: 'Within 24 hours',
    note: 'Clear next steps after your message',
    href: '#brief'
  }
]

export default function ContactPage(){
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#f3f4ee] text-[#111827]">
      <Navbar />

      <section className="px-6 pb-20 pt-36 md:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.35fr] lg:items-start">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
              LET&apos;S TALK
            </span>
            <h1 className="mt-8 max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Let&apos;s build your <span className="text-[#9bbd2d]">next project.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4b5563]">
              Share a brief overview and we&apos;ll respond with clear next steps, scope clarification, and the best engagement model for your goals.
            </p>

            <div className="mt-10 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.title} href={item.href} className="flex items-center gap-4 rounded-[18px] border border-[#dfe6d4] bg-[#f8f9f5] p-4 transition hover:-translate-y-0.5 hover:border-[#bfd85d]">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#d7eb7a] text-[#1d2a12]">
                      <Icon size={21} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#111827]">{item.value}</div>
                      <div className="text-sm text-[#4b5563]">{item.note}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          <div id="brief" className="rounded-[28px] border border-[#dfe6d4] bg-[#f8f9f5] p-6 shadow-[0_16px_40px_rgba(17,24,39,0.06)] md:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">Send a project brief</h2>
              <p className="mt-3 text-[#4b5563]">Tell us what you&apos;re building and we&apos;ll help shape the next move.</p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-[#bfd85d] bg-[#edf4d3] p-6 text-[#1d2a12]">
                <h3 className="text-xl font-bold">Thanks for reaching out.</h3>
                <p className="mt-2">Your brief is ready for review. We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-5 font-semibold underline underline-offset-4">Send another brief</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-semibold text-[#111827]">Full Name
                    <input required name="name" placeholder="Your full name" className="mt-2 w-full rounded-xl border border-[#dfe5d5] bg-white px-4 py-3 font-normal outline-none transition placeholder:text-[#9ca3af] focus:border-[#9bbd2d]" />
                  </label>
                  <label className="text-sm font-semibold text-[#111827]">Email Address
                    <input required type="email" name="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-[#dfe5d5] bg-white px-4 py-3 font-normal outline-none transition placeholder:text-[#9ca3af] focus:border-[#9bbd2d]" />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-semibold text-[#111827]">Company
                    <input name="company" placeholder="Company / organization" className="mt-2 w-full rounded-xl border border-[#dfe5d5] bg-white px-4 py-3 font-normal outline-none transition placeholder:text-[#9ca3af] focus:border-[#9bbd2d]" />
                  </label>
                  <label className="text-sm font-semibold text-[#111827]">Project Type
                    <select name="type" defaultValue="" className="mt-2 w-full rounded-xl border border-[#dfe5d5] bg-white px-4 py-3 font-normal outline-none transition focus:border-[#9bbd2d]">
                      <option value="" disabled>Select a type</option>
                      <option>SaaS platform</option>
                      <option>Web application</option>
                      <option>Mobile application</option>
                      <option>Platform modernization</option>
                      <option>E-commerce</option>
                    </select>
                  </label>
                </div>

                <label className="block text-sm font-semibold text-[#111827]">Project Details
                  <textarea required name="message" rows={6} placeholder="Share your goals, current state, timeline, and any constraints." className="mt-2 w-full resize-none rounded-xl border border-[#dfe5d5] bg-white px-4 py-3 font-normal leading-relaxed outline-none transition placeholder:text-[#9ca3af] focus:border-[#9bbd2d]" />
                </label>

                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#d7eb7a] px-6 py-4 font-semibold text-[#1d2a12] transition hover:brightness-105">
                  Send Message <Send size={17} />
                </button>
                <p className="text-center text-xs text-[#6b7280]">Your information is confidential and used only to respond to your request.</p>
              </form>
            )}

            <div className="mt-8 flex items-center justify-between border-t border-[#dfe5d5] pt-6 text-sm text-[#6b7280]">
              <Link href="/" className="inline-flex items-center gap-2 font-semibold text-[#4b5563] hover:text-[#111827]">Back to home <ArrowRight size={15} /></Link>
              <a href="https://www.linkedin.com" className="inline-flex items-center gap-2 hover:text-[#111827]"><Linkedin size={16} /> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
