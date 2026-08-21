import Link from 'next/link'
import { Check, Mail, MessageCircle, MessageSquare, Phone, ShieldCheck, Upload } from 'lucide-react'

const bulletPoints = [
  'We are a team of 750+ AI and software experts',
  'building intelligent digital products globally.',
  'Focused on AI strategy, automation, and product innovation.',
  'Our portfolio includes AI-powered solutions for business operations and customer experiences.',
  'We help startups and enterprises across 30+ industries and 80+ countries.',
  'Our AI delivery model combines data engineering, machine learning, and secure product development for measurable business impact.'
]

const contacts = [
  { icon: Phone, label: '+971 50 2681703', accent: 'bg-[#BAFF39] text-[#1f2937] border border-[#d9f68a] shadow-sm' },
  { icon: Mail, label: 'sasikumar7688@gmail.com', accent: 'bg-[#BAFF39] text-[#1f2937] border border-[#d9f68a] shadow-sm' },
  { icon: MessageCircle, label: 'WhatsApp', accent: 'bg-[#BAFF39] text-[#1f2937] border border-[#d9f68a] shadow-sm' },
  { icon: MessageSquare, label: 'Live chat', accent: 'bg-[#f7f7f5] text-[#1f2937] border border-[#e5e7eb] shadow-sm' }
]

export default function ShareNeedsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--primary-dark)]">
      <header className="border-b border-[var(--line)] bg-white shadow-sm">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-2xl font-black tracking-tight text-[var(--primary-dark)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-[#BAFF39] to-[#cfe98a] text-lg font-black text-[#1f2937] shadow-sm ring-1 ring-[#d9f68a]">
                  S
                </div>
                  <div>
                  <div className="text-3xl font-extrabold leading-none text-[var(--primary-dark)]"><span>Zyron</span> <span className="text-[#9bbd2d]">Tech</span></div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Software Development
                  </div>
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--primary)] lg:flex">
              <Link href="/" className="transition hover:text-[#BAFF39]">Home</Link>
              <Link href="/" className="transition hover:text-[#BAFF39]">About</Link>
              <Link href="/" className="transition hover:text-[#BAFF39]">Services</Link>
              <Link href="/" className="transition hover:text-[#BAFF39]">Solutions</Link>
              <Link href="/" className="border-b-2 border-[#BAFF39] pb-1 text-[var(--primary-dark)]">Share Needs</Link>
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <button className="btn-primary">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1500px] px-4 pb-16 pt-8 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.05fr_1.8fr_0.8fr]">
          <aside className="pt-10 xl:pt-14">
            <h2 className="mb-6 text-4xl font-light text-[var(--primary-dark)]">About Zyron Tech</h2>
            <ul className="space-y-5 text-[1.08rem] text-[var(--primary)]">
              {bulletPoints.map((item, index) => (
                <li key={item} className="flex gap-3 leading-snug">
                  <span className="mt-[2px] flex h-5 w-5 items-center justify-center text-[#BAFF39]">
                    <Check className="h-5 w-5 stroke-[3.5]" />
                  </span>
                  <span className={index === 5 ? 'max-w-[28ch]' : ''}>{item}</span>
                </li>
              ))}
            </ul>
          </aside>

          <section className="rounded-none bg-transparent pt-5">
            <h1 className="mb-4 text-4xl font-light tracking-tight text-[var(--primary-dark)] xl:text-[3rem]">
              Software Consulting <span className="font-semibold">| Zyron Tech</span>
            </h1>

            <p className="mb-6 max-w-[620px] text-lg text-[var(--primary)]">
              Describe your consulting needs, and we will follow up within 30 minutes to agree on the most convenient format for further communication.
            </p>

            <form className="w-full max-w-[760px] rounded-[10px] border border-[#d9f68a] bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <div className="mb-5">
                <label className="sr-only" htmlFor="help">How can we help you?</label>
                <textarea
                  id="help"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-md border border-[#d9f68a] bg-white px-4 py-3 text-lg text-[var(--primary-dark)] placeholder:text-[var(--muted)] focus:border-[#BAFF39] focus:outline-none"
                  defaultValue="I'm interested in software consulting services."
                />
              </div>

              <div className="mb-5">
                <label className="flex h-20 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-[#d9f68a] bg-[var(--panel)] text-center text-lg text-[var(--muted)] transition hover:border-[#BAFF39] hover:bg-[#f3f8db]">
                  <span className="flex items-center gap-3">
                    <Upload className="h-5 w-5 text-[var(--muted)]" />
                    Drag and drop or browse to upload your file(s)
                  </span>
                  <input type="file" className="hidden" multiple />
                </label>
              </div>

              <div className="mb-5 flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <label className="sr-only" htmlFor="fullName">Full name</label>
                  <input id="fullName" type="text" placeholder="Full name" className="w-full rounded-md border border-[#d9f68a] bg-white px-4 py-3 text-lg text-[var(--primary-dark)] placeholder:text-[var(--muted)] focus:border-[#BAFF39] focus:outline-none" />
                </div>
                <div className="flex-1">
                  <label className="sr-only" htmlFor="company">Company</label>
                  <input id="company" type="text" placeholder="Company" className="w-full rounded-md border border-[#d9f68a] bg-white px-4 py-3 text-lg text-[var(--primary-dark)] placeholder:text-[var(--muted)] focus:border-[#BAFF39] focus:outline-none" />
                </div>
              </div>

              <div className="mb-5 flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <label className="sr-only" htmlFor="email">Work email</label>
                  <input id="email" type="email" placeholder="Work email" className="w-full rounded-md border border-[#d9f68a] bg-white px-4 py-3 text-lg text-[var(--primary-dark)] placeholder:text-[var(--muted)] focus:border-[#BAFF39] focus:outline-none" />
                </div>
                <div className="flex-1">
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <div className="flex overflow-hidden rounded-md border border-[#d9f68a] bg-white focus-within:border-[#BAFF39]">
                    <span className="flex items-center gap-2 border-r border-[#d9f68a] bg-[var(--panel)] px-3 text-[var(--primary-dark)]">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white text-xs font-bold text-[var(--primary-dark)] shadow-sm ring-1 ring-[#d9f68a]">🇮🇳</span>
                      +91
                    </span>
                    <input id="phone" type="tel" placeholder="0000 000000" className="w-full border-0 bg-transparent px-4 py-3 text-lg text-[var(--primary-dark)] placeholder:text-[var(--muted)] focus:outline-none" />
                  </div>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap items-center gap-5 text-base text-[var(--primary)]">
                <span className="mr-2 font-medium">Preferred way of communication:</span>
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact" defaultChecked className="h-4 w-4 accent-[#BAFF39]" />
                  <span>Any</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact" className="h-4 w-4 accent-[#BAFF39]" />
                  <span>E-Mail</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact" className="h-4 w-4 accent-[#BAFF39]" />
                  <span>Phone</span>
                </label>
              </div>

              <div className="flex items-center justify-between gap-4">
                <button type="submit" className="btn-primary px-10 py-4 text-xl">
                  Send
                </button>

                <div className="flex items-center gap-3 rounded-md border border-[#d9f68a] bg-white px-3 py-2 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#edfdd0] text-[#1f2937]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-[#1f2937]">
                    Verified &amp; secured
                  </div>
                </div>
              </div>
            </form>
          </section>

          <aside className="pt-8 xl:pt-14">
            <h3 className="mb-6 text-3xl font-light text-[var(--primary-dark)]">Our contacts</h3>
            <ul className="space-y-4 text-lg text-[var(--primary)]">
              {contacts.map(({ icon: Icon, label, accent }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full ${accent}`}>
                    <Icon className="h-4 w-4 stroke-[2.5]" />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </main>
  )
}
