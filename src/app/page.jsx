import Link from "next/link"
import Background3D from "@/components/background-3d"
import HeroBanner from "@/components/hero-banner"
import LogoStrip from "@/components/logo-strip"
import ServicesGrid from "@/components/services-grid"
import WhoWeAre from "@/components/who-we-are"
import TechCapabilities from "@/components/tech-capabilities"
import ProcessStepper from "@/components/process-stepper"
import TestimonialsSection from "@/components/testimonials-section"
import ContactCTASection from "@/components/contact-cta-section"

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

      {/* Process Section */}
      <section className="relative">
        <ProcessStepper />
      </section>

      {/* Testimonials Section */}
      <section className="relative">
        <TestimonialsSection />
      </section>

      {/* Contact CTA Section */}
      <section className="relative">
        <ContactCTASection />
      </section>
    </div>
  )
}
