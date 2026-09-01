'use client'

import React, { useState, useEffect } from 'react'
import { Moon, Sun, Calendar, Mail, Phone } from 'lucide-react'

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M16 12.5c-.3.4-.9.7-1.3.7-.4 0-1.1-.3-2.1-1.3s-1.3-1.7-1.3-2.1c0-.4.3-1 .7-1.3.2-.2.4-.2.5 0l1 1.5c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3 0 .5.3.5.8 1.1 1.4 1.7.6.6 1.2 1.1 1.7 1.4.2.2.4.1.5 0l.5-.4c.2-.1.4-.1.6 0l1.5 1c.2.1.2.3 0 .5z" />
    </svg>
  )
}

export default function FloatingDock() {
  const [isDark, setIsDark] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  useEffect(() => {
    // Check initial dark mode state
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/contact'
    }
  }

  const items = [
    {
      id: 'theme',
      label: isDark ? 'Light Mode' : 'Dark Mode',
      icon: isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />,
      onClick: toggleTheme,
      highlight: false
    },
    {
      id: 'whatsapp',
      label: 'Chat on WhatsApp',
      icon: <WhatsAppIcon className="w-5 h-5 text-white" />,
      href: 'https://wa.me/971502681703?text=Hi%20Saspal%20Technologies,%20I%20would%20like%20to%20discuss%20a%20project.',
      target: '_blank',
      rel: 'noopener noreferrer',
      highlight: true
    },
    {
      id: 'calendar',
      label: 'Book Consultation',
      icon: <Calendar className="w-5 h-5 text-white" />,
      onClick: scrollToContact,
      highlight: false
    },
    {
      id: 'email',
      label: 'Send Email',
      icon: <Mail className="w-5 h-5 text-white" />,
      href: 'mailto:sasikumar7688@gmail.com',
      highlight: false
    },
    {
      id: 'phone',
      label: 'Call Us',
      icon: <Phone className="w-5 h-5 text-white" />,
      href: 'tel:+971502681703',
      highlight: false
    }
  ]

  return (
    <aside aria-label="Quick contact actions" className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3">
      {items.map((item) => {
        const content = (
          <div className="relative group flex items-center justify-center">
            {/* Tooltip */}
            <span
              className={`absolute right-14 whitespace-nowrap rounded-md bg-[#18181b] px-2.5 py-1 text-xs font-medium text-white shadow-md opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 ${
                activeTooltip === item.id ? 'opacity-100' : ''
              }`}
            >
              {item.label}
            </span>

            {/* Button */}
            <div
              className={`relative flex h-11 w-11 items-center justify-center rounded-full bg-[#18181b]/85 backdrop-blur-md border border-white/15 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:border-[#d7eb7a] hover:bg-[#18181b] ${
                item.highlight ? 'ring-2 ring-white/20 ring-offset-2 ring-offset-transparent' : ''
              }`}
            >
              {item.icon}
            </div>
          </div>
        )

        if (item.href) {
          return (
            <a
              key={item.id}
              href={item.href}
              target={item.target}
              rel={item.rel}
              aria-label={item.label}
              onMouseEnter={() => setActiveTooltip(item.id)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {content}
            </a>
          )
        }

        return (
          <button
            key={item.id}
            onClick={item.onClick}
            type="button"
            aria-label={item.label}
            onMouseEnter={() => setActiveTooltip(item.id)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            {content}
          </button>
        )
      })}
    </aside>
  )
}
