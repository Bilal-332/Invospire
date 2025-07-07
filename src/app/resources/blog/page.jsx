import Background3D from "@/components/background-3d"
import { Calendar, User, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    slug: "modern-web-development-trends-2024",
    title: "Modern Web Development Trends in 2024",
    excerpt: "Explore the latest trends shaping web development, from AI integration to advanced frameworks and performance optimization techniques.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Web Development",
    readTime: "8 min read"
  },
  {
    slug: "building-scalable-ecommerce-platforms",
    title: "Building Scalable E-commerce Platforms",
    excerpt: "Learn how to architect e-commerce solutions that can handle millions of users and transactions with optimal performance.",
    author: "Ahmed Khan",
    date: "2024-01-10",
    category: "E-commerce",
    readTime: "12 min read"
  },
  {
    slug: "ui-ux-design-best-practices",
    title: "UI/UX Design Best Practices for 2024",
    excerpt: "Discover the essential principles and practices that create exceptional user experiences in modern digital products.",
    author: "Maria Rodriguez",
    date: "2024-01-05",
    category: "Design",
    readTime: "6 min read"
  }
]

export default function BlogPage() {
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
            <span className="text-white">Blog</span>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-section-title text-gradient mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights, trends, and expertise from our team of software engineers, designers, and digital strategists.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <div className="glass rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 interactive-element h-full">
                  {/* Category Badge */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    <Link href={`/resources/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More */}
                  <Link 
                    href={`/resources/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary px-8 py-3 rounded-lg interactive-element">
              Load More Articles
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <div className="glass rounded-3xl p-8 lg:p-12 text-center border border-white/10">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-gray-400 mb-6">
                  Get the latest insights and trends delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                  <button className="btn-primary px-6 py-3 rounded-lg whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
