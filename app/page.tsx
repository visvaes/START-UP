import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section id="home" className="pt-20">
        <Hero />
      </section>

      <div className="container mx-auto px-6 py-16">
        <About />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
      </div>

      <section className="bg-[#f3f4f6] py-16">
        <div className="container mx-auto px-6">
          <CTA />
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <Contact />
      </div>

      <Footer />
    </main>
  )
}
