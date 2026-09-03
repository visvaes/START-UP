'use client'

import React, { useState, useEffect } from 'react'
import { Moon, Sun, Calendar, Mail, Phone } from 'lucide-react'

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.632 4.63 1.842 6.573L3.5 29l7.62-2.29A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-4.522 1.36 1.377-4.41-.232-.365A9.71 9.71 0 0 1 5.75 15c0-5.66 4.596-10.25 10.254-10.25 5.657 0 10.246 4.59 10.246 10.25 0 5.66-4.589 10.25-10.246 10.25zm5.63-7.68c-.31-.155-1.828-.902-2.111-1.005-.283-.104-.489-.155-.696.155-.207.31-.797 1.005-.977 1.211-.18.207-.36.233-.67.078-.31-.155-1.307-.482-2.49-1.535-.92-.82-1.542-1.833-1.723-2.143-.18-.31-.02-.478.136-.632.14-.14.31-.362.465-.543.155-.18.207-.31.31-.517.103-.207.052-.388-.026-.543-.078-.155-.696-1.677-.954-2.297-.251-.604-.507-.522-.696-.531l-.593-.01c-.207 0-.543.078-.827.388-.283.31-1.084 1.06-1.084 2.582 0 1.522 1.11 2.994 1.264 3.2.155.207 2.185 3.337 5.293 4.68.74.32 1.317.512 1.767.655.742.236 1.417.203 1.951.123.595-.089 1.828-.747 2.086-1.469.258-.723.258-1.343.18-1.469-.077-.129-.284-.207-.593-.362z"/>
    </svg>
  )
}

export default function FloatingDock() {
  const [isDark, setIsDark] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  useEffect(() => {
    // Check initial dark mode state from document or localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
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
      highlight: false
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
      {items.map((item, index) => {
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
              className={`relative flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md border border-white/15 text-white shadow-lg transition-all duration-300 hover:scale-110 animate-dock-float ${
                item.id === 'whatsapp'
                  ? 'bg-[#25D366] border-[#25D366]/40 hover:bg-[#1ebe5b] animate-dock-pulse'
                  : 'bg-[#18181b]/85 hover:border-[#d7eb7a] hover:bg-[#18181b]'
              } ${item.highlight ? 'ring-2 ring-white/20 ring-offset-2 ring-offset-transparent' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
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
