'use client'

import React, { FormEvent, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CalendarClock, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

declare global {
  interface Window {
    emailjs?: {
      send: (serviceId: string, templateId: string, templateParams: Record<string, string>, publicKey: string) => Promise<unknown>
    }
  }
}

const EMAILJS_PUBLIC_KEY = 'W1ExhuOeWL_-vZED8'
const EMAILJS_SERVICE_ID = 'service_vlrnxv7'
const EMAILJS_TEMPLATE_ID = 'template_3128zl4'

const countryCodes = [
  { code: '+971', label: 'UAE (+971)' },
  { code: '+1', label: 'USA / Canada (+1)' },
  { code: '+44', label: 'UK (+44)' },
  { code: '+91', label: 'India (+91)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+65', label: 'Singapore (+65)' },
  { code: '+966', label: 'Saudi Arabia (+966)' },
  { code: '+971', label: 'Dubai (+971)' },
  { code: '+92', label: 'Pakistan (+92)' },
  { code: '+93', label: 'Afghanistan (+93)' },
  { code: '+94', label: 'Sri Lanka (+94)' },
  { code: '+31', label: 'Netherlands (+31)' },
  { code: '+32', label: 'Belgium (+32)' },
  { code: '+33', label: 'France (+33)' },
  { code: '+34', label: 'Spain (+34)' },
  { code: '+49', label: 'Germany (+49)' },
  { code: '+52', label: 'Mexico (+52)' },
  { code: '+55', label: 'Brazil (+55)' },
  { code: '+60', label: 'Malaysia (+60)' },
  { code: '+62', label: 'Indonesia (+62)' },
  { code: '+63', label: 'Philippines (+63)' },
  { code: '+66', label: 'Thailand (+66)' },
  { code: '+81', label: 'Japan (+81)' },
  { code: '+82', label: 'South Korea (+82)' },
  { code: '+86', label: 'China (+86)' },
  { code: '+880', label: 'Bangladesh (+880)' },
  { code: '+971', label: 'Abu Dhabi (+971)' },
  { code: '+972', label: 'Israel (+972)' },
  { code: '+971', label: 'Sharjah (+971)' },
  { code: '+977', label: 'Nepal (+977)' }
]

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const countryCode = String(formData.get('countryCode') || '+971')
    const phone = String(formData.get('phone') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    const fullPhone = `${countryCode} ${phone}`.trim()
    const phoneLink = `tel:${fullPhone.replace(/\s+/g, '')}`

    const payload = {
      name,
      from_name: name,
      phone: fullPhone,
      phone_link: phoneLink,
      phone_html: `<a href="${phoneLink}">${fullPhone}</a>`,
      email,
      message
    }

    try {
      await (window as any).emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload, EMAILJS_PUBLIC_KEY)
      setSubmitted(true)
      form.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      alert('Something went wrong while sending your message. Please try again or email us directly.')
    }
  }

  React.useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.async = true
    script.onload = () => {
      if ((window as any).emailjs) {
        ;(window as any).emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
      }
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#f3f4ee] text-[#111827]">
      <Navbar />

      <section className="px-4 pb-12 pt-24 md:px-6 md:pb-20 md:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.35fr] lg:items-start">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
              LET&apos;S TALK
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.06em] md:mt-8 md:text-7xl">
              Let&apos;s build your <span className="text-[#9bbd2d]">next project.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4b5563] md:mt-6 md:text-lg">
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
              <div className="rounded-[28px] border border-[#d7eb7a] bg-[#d7eb7a] p-8 text-[#1d2a12] shadow-[0_16px_40px_rgba(215,235,122,0.18)]">
                <h3 className="text-4xl font-black tracking-[-0.06em]">New Project Enquiry</h3>
                <p className="mt-4 text-lg font-medium">Someone has contacted you through your saspal technologies.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 font-semibold underline underline-offset-4">Send another brief</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-semibold text-[#111827]">Name
                    <input required name="name" placeholder="Your full name" className="mt-2 w-full rounded-xl border border-[#dfe5d5] bg-white px-4 py-3 font-normal outline-none transition placeholder:text-[#9ca3af] focus:border-[#9bbd2d]" />
                  </label>
                  <label className="text-sm font-semibold text-[#111827]">Phone Number
                    <div className="mt-2 flex items-center gap-2">
                      <select name="countryCode" defaultValue="+971" className="w-24 shrink-0 rounded-xl border border-[#dfe5d5] bg-white px-2 py-3 text-sm font-normal outline-none transition focus:border-[#9bbd2d]">
                        {countryCodes.map(({ code, label }) => (
                          <option key={`${code}-${label}`} value={code}>{code}</option>
                        ))}
                      </select>
                      <input required type="tel" name="phone" placeholder="50 123 4567" className="w-full rounded-xl border border-[#dfe5d5] bg-white px-4 py-3 font-normal outline-none transition placeholder:text-[#9ca3af] focus:border-[#9bbd2d]" />
                    </div>
                  </label>
                </div>

                <label className="block text-sm font-semibold text-[#111827]">Email
                  <input required type="email" name="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-[#dfe5d5] bg-white px-4 py-3 font-normal outline-none transition placeholder:text-[#9ca3af] focus:border-[#9bbd2d]" />
                </label>

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
