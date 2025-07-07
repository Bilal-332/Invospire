  "use client"

export default function ServicesGrid() {
  const servicesData = {
    title: {
      main: "We ",
      accent: "develop, grow, and elevate",
      subtitle: " online businesses"
    },
    description: "Empowering your brand with cutting-edge solutions",
    categories: [
      {
        title: "Software Engineering",
        services: [
          "Website Development",
          "Mobile App Development", 
          "SaaS Development",
          "Custom Software Development"
        ]
      },
      {
        title: "E-commerce Development",
        services: [
          "Amazon",
          "EBAY",
          "Etsy", 
          "TikTok Shop",
          "Shopify"
        ]
      },
      {
        title: "Digital Marketing",
        services: [
          "Facebook Ads",
          "Google Ads",
          "Influencer Marketing",
          "Email Marketing",
          "Social Media Marketing"
        ]
      },
      {
        title: "Design and Digital Experience",
        services: [
          "User Research",
          "Web Design",
          "UI/UX Design"
        ],
        cmsSection: {
          title: "CMS",
          services: [
            "WordPress",
            "Shopify",
            "Shopwired", 
            "Wix"
          ]
        }
      }
    ]
  }

  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {servicesData.title.main}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              {servicesData.title.accent}
            </span>
            {servicesData.title.subtitle}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {servicesData.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {servicesData.categories.map((category, index) => (
            <div key={index} className="space-y-6">
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-white mb-8 leading-tight">
                {category.title}
              </h3>
              
              {/* Services List */}
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="text-gray-300 text-lg leading-relaxed hover:text-white transition-colors duration-200 cursor-pointer">
                    {service}
                  </div>
                ))}
              </div>

              {/* CMS Section for Design category */}
              {category.cmsSection && (
                <div className="mt-8 pt-6">
                  <h4 className="text-2xl font-bold text-white mb-6 leading-tight">
                    {category.cmsSection.title}
                  </h4>
                  <div className="space-y-4">
                    {category.cmsSection.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="text-gray-300 text-lg leading-relaxed hover:text-white transition-colors duration-200 cursor-pointer">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
