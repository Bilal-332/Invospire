"use client"

import { useState } from "react"
import { 
  Search, 
  Network, 
  Palette, 
  Code2, 
  TestTube, 
  Settings 
} from "lucide-react"

const processSteps = [
  {
    number: "01",
    firstWord: "Discovery",
    secondWord: "Workshop",
    fullTitle: "Discovery Workshop", 
    description: "We usually tailor our process based on the project requirements and our process—while following the underlying principles—may vary slightly, based on the combination of services we provide.",
    icon: Search,
    rotation: -90
  },
  {
    number: "02", 
    firstWord: "Predictive",
    secondWord: "Planning",
    fullTitle: "Predictive Planning",
    description: "Convert design ideas into responsible programming through actual storytelling, precise copywriting, precise prototyping architecture, and interactive UX.",
    icon: Network,
    rotation: -90
  },
  {
    number: "03",
    firstWord: "IA & UX/UI",
    secondWord: "Design",
    fullTitle: "IA & UX/UI Design",
    description: "We prioritize having a well-thought design process as a crucial element of our digital organizing, information in its proper hierarchy to execute a smooth user experience to convey the intended information with a visually cohesive design approach.",
    icon: Palette,
    rotation: -90
  },
  {
    number: "04",
    firstWord: "Development",
    secondWord: "",
    fullTitle: "Development",
    description: "Our expert developers bring designs to life using best practices, clean code, and scalable architecture patterns to ensure optimal performance.",
    icon: Code2,
    rotation: -90
  },
  {
    number: "05",
    firstWord: "Testing",
    secondWord: "",
    fullTitle: "Testing",
    description: "Rigorous testing ensures your solution works flawlessly across all devices, browsers, and user scenarios with comprehensive quality assurance.",
    icon: TestTube,
    rotation: -90
  },
  {
    number: "06",
    firstWord: "Maintenance",
    secondWord: "",
    fullTitle: "Maintenance",
    description: "We handle deployment and provide ongoing maintenance, updates, and support to ensure long-term success and optimal performance.",
    icon: Settings,
    rotation: -90
  }
]

export function ProcessStepper() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-left mb-16">
          <h3 className="text-xl text-gray-600 mb-6 font-mono ">Our Process</h3>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            <span className="text-gray-900 ">Maximizing software engineering output with our people-focused </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">Processes</span>
            <span className="text-gray-900">.</span>
          </h2>
        </div>
      </div>

      {/* Process Steps - Full Width */}
      <div className="w-full px-8">
        <div className="flex rounded-2xl overflow-hidden shadow-lg bg-gray-100 w-full max-w-[1400px] mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-500 ease-in-out cursor-pointer ${
                hoveredIndex === index
                  ? 'flex-[4] bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500'
                  : 'flex-1 bg-gray-200'
              } ${index < processSteps.length - 1 ? 'border-r border-gray-400' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
                {/* Default State Content */}
                <div className={`p-6 h-[500px] flex flex-col transition-all duration-500 ease-in-out ${
                  hoveredIndex === index ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}>
                  {/* Step Number and Icon */}
                  <div className="flex items-center justify-between mb-8 transition-all duration-300">
                    <div className="text-gray-400 text-lg font-medium transition-colors duration-300">
                      p{step.number}
                    </div>
                    <div className="opacity-30 transition-all duration-300 hover:opacity-50">
                      <step.icon className="h-12 w-12 text-gray-400 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Center Content */}
                  <div className="flex-1 flex flex-col justify-center items-center space-y-[80px]">
                    {/* Title - Vertical Text */}
                    <div 
                      className="text-center transition-all duration-500 ease-in-out"
                      style={{ 
                        transform: `rotate(${step.rotation}deg)`,
                        transformOrigin: 'center'
                      }}
                    >
                      <h3 className="text-3xl font-black text-gray-800 leading-tight whitespace-nowrap transition-all duration-300 hover:text-gray-700">
                        {step.firstWord}
                      </h3>
                      {step.secondWord && (
                        <h3 className="text-3xl font-black text-gray-800 leading-tight whitespace-nowrap transition-all duration-300 hover:text-gray-700">
                          {step.secondWord}
                        </h3>
                      )}
                    </div>

                    {/* Bold Plus Icon - Below Title */}
                    <div className="text-center transition-all duration-300">
                      <span className="text-5xl text-gray-600 font-black transition-all duration-300 hover:text-gray-700">+</span>
                    </div>
                  </div>
                </div>

                {/* Hovered State Content */}
                <div className={`absolute inset-0 p-8 flex flex-col text-white transition-all duration-500 ease-in-out ${
                  hoveredIndex === index ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
                }`}>
                  {/* Step Number and Icon at Top - Same Line */}
                  <div className="flex items-center justify-between mb-6 transition-all duration-300">
                    <div className="text-white/80 text-lg font-medium transition-all duration-300">
                      p{step.number}
                    </div>
                    <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30">
                      <step.icon className="h-8 w-8 text-white transition-all duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-6 transition-all duration-300">
                    <h3 className="text-3xl font-bold text-white transition-all duration-300 hover:text-white/90">
                      {step.fullTitle}
                    </h3>
                  </div>

                  {/* Description - Directly below title */}
                  <div className="transition-all duration-300">
                    <p className="text-white/90 leading-relaxed text-xl max-w-md font-bold transition-all duration-300 hover:text-white">
                      {step.description}
                    </p>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8">
        {/* Bottom Note */}
        <div className="mt-8 flex justify-between items-start">
          <p className="text-gray-600 text-sm max-w-2xl">
            ** We usually tailor our process based on the project requirements and our process—while 
            following the underlying principles—may vary slightly, based on the combination of services we 
            provide.
          </p>
          
          <div>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400/30 group">
              <span className="inline-flex items-center">
                Our Process Details 
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessStepper
