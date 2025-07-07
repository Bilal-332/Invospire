import Link from 'next/link'
import { Home, ArrowLeft, Search, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="text-center max-w-2xl mx-auto relative z-10">
        {/* 404 Animation */}
        <div className="mb-8 relative">
          <div className="text-9xl font-bold text-gradient opacity-20 select-none animate-pulse-glow">
            404
          </div>
          {/* Floating elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center glow-blue animate-float">
              <Code2 className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Oops! Page Not Found
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="btn-primary interactive-element" asChild>
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          
          <Button className="btn-secondary interactive-element" size="lg" asChild>
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Search Suggestion */}
        <div className="glass rounded-xl p-8 border border-white/10 max-w-md mx-auto">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 glow-blue">
            <Search className="h-6 w-6 text-white" />
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-3">
            Looking for something specific?
          </h3>
          
          <p className="text-gray-400 text-sm mb-4">
            Try browsing our main sections:
          </p>
          
          <div className="space-y-2">
            <Link 
              href="/services" 
              className="block text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 hover:translate-x-1 transform"
            >
              → Our Services
            </Link>
            <Link 
              href="/about" 
              className="block text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 hover:translate-x-1 transform"
            >
              → About Us
            </Link>
            <Link 
              href="/resources" 
              className="block text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 hover:translate-x-1 transform"
            >
              → Resources & Blog
            </Link>
            <Link 
              href="/contact" 
              className="block text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 hover:translate-x-1 transform"
            >
              → Contact Us
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <p className="text-gray-500 text-sm mt-8">
          Still can't find what you're looking for? 
          <Link href="/contact" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  )
}
