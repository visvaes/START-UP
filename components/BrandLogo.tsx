'use client'

import React from 'react'

interface BrandLogoProps {
  className?: string
  size?: number
  showText?: boolean
  textColor?: string
  imageSrc?: string
}

export default function BrandLogo({
  className = 'h-14 w-14 md:h-16 md:w-16',
  size = 56,
  showText = false,
  textColor = 'text-white',
  imageSrc = '/logo.svg'
}: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3.5 group">
      {/* 3D Blueprint Hexagon Logo Image / Vector */}
      <div className={`relative shrink-0 overflow-hidden rounded-2xl border border-white/25 bg-[#0a222b] shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-[#d7eb7a] ${className}`}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Saspal Technologies Logo"
            className="h-full w-full object-cover"
            onError={(e) => {
              // Fallback to inline SVG if image file is missing
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : null}

        {/* Crisp Vector Blueprint Hexagon Logo SVG */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
        >
          {/* Blueprint Grid Lines Pattern */}
          <defs>
            <pattern id="brand-grid-pattern-lg" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#1c3d4a" strokeWidth="0.7" />
            </pattern>
            <filter id="brand-logo-shadow-lg" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2.5" dy="3" stdDeviation="1.2" floodColor="#000000" floodOpacity="0.6" />
            </filter>
          </defs>

          <rect width="100" height="100" fill="url(#brand-grid-pattern-lg)" />

          {/* Blueprint Background Grid Overlay Lines */}
          <line x1="20" y1="0" x2="20" y2="100" stroke="#1c4150" strokeWidth="0.8" />
          <line x1="35" y1="0" x2="35" y2="100" stroke="#1c4150" strokeWidth="0.8" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="#1c4150" strokeWidth="0.8" />
          <line x1="65" y1="0" x2="65" y2="100" stroke="#1c4150" strokeWidth="0.8" />
          <line x1="80" y1="0" x2="80" y2="100" stroke="#1c4150" strokeWidth="0.8" />

          <line x1="0" y1="20" x2="100" y2="20" stroke="#1c4150" strokeWidth="0.8" />
          <line x1="0" y1="35" x2="100" y2="35" stroke="#1c4150" strokeWidth="0.8" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#1c4150" strokeWidth="0.8" />
          <line x1="0" y1="65" x2="100" y2="65" stroke="#1c4150" strokeWidth="0.8" />
          <line x1="0" y1="80" x2="100" y2="80" stroke="#1c4150" strokeWidth="0.8" />

          {/* Outer 3D Hexagon Frame / Wireframe Cube (Double-Wall Bevel) */}
          <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinejoin="round" />
          <polygon points="50,16 80,33.5 80,66.5 50,84 20,66.5 20,33.5" fill="rgba(10, 34, 43, 0.4)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />

          {/* Frame 3D Corner Bevel Connectors */}
          <line x1="50" y1="10" x2="50" y2="16" stroke="#ffffff" strokeWidth="1.8" />
          <line x1="85" y1="30" x2="80" y2="33.5" stroke="#ffffff" strokeWidth="1.8" />
          <line x1="85" y1="70" x2="80" y2="66.5" stroke="#ffffff" strokeWidth="1.8" />
          <line x1="50" y1="90" x2="50" y2="84" stroke="#ffffff" strokeWidth="1.8" />
          <line x1="15" y1="70" x2="20" y2="66.5" stroke="#ffffff" strokeWidth="1.8" />
          <line x1="15" y1="30" x2="20" y2="33.5" stroke="#ffffff" strokeWidth="1.8" />

          {/* Center 3D Axis Perspective Lines */}
          <line x1="50" y1="10" x2="50" y2="90" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
          <line x1="15" y1="30" x2="85" y2="70" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
          <line x1="15" y1="70" x2="85" y2="30" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />

          {/* 3D Extrusion Shadow for 'S' Block */}
          <path d="M 37 31 H 67 V 43 H 50 L 63 55 H 67 V 73 H 37 V 61 H 54 L 41 49 H 37 Z" fill="#040e13" opacity="0.85" />

          {/* Pure White Main Block 'S' Face */}
          <path d="M 35 29 H 65 V 41 H 48 L 61 53 H 65 V 71 H 35 V 59 H 52 L 39 47 H 35 Z" fill="#ffffff" filter="url(#brand-logo-shadow-lg)" />
        </svg>
      </div>

      {showText && (
        <div className={`text-2xl md:text-3xl font-black tracking-tight ${textColor}`}>
          Saspal <span className="text-[#d7eb7a]">Technologies</span>
        </div>
      )}
    </div>
  )
}
