import React from 'react'

const stats = [
  { label: 'IT Experts', value: '750+' },
  { label: 'Years in IT', value: '37' },
  { label: 'Success Stories', value: '4,300+' },
  { label: 'Industries Served', value: '30+' }
]

export default function Hero(){
  return (
    <div 
      className="w-full py-24 px-6"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(110,110,110,0.72) 0%, rgba(110,110,110,0.78) 34%, rgba(186,255,57,0.28) 100%), url('https://imageio.forbes.com/specials-images/imageserve/655e5665f16e596330a94c9e/Startup-entrepreneur-uses-AI-to-automate-tasks-for-his-business-/0x0.jpg?width=960&dpr=1.5')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Subtle Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div>
          <div className="text-sm text-white font-semibold mb-2 drop-shadow-lg">SOFTWARE CONSULTING SERVICES</div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg max-w-4xl">We Help Select, Build and Manage Different Software Solutions</h1>
          <p className="mt-6 text-lg text-white max-w-2xl leading-relaxed drop-shadow-lg">Expert management of industry-specific software across 30+ sectors. Our consultants draw on 7–20 years of experience to help businesses make the right software choices, cut costs, and achieve lasting results.</p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a href="/share-needs"><button className="btn-primary">Share Your Needs</button></a>
            <a href="#projects"><button className="btn-outline">Get a Quote</button></a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s)=> (
            <div key={s.label} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
              <div className="text-3xl font-bold text-white drop-shadow-lg">{s.value}</div>
              <div className="text-sm text-white mt-1 drop-shadow-lg">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
