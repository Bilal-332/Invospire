import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Star, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import servicesData from '@/data/services.json'

export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }) {
  const service = servicesData.services.find(s => s.slug === params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found | Invospire'
    }
  }

  return {
    title: `${service.title} | Invospire Services`,
    description: service.shortDescription,
    keywords: service.technologies.join(', ')
  }
}

export default function ServicePage({ params }) {
  const service = servicesData.services.find(s => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900">{service.title}</span>
          </nav>
          <Button variant="outline" size="sm" asChild>
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-8">
              <div className="text-white text-3xl">
                {service.icon}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <p className="text-gray-600">
                    Our {service.title.toLowerCase()} solutions are designed to help businesses leverage cutting-edge technology 
                    to improve efficiency, reduce costs, and drive growth. We combine industry best practices with innovative 
                    approaches to deliver solutions that exceed expectations.
                  </p>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Quick Facts
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting Price:</span>
                      <span className="font-semibold text-gray-900">{service.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timeline:</span>
                      <span className="font-semibold text-gray-900">{service.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Projects Delivered:</span>
                      <span className="font-semibold text-gray-900">150+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Client Satisfaction:</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">4.9/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's Included
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive features designed to meet your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-600">
                We leverage the latest technologies to build robust and scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {service.technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">⚡</div>
                  <p className="text-sm font-medium text-gray-900">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-lg text-blue-100">
                How we deliver exceptional {service.title.toLowerCase()} solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap' },
                { step: '03', title: 'Development', desc: 'Building your solution with best practices' },
                { step: '04', title: 'Deployment', desc: 'Launching and providing ongoing support' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your {service.title.toLowerCase()} needs and how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
