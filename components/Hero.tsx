import React from 'react'

const stats = [
  { label: 'Experience', value: '17+ yrs' },
  { label: 'Dubai Based', value: 'UAE' },
  { label: 'Delivery', value: 'PMI + PSM' },
  { label: 'Focus', value: 'Scalable Systems' }
]

export default function Hero(){
  return (
    <div 
      className="w-full px-4 py-16 md:px-6 md:py-24"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(11,15,20,0.78) 0%, rgba(18,23,28,0.8) 34%, rgba(186,255,57,0.18) 100%), url('https://imageio.forbes.com/specials-images/imageserve/655e5665f16e596330a94c9e/Startup-entrepreneur-uses-AI-to-automate-tasks-for-his-business-/0x0.jpg?width=960&dpr=1.5')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white drop-shadow-lg md:mb-2 md:text-sm">Digital Engineering Studio</div>
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg max-w-4xl">We Build Scalable Digital Platforms</h1>
          <p className="mt-4 text-base md:mt-6 md:text-lg text-white max-w-2xl leading-relaxed drop-shadow-lg">SaaS, web & mobile applications, platform modernization, and technical delivery for startups and scaling teams worldwide. We combine architecture-first thinking with execution-focused delivery to turn ambitious ideas into reliable, high-performing digital products.</p>

          <div className="mt-6 md:mt-8 flex gap-3 md:gap-4 flex-wrap">
            <a href="/contact"><button className="btn-primary">Get a Proposal</button></a>
            <a href="#services"><button className="btn-outline">Explore Services</button></a>
          </div>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s)=> (
            <div key={s.label} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25">
              <div className="text-3xl font-bold text-white drop-shadow-lg">{s.value}</div>
              <div className="text-sm text-white mt-1 drop-shadow-lg">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
