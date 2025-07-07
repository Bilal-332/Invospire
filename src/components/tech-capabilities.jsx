"use client"

import { useState } from "react"

export default function TechCapabilities() {
  const [activeTab, setActiveTab] = useState("UI/UX")

  const techData = {
    title: {
      part1: "Driving Digital Transformation through advanced ",
      accent: "Technology Capabilities",
      part2: "."
    },
    description: "Offering the best in UI/UX designs to ensure high-quality output that enhances your ROI with",
    tabs: [
      {
        id: "UI/UX",
        name: "UI/UX",
        active: true
      },
      {
        id: "Frontend",
        name: "Frontend"
      },
      {
        id: "Backend", 
        name: "Backend"
      },
      {
        id: "Mobile",
        name: "Mobile"
      },
      {
        id: "Database",
        name: "Database"
      },
      {
        id: "Cloud",
        name: "Cloud"
      },
      {
        id: "DevOps",
        name: "DevOps"
      },
      {
        id: "Monitoring",
        name: "Monitoring & Logging"
      },
      {
        id: "Security",
        name: "Security"
      },
      {
        id: "CMS",
        name: "CMS"
      },
      {
        id: "CRM",
        name: "CRM/ERP/Platforms"
      },
      {
        id: "Collaboration",
        name: "Collaboration Tools"
      }
    ],
    technologies: {
      "UI/UX": [
        { name: "Material UI", logo: "/logos/material-ui.svg", color: "#1976d2" },
        { name: "Figma", logo: "/logos/figma.svg", color: "#f24e1e" },
        { name: "Sketch", logo: "/logos/sketch.svg", color: "#f7b500" },
        { name: "Adobe XD", logo: "/logos/adobe-xd.svg", color: "#ff61f6" },
        { name: "Miro", logo: "/logos/miro.svg", color: "#050038" },
        { name: "Photoshop", logo: "/logos/photoshop.svg", color: "#31a8ff" },
        { name: "Axure", logo: "/logos/axure.svg", color: "#00c4cc" },
        { name: "HTML5", logo: "/logos/html5.svg", color: "#e34f26" },
        { name: "Zeplin", logo: "/logos/zeplin.svg", color: "#fdbd39" },
        { name: "Illustrator", logo: "/logos/illustrator.svg", color: "#ff9a00" }
      ],
      "Frontend": [
        { name: "React", logo: "/logos/react.svg", color: "#61dafb" },
        { name: "Vue.js", logo: "/logos/vue.svg", color: "#4fc08d" },
        { name: "Angular", logo: "/logos/angular.svg", color: "#dd0031" },
        { name: "Next.js", logo: "/logos/nextjs.svg", color: "#000000" },
        { name: "TypeScript", logo: "/logos/typescript.svg", color: "#3178c6" },
        { name: "JavaScript", logo: "/logos/javascript.svg", color: "#f7df1e" },
        { name: "Tailwind CSS", logo: "/logos/tailwind.svg", color: "#06b6d4" },
        { name: "SASS", logo: "/logos/sass.svg", color: "#cc6699" },
        { name: "Webpack", logo: "/logos/webpack.svg", color: "#8dd6f9" },
        { name: "Vite", logo: "/logos/vite.svg", color: "#646cff" }
      ],
      "Backend": [
        { name: "Node.js", logo: "/logos/nodejs.svg", color: "#339933" },
        { name: "Python", logo: "/logos/python.svg", color: "#3776ab" },
        { name: "Java", logo: "/logos/java.svg", color: "#ed8b00" },
        { name: "PHP", logo: "/logos/php.svg", color: "#777bb4" },
        { name: "C#", logo: "/logos/csharp.svg", color: "#239120" },
        { name: "Express.js", logo: "/logos/express.svg", color: "#000000" },
        { name: "Django", logo: "/logos/django.svg", color: "#092e20" },
        { name: "FastAPI", logo: "/logos/fastapi.svg", color: "#009688" },
        { name: "Spring Boot", logo: "/logos/spring.svg", color: "#6db33f" },
        { name: ".NET", logo: "/logos/dotnet.svg", color: "#512bd4" }
      ],
      "Mobile": [
        { name: "React Native", logo: "/logos/react-native.svg", color: "#61dafb" },
        { name: "Flutter", logo: "/logos/flutter.svg", color: "#02569b" },
        { name: "Swift", logo: "/logos/swift.svg", color: "#fa7343" },
        { name: "Kotlin", logo: "/logos/kotlin.svg", color: "#7f52ff" },
        { name: "Xamarin", logo: "/logos/xamarin.svg", color: "#3498db" },
        { name: "Ionic", logo: "/logos/ionic.svg", color: "#3880ff" },
        { name: "Cordova", logo: "/logos/cordova.svg", color: "#e8e8e8" },
        { name: "Android Studio", logo: "/logos/android.svg", color: "#3ddc84" },
        { name: "Xcode", logo: "/logos/xcode.svg", color: "#1575f9" },
        { name: "Expo", logo: "/logos/expo.svg", color: "#000020" }
      ],
      "Database": [
        { name: "MongoDB", logo: "/logos/mongodb.svg", color: "#47a248" },
        { name: "PostgreSQL", logo: "/logos/postgresql.svg", color: "#336791" },
        { name: "MySQL", logo: "/logos/mysql.svg", color: "#4479a1" },
        { name: "Redis", logo: "/logos/redis.svg", color: "#dc382d" },
        { name: "SQLite", logo: "/logos/sqlite.svg", color: "#003b57" },
        { name: "Firebase", logo: "/logos/firebase.svg", color: "#ffca28" },
        { name: "Supabase", logo: "/logos/supabase.svg", color: "#3ecf8e" },
        { name: "DynamoDB", logo: "/logos/dynamodb.svg", color: "#4053d6" },
        { name: "Cassandra", logo: "/logos/cassandra.svg", color: "#1287b1" },
        { name: "Elasticsearch", logo: "/logos/elasticsearch.svg", color: "#005571" }
      ],
      "Cloud": [
        { name: "AWS", logo: "/logos/aws.svg", color: "#ff9900" },
        { name: "Azure", logo: "/logos/azure.svg", color: "#0078d4" },
        { name: "Google Cloud", logo: "/logos/gcp.svg", color: "#4285f4" },
        { name: "Vercel", logo: "/logos/vercel.svg", color: "#000000" },
        { name: "Netlify", logo: "/logos/netlify.svg", color: "#00c7b7" },
        { name: "Heroku", logo: "/logos/heroku.svg", color: "#430098" },
        { name: "DigitalOcean", logo: "/logos/digitalocean.svg", color: "#0080ff" },
        { name: "Cloudflare", logo: "/logos/cloudflare.svg", color: "#f38020" },
        { name: "Lambda", logo: "/logos/lambda.svg", color: "#ff9900" },
        { name: "S3", logo: "/logos/s3.svg", color: "#569a31" }
      ],
      "DevOps": [
        { name: "Docker", logo: "/logos/docker.svg", color: "#2496ed" },
        { name: "Kubernetes", logo: "/logos/kubernetes.svg", color: "#326ce5" },
        { name: "Jenkins", logo: "/logos/jenkins.svg", color: "#d33833" },
        { name: "GitHub Actions", logo: "/logos/github-actions.svg", color: "#2088ff" },
        { name: "GitLab CI", logo: "/logos/gitlab.svg", color: "#fc6d26" },
        { name: "Terraform", logo: "/logos/terraform.svg", color: "#7b42bc" },
        { name: "Ansible", logo: "/logos/ansible.svg", color: "#ee0000" },
        { name: "CircleCI", logo: "/logos/circleci.svg", color: "#343434" },
        { name: "Travis CI", logo: "/logos/travis.svg", color: "#3eaaaf" },
        { name: "Azure DevOps", logo: "/logos/azure-devops.svg", color: "#0078d4" }
      ],
      "Monitoring": [
        { name: "Grafana", logo: "/logos/grafana.svg", color: "#f46800" },
        { name: "Prometheus", logo: "/logos/prometheus.svg", color: "#e6522c" },
        { name: "ELK Stack", logo: "/logos/elasticsearch.svg", color: "#005571" },
        { name: "New Relic", logo: "/logos/newrelic.svg", color: "#008c99" },
        { name: "Datadog", logo: "/logos/datadog.svg", color: "#632ca6" },
        { name: "Splunk", logo: "/logos/splunk.svg", color: "#000000" },
        { name: "Sentry", logo: "/logos/sentry.svg", color: "#362d59" },
        { name: "Logstash", logo: "/logos/logstash.svg", color: "#005571" },
        { name: "Kibana", logo: "/logos/kibana.svg", color: "#005571" },
        { name: "CloudWatch", logo: "/logos/cloudwatch.svg", color: "#ff9900" }
      ],
      "Security": [
        { name: "OAuth", logo: "/logos/oauth.svg", color: "#3c4043" },
        { name: "JWT", logo: "/logos/jwt.svg", color: "#000000" },
        { name: "SSL/TLS", logo: "/logos/ssl.svg", color: "#721c24" },
        { name: "OWASP", logo: "/logos/owasp.svg", color: "#000000" },
        { name: "Auth0", logo: "/logos/auth0.svg", color: "#eb5424" },
        { name: "Keycloak", logo: "/logos/keycloak.svg", color: "#4d9fdb" },
        { name: "Vault", logo: "/logos/vault.svg", color: "#000000" },
        { name: "SonarQube", logo: "/logos/sonarqube.svg", color: "#4e9bcd" },
        { name: "Snyk", logo: "/logos/snyk.svg", color: "#4c4a73" },
        { name: "LDAP", logo: "/logos/ldap.svg", color: "#003366" }
      ],
      "CMS": [
        { name: "WordPress", logo: "/logos/wordpress.svg", color: "#21759b" },
        { name: "Drupal", logo: "/logos/drupal.svg", color: "#0077c0" },
        { name: "Strapi", logo: "/logos/strapi.svg", color: "#2e7eea" },
        { name: "Contentful", logo: "/logos/contentful.svg", color: "#2478cc" },
        { name: "Sanity", logo: "/logos/sanity.svg", color: "#f03e2f" },
        { name: "Ghost", logo: "/logos/ghost.svg", color: "#15171a" },
        { name: "Webflow", logo: "/logos/webflow.svg", color: "#4353ff" },
        { name: "Shopify", logo: "/logos/shopify.svg", color: "#7ab55c" },
        { name: "Magento", logo: "/logos/magento.svg", color: "#ee672f" },
        { name: "WooCommerce", logo: "/logos/woocommerce.svg", color: "#96588a" }
      ],
      "CRM": [
        { name: "Salesforce", logo: "/logos/salesforce.svg", color: "#00a1e0" },
        { name: "HubSpot", logo: "/logos/hubspot.svg", color: "#ff7a59" },
        { name: "Zoho", logo: "/logos/zoho.svg", color: "#c83e32" },
        { name: "Microsoft Dynamics", logo: "/logos/dynamics.svg", color: "#002050" },
        { name: "Pipedrive", logo: "/logos/pipedrive.svg", color: "#28a745" },
        { name: "SAP", logo: "/logos/sap.svg", color: "#0faaff" },
        { name: "Oracle", logo: "/logos/oracle.svg", color: "#f80000" },
        { name: "ServiceNow", logo: "/logos/servicenow.svg", color: "#62d84e" },
        { name: "Freshworks", logo: "/logos/freshworks.svg", color: "#f79a00" },
        { name: "Airtable", logo: "/logos/airtable.svg", color: "#18bfff" }
      ],
      "Collaboration": [
        { name: "Slack", logo: "/logos/slack.svg", color: "#4a154b" },
        { name: "Microsoft Teams", logo: "/logos/teams.svg", color: "#6264a7" },
        { name: "Discord", logo: "/logos/discord.svg", color: "#5865f2" },
        { name: "Zoom", logo: "/logos/zoom.svg", color: "#2d8cff" },
        { name: "Jira", logo: "/logos/jira.svg", color: "#0052cc" },
        { name: "Confluence", logo: "/logos/confluence.svg", color: "#172b4d" },
        { name: "Notion", logo: "/logos/notion.svg", color: "#000000" },
        { name: "Trello", logo: "/logos/trello.svg", color: "#0052cc" },
        { name: "Asana", logo: "/logos/asana.svg", color: "#f06a6a" },
        { name: "Monday.com", logo: "/logos/monday.svg", color: "#ff3d57" }
      ]
    }
  }

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  const getTabDescription = (tabId) => {
    const descriptions = {
      "UI/UX": "Offering the best in UI/UX designs to ensure high-quality output that enhances your ROI with",
      "Frontend": "Building responsive and interactive user interfaces with modern frameworks and technologies",
      "Backend": "Developing robust server-side solutions and APIs with scalable architectures",
      "Mobile": "Creating native and cross-platform mobile applications for iOS and Android",
      "Database": "Implementing efficient data storage and management solutions for all your needs",
      "Cloud": "Leveraging cloud platforms for scalable, reliable, and cost-effective solutions",
      "DevOps": "Streamlining development and deployment processes with automation and CI/CD",
      "Monitoring": "Ensuring system reliability with comprehensive monitoring and logging solutions",
      "Security": "Implementing robust security measures to protect your applications and data",
      "CMS": "Building and customizing content management systems for easy content handling",
      "CRM": "Integrating customer relationship management and enterprise resource planning systems",
      "Collaboration": "Facilitating team collaboration with modern communication and project management tools"
    }
    return descriptions[tabId] || descriptions["UI/UX"]
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            <span className="text-gray-900">{techData.title.part1}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">{techData.title.accent}</span>
            <span className="text-gray-900">{techData.title.part2}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {getTabDescription(activeTab)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Tabs */}
          <div className="lg:col-span-4">
            <div className="flex flex-wrap lg:flex-col gap-3">
              {techData.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-medium shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Technology Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {techData.technologies[activeTab]?.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    {/* Tech Icon Placeholder */}
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: tech.color }}
                    >
                      {tech.name.charAt(0)}
                    </div>
                    <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
