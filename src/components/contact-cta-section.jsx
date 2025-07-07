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
      <div className="relative w-50 h-50">
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
    <section className="h-[300px] bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full h-full px-29 relative">
        <div className="flex items-center justify-between h-full gap-12">
          {/* Left Side - Content flush to left edge */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
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
            
            <div>
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

          {/* Right Side - Inline Rotating Badges flush to right edge */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            {/* Rotating Badges */}
            {stats.map((stat, index) => (
              <RotatingBadge key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTASection