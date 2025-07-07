import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Globe, Award, Heart, Target, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import StatsCounter from '@/components/stats-counter'

export const metadata = {
  title: 'About Us | Invospire - Innovation Through Software Engineering',
  description: 'Learn about Invospire\'s mission, vision, and the expert team delivering cutting-edge software solutions worldwide.',
  keywords: 'about invospire, software engineering team, company mission, innovation, technology experts'
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/team/sarah-johnson.jpg",
      bio: "Visionary leader with 15+ years in technology and business strategy."
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/team/michael-chen.jpg", 
      bio: "Expert in scalable architectures with deep experience in cloud technologies."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Engineering",
      image: "/team/emily-rodriguez.jpg",
      bio: "Full-stack engineer passionate about clean code and innovative solutions."
    },
    {
      name: "David Kim",
      role: "Design Director",
      image: "/team/david-kim.jpg",
      bio: "UX/UI specialist focused on creating exceptional user experiences."
    }
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and methodologies to deliver solutions that push boundaries."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that exceed expectations."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Excellence",
      description: "We foster a culture of continuous learning and collaboration among our talented professionals."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quality & Speed",
      description: "We balance rapid delivery with uncompromising quality through proven agile methodologies."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Invospire</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're a team of passionate innovators dedicated to transforming businesses through 
              cutting-edge software engineering and digital solutions.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/contact">
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Our Mission & Vision
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                      <Target className="h-6 w-6 text-blue-600" />
                      Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To empower businesses worldwide with innovative software solutions that drive growth, 
                      efficiency, and digital transformation. We believe in the power of technology to solve 
                      complex challenges and create meaningful impact.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                      <Globe className="h-6 w-6 text-green-600" />
                      Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To be the global leader in software engineering excellence, known for our innovative 
                      approach, exceptional quality, and unwavering commitment to client success. We envision 
                      a world where every business can harness the full potential of technology.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Invospire?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-yellow-400" />
                      <span>500+ Successful Projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-green-400" />
                      <span>50+ Expert Engineers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-blue-300" />
                      <span>Global Presence (US & Pakistan)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-orange-400" />
                      <span>24/7 Support & Maintenance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <StatsCounter />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These fundamental principles guide everything we do and shape our culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced leaders driving innovation and excellence in software engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600">
                From startup to global software engineering leader.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  year: "2019",
                  title: "Company Founded",
                  description: "Started with a vision to revolutionize software engineering services."
                },
                {
                  year: "2020",
                  title: "First Major Client",
                  description: "Delivered our first enterprise-level e-commerce platform."
                },
                {
                  year: "2021",
                  title: "Team Expansion",
                  description: "Grew to 25+ engineers and expanded service offerings."
                },
                {
                  year: "2022",
                  title: "Global Presence",
                  description: "Opened offices in Pakistan and started serving international clients."
                },
                {
                  year: "2023",
                  title: "Industry Recognition",
                  description: "Named among top software engineering companies in our region."
                },
                {
                  year: "2024",
                  title: "Innovation Focus",
                  description: "Launched AI-powered solutions and cloud-native architectures."
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of satisfied clients who trust Invospire for their software engineering needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
