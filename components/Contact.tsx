import React from 'react'
import { Phone, Mail, MapPin, Linkedin, Twitter, MessageCircle } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Ready to Build Something Great?</h2>
        <p className="text-slate-600 text-lg mb-12">Tell us what you’re building — we’ll reply within 24 hours with a clear plan, timeline, and next steps.</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-slate-900">Quick Contact Info</h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Phone className="text-[#BAFF39] mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-slate-900">Phone</div>
                  <a href="tel:+971502681703" className="text-[#4d4d4d] hover:underline">+971 50 2681703</a>
                  <div className="text-xs text-slate-600">Available for calls and WhatsApp</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#BAFF39] mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <a href="mailto:sasikumar7688@gmail.com" className="text-[#4d4d4d] hover:underline">sasikumar7688@gmail.com</a>
                  <div className="text-xs text-slate-600">We usually respond within 24 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative mt-1 flex h-5 w-5 items-center justify-center text-[#BAFF39]">
                  <MessageCircle className="h-5 w-5" strokeWidth={2} />
                  <span className="absolute inset-[1.5px] rounded-full border border-[#BAFF39]/80" aria-hidden="true" />
                  <span className="absolute text-[9px] font-bold leading-none tracking-[-0.08em] text-[#1f2937]">w</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">WhatsApp</div>
                  <a href="https://wa.me/971502681703" target="_blank" rel="noopener noreferrer" className="text-[#4d4d4d] hover:underline">+971 50 2681703</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#BAFF39] mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-slate-900">Dubai, UAE</div>
                  <div className="text-slate-700">Digital engineering and growth studio building scalable platforms for ambitious teams worldwide.</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com" className="p-3 bg-slate-100 rounded-lg text-[#4d4d4d] hover:bg-[#BAFF39] hover:text-[#1f2937] transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://x.com" className="p-3 bg-slate-100 rounded-lg text-[#4d4d4d] hover:bg-[#BAFF39] hover:text-[#1f2937] transition">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
