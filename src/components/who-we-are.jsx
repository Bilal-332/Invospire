"use client"

import { ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function WhoWeAre() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0])
  const sectionRef = useRef(null)

  const companyData = {
    subtitle: "Who we are",
    title: {
      part1: "Engineering ",
      accent: "digital experiences",
      part2: " with our vision, insight, and experience"
    },
    content: [
      "Founded in 2010, We believe in building a future where People, Process, and Technology, drive lasting change.",
      "Whatever we do is rooted in customer-centricity. We deliver tailored solutions that enhance your business performance and secure competitive advantages amid disruptions.",
      "Blending technology with innovation for end-to-end CX"
    ],
    stats: [
      {
        number: "14+",
        targetNumber: 14,
        label: "Years in Business"
      },
      {
        number: "300+", 
        targetNumber: 300,
        label: "Global Clients"
      },
      {
        number: "250+",
        targetNumber: 250,
        label: "Tech Experts"
      }
    ]
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      companyData.stats.forEach((stat, index) => {
        let start = 1
        const end = stat.targetNumber
        const duration = 2000 // 2 seconds
        const increment = end / (duration / 16) // 60fps

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          
          setAnimatedStats(prev => {
            const newStats = [...prev]
            newStats[index] = Math.floor(start)
            return newStats
          })
        }, 16)

        return () => clearInterval(timer)
      })
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="w-full py-20 bg-gradient-to-br from-gray-100 via-gray-150 to-gray-200">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Subtitle */}
            <p className="text-gray-600 text-sm font-medium uppercase tracking-wider">
              {companyData.subtitle}
            </p>

            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-gray-900">{companyData.title.part1}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">{companyData.title.accent}</span>
              <span className="text-gray-900">{companyData.title.part2}</span>
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6">
              {companyData.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <div className="inline-block p-0.5 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full">
                <button className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gradient-to-r hover:from-teal-400 hover:to-yellow-400 hover:text-white transition-all duration-300 group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:pl-0 mt-8 lg:mt-20">
            <div className="space-y-12 lg:space-y-16 lg:ml-130">
              {companyData.stats.map((stat, index) => (
                <div key={index} className="text-left relative">
                  <div className="text-5xl lg:text-6xl xl:text-7xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">
                    {animatedStats[index]}{stat.number.includes('+') ? '+' : ''}
                  </div>
                  <div className="text-gray-500 text-xl lg:text-2xl font-medium">
                    {stat.label}
                  </div>
                  {/* Thin grey border between stats (not on last item) */}
                  {/* {index < companyData.stats.length - 1 && (
                    <div className="absolute left-1/2 -bottom-4 lg:-bottom-5 w-px h-8 lg:h-10 bg-gray-300 transform -translate-x-1/2"></div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
