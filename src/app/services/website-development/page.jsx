import Background3D from "@/components/background-3d"
import { Code2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function WebsiteDevelopmentPage() {
  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <Background3D />
      
      {/* Header */}
      <section className="relative pt-32 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Website Development</span>
          </div>

          {/* Page Header */}
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center glow-blue">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-section-title text-gradient mb-4">
                Website Development
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl">
                Build modern, responsive, and high-performance websites that drive business growth.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Our Website Development Services</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    At Invospire, we create cutting-edge websites that combine stunning design with 
                    powerful functionality. Our team of expert developers uses the latest technologies 
                    to build websites that not only look great but also perform exceptionally.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Responsive Web Design",
                      "E-commerce Websites", 
                      "Custom Web Applications",
                      "Content Management Systems",
                      "Progressive Web Apps",
                      "API Integration",
                      "Performance Optimization",
                      "SEO-Friendly Development"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Technologies We Use</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", "PHP", "WordPress"].map((tech) => (
                    <div key={tech} className="glass rounded-lg p-3 text-center border border-white/10 hover:border-blue-400/50 transition-colors">
                      <span className="text-gray-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* CTA */}
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Ready to Start Your Project?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Get a free consultation and quote for your website development project.
                </p>
                <Link href="/contact" className="btn-primary w-full text-center block py-3 rounded-lg">
                  Get Free Quote
                </Link>
              </div>

              {/* Contact Info */}
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <div>
                    <strong className="text-white">Email:</strong><br />
                    hello@invospire.com
                  </div>
                  <div>
                    <strong className="text-white">Phone:</strong><br />
                    +1 (555) 123-4567
                  </div>
                  <div>
                    <strong className="text-white">Response Time:</strong><br />
                    Within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-12">
            <Link href="/services" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
