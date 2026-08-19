import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import ChatBotWrapper from '../components/ChatBotWrapper'

export const metadata: Metadata = {
  title: 'SoftCorp — Software Consulting Services',
  description: 'Expert software consulting services across 30+ industries. Technology advisory, software development, architecture, and compliance consulting from experienced consultants.'
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
