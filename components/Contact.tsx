'use client'

import React, { FormEvent, useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Linkedin, Twitter, MessageCircle, Send, CheckCircle2 } from 'lucide-react'

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
  { code: '+92', label: 'Pakistan (+92)' },
  { code: '+49', label: 'Germany (+49)' },
  { code: '+33', label: 'France (+33)' }
]

export default function Contact(){
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
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
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    setLoading(true)

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
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#f3f4ee] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          {/* Contact Details Left Side */}
          <div>
            <span className="inline-flex items-center rounded-full border border-[#bfd85d]/70 bg-[#edf4d3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4e5d1d]">
              LET&apos;S TALK
            </span>

            <h2 className="mt-4 text-4xl sm:text-6xl font-black tracking-[-0.05em] text-[#111827] leading-[0.95]">
              Let&apos;s build your <span className="text-[#9bbd2d]">next project.</span>
            </h2>

            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Share a brief overview of your goals and we&apos;ll respond with a clear technical plan, scope clarification, and timeline within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <a href="tel:+971502681703" className="flex items-center gap-4 rounded-[20px] border border-[#dfe6d4] bg-[#f8f9f5] p-4 transition hover:border-[#bfd85d] hover:bg-white shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7eb7a] text-[#1f2937]">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#111827]">+971 50 2681703</div>
                  <div className="text-xs text-[#6b7280]">Available for direct calls and WhatsApp</div>
                </div>
              </a>

              <a href="mailto:sasikumar7688@gmail.com" className="flex items-center gap-4 rounded-[20px] border border-[#dfe6d4] bg-[#f8f9f5] p-4 transition hover:border-[#bfd85d] hover:bg-white shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7eb7a] text-[#1f2937]">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#111827]">sasikumar7688@gmail.com</div>
                  <div className="text-xs text-[#6b7280]">We respond within 24 business hours</div>
                </div>
              </a>

              <a href="https://wa.me/971502681703" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-[20px] border border-[#dfe6d4] bg-[#f8f9f5] p-4 transition hover:border-[#bfd85d] hover:bg-white shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7eb7a] text-[#1f2937]">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#111827]">WhatsApp Instant Chat</div>
                  <div className="text-xs text-[#6b7280]">Connect directly with engineering team</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-[20px] border border-[#dfe6d4] bg-[#f8f9f5] p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7eb7a] text-[#1f2937]">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#111827]">Dubai, United Arab Emirates</div>
                  <div className="text-xs text-[#6b7280]">Supporting global enterprise teams</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#dfe5d5]">
              <div className="font-bold text-sm text-[#111827] mb-3">Connect With Us</div>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-[#dfe5d5] rounded-xl text-[#111827] hover:bg-[#d7eb7a] transition">
                  <Linkedin size={18} />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-[#dfe5d5] rounded-xl text-[#111827] hover:bg-[#d7eb7a] transition">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Right Side */}
          <div className="rounded-[32px] border border-[#dfe6d4] bg-white p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-black text-[#111827] tracking-tight">Send a Project Brief</h3>
            <p className="mt-2 text-sm text-[#4b5563] mb-8">Fill out the details below to initiate contact with Saspal Technologies.</p>

            {submitted ? (
              <div className="rounded-[24px] border border-[#d7eb7a] bg-[#edf4d3] p-8 text-[#1f2937]">
                <div className="flex items-center gap-3 text-2xl font-black text-[#4e5d1d] mb-2">
                  <CheckCircle2 size={28} /> Message Sent Successfully!
                </div>
                <p className="text-sm font-semibold text-[#4e5d1d]">
                  Thank you! Your project brief has been transmitted to Saspal Technologies. We will review your message and reply back shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111827]">
                    Your Name *
                    <input
                      required
                      name="name"
                      placeholder="e.g. John Smith"
                      className="mt-2 w-full rounded-xl border border-[#dfe5d5] bg-[#f8f9f5] px-4 py-3 text-sm font-semibold text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#9bbd2d] focus:bg-white"
                    />
                  </label>

                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111827]">
                    Phone Number *
                    <div className="mt-2 flex items-center gap-2">
                      <select
                        name="countryCode"
                        defaultValue="+971"
                        className="w-24 shrink-0 rounded-xl border border-[#dfe5d5] bg-[#f8f9f5] px-2 py-3 text-xs font-bold outline-none transition focus:border-[#9bbd2d] focus:bg-white"
                      >
                        {countryCodes.map(({ code, label }) => (
                          <option key={`${code}-${label}`} value={code}>{code}</option>
                        ))}
                      </select>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="50 123 4567"
                        className="w-full rounded-xl border border-[#dfe5d5] bg-[#f8f9f5] px-4 py-3 text-sm font-semibold text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#9bbd2d] focus:bg-white"
                      />
                    </div>
                  </label>
                </div>

                <label className="block text-xs font-bold uppercase tracking-wider text-[#111827]">
                  Email Address *
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-[#dfe5d5] bg-[#f8f9f5] px-4 py-3 text-sm font-semibold text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#9bbd2d] focus:bg-white"
                  />
                </label>

                <label className="block text-xs font-bold uppercase tracking-wider text-[#111827]">
                  Project Details *
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project requirements, tech stack, and goals..."
                    className="mt-2 w-full resize-none rounded-xl border border-[#dfe5d5] bg-[#f8f9f5] px-4 py-3 text-sm font-semibold text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#9bbd2d] focus:bg-white"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#d7eb7a] px-6 py-4 text-sm font-bold text-[#1f2937] shadow-lg shadow-[#d7eb7a]/30 transition hover:brightness-105 disabled:opacity-50"
                >
                  {loading ? 'Transmitting Brief...' : 'Send Message'} <Send size={16} />
                </button>
                <p className="text-center text-xs text-[#6b7280]">
                  Your information is kept confidential and strictly used to evaluate your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
