"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import testimonialsData from "@/data/testimonials.json"

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = testimonialsData.testimonials

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            working with Invospire.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary/20">
              <Quote className="h-12 w-12" />
            </div>

            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Avatar and Info */}
              <div className="flex items-center justify-center space-x-4">
                {/* Placeholder Avatar */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {currentTestimonial.position} at {currentTestimonial.company}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    🌍 {currentTestimonial.country}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:bg-primary hover:text-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-primary hover:text-white"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-primary scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Thumbnail Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials
              .filter((_, index) => index !== currentIndex)
              .slice(0, 3)
              .map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white/80 rounded-xl p-6 border border-gray-200 hover:border-primary/50 transition-all cursor-pointer hover:shadow-md"
                onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel
