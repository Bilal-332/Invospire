"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "I extend my sincere gratitude to Invospire for their exceptional work in reengineering our platform, Boards & Beyond. Their efforts not only resulted in a swift doubling of our sales but also facilitated our acquisition by a large multinational corporation. I hold their team in high regard, particularly for their unwavering commitment to the success of our business.",
    author: "Jason Ryan",
    position: "Founder & CEO",
    company: "Boards & Beyond",
    avatar: "/images/avatar-jason.jpg", // You'll need to add this
    rating: 5,
    metrics: {
      quality: 5.0,
      schedule: 4.3,
      cost: 4.8,
      willingness: 4.5
    },
    region: "North America",
    flag: "🇺🇸"
  },
  {
    id: 2,
    text: "Working with Invospire has been a game-changer for our e-commerce platform. Their technical expertise and dedication to delivering high-quality solutions helped us scale our business to new heights. The team's attention to detail and commitment to our success is truly remarkable.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechFlow Solutions",
    avatar: "/images/avatar-sarah.jpg",
    rating: 5,
    metrics: {
      quality: 4.8,
      schedule: 4.5,
      cost: 4.2,
      willingness: 4.9
    },
    region: "Europe",
    flag: "🇬🇧"
  },
  {
    id: 3,
    text: "The development team at Invospire exceeded our expectations in every way. Their innovative approach to solving complex problems and their ability to deliver on time and within budget made them an invaluable partner for our digital transformation journey.",
    author: "Michael Chen",
    position: "Product Manager",
    company: "InnovateCorp",
    avatar: "/images/avatar-michael.jpg",
    rating: 5,
    metrics: {
      quality: 4.9,
      schedule: 4.7,
      cost: 4.3,
      willingness: 4.8
    },
    region: "Asia Pacific",
    flag: "🇸🇬"
  }
]

// Company logos with highly reliable sources
const companyLogos = [
  {
    name: "McGraw Hill",
    logo: "https://svgl.app/library/mcgraw-hill.svg"
  },
  {
    name: "NBCU",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nbc.svg"
  },
  {
    name: "United Nations",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg"
  },
  {
    name: "Citi",
    logo: "https://svgl.app/library/citi.svg"
  },
  {
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg"
  },
  {
    name: "Netflix",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg"
  },
  {
    name: "Spotify",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg"
  },
  {
    name: "Shopify",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg"
  },
  {
    name: "Airbnb",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/airbnb.svg"
  },
  {
    name: "Uber",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/uber.svg"
  },
  {
    name: "PayPal",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg"
  },
  {
    name: "Adobe",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobe.svg"
  }
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-rotate testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 10000) // 10 seconds

    return () => clearInterval(interval)
  }, [])

  const testimonial = testimonials[currentTestimonial]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-8">
        {/* Centered Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-teal-400">clients</span> say about us.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Company Logos */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-lg font-medium mb-2">Some Accounts &</h3>
              <h3 className="text-white text-lg font-medium">Testimonials</h3>
            </div>
            
            {/* Logo Grid */}
            <div className="bg-gray-800 rounded-2xl p-12">
              <div className="grid grid-cols-3 gap-8">
                {companyLogos.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center transition-all duration-300 h-24"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-16 max-w-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                      onError={(e) => {
                        // Hide broken image and show text fallback
                        e.target.style.display = 'none'
                        const textFallback = e.target.parentNode.querySelector('.text-fallback')
                        if (textFallback) {
                          textFallback.style.display = 'block'
                        }
                      }}
                    />
                    <span 
                      className="text-fallback text-white text-sm font-medium text-center absolute"
                      style={{ display: 'none' }}
                    >
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="space-y-8">
            {/* Client Experience Badge and Region Badge */}
            <div className="flex justify-between items-center">
              <div className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2">
                <span className="text-gray-400 text-sm italic">Clients Experience</span>
              </div>
              
              {/* Region Badge - Moved to Right */}
              <div className="inline-flex items-center bg-gray-700 rounded-full px-4 py-2">
                <span className="text-white text-sm flex items-center">
                  <span className="text-lg mr-2" role="img" aria-label={`${testimonial.region} flag`}>
                    {testimonial.flag}
                  </span>
                  {testimonial.region}
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative">
              <div className="text-6xl text-gray-600 absolute -top-4 -left-2">"</div>
              <p className="text-white text-lg leading-relaxed pl-8 pr-4">
                {testimonial.text}
              </p>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center space-x-1">
              {renderStars(testimonial.rating)}
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h4 className="text-white font-semibold">{testimonial.author}</h4>
                <p className="text-gray-400 text-sm">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-6 pt-6 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {testimonial.metrics.quality}
                </div>
                <div className="text-gray-400 text-xs">Quality</div>
              </div>
              <div className="text-center border-l border-gray-600 pl-6">
                <div className="text-2xl font-bold text-white mb-1">
                  {testimonial.metrics.schedule}
                </div>
                <div className="text-gray-400 text-xs">Schedule</div>
              </div>
              <div className="text-center border-l border-gray-600 pl-6">
                <div className="text-2xl font-bold text-white mb-1">
                  {testimonial.metrics.cost}
                </div>
                <div className="text-gray-400 text-xs">Cost</div>
              </div>
              <div className="text-center border-l border-gray-600 pl-6">
                <div className="text-2xl font-bold text-white mb-1">
                  {testimonial.metrics.willingness}
                </div>
                <div className="text-gray-400 text-xs">Willing to Refer</div>
              </div>
            </div>

            {/* Progress Indicators - White Rectangular Rounded */}
            <div className="flex space-x-2 pt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-8 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
