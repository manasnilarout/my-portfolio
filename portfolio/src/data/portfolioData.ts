export const portfolioData = {
  personal: {
    name: "Manas Ranjan Nilorout",
    title: "Senior Software Engineer",
    email: "me@manasranjan.dev",
    phone: "+91 8093773107",
    location: "Hyderabad, Telangana",
    address: "301 - D Block, Aakriti Esta, Tellapur, Hyderabad, 502032",
    tagline: "Building scalable solutions with modern technologies",
    description: "Experienced software engineer with expertise in building production-grade applications, microservices architecture, and API integration platforms. Passionate about automation, performance optimization, and clean code."
  },
  
  experience: [
    {
      id: 1,
      company: "UiPath Robotics",
      position: "Senior Software Engineer",
      location: "Hyderabad, Telangana, India",
      duration: "March 2021 - Present",
      description: "Working on Integration Services - an API Integration Platform to virtualize APIs into unified data models",
      responsibilities: [
        "Code Owner for Autopilot - GenAI-powered assistant for code suggestions and connector construction",
        "Code Owner for API Workflows - stateless DAG architecture for executing user scripts in lambda",
        "Started multiple initiatives to automate engineering chores and improve productivity",
        "SME for formulas/studio web stack operating as DAG for process automation",
        "Contributing features and optimizations to Java/Node.js monolith codebase"
      ]
    },
    {
      id: 2,
      company: "Osmosys Software Solutions",
      position: "Software Engineer",
      location: "Hyderabad, Telangana, India",
      duration: "Jan 2018 - Feb 2021",
      description: "Worked on multiple client projects involving IoT, microservices, and data processing",
      responsibilities: [
        "Led Caleido project - IoT-based hotel management system",
        "Developed microservices using TypeScript, Angular, MySQL, MQTT, RabbitMQ",
        "Set up ELK stack for monitoring and logging",
        "Conducted code reviews and mentored team members",
        "Optimized performance across multiple projects"
      ]
    }
  ],
  
  skills: {
    languages: ["Node.js", "JavaScript", "TypeScript", "Java", "Python"],
    frontend: ["React.js", "Angular", "Bootstrap", "Semantic UI", "Vue.js"],
    backend: ["Express.js", "Adonis.js", "Nest.js", "Spring"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firestore", "AWS Athena"],
    tools: ["Git", "Docker", "VS Code", "IntelliJ", "DBeaver"],
    services: ["AWS", "RabbitMQ", "MQTT", "ELK Stack", "Mailgun", "Twilio"],
    concepts: ["Microservices", "REST APIs", "GraphQL", "DevOps", "CI/CD", "Agile"]
  },
  
  projects: [
    {
      id: 1,
      name: "Integration Services",
      company: "UiPath",
      description: "API Integration Platform to virtualize APIs into unified data models, eliminating brittle point-to-point connections",
      technologies: ["Node.js", "Java", "TypeScript", "Microservices", "Lambda", "DAG"],
      highlights: [
        "Built Autopilot - GenAI-powered code assistant",
        "Developed API Workflows for stateless script execution",
        "Implemented connector builder architecture"
      ],
      link: "https://www.uipath.com/"
    },
    {
      id: 2,
      name: "Caleido",
      company: "Osmosys",
      description: "IoT-based hotel management system providing room service booking and customer services through fingertip control",
      technologies: ["TypeScript", "Angular 9", "MySQL", "MQTT", "RabbitMQ", "ELK Stack"],
      highlights: [
        "Designed microservices architecture",
        "Implemented real-time IoT communication",
        "Set up comprehensive monitoring with ELK stack"
      ]
    },
    {
      id: 3,
      name: "GlowRadius",
      company: "Private",
      description: "B2B intent selling vendor that crawls digital footprints to gather business insights",
      technologies: ["Google Firestore", "Google AppEngine", "Node.js"],
      highlights: [
        "Led framework design and optimization",
        "Implemented microservice architecture",
        "Optimized for peak performance on cloud platforms"
      ],
      link: "https://www.glowradius.com/"
    },
    {
      id: 4,
      name: "Import.IO",
      company: "Osmosys",
      description: "Data extraction and transformation platform for business insights using AWS services",
      technologies: ["AWS Athena", "S3", "Lambda", "Redshift", "Node.js", "Python"],
      highlights: [
        "Built web extractors for data crawling",
        "Created data validation and filtering tools",
        "Implemented automated data delivery pipelines"
      ],
      link: "https://www.import.io/"
    },
    {
      id: 5,
      name: "Counterpick",
      company: "Osmosys",
      description: "Advanced team composition tool for League of Legends using custom weighting algorithms",
      technologies: ["Node.js", "Vue.js", "MariaDB", "NSQ", "Babel"],
      highlights: [
        "Created APIs for simulation operations",
        "Implemented GDPR compliance features",
        "Integrated RIOT API for real-time data"
      ],
      link: "https://counterpick.com/"
    },
    {
      id: 6,
      name: "Common API",
      company: "Osmosys",
      description: "Generic API service for PDF generation, image manipulation, and Excel processing",
      technologies: ["Adonis.js", "Node.js", "MySQL"],
      highlights: [
        "Built PDF generation from HTML/web pages",
        "Implemented image manipulation services",
        "Created Excel generation and processing tools"
      ]
    }
  ],
  
  achievements: [
    {
      title: "Garuda Award",
      organization: "Osmosys Software Solutions",
      year: "2019",
      description: "Award for extraordinary performance throughout the year"
    },
    {
      title: "Pegasus Award",
      organization: "Osmosys Software Solutions",
      year: "2020",
      description: "Recognition for consistent quality, commitment, and leadership"
    },
    {
      title: "IIT Kharagpur (Kshitij)",
      organization: "IIT Kharagpur",
      description: "Participated and won in multiple events"
    },
    {
      title: "Published Research",
      organization: "IJRAT",
      description: "Published journal on Performance analysis of wireless communication"
    }
  ],
  
  education: [
    {
      degree: "B.Tech",
      institution: "Gandhi Institute of Engineering and Technology",
      duration: "2013-2017"
    },
    {
      degree: "Intermediate",
      institution: "Talents College of Science and Technology",
      duration: "2011-2013"
    }
  ]
};