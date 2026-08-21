import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Projects from '../components/Projects'
import Insights from '../components/Insights'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section id="home" className="pt-20 scroll-mt-28">
        <Hero />
      </section>

      <div className="container mx-auto px-6 py-16">
        <Services />
        <CTA />
        <Projects />
        <Insights />
        <Skills />
        <Testimonials />
      </div>

      <div className="container mx-auto px-6 py-16">
        <Contact />
      </div>

      <Footer />
    </main>
  )
}
