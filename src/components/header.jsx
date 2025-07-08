"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, X, ChevronDown, Code2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "Services",
    href: "/services",
    children: [
      {
        category: "Software Engineering",
        items: [
          { name: "Website Development", href: "/services/website-development" },
          { name: "Mobile App Development", href: "/services/mobile-app-development" },
          { name: "SaaS Development", href: "/services/saas-development" },
          { name: "Custom Software Development", href: "/services/custom-software-development" },
          { name: "Cloud Application Development", href: "/services/cloud-application-development" },
        ]
      },
      {
        category: "E-commerce",
        items: [
          { name: "Amazon", href: "/services/ecommerce/amazon" },
          { name: "EBAY", href: "/services/ecommerce/ebay" },
          { name: "ETSY", href: "/services/ecommerce/etsy" },
          { name: "Tiktok Shop", href: "/services/ecommerce/tiktok-shop" },
          { name: "Shopify", href: "/services/ecommerce/shopify" },
        ]
      },
      {
        category: "Digital Marketing",
        items: [
          { name: "Facebook Ads", href: "/services/digital-marketing/facebook-ads" },
          { name: "Google Ads", href: "/services/digital-marketing/google-ads" },
          { name: "Influencer Marketing", href: "/services/digital-marketing/influencer-marketing" },
          { name: "Email Marketing", href: "/services/digital-marketing/email-marketing" },
          { name: "Social Media Marketing", href: "/services/digital-marketing/social-media-marketing" },
        ]
      },
      {
        category: "Design and Digital Experience",
        items: [
          { name: "User Research", href: "/services/design/user-research" },
          { name: "Web Design", href: "/services/design/web-design" },
          { name: "UI/UX Design", href: "/services/design/ui-ux-design" },
        ]
      },
      {
        category: "CMS",
        items: [
          { name: "WordPress", href: "/services/cms/wordpress" },
          { name: "Shopify", href: "/services/cms/shopify" },
          { name: "Shopwired", href: "/services/cms/shopwired" },
          { name: "Wix", href: "/services/cms/wix" },
          { name: "Squarespace", href: "/services/cms/squarespace" },
        ]
      }
    ]
  },
  {
    name: "Resources",
    href: "/resources",
    children: [
      { name: "Blogs", href: "/resources/blogs" },
      { name: "About Us", href: "/about" },
      { name: "UI/UX Gallery", href: "/resources/gallery" },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState(null)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/30">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Invospire Logo */}
              <div className="flex items-center space-x-3">
                <img 
                  src="/invospire-logo.png" 
                  alt="Invospire Logo" 
                  className="h-65 w-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link 
                      href={item.href}
                      className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-white hover:text-[#2DD4BF] transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>
                    
                    {/* Mega Dropdown for Services */}
                    {item.name === "Services" ? (
                      <div className={cn(
                        "absolute top-full left-0 mt-2 w-[90vw] max-w-4xl bg-gray-900/95 backdrop-blur-lg border border-gray-700/50 rounded-lg shadow-xl transition-all duration-200",
                        activeDropdown === item.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                      )}>
                        <div className="grid grid-cols-3 gap-6 p-6">
                          {item.children.map((category) => (
                            <div key={category.category} className="space-y-3">
                              <h3 className="text-sm font-semibold text-[#2DD4BF] uppercase tracking-wide">
                                {category.category}
                              </h3>
                              <div className="space-y-1">
                                {category.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-200"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Regular Dropdown */
                      <div className={cn(
                        "absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg border border-gray-700/50 rounded-lg shadow-xl transition-all duration-200",
                        activeDropdown === item.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                      )}>
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors duration-200",
                      pathname === item.href 
                        ? "text-[#2DD4BF]" 
                        : "text-white hover:text-[#2DD4BF]"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#2DD4BF] to-[#FBBF24] text-white text-sm font-medium rounded-full hover:from-[#14B8A6] hover:to-[#F59E0B] transition-all duration-200 shadow-lg"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-white hover:text-[#2DD4BF] transition-colors duration-200 hover:bg-gray-800/50 rounded-full border-2 border-white/30 hover:border-white/50"
            >
              <Search className="w-5 h-5" />
            </button>

            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#2DD4BF] transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t border-gray-700/30 bg-gray-900/50 backdrop-blur-md">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700/30">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-[#2DD4BF] hover:bg-gray-800/50 rounded-md"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180"
                        )} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.name === "Services" ? (
                            // Handle mega menu structure for mobile
                            item.children.map((category) => (
                              <div key={category.category} className="py-2">
                                <div className="text-xs font-semibold text-[#2DD4BF] uppercase tracking-wide mb-2 px-3">
                                  {category.category}
                                </div>
                                {category.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-6 py-1 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            ))
                          ) : (
                            // Handle regular dropdown structure
                            item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200",
                        pathname === item.href
                          ? "text-[#2DD4BF] bg-gray-800/50"
                          : "text-white hover:text-[#2DD4BF] hover:bg-gray-800/50"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Us */}
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-[#2DD4BF] hover:bg-gray-800/50 rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
