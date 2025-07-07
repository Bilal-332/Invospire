import companyData from "@/data/company.json"

export function TechLogoCloud() {
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {companyData.technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center p-6 glass rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 interactive-element"
          >
            {/* Tech logo placeholder with 3D effect */}
            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-primary flex items-center justify-center text-xl font-bold text-white group-hover:scale-110 transition-transform glow-blue">
              {tech.name.charAt(0)}
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Additional Technologies Cloud */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-6">And many more technologies tailored to your needs</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Kubernetes", "Redis", "GraphQL", "Elasticsearch", 
            "Jenkins", "Terraform", "Laravel", "Vue.js"
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 glass rounded-full text-sm font-medium text-gray-400 border border-white/10 hover:border-blue-400/50 hover:text-blue-400 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechLogoCloud
