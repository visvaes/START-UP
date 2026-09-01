import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import ChatBotWrapper from '../components/ChatBotWrapper'

export const metadata: Metadata = {
  title: 'Saspal Technologies — Digital Engineering Studio',
  description: 'We build scalable digital platforms for startups and scaling teams worldwide, including SaaS, web apps, mobile apps, e-commerce, and digital marketing solutions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        {children}
        <ChatBotWrapper />
      </body>
    </html>
  )
}
