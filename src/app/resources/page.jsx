import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, User, Tag, Search, BookOpen, FileText, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const metadata = {
  title: 'Resources | Invospire - Insights, Guides & Industry Knowledge',
  description: 'Explore our comprehensive collection of articles, case studies, and insights on software engineering, technology trends, and business solutions.',
  keywords: 'software engineering blog, technology articles, case studies, industry insights, development guides'
}

export default function ResourcesPage() {
  // Mock blog posts data - in real app this would come from CMS or markdown files
  const featuredPosts = [
    {
      slug: "modern-web-development-trends-2024",
      title: "Modern Web Development Trends in 2024",
      excerpt: "Explore the latest trends shaping web development, from AI integration to advanced frameworks and performance optimization techniques.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Web Development",
      image: "/blog/web-trends-2024.jpg",
      featured: true
    },
    {
      slug: "building-scalable-ecommerce-platforms",
      title: "Building Scalable E-commerce Platforms",
      excerpt: "Learn how to architect e-commerce solutions that can handle millions of users and transactions with optimal performance.",
      author: "Michael Chen",
      date: "2024-01-10",
      category: "E-commerce",
      image: "/blog/ecommerce-scalability.jpg",
      featured: true
    },
    {
      slug: "cloud-native-architecture-best-practices",
      title: "Cloud-Native Architecture Best Practices",
      excerpt: "Comprehensive guide to designing and implementing cloud-native applications for maximum scalability and reliability.",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      category: "Cloud Computing",
      image: "/blog/cloud-native.jpg",
      featured: true
    }
  ]

  const recentPosts = [
    {
      slug: "ai-integration-software-development",
      title: "AI Integration in Software Development",
      excerpt: "How artificial intelligence is transforming the way we build software applications.",
      author: "David Kim",
      date: "2024-01-20",
      category: "AI & Machine Learning",
      readTime: "5 min read"
    },
    {
      slug: "microservices-vs-monolith-architecture",
      title: "Microservices vs Monolith Architecture",
      excerpt: "Understanding when to choose microservices over monolithic architecture for your project.",
      author: "Sarah Johnson",
      date: "2024-01-18",
      category: "Software Architecture",
      readTime: "7 min read"
    },
    {
      slug: "cybersecurity-best-practices-developers",
      title: "Cybersecurity Best Practices for Developers",
      excerpt: "Essential security practices every developer should implement in their applications.",
      author: "Michael Chen",
      date: "2024-01-16",
      category: "Security",
      readTime: "6 min read"
    },
    {
      slug: "mobile-app-performance-optimization",
      title: "Mobile App Performance Optimization",
      excerpt: "Techniques to improve mobile app performance and user experience.",
      author: "Emily Rodriguez",
      date: "2024-01-14",
      category: "Mobile Development",
      readTime: "8 min read"
    }
  ]

  const categories = [
    { name: "Web Development", count: 15 },
    { name: "E-commerce", count: 12 },
    { name: "Cloud Computing", count: 8 },
    { name: "AI & Machine Learning", count: 6 },
    { name: "Mobile Development", count: 10 },
    { name: "Software Architecture", count: 9 },
    { name: "Security", count: 7 },
    { name: "DevOps", count: 5 }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Resources & <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay ahead with our latest insights, guides, and industry knowledge on software 
              engineering, technology trends, and business solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-3 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured Articles
              </h2>
              <Button variant="outline" asChild>
                <Link href="/resources/blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <article key={post.slug} className="group">
                  <Link href={`/resources/blog/${post.slug}`}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                      <div className="aspect-video bg-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <BookOpen className="h-12 w-12 text-white" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Recent Posts */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Latest Articles
                </h2>
                
                <div className="space-y-8">
                  {recentPosts.map((post, index) => (
                    <article key={post.slug} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <Link href={`/resources/blog/${post.slug}`} className="group">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <FileText className="h-8 w-8 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                                {post.category}
                              </span>
                              <span className="text-gray-500 text-sm">
                                {post.readTime}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {post.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/resources/blog">
                      Load More Articles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  {/* Categories */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <Link 
                          key={index}
                          href={`/resources/blog?category=${category.name.toLowerCase().replace(' ', '-')}`}
                          className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-gray-700">{category.name}</span>
                          <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                            {category.count}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-blue-600 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-3">
                      Stay Updated
                    </h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Get the latest insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <Input 
                        type="email" 
                        placeholder="Your email address" 
                        className="bg-white text-gray-900 border-white"
                      />
                      <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                        Subscribe
                      </Button>
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'React', 'Next.js', 'Node.js', 'TypeScript', 'Cloud', 
                        'AWS', 'DevOps', 'API', 'Database', 'Performance'
                      ].map((tag, index) => (
                        <Link 
                          key={index}
                          href={`/resources/blog?tag=${tag.toLowerCase()}`}
                          className="bg-gray-100 hover:bg-blue-100 hover:text-blue-600 px-3 py-1 rounded-full text-sm transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Our Resources
              </h2>
              <p className="text-lg text-gray-600">
                Different types of content to help you stay informed and make better decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <BookOpen className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Technical Articles
                </h3>
                <p className="text-gray-600 mb-6">
                  In-depth guides and tutorials on software engineering best practices and modern technologies.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/resources/blog?type=technical">
                    Browse Articles
                  </Link>
                </Button>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <FileText className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Case Studies
                </h3>
                <p className="text-gray-600 mb-6">
                  Real-world examples of how we've helped businesses solve complex challenges with technology.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/resources/case-studies">
                    View Case Studies
                  </Link>
                </Button>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                  <Video className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Video Content
                </h3>
                <p className="text-gray-600 mb-6">
                  Webinars, tutorials, and presentations covering the latest trends in software development.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/resources/videos">
                    Watch Videos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
