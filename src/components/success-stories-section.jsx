"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const successStories = [
    {
      id: 1,
      category: "Energy",
      title: "Unlocked huge business growth and seed funding for a Solar Energy Provider",
      description: "Developed sales management tool with real-time tracking, analytics & collaboration to enhance efficiency.",
      metrics: [
        { value: "$40", label: "Million funding achieved" },
        { value: "50%", label: "Reduction in customer acquisition cost" }
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      id: 2,
      category: "Healthcare",
      title: "Revolutionized patient care with AI-powered diagnostic platform",
      description: "Built comprehensive healthcare platform with machine learning for early disease detection and treatment optimization.",
      metrics: [
        { value: "85%", label: "Accuracy improvement in diagnostics" },
        { value: "40%", label: "Reduction in treatment time" }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      category: "Fintech",
      title: "Streamlined financial operations for leading investment firm",
      description: "Developed automated trading platform with risk management and portfolio optimization features.",
      metrics: [
        { value: "60%", label: "Increase in trading efficiency" },
        { value: "25%", label: "Reduction in operational costs" }
      ],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      category: "E-commerce",
      title: "Boosted online sales with advanced marketplace platform",
      description: "Created multi-vendor e-commerce solution with AI-powered recommendations and inventory management.",
      metrics: [
        { value: "150%", label: "Increase in online sales" },
        { value: "30%", label: "Improvement in customer retention" }
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ]

  // Auto-advance stories
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000)

    return () => clearInterval(timer)
  }, [successStories.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? successStories.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === successStories.length - 1 ? 0 : currentIndex + 1)
  }

  const currentStory = successStories[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-teal-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/tabler/tabler-icons@latest/icons/grid-dots.svg')] opacity-5 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Navigation Arrow */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              {/* Left Section - Title and Description */}
              <div className="lg:col-span-1 text-white">
                <h2 className="text-4xl font-bold mb-4">
                  Our Success Stories
                </h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Explore real-world success stories that showcase our commitment to meeting unique business needs and delivering impactful results.
                </p>
                <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-2 underline-offset-4">
                  Other Success Stories
                </button>
              </div>

              {/* Center Section - Story Card */}
              <div className="lg:col-span-1">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white transition-all duration-300">
                  {/* Category Badge */}
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {currentStory.category}
                  </div>
                  
                  {/* Story Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {currentStory.title}
                  </h3>
                  
                  {/* Story Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {currentStory.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {currentStory.metrics.map((metric, index) => (
                      <div key={index} className="text-left">
                        <div className="text-2xl font-bold text-orange-500 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* View Case Study Button */}
                  <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium py-2 px-6 rounded-full border-0 shadow-lg text-sm">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Right Section - Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-200 to-teal-300 rounded-2xl p-1 shadow-2xl">
                    <div className="bg-white rounded-xl overflow-hidden">
                      <Image
                        src={currentStory.image}
                        alt={currentStory.title}
                        width={400}
                        height={300}
                        className="w-full h-80 object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Bottom Section - Dots and CTA */}
        <div className="mt-16 text-center">
          {/* Dots Indicator */}
          <div className="flex justify-center mb-8 space-x-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-teal-400 scale-125" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* CTA Button */}
          <Button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-medium px-8 py-3 rounded-full transition-all">
            Checkout Our Success Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SuccessStoriesSection
