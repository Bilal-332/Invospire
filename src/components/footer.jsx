import Link from "next/link"
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Software Engineering", href: "/services/software-engineering" },
    { name: "E-Commerce Development", href: "/services/ecommerce-development" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "CMS Development", href: "/services/cms-development" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/about#process" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/resources/blog" },
    { name: "UI/UX Gallery", href: "/resources/gallery" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="font-bold text-xl">Invospire</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses through innovative software solutions, 
              e-commerce platforms, and digital marketing strategies.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              {/* US Office */}
              <div className="space-y-2">
                <h4 className="font-medium text-primary">🇺🇸 USA Office</h4>
                <div className="flex items-start space-x-2 text-sm text-gray-300">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>123 Innovation Drive, Tech Valley, CA 94000</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>

              {/* Pakistan Office */}
              <div className="space-y-2">
                <h4 className="font-medium text-primary">🇵🇰 Pakistan Office</h4>
                <div className="flex items-start space-x-2 text-sm text-gray-300">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>456 Tech Hub, Karachi, Pakistan</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+92 21 1234 5678</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@invospire.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Invospire. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
