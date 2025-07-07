import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Globe, MessageSquare } from 'lucide-react'
import ContactForm from '@/components/contact-form'

export const metadata = {
  title: 'Contact Us | Invospire - Get in Touch for Software Solutions',
  description: 'Contact Invospire for software engineering, e-commerce development, and digital solutions. Get free consultation and project quotes.',
  keywords: 'contact invospire, software engineering consultation, project quote, get in touch'
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["hello@invospire.com", "projects@invospire.com"],
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+92 (300) 123-4567"],
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["New York, USA", "Karachi, Pakistan"],
      description: "Our global offices"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8am - 6pm", "Sat: 9am - 2pm"],
      description: "We're here when you need us"
    }
  ]

  const offices = [
    {
      country: "United States",
      city: "New York",
      address: "123 Business Avenue, Suite 500\nNew York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "usa@invospire.com",
      timezone: "EST (UTC-5)"
    },
    {
      country: "Pakistan", 
      city: "Karachi",
      address: "Plot 456, Block A, Gulshan-e-Iqbal\nKarachi, Sindh 75300",
      phone: "+92 (300) 123-4567",
      email: "pak@invospire.com",
      timezone: "PKT (UTC+5)"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can help you achieve 
              your business goals with our software engineering expertise.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>24-48h Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <p className="text-gray-600">
                    Reach out to us through any of these channels. We're always here to help.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <div className="text-blue-600">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-900 font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Global Offices
              </h2>
              <p className="text-lg text-gray-600">
                We have teams around the world to serve you better.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {office.city}, {office.country}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {office.timezone}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600 whitespace-pre-line">
                        {office.address}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">{office.phone}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">{office.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about our services.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity and scope. Simple projects may take 4-8 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation."
                },
                {
                  question: "What is your development process?",
                  answer: "We follow an agile development methodology with regular sprints, client feedback sessions, and iterative improvements. This ensures transparency and allows for adjustments throughout the project."
                },
                {
                  question: "Do you provide ongoing support and maintenance?",
                  answer: "Yes, we offer comprehensive support and maintenance packages to ensure your software continues to perform optimally. This includes bug fixes, security updates, and feature enhancements."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "We specialize in modern web technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure), and mobile development. We choose the best technology stack for each project."
                },
                {
                  question: "How do you ensure project quality?",
                  answer: "We maintain high quality through code reviews, automated testing, quality assurance processes, and adherence to industry best practices. Every project goes through rigorous testing before deployment."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Find Us on the Map
              </h2>
              <p className="text-lg text-gray-600">
                Visit our offices or schedule a virtual meeting.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive map will be integrated here</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Google Maps or similar mapping service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
