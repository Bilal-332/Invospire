import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, BarChart3, Cog, Database, Users, Star, TrendingUp, Award, Shield, Code, Layers, Brain, Headphones, Palette, Target, Settings, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SuccessStoriesSection from '@/components/success-stories-section'
import TestimonialsSection from '@/components/testimonials-section'
import ContactCTASection from '@/components/contact-cta-section'

export const metadata = {
  title: 'Services | Invospire - Digital Transformation Services & Solutions',
  description: 'Cutting-edge technology services to drive your business forward including software engineering, platform engineering, data analytics, and IT consulting.',
  keywords: 'digital transformation, software engineering, platform engineering, data analytics, IT consulting, custom software development'
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Software Product Engineering",
      description: "Our Software Product Engineering services encompass the full lifecycle of product development, from ideation to deployment. We deliver innovative, high-performance solutions tailored to meet specific business needs and market demands.",
      gradient: "from-purple-500 to-cyan-500",
      subServices: [
        "Custom Software Development",
        "Product Strategy & Planning", 
        "Architecture & Design",
        "Quality Assurance & Testing",
        "Deployment & Maintenance"
      ]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Digital Experience",
      description: "Enhance your digital presence with our Digital Experience solutions. We create engaging, user-centric digital experiences that optimize customer interactions, drive engagement, and deliver measurable business impact across multiple platforms.",
      gradient: "from-purple-500 to-cyan-500",
      subServices: [
        "UI/UX Design",
        "Mobile App Development",
        "Web Development", 
        "Digital Marketing",
        "User Experience Optimization"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Engineering",
      description: "Our Cloud Engineering services provide scalable, secure, and cost-effective cloud solutions. We design and implement cloud architectures that enhance performance, optimize resources, and support seamless integration with existing systems.",
      gradient: "from-purple-500 to-cyan-500",
      subServices: [
        "Cloud Architecture Design",
        "Migration Services",
        "DevOps & CI/CD",
        "Security & Compliance",
        "Performance Optimization"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data & Analytics",
      description: "Leverage our Data & Analytics expertise to turn data into actionable insights. We offer advanced analytics solutions to help you make informed decisions, uncover trends, and drive strategic growth through data-driven strategies.",
      gradient: "from-purple-500 to-cyan-500",
      subServices: [
        "Data Strategy & Planning",
        "Business Intelligence",
        "Advanced Analytics",
        "Machine Learning",
        "Data Visualization"
      ]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "IT Consulting & Advisory",
      description: "Unified Infotech offers expert IT Consulting & Advisory services to guide strategic technology decisions. We provide actionable insights and tailored recommendations to enhance IT infrastructure, streamline operations, and drive business growth.",
      gradient: "from-purple-500 to-cyan-500",
      subServices: [
        "Technology Strategy",
        "IT Infrastructure Planning",
        "Digital Transformation",
        "Process Optimization",
        "Risk Assessment"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Harness the power of cutting-edge technology and digital solutions to guide your business on a journey of evolution.",
      gradient: "from-purple-500 to-cyan-500",
      subServices: [
        "Digital Roadmap Planning",
        "Technology Assessment",
        "Innovation Strategy",
        "Change Management",
        "Performance Metrics"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/tabler/tabler-icons@latest/icons/world.svg')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Digital Transformation
                <br />
                <span className="bg-gradient-to-r from-[#2DD4BF] to-[#FBBF24] bg-clip-text text-transparent">Services & Solutions</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
                Accelerate your business growth with our cutting-edge technology solutions designed to drive innovation and competitive advantage.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team collaboration on digital transformation"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                  priority
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-3 rounded-full shadow-lg">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-purple-600 p-3 rounded-full shadow-lg">
                  <Cog className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 group relative overflow-hidden h-96 w-80 mx-auto"
              >
                {/* Default State */}
                <div className="group-hover:opacity-0 group-hover:scale-95 transition-all duration-500 transform">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-6 text-white shadow-lg`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Hover State - Expanded with sub-services (no icon/heading) */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 p-8 flex flex-col justify-center transform">
                  <div className="space-y-4">
                    {service.subServices.map((subService, idx) => (
                      <div key={idx} className="flex items-center justify-between text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" style={{transitionDelay: `${idx * 100}ms`}}>
                        <span className="text-sm font-medium">{subService}</span>
                        <ArrowRight className="w-4 h-4 opacity-70" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/tabler/tabler-icons@latest/icons/code.svg')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a quote for 
              <span className="bg-gradient-to-r from-[#2DD4BF] to-[#FBBF24] bg-clip-text text-transparent"> custom software?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get personalized solutions tailored to your business needs. Our experts are ready to help you transform your ideas into reality.
            </p>
            <Button 
              size="xl" 
              className="bg-gradient-to-r from-[#2DD4BF] to-[#FBBF24] hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 text-lg border-0"
            >
              Request Quote Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStoriesSection />

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
