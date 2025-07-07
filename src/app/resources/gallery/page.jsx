import Background3D from "@/components/background-3d"
import { ExternalLink, Eye } from "lucide-react"
import Link from "next/link"

const galleryItems = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    category: "Web Application",
    description: "Modern dashboard design for e-commerce analytics and management.",
    image: "/gallery/dashboard-1.jpg",
    tags: ["Dashboard", "E-commerce", "Analytics"]
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile App",
    description: "Clean and secure mobile banking interface with intuitive navigation.",
    image: "/gallery/mobile-app-1.jpg",
    tags: ["Mobile", "Banking", "Finance"]
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    category: "Landing Page",
    description: "High-converting landing page design for SaaS platform.",
    image: "/gallery/landing-1.jpg",
    tags: ["Landing Page", "SaaS", "Conversion"]
  },
  {
    id: 4,
    title: "Healthcare Portal",
    category: "Web Portal",
    description: "Patient management system with clean, accessible design.",
    image: "/gallery/healthcare-1.jpg",
    tags: ["Healthcare", "Portal", "Accessibility"]
  },
  {
    id: 5,
    title: "Food Delivery App",
    category: "Mobile App",
    description: "User-friendly food ordering app with seamless checkout flow.",
    image: "/gallery/food-app-1.jpg",
    tags: ["Mobile", "Food", "Delivery"]
  },
  {
    id: 6,
    title: "Corporate Website",
    category: "Website",
    description: "Professional corporate website with modern design principles.",
    image: "/gallery/corporate-1.jpg",
    tags: ["Corporate", "Website", "Professional"]
  }
]

const categories = ["All", "Web Application", "Mobile App", "Landing Page", "Website", "Web Portal"]

export default function GalleryPage() {
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
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-white">UI/UX Gallery</span>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-section-title text-gradient mb-6">
              UI/UX Design Gallery
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our portfolio of stunning user interfaces and user experiences crafted for various industries and platforms.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 glass rounded-lg border border-white/10 hover:border-blue-400/50 text-gray-300 hover:text-white transition-all text-sm"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="group">
                <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 interactive-element">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Eye className="w-12 h-12 text-white/50 mx-auto mb-2" />
                        <p className="text-white/70 text-sm">Preview Image</p>
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="btn-primary px-4 py-2 rounded-lg text-sm">
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-purple-400/20 text-purple-400 text-xs font-medium rounded-full mb-3">
                      {item.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/5 text-gray-500 text-xs rounded border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                        View Case Study
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary px-8 py-3 rounded-lg interactive-element">
              Load More Projects
            </button>
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <div className="glass rounded-3xl p-8 lg:p-12 text-center border border-white/10">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Like What You See?</h3>
                <p className="text-gray-400 mb-8">
                  Let's create something amazing together. Our design team is ready to bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary px-8 py-3 rounded-lg">
                    Start Your Project
                  </Link>
                  <Link href="/services/design/ui-ux-design" className="btn-secondary px-8 py-3 rounded-lg">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
