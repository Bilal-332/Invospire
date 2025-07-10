"use client"

import { useState, useEffect, Suspense } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import the holographic network 3D shape to avoid SSR issues
const TorusShape3D = dynamic(() => import("./torus-shape-3d").catch(() => ({ default: () => null })), { 
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
})

const overlayTexts = [
  { text: "Local oversight", position: "top-16 right-12", delay: "delay-1000" },
  { text: "Global expertise", position: "top-1/2 right-3/4", delay: "delay-1200" },
  { text: "Flawless execution", position: "bottom-20 right-16", delay: "delay-1400" },
]

export default function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[110vh] flex items-center overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[110vh] pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-24">
          {/* Left Column - Content */}
          <div className="space-y-8 sm:space-y-12 px-2 sm:px-4 lg:px-8">
            {/* Main Heading */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8 sm:mb-12 lg:mb-16 pb-2 sm:pb-4">
                <span className="block text-white mb-2 sm:mb-4">
                  Simply Exceptional
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#FBBF24] pb-1 sm:pb-2">
                  Software Engineering
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed w-full max-w-2xl">
                We ideate, engineer, and transform digital landscapes to help your business stay modern, efficient, and agile.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/services">
                  <div className="bg-gradient-to-r from-[#2DD4BF] to-[#FBBF24] p-[2px] rounded-full group shadow-lg hover:shadow-xl transition-all duration-300 w-fit">
                    <div className="bg-black hover:bg-gray-900 px-6 sm:px-10 py-3 sm:py-4 rounded-full flex items-center">
                      <span className="text-base sm:text-lg font-semibold text-white">
                        Get Started
                      </span>
                      <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Static 3D Torus Shape */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <TorusShape3D />
            </Suspense>

            {/* Floating text overlays */}
            {overlayTexts.map((overlay, index) => (
              <div
                key={index}
                className={`absolute ${overlay.position} ${overlay.delay} transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hidden lg:block`}
              >
                <div className="bg-gradient-to-r from-[#2DD4BF] to-[#FBBF24] p-[1px] rounded-lg shadow-lg">
                  <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#FBBF24] whitespace-nowrap">
                      {overlay.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
