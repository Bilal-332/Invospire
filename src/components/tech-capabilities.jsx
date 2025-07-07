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
        { name: "Material UI", logo: "https://mui.com/static/logo.svg", color: "#1976d2" },
        { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", color: "#f24e1e" },
        { name: "Sketch", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg", color: "#f7b500" },
        { name: "Adobe XD", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg", color: "#ff61f6" },
        { name: "Miro", logo: "https://cdn.worldvectorlogo.com/logos/miro-2.svg", color: "#050038" },
        { name: "Photoshop", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", color: "#31a8ff" },
        { name: "Axure", logo: "https://cdn.worldvectorlogo.com/logos/axure-rp.svg", color: "#00c4cc" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#e34f26" },
        { name: "Zeplin", logo: "https://cdn.worldvectorlogo.com/logos/zeplin.svg", color: "#fdbd39" },
        { name: "Illustrator", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg", color: "#ff9a00" }
      ],
      "Frontend": [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61dafb" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "#4fc08d" },
        { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg", color: "#dd0031" },
        { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg", color: "#000000" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178c6" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#f7df1e" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#06b6d4" },
        { name: "SASS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", color: "#cc6699" },
        { name: "Webpack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", color: "#8dd6f9" },
        { name: "Vite", logo: "https://vitejs.dev/logo.svg", color: "#646cff" }
      ],
      "Backend": [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776ab" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#ed8b00" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777bb4" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "#239120" },
        { name: "Express.js", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg", color: "#000000" },
        { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django.svg", color: "#092e20" },
        { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg", color: "#009688" },
        { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", color: "#6db33f" },
        { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", color: "#512bd4" }
      ],
      "Mobile": [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61dafb" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "#02569b" },
        { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", color: "#fa7343" },
        { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", color: "#7f52ff" },
        { name: "Xamarin", logo: "https://cdn.worldvectorlogo.com/logos/xamarin.svg", color: "#3498db" },
        { name: "Ionic", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg", color: "#3880ff" },
        { name: "Cordova", logo: "https://cdn.worldvectorlogo.com/logos/cordova.svg", color: "#e8e8e8" },
        { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", color: "#3ddc84" },
        { name: "Xcode", logo: "https://cdn.worldvectorlogo.com/logos/xcode.svg", color: "#1575f9" },
        { name: "Expo", logo: "https://cdn.worldvectorlogo.com/logos/expo-1.svg", color: "#000020" }
      ],
      "Database": [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47a248" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479a1" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "#dc382d" },
        { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", color: "#003b57" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#ffca28" },
        { name: "Supabase", logo: "https://cdn.worldvectorlogo.com/logos/supabase-logo-icon.svg", color: "#3ecf8e" },
        { name: "DynamoDB", logo: "https://cdn.worldvectorlogo.com/logos/aws-dynamodb.svg", color: "#4053d6" },
        { name: "Cassandra", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg", color: "#1287b1" },
        { name: "Elasticsearch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg", color: "#005571" }
      ],
      "Cloud": [
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "#ff9900" },
        { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "#0078d4" },
        { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285f4" },
        { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg", color: "#000000" },
        { name: "Netlify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", color: "#00c7b7" },
        { name: "Heroku", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg", color: "#430098" },
        { name: "DigitalOcean", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg", color: "#0080ff" },
        { name: "Cloudflare", logo: "https://cdn.worldvectorlogo.com/logos/cloudflare-logo.svg", color: "#f38020" },
        { name: "Lambda", logo: "https://cdn.worldvectorlogo.com/logos/aws-lambda-1.svg", color: "#ff9900" },
        { name: "S3", logo: "https://cdn.worldvectorlogo.com/logos/aws-s3.svg", color: "#569a31" }
      ],
      "DevOps": [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ed" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "#326ce5" },
        { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", color: "#d33833" },
        { name: "GitHub Actions", logo: "https://cdn.worldvectorlogo.com/logos/github-actions.svg", color: "#2088ff" },
        { name: "GitLab CI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", color: "#fc6d26" },
        { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", color: "#7b42bc" },
        { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", color: "#ee0000" },
        { name: "CircleCI", logo: "https://cdn.worldvectorlogo.com/logos/circleci.svg", color: "#343434" },
        { name: "Travis CI", logo: "https://cdn.worldvectorlogo.com/logos/travis-ci.svg", color: "#3eaaaf" },
        { name: "Azure DevOps", logo: "https://cdn.worldvectorlogo.com/logos/azure-devops.svg", color: "#0078d4" }
      ],
      "Monitoring": [
        { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", color: "#f46800" },
        { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", color: "#e6522c" },
        { name: "ELK Stack", logo: "https://cdn.worldvectorlogo.com/logos/elastic-stack.svg", color: "#005571" },
        { name: "New Relic", logo: "https://cdn.worldvectorlogo.com/logos/new-relic-logo.svg", color: "#008c99" },
        { name: "Datadog", logo: "https://cdn.worldvectorlogo.com/logos/datadog.svg", color: "#632ca6" },
        { name: "Splunk", logo: "https://cdn.worldvectorlogo.com/logos/splunk.svg", color: "#000000" },
        { name: "Sentry", logo: "https://cdn.worldvectorlogo.com/logos/sentry-3.svg", color: "#362d59" },
        { name: "Logstash", logo: "https://cdn.worldvectorlogo.com/logos/logstash.svg", color: "#005571" },
        { name: "Kibana", logo: "https://cdn.worldvectorlogo.com/logos/kibana.svg", color: "#005571" },
        { name: "CloudWatch", logo: "https://cdn.worldvectorlogo.com/logos/aws-cloudwatch.svg", color: "#ff9900" }
      ],
      "Security": [
        { name: "OAuth", logo: "https://oauth.net/images/oauth-2-sm.png", color: "#3c4043" },
        { name: "JWT", logo: "https://jwt.io/img/pic_logo.svg", color: "#000000" },
        { name: "SSL/TLS", logo: "https://cdn.worldvectorlogo.com/logos/ssl-1.svg", color: "#721c24" },
        { name: "OWASP", logo: "https://cdn.worldvectorlogo.com/logos/owasp.svg", color: "#000000" },
        { name: "Auth0", logo: "https://cdn.worldvectorlogo.com/logos/auth0.svg", color: "#eb5424" },
        { name: "Keycloak", logo: "https://cdn.worldvectorlogo.com/logos/keycloak.svg", color: "#4d9fdb" },
        { name: "Vault", logo: "https://cdn.worldvectorlogo.com/logos/vault-enterprise.svg", color: "#000000" },
        { name: "SonarQube", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg", color: "#4e9bcd" },
        { name: "Snyk", logo: "https://cdn.worldvectorlogo.com/logos/snyk.svg", color: "#4c4a73" },
        { name: "LDAP", logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/LDAP_logo.png", color: "#003366" }
      ],
      "CMS": [
        { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", color: "#21759b" },
        { name: "Drupal", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg", color: "#0077c0" },
        { name: "Strapi", logo: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg", color: "#2e7eea" },
        { name: "Contentful", logo: "https://cdn.worldvectorlogo.com/logos/contentful.svg", color: "#2478cc" },
        { name: "Sanity", logo: "https://cdn.worldvectorlogo.com/logos/sanity.svg", color: "#f03e2f" },
        { name: "Ghost", logo: "https://cdn.worldvectorlogo.com/logos/ghost.svg", color: "#15171a" },
        { name: "Webflow", logo: "https://cdn.worldvectorlogo.com/logos/webflow.svg", color: "#4353ff" },
        { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg", color: "#7ab55c" },
        { name: "Magento", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg", color: "#ee672f" },
        { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg", color: "#96588a" }
      ],
      "CRM": [
        { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg", color: "#00a1e0" },
        { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg", color: "#ff7a59" },
        { name: "Zoho", logo: "https://cdn.worldvectorlogo.com/logos/zoho.svg", color: "#c83e32" },
        { name: "Microsoft Dynamics", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-dynamics-365.svg", color: "#002050" },
        { name: "Pipedrive", logo: "https://cdn.worldvectorlogo.com/logos/pipedrive.svg", color: "#28a745" },
        { name: "SAP", logo: "https://cdn.worldvectorlogo.com/logos/sap-3.svg", color: "#0faaff" },
        { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", color: "#f80000" },
        { name: "ServiceNow", logo: "https://cdn.worldvectorlogo.com/logos/servicenow.svg", color: "#62d84e" },
        { name: "Freshworks", logo: "https://cdn.worldvectorlogo.com/logos/freshworks.svg", color: "#f79a00" },
        { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable.svg", color: "#18bfff" }
      ],
      "Collaboration": [
        { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", color: "#4a154b" },
        { name: "Microsoft Teams", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg", color: "#6264a7" },
        { name: "Discord", logo: "https://cdn.worldvectorlogo.com/logos/discord-6.svg", color: "#5865f2" },
        { name: "Zoom", logo: "https://cdn.worldvectorlogo.com/logos/zoom-communications.svg", color: "#2d8cff" },
        { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", color: "#0052cc" },
        { name: "Confluence", logo: "https://cdn.worldvectorlogo.com/logos/confluence-1.svg", color: "#172b4d" },
        { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg", color: "#000000" },
        { name: "Trello", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg", color: "#0052cc" },
        { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg", color: "#f06a6a" },
        { name: "Monday.com", logo: "https://cdn.worldvectorlogo.com/logos/monday-com.svg", color: "#ff3d57" }
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Tabs */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-3">
              {techData.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-6 py-4 rounded-full text-center transition-all duration-300 text-sm font-medium border border-gray-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-lg border-gray-400'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  } ${
                    tab.name === 'Monitoring & Logging' || tab.name === 'Collaboration Tools' || tab.name === 'CRM/ERP/Platforms'
                      ? 'col-span-2'
                      : ''
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Technology Grid */}
          <div className="lg:col-span-9">
            <div className="mb-6">
              <p className="text-gray-600 text-lg">
                {getTabDescription(activeTab)}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {techData.technologies[activeTab]?.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-4xl p-6 transition-all duration-300 hover:shadow-2xl group text-center"
                  style={{ boxShadow: '0 10px 30px rgba(128, 128, 128, 0.3), 0 4px 15px rgba(128, 128, 128, 0.2)' }}
                >
                  {/* Tech Logo */}
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-14 h-14 object-contain"
                        onError={(e) => {
                          // Fallback to colored letter if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className="w-14 h-14 rounded-lg items-center justify-center text-white font-bold text-xl hidden"
                        style={{ backgroundColor: tech.color }}
                      >
                        {tech.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  {/* Tech Name Label */}
                  <div className="text-xs text-gray-600 font-medium">
                    {tech.name}
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
