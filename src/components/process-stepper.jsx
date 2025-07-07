import { 
  Search, 
  Target, 
  Palette, 
  Code2, 
  TestTube, 
  Settings 
} from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "Discovery Workshop",
    description: "We start by understanding your business goals, target audience, and technical requirements through comprehensive discovery sessions.",
    icon: Search,
    color: "from-blue-500 to-blue-600"
  },
  {
    number: "02",
    title: "Strategic Planning", 
    description: "Based on insights gathered, we create a detailed project roadmap with clear milestones, timelines, and deliverables.",
    icon: Target,
    color: "from-green-500 to-green-600"
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description: "Our design team creates intuitive user experiences and visual designs that align with your brand and user needs.",
    icon: Palette,
    color: "from-purple-500 to-purple-600"
  },
  {
    number: "04",
    title: "Development",
    description: "Our expert developers bring designs to life using best practices, clean code, and scalable architecture patterns.",
    icon: Code2,
    color: "from-orange-500 to-orange-600"
  },
  {
    number: "05",
    title: "Testing & QA",
    description: "Rigorous testing ensures your solution works flawlessly across all devices, browsers, and user scenarios.",
    icon: TestTube,
    color: "from-red-500 to-red-600"
  },
  {
    number: "06",
    title: "Launch & Support",
    description: "We handle deployment and provide ongoing maintenance, updates, and support to ensure long-term success.",
    icon: Settings,
    color: "from-indigo-500 to-indigo-600"
  }
]

export function ProcessStepper() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach that ensures quality delivery and exceptional results 
            for every project we undertake.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute top-16 left-full w-8 h-0.5 bg-gray-300 z-0" />
                )}
                
                {/* Step Card */}
                <div className="relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r ${step.color} text-white text-sm font-bold rounded-full`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color} mb-4 mt-4`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-300 z-0" />
              )}
              
              <div className="flex items-start space-x-4">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center relative z-10`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                    <span className="text-xs font-bold text-gray-500">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            * We tailor our process based on project requirements. While following core principles, 
            our approach may vary slightly based on the combination of services we provide.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProcessStepper
