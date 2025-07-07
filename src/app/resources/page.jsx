"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ChevronLeft, ChevronRight, Clock, User } from "lucide-react"

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const tabs = [
    { id: "All", label: "All" },
    { id: "Case Studies", label: "Case Studies" },
    { id: "Blogs", label: "Blogs" },
    { id: "Infographics", label: "Infographics" },
    { id: "Ebooks", label: "Ebooks" }
  ]

  const resources = [
    {
      id: 1,
      title: "Boosted CX and increased operational efficiency for a Fortune 500 Media Conglomerate",
      excerpt: "How we helped a major media company transform their customer experience and streamline operations through innovative technology solutions.",
      author: "Sarah Johnson",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face",
      date: "Jun 15, 2024",
      readTime: "8 min read",
      category: "Case Studies",
      badge: "Case Study",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      size: "large"
    },
    {
      id: 2,
      title: "How To Build an Accounting Software like Xero?",
      excerpt: "A comprehensive guide to building scalable accounting software with modern technologies and best practices.",
      author: "Saraswati Roy",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      date: "Jun 12, 2024",
      readTime: "12 min read",
      category: "Blogs",
      badge: "Blog",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      size: "medium"
    },
    {
      id: 3,
      title: "E-commerce Platform Migration: A Complete Guide",
      excerpt: "Learn how to successfully migrate your e-commerce platform without losing data or customers.",
      author: "Michael Chen",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      date: "Jun 10, 2024",
      readTime: "10 min read",
      category: "Blogs",
      badge: "Blog",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      size: "medium"
    },
    {
      id: 4,
      title: "Digital Transformation Success Metrics",
      excerpt: "Key performance indicators to measure the success of your digital transformation initiative.",
      author: "Emma Wilson",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      date: "Jun 8, 2024",
      readTime: "6 min read",
      category: "Infographics",
      badge: "Infographic",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      size: "medium"
    },
    {
      id: 5,
      title: "Modern Web Development Best Practices",
      excerpt: "Essential practices for building performant, scalable, and maintainable web applications.",
      author: "David Park",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
      date: "Jun 5, 2024",
      readTime: "15 min read",
      category: "Ebooks",
      badge: "Ebook",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      size: "medium"
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesTab = activeTab === "All" || resource.category === activeTab
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pt-24 pb-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-white" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-white" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-gray-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white ">Resources</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#2DD4BF] to-[#FBBF24] bg-clip-text text-transparent">Resources</span> 
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">Stay informed, stay inspired with the latest trends and technology insights from our collection of resources.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id ? "bg-indigo-600 text-white shadow-lg transform scale-105" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-950 h-5 w-5" />
              <input type="text" placeholder="Search resources..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 w-80 text-gray-900" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {filteredResources.map((resource, index) => (
              <div key={resource.id} className={`group cursor-pointer ${resource.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""}`}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">

                  <div className="relative overflow-hidden">
                    <img src={resource.image} alt={resource.title} className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${resource.size === "large" ? "h-80" : "h-48"}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${resource.badge === "Case Study" ? "bg-green-100 text-green-800" : resource.badge === "Blog" ? "bg-blue-100 text-blue-800" : resource.badge === "Infographic" ? "bg-purple-100 text-purple-800" : "bg-orange-100 text-orange-800"}`}>
                        {resource.badge}
                      </span>
                    </div>
                  </div>

                  <div className={`p-6 ${resource.size === "large" ? "lg:p-8" : ""}`}>
                    <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 ${resource.size === "large" ? "text-2xl lg:text-3xl" : "text-xl"}`}>
                      {resource.title}
                    </h3>
                    <p className={`text-gray-600 mb-4 ${resource.size === "large" ? "text-lg" : "text-sm"}`}>
                      {resource.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img src={resource.authorAvatar} alt={resource.author} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{resource.author}</p>
                          <p className="text-xs text-gray-500">{resource.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{resource.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-2 text-stone-950">
            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">10</button>
            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>


    </div>
  )
}
