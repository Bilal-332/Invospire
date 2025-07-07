import Link from "next/link"
import Background3D from "@/components/background-3d"
import HeroBanner from "@/components/hero-banner"
import LogoStrip from "@/components/logo-strip"
import ServicesGrid from "@/components/services-grid"
import WhoWeAre from "@/components/who-we-are"
import TechCapabilities from "@/components/tech-capabilities"
import StatsCounter from "@/components/stats-counter"
import ProcessStepper from "@/components/process-stepper"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <Background3D />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroBanner />
      </section>

      {/* Logo Strip */}
      <section className="relative">
        <LogoStrip />
      </section>

      {/* Services Section */}
      <section className="relative">
        <ServicesGrid />
      </section>

      {/* Who We Are Section */}
      <section className="relative">
        <WhoWeAre />
      </section>

      {/* Technology Capabilities Section */}
      <section className="relative">
        <TechCapabilities />
      </section>

      {/* Stats Section */}
      <section className="relative section-padding bg-gradient-radial">
        <StatsCounter />
      </section>

      {/* Process Section */}
      <section className="relative section-padding bg-gradient-to-br from-blue-900/10 to-purple-900/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-white mb-6">
              Maximizing software engineering output with our people-focused Processes
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven methodology ensures exceptional results every time
            </p>
          </div>
          <ProcessStepper />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-white mb-6">
              What our clients say about us
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real stories from real people who've transformed their business with us
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding">
        <div className="container-custom">
          <div className="glass rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl animate-float"></div>
            
            <div className="relative z-10">
              <h2 className="text-section-title text-white mb-6">
                Ready to Embrace Digital Change?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's guide you through a seamless transformation process
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg interactive-element">
                  Talk To Our Experts
                </Link>
                <Link href="/resources/gallery" className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg interactive-element">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
