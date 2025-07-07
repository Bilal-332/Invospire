import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mock blog data - in real app this would come from CMS or markdown files
const blogPosts = {
  "modern-web-development-trends-2024": {
    title: "Modern Web Development Trends in 2024",
    excerpt: "Explore the latest trends shaping web development, from AI integration to advanced frameworks and performance optimization techniques.",
    content: `
      <p>The web development landscape continues to evolve at a rapid pace in 2024, with new technologies and methodologies reshaping how we build and deploy web applications. From artificial intelligence integration to enhanced developer experience tools, this year has brought significant innovations that are transforming the industry.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial intelligence is no longer just a buzzword in web development—it's becoming an integral part of the development process. AI-powered code completion, automated testing, and intelligent debugging tools are helping developers write better code faster than ever before.</p>

      <p>Tools like GitHub Copilot, Tabnine, and ChatGPT are revolutionizing how developers approach problem-solving and code generation. These tools can help with everything from writing boilerplate code to explaining complex algorithms, making development more accessible and efficient.</p>

      <h2>2. Server-Side Rendering Renaissance</h2>
      <p>While client-side rendering dominated the web for years, we're seeing a strong shift back towards server-side rendering (SSR) and static site generation (SSG). Frameworks like Next.js, Nuxt.js, and SvelteKit are leading this charge, offering hybrid approaches that combine the best of both worlds.</p>

      <p>The benefits are clear: improved SEO, faster initial page loads, and better user experience. The new generation of SSR frameworks makes it easier than ever to build performant, SEO-friendly applications without sacrificing developer experience.</p>

      <h2>3. Edge Computing and CDN Evolution</h2>
      <p>Edge computing is moving beyond simple content delivery to full application hosting. Platforms like Vercel Edge Functions, Cloudflare Workers, and AWS Lambda@Edge are enabling developers to run code closer to users, reducing latency and improving performance globally.</p>

      <p>This shift is particularly important for applications serving global audiences, where even small improvements in response time can significantly impact user experience and business metrics.</p>

      <h2>4. Component-Driven Development</h2>
      <p>The component-driven development approach has matured significantly, with tools like Storybook, Bit, and Chromatic making it easier to build, test, and maintain reusable UI components. This methodology promotes consistency across large applications and teams while improving code maintainability.</p>

      <p>Design systems are becoming more sophisticated, with companies investing heavily in comprehensive component libraries that span multiple platforms and frameworks.</p>

      <h2>5. WebAssembly (WASM) Adoption</h2>
      <p>WebAssembly is finally finding its place in web development, particularly for performance-critical applications. From image processing to real-time data analysis, WASM is enabling web applications to achieve near-native performance for computationally intensive tasks.</p>

      <p>Languages like Rust, Go, and C++ can now run efficiently in the browser, opening up new possibilities for web applications that were previously impossible or impractical.</p>

      <h2>Conclusion</h2>
      <p>The web development landscape in 2024 is characterized by a focus on performance, developer experience, and AI integration. As these trends continue to evolve, developers who stay current with these technologies will be well-positioned to build the next generation of web applications.</p>

      <p>At Invospire, we're committed to staying at the forefront of these developments, ensuring our clients benefit from the latest innovations in web development. Whether you're looking to modernize an existing application or build something entirely new, our team has the expertise to help you succeed.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Web Development",
    tags: ["React", "Next.js", "AI", "WebAssembly", "Performance"],
    readTime: "8 min read",
    image: "/blog/web-trends-2024.jpg"
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: 'Post Not Found | Invospire Blog'
    }
  }

  return {
    title: `${post.title} | Invospire Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', ')
  }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  const relatedPosts = [
    {
      slug: "building-scalable-ecommerce-platforms",
      title: "Building Scalable E-commerce Platforms",
      category: "E-commerce"
    },
    {
      slug: "cloud-native-architecture-best-practices", 
      title: "Cloud-Native Architecture Best Practices",
      category: "Cloud Computing"
    },
    {
      slug: "ai-integration-software-development",
      title: "AI Integration in Software Development", 
      category: "AI & Machine Learning"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-blue-600">Resources</Link>
            <span>/</span>
            <Link href="/resources/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">Article</span>
          </nav>
          <Button variant="outline" size="sm" asChild>
            <Link href="/resources/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-12 flex items-center justify-center">
              <BookOpen className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="prose prose-lg max-w-none">
                  <div 
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 prose-strong:text-gray-900"
                  />
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
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

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {post.author}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Sarah is a seasoned software engineer and technology leader with over 15 years of experience 
                        in web development, system architecture, and team management. She specializes in modern web 
                        technologies and is passionate about sharing knowledge with the developer community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Table of Contents */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Table of Contents
                    </h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#ai-powered-development" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        1. AI-Powered Development Tools
                      </a>
                      <a href="#server-side-rendering" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        2. Server-Side Rendering Renaissance
                      </a>
                      <a href="#edge-computing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        3. Edge Computing and CDN Evolution
                      </a>
                      <a href="#component-driven" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        4. Component-Driven Development
                      </a>
                      <a href="#webassembly" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        5. WebAssembly (WASM) Adoption
                      </a>
                    </nav>
                  </div>

                  {/* Related Posts */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost, index) => (
                        <Link 
                          key={index}
                          href={`/resources/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm mb-1">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {relatedPost.category}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-blue-600 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-3">
                      Stay Updated
                    </h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Get the latest articles delivered to your inbox.
                    </p>
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                      Subscribe to Newsletter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              You Might Also Like
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link 
                  key={index}
                  href={`/resources/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="p-6">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                        {relatedPost.category}
                      </span>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mt-3 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
