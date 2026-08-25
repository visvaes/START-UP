import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section id="home" className="scroll-mt-28 pt-16 md:pt-20">
        <Hero />
      </section>

      <div className="container mx-auto px-4 py-10 md:px-6 md:py-16">
        <Services />
        <CTA />
        <Projects />
      </div>

      <div className="container mx-auto px-4 py-10 md:px-6 md:py-16">
        <Contact />
      </div>

      <Footer />
    </main>
  )
}
