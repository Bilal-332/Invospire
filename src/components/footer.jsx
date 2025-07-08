import Link from "next/link"
import { ChevronRight, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const footerSections = {
  coreServices: [
    "Custom Software Development",
    "Website Development", 
    "Mobile App Development",
    "Ecommerce Development",
    "Data Engineering",
    "IT Staff Augmentation"
  ],
  technology: [
    "Backend",
    "Frontend", 
    "CMS",
    "Mobile",
    "Cloud",
    "Security"
  ],
  company: [
    "About",
    "Case Studies",
    "Blogs", 
    "Careers",
    "Contact",
    "Sitemap"
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl py-12 sm:py-16">
        {/* Main Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Let's Grow Your Brand
          </h2>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Core Services */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white">Core Services</h3>
            <ul className="space-y-4">
              {footerSections.coreServices.map((service, index) => (
                <li key={index} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {service}
                  </span>
                  <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white">Technology</h3>
            <ul className="space-y-4">
              {footerSections.technology.map((tech, index) => (
                <li key={index} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {tech}
                  </span>
                  <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white">Company</h3>
            <ul className="space-y-4">
              {footerSections.company.map((item, index) => (
                <li key={index} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                  <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Office Locations */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Left Side - Office Locations */}
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 lg:gap-16 w-full lg:w-auto">
              {/* USA Office */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-900">USA</div>
                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <div>5900 BALCONES DR STE 11225</div>
                  <div>AUSTIN, TX 78731</div>
                  <div className="mt-1">+1 737 283 9680</div>
                </div>
              </div>

              {/* Pakistan Office */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-900">PAK</div>
                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <div>Office F21, Khankhail Plaza</div>
                  <div>Abbottabad Pk</div>
                  <div className="mt-1">+92 327 130 7985</div>
                </div>
              </div>
            </div>

            {/* Center - Email */}
            <div className="flex flex-col items-center text-center order-2 lg:order-none">
              <div className="text-base sm:text-lg text-white mb-2">Mail us at</div>
              <Link
                href="mailto:hello@invospire.com"
                className="text-base sm:text-lg text-white hover:text-gray-300 transition-colors break-all sm:break-normal"
              >
                hello@invospire.com
              </Link>
            </div>

            {/* Right Side - Social Media */}
            <div className="flex flex-col items-center text-center order-3 lg:order-none">
              <div className="text-base sm:text-lg text-white mb-3 sm:mb-4">Get Connected</div>
              <div className="flex space-x-2 sm:space-x-3">
                <Link href="#" className="block">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                </Link>
                <Link href="#" className="block">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                </Link>
                <Link href="#" className="block">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                </Link>
                <Link href="#" className="block">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright and Privacy */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Invospire Inc. All rights reserved.
              </p>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
