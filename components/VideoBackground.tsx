'use client'

import React, { useState, useRef, useEffect } from 'react'

interface VideoBackgroundProps {
  localSrc?: string
  fallbackSrc?: string
  poster?: string
  overlayClass?: string
  children?: React.ReactNode
  className?: string
  heightClass?: string
}

const DEFAULT_TECH_VIDEOS = [
  'https://assets.mixkit.co/videos/preview/mixkit-code-running-on-a-computer-screen-41551-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-keyboard-41553-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-[#061a2d]-digital-network-lines-41552-large.mp4'
]

export default function VideoBackground({
  localSrc = '/videos/hero.mp4',
  fallbackSrc = 'https://assets.mixkit.co/videos/preview/mixkit-code-running-on-a-computer-screen-41551-large.mp4',
  poster = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
  overlayClass = 'bg-[#0f172a]/75 backdrop-blur-[2px]',
  children,
  className = '',
  heightClass = 'min-h-screen'
}: VideoBackgroundProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(localSrc)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Try local video first, if it fails switch to fallback URL
    const checkVideo = async () => {
      try {
        const res = await fetch(localSrc, { method: 'HEAD' })
        if (res.ok) {
          setCurrentSrc(localSrc)
        } else {
          setCurrentSrc(fallbackSrc)
        }
      } catch {
        setCurrentSrc(fallbackSrc)
      }
    }
    checkVideo()
  }, [localSrc, fallbackSrc])

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
    } else {
      setHasError(true)
    }
  }

  return (
    <div className={`relative w-full overflow-hidden ${heightClass} ${className}`}>
      {/* Video Background element */}
      {!hasError ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          onError={handleError}
          className="absolute inset-0 h-full w-full object-cover object-center scale-105 transition-opacity duration-1000"
        >
          <source src={currentSrc} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      {/* Brand Color Overlay (Soft dark overlay with brand accent tones) */}
      <div className={`absolute inset-0 ${overlayClass}`} />

      {/* Subtle Grid overlay for high-tech aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d7eb7a]/10 via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 flex h-full w-full flex-col justify-center">
        {children}
      </div>
    </div>
  )
}
