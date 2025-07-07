"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const partnerLogos = [
  { name: "Meta", logo: "/logos/meta-logo.PNG", width: 120, height: 40 },
  { name: "TikTok Shop", logo: "/logos/tiktok-shop-logo.PNG", width: 120, height: 40 },
  { name: "Shopify", logo: "/logos/shopify-logo.PNG", width: 120, height: 40 },
  { name: "WordPress", logo: "/logos/wordpress-logo.PNG", width: 120, height: 40 },
  { name: "Amazon", logo: "/logos/amazon-logo.PNG", width: 120, height: 40 },
  { name: "Google Analytics", logo: "/logos/google-analytics-logo.PNG", width: 140, height: 40 },
]

export function LogoStrip() {
  const [currentOrder, setCurrentOrder] = useState([0, 1, 2, 3, 4, 5])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOrder(prevOrder => {
        // Move each logo one position to the right, last one goes to first
        const newOrder = [...prevOrder]
        const lastItem = newOrder.pop()
        newOrder.unshift(lastItem)
        return newOrder
      })
    }, 9000) // Change every 5 seconds for smoother effect

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full -mt-16">
      <div className="w-full">
        <div className="bg-white shadow-md py-12 px-8 w-full">
          {/* Desktop Layout - 6 logos in a row with smooth transitions */}
          <div className="hidden md:flex items-center justify-between w-full">
            {currentOrder.map((logoIndex, position) => (
              <div
                key={`${logoIndex}-${Date.now()}-${position}`}
                className="flex items-center justify-center transition-all duration-1500 ease-in-out transform hover:scale-110 flex-1"
              >
                <Image
                  src={partnerLogos[logoIndex].logo}
                  alt={`${partnerLogos[logoIndex].name} logo`}
                  width={partnerLogos[logoIndex].width}
                  height={partnerLogos[logoIndex].height}
                  className="h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
            ))}
          </div>

          {/* Mobile Layout - Responsive grid with transitions */}
          <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8 items-center justify-items-center">
            {currentOrder.slice(0, 6).map((logoIndex, position) => (
              <div
                key={`mobile-${logoIndex}-${position}`}
                className="flex items-center justify-center transition-all duration-1500 ease-in-out transform hover:scale-110"
              >
                <Image
                  src={partnerLogos[logoIndex].logo}
                  alt={`${partnerLogos[logoIndex].name} logo`}
                  width={partnerLogos[logoIndex].width}
                  height={partnerLogos[logoIndex].height}
                  className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoStrip
