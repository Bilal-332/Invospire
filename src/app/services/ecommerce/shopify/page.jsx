import Background3D from "@/components/background-3d"
import { ShoppingBag, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ShopifyPage() {
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
            <span className="text-gray-400">E-commerce</span>
            <span>/</span>
            <span className="text-white">Shopify</span>
          </div>

          {/* Page Header */}
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center glow-blue">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-section-title text-gradient mb-4">
                Shopify Development & Optimization
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl">
                Build powerful Shopify stores that convert visitors into customers and drive sales growth.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Our Shopify Services</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    As certified Shopify experts, we help businesses create high-converting e-commerce 
                    stores that scale with their growth. From custom theme development to advanced 
                    integrations, we deliver Shopify solutions that drive results.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Custom Shopify Theme Development",
                      "Shopify Store Setup & Configuration", 
                      "Shopify Plus Development",
                      "App Development & Integration",
                      "Store Migration to Shopify",
                      "Performance Optimization",
                      "SEO & Marketing Setup",
                      "Payment Gateway Integration"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Why Choose Our Shopify Services?</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Certified Shopify Experts</h4>
                      <p className="text-sm">Our team consists of certified Shopify developers with years of experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Conversion-Focused Design</h4>
                      <p className="text-sm">We design stores that are optimized for maximum conversions and sales.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Ongoing Support & Maintenance</h4>
                      <p className="text-sm">We provide continuous support to keep your store running smoothly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* CTA */}
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Start Your Shopify Store</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Get a free consultation for your Shopify project and see how we can help grow your business.
                </p>
                <Link href="/contact" className="btn-primary w-full text-center block py-3 rounded-lg">
                  Get Free Consultation
                </Link>
              </div>

              {/* Stats */}
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Our Shopify Success</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">150+</div>
                    <div className="text-sm text-gray-400">Shopify Stores Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">300%</div>
                    <div className="text-sm text-gray-400">Average Conversion Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">24/7</div>
                    <div className="text-sm text-gray-400">Support Available</div>
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
