"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const partnerLogos = [
  { 
    name: "Meta", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v11.15.0/icons/meta.svg", 
    width: 140, 
    height: 50,
    fallback: "/logos/meta-logo.PNG"
  },
  { 
    name: "TikTok", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v11.15.0/icons/tiktok.svg", 
    width: 140, 
    height: 50,
    fallback: "/logos/tiktok-shop-logo.PNG"
  },
  { 
    name: "Shopify", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v11.15.0/icons/shopify.svg", 
    width: 140, 
    height: 50,
    fallback: "/logos/shopify-logo.PNG"
  },
  { 
    name: "WordPress", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v11.15.0/icons/wordpress.svg", 
    width: 140, 
    height: 50,
    fallback: "/logos/wordpress-logo.PNG"
  },
  { 
    name: "Amazon", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v11.15.0/icons/amazon.svg", 
    width: 140, 
    height: 50,
    fallback: "/logos/amazon-logo.PNG"
  },
  { 
    name: "Google", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v11.15.0/icons/google.svg", 
    width: 140, 
    height: 50,
    fallback: "/logos/google-analytics-logo.PNG"
  },
]

export function LogoStrip() {
  const [currentOrder, setCurrentOrder] = useState([0, 1, 2, 3, 4, 5])
  const [logoErrors, setLogoErrors] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOrder(prevOrder => {
        // Move each logo one position to the right, last one goes to first
        const newOrder = [...prevOrder]
        const lastItem = newOrder.pop()
        newOrder.unshift(lastItem)
        return newOrder
      })
    }, 9000) // Change every 9 seconds for smoother effect

    return () => clearInterval(interval)
  }, [])

  const handleImageError = (logoIndex) => {
    setLogoErrors(prev => ({ ...prev, [logoIndex]: true }))
  }

  const getLogoSrc = (logoIndex) => {
    return logoErrors[logoIndex] ? partnerLogos[logoIndex].fallback : partnerLogos[logoIndex].logo
  }

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
                  src={getLogoSrc(logoIndex)}
                  alt={`${partnerLogos[logoIndex].name} logo`}
                  width={partnerLogos[logoIndex].width}
                  height={partnerLogos[logoIndex].height}
                  className="h-32 w-auto object-contain filter brightness-0 hover:brightness-100 hover:filter-none transition-all duration-500 ease-in-out"
                  onError={() => handleImageError(logoIndex)}
                  style={{ maxWidth: '140px' }}
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
                  src={getLogoSrc(logoIndex)}
                  alt={`${partnerLogos[logoIndex].name} logo`}
                  width={partnerLogos[logoIndex].width}
                  height={partnerLogos[logoIndex].height}
                  className="h-24 w-auto object-contain filter brightness-0 hover:brightness-100 hover:filter-none transition-all duration-500 ease-in-out"
                  onError={() => handleImageError(logoIndex)}
                  style={{ maxWidth: '120px' }}
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
