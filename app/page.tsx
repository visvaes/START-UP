import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Industries from '../components/Industries'
import Technology from '../components/Technology'
import WhyChooseUs from '../components/WhyChooseUs'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Testimonials from '../components/Testimonials'
import ContactCTA from '../components/ContactCTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <main className="min-h-screen bg-[#f3f4ee] text-[#111827]">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <Stats />
      <Services />
      <Industries />
      <Technology />
      <WhyChooseUs />
      <Projects />
      <Achievements />
      <Testimonials />
      <ContactCTA />
      <Contact />
      <Footer />
    </main>
  )
}
