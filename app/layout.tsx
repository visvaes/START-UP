import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import ChatBotWrapper from '../components/ChatBotWrapper'
import FloatingDock from '../components/FloatingDock'

export const metadata: Metadata = {
  title: 'Saspal Technologies — Digital Engineering Studio',
  description: 'We build scalable digital platforms for startups and scaling teams worldwide, including SaaS, web apps, mobile apps, e-commerce, and digital marketing solutions.',
  icons: {
    icon: '/logo.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingDock />
        <ChatBotWrapper />
      </body>
    </html>
  )
}
