"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const stats = [
  {
    id: 1,
    number: "14+",
    label: "Years in Service",
    animationDelay: "0s"
  },
  {
    id: 2,
    number: "300+",
    label: "Global Clients",
    animationDelay: "2s"
  },
  {
    id: 3,
    number: "250+",
    label: "Tech Experts",
    animationDelay: "4s"
  }
]

function RotatingBadge({ stat, index }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="flex-shrink-0">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50">
        {/* Rotating text around circle */}
        <div 
          className={`absolute inset-0 ${isClient ? 'animate-spin-slow' : ''}`}
          style={{ animationDelay: isClient ? stat.animationDelay : '0s' }}
        >
          <svg 
            className="w-full h-full" 
            viewBox="0 0 160 160"
          >
            <defs>
              <path
                id={`circle-${stat.id}`}
                d="M 80, 80 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
              />
            </defs>
            <text 
              fontSize="14" 
              fill="rgba(255,255,255,0.7)"
              letterSpacing="3"
              fontWeight="400"
            >
              <textPath href={`#circle-${stat.id}`}>
                {Array(4).fill(`${stat.label.toUpperCase()} • `).join('')}
              </textPath>
            </text>
          </svg>
        </div>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-0.5">
              {stat.number}
            </div>
            <div className="text-base text-gray-400 font-medium leading-tight">
              {stat.label.split(' ')[0]}
            </div>
            <div className="text-base text-gray-400 font-medium leading-tight">
              {stat.label.split(' ').slice(1).join(' ')}
            </div>
          </div>
        </div>
        
        {/* Circle border */}
        <div className="absolute inset-4 border border-gray-600 rounded-full opacity-30"></div>
      </div>
    </div>
  )
}

export function ContactCTASection() {
  return (
    <section className="min-h-[400px] sm:min-h-[350px] md:h-[300px] bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full h-full px-4 sm:px-6 lg:px-8 xl:px-29 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between h-full gap-6 sm:gap-8 md:gap-12 py-8 md:py-0">
          {/* Left Side - Content */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">
                  Embrace
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">
                  Digital Change
                </span>
                ?
              </h2>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-4 py-3 rounded-2xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm"
              >
                Talk To Our Experts
                <svg
                  className="ml-2 w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Rotating Badges */}
          <div className="flex-shrink-0">
            {/* Mobile: Column layout */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:hidden justify-items-center">
              {stats.map((stat, index) => (
                <div key={stat.id} className="scale-75 sm:scale-90">
                  <RotatingBadge stat={stat} index={index} />
                </div>
              ))}
            </div>
            
            {/* Desktop: Row layout */}
            <div className="hidden md:flex items-center justify-end space-x-3">
              {stats.map((stat, index) => (
                <div key={stat.id} className="scale-100">
                  <RotatingBadge stat={stat} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTASection