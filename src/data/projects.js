export const FEATURED_SLUGS = ['sepsis-readmission', 'nail-salon', 'awareai'];

export const projectsData = [
  {
    "year": "2026",
    "accentColor": "#1e40af",
    "accentColorDark": "#1e3a8a",
    "sortOrder": 12,
    "slug": "sepsis-readmission",
    "shortTitle": "Sepsis Readmission Prevention",
    "title": "Sepsis Readmission Prevention (In Progress) - PeaceHealth Capstone",
    "tagline": "A mobile-first clinical support app helping sepsis survivors and caregivers monitor recovery risk, recognize warning signs, and take timely action after discharge.",
    "problem": "Sepsis survivors face a high-risk post-discharge window, but existing tools are fragmented and clinically dense. Patients and caregivers struggle to recognize warning signs early or know when to escalate, increasing avoidable readmissions.",
    "solution": "Our goal was to build 1 accessible platform combining daily risk check-ins, symptom history, and 6 education modules with quizzes to support post-discharge monitoring for non-clinical users. As a team, we defined the feature roadmap, designed navigation and question flow, and iterated with sponsor feedback to balance clinical relevance with simplicity. We validated assumptions through rapid prototyping and usability testing. I designed a multi-tier risk engine using vitals scoring, pattern detection, and clinical modifiers to provide real-time triage guidance with emergency escalation, built an adaptive check-in flow with context-driven branching to reduce input burden, shipped 5 authenticated API routes for onboarding, check-ins, and reminders, engineered schema-safe API pipelines to reduce invalid writes, set up Supabase Auth and Postgres, and converted Figma designs into production UI. Our team also built a comprehensive automated test suite covering risk logic, API routes, and UI state transitions.",
    "impact": "The mobile-first app gives survivors a structured daily habit to monitor symptoms and catch warning signs early, directly targeting the high-risk 30 to 90 day post-discharge window where readmission rates are highest. We are working together with our sponsor Dr. Jay Keith, a physician with Sound Physicians practicing at one of Washington's largest hospital systems, to pursue FDA approval, an agreement to begin testing on real patients, and plans to publish a peer-reviewed paper on the system's clinical methodology.",
    "technologies": [
      "Next.js 15 (App Router)",
      "TypeScript",
      "React",
      "Supabase Auth",
      "Supabase Postgres",
      "Tailwind CSS",
      "Vitest",
      "Vercel",
      "REST APIs",
      "Figma"
    ],
    "images": [
      "/sepsis-readmission-home.png",
      "/sepsis-readmission-space-screen.png",
      "/sepsis-readmission-question.png",
      "/sepsis-readmission-result.png"
    ],
    "links": [
      {
        "label": "Website",
        "url": "https://sepsis-readmission-prevention.vercel.app/",
        "icon": "live"
      },
      {
        "label": "Video Demo",
        "url": "https://youtube.com/watch?si=lhgdEpjlTz5XW-Xb&v=jsSByGFs7TU&feature=youtu.be",
        "icon": "video"
      }
    ]
  },
  {
    "year": "2025",
    "accentColor": "#be185d",
    "accentColorDark": "#9d174d",
    "sortOrder": 9,
    "slug": "nail-salon",
    "shortTitle": "Nail Salon Booking Platform",
    "title": "Nail Salon Booking Platform (Client Project)",
    "tagline": "A full-stack scheduling platform that modernizes appointment booking for nail salons.",
    "problem": "Manual scheduling often leads to double bookings, inefficiencies, and poor customer experience for small service-based businesses.",
    "solution": "Built a client-requested full-stack booking platform for the local business Happy Nails, enabling technicians to manage 10+ services and 100+ monthly appointments in real time. The Spring Boot backend handles 6 unique entities, complex scheduling logic, and strong database integrity to prevent real-time scheduling conflicts, while the responsive React frontend provides instant booking confirmations and a smooth booking experience.",
    "impact": "The client reported that the system reduced manual scheduling effort by approximately 70%, allowing technicians to focus more on service quality and customer satisfaction.",
    "technologies": [
      "Spring Boot",
      "TypeScript",
      "React",
      "Bootstrap",
      "Java",
      "PostgreSQL",
      "Gradle",
      "Postman",
      "Git"
    ],
    "images": [
      "/select-services-nails.png",
      "/select-times-nails.png",
      "/contact-info-nails.png"
    ]
  },
  {
    "year": "2026",
    "accentColor": "#059669",
    "accentColorDark": "#047857",
    "sortOrder": 11,
    "slug": "awareai",
    "shortTitle": "AwareAI",
    "title": "AwareAI: AI Environmental Impact Tracker (WINFO 2026)",
    "tagline": "A privacy-first Chrome extension that estimates and visualizes the real-time water consumption of AI interactions across major platforms.",
    "problem": "AI adoption is accelerating, yet most users remain unaware of its environmental footprint. Each prompt to systems like ChatGPT, Claude, or Gemini is processed in large-scale data centers that rely on water-intensive cooling, an invisible cost that compounds as AI usage grows globally.",
    "solution": "Developed a Chrome extension that estimates water usage in real time using 2026 energy benchmarks from Google's Environmental Report and peer-reviewed academic research. A floating widget visualizes both personal and collective impact using a 6-tier scale (droplets to oceans). Calculations run client-side with sub-10ms latency, requiring no accounts or personally identifiable information. All user data is kept local, with only anonymous global totals aggregated via Firebase's REST API.",
    "impact": "During live demos, the extension processed 1,000+ prompts across 6 major AI platforms with no performance degradation, demonstrating reliable real-time estimation at scale. The project was showcased for Best Implementation at WINFO 2026, where it stood out for combining environmental awareness with a fully privacy-first architecture.",
    "technologies": [
      "JavaScript",
      "Chrome Extensions API",
      "Manifest V3",
      "Firebase Firestore",
      "REST APIs",
      "Chrome Storage API",
      "Content Scripts",
      "Service Workers"
    ],
    "images": [
      "/aware-ai-gpt.png",
      "/aware-ai-info.png",
      "/awareai-firebase.png"
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/clamm92/ai-environmental-tracker",
        "icon": "github"
      },
      {
        "label": "Video Demo",
        "url": "https://drive.google.com/file/d/1exTDF3RUaQ5wnZpP4sUgbxY9Qa5wvw1I/view?usp=sharing",
        "icon": "video"
      }
    ]
  },
  {
    "year": "2025",
    "accentColor": "#9333ea",
    "accentColorDark": "#7e22ce",
    "sortOrder": 7,
    "slug": "viola",
    "shortTitle": "Viola",
    "title": "Viola: Advanced K-in-a-Row Game-Playing Agent",
    "tagline": "An intelligent game-playing agent that combines adversarial search with LLM-powered conversational features for strategic board games.",
    "problem": "Competitive game-playing agents must balance search efficiency with strategic depth. Naive minimax approaches scale poorly in large search spaces, and adding meaningful, context-aware agent interactions increases system complexity.",
    "solution": "Built Viola, a high-performance K-in-a-Row game-playing agent using minimax with alpha-beta pruning, Zobrist hashing for transposition table caching, and move ordering optimization. Integrated the Google Gemini API to generate persona-driven, musical-themed dialogue that explains strategic decisions and summarizes gameplay, combining strong algorithmic performance with engaging interaction.",
    "impact": "Reduced move computation time from over 24 seconds to 0.1 seconds in 5-in-a-Row games through intelligent caching, a 240x speedup that made real-time competitive play viable at full search depth.",
    "technologies": [
      "Python",
      "Minimax Algorithm",
      "Alpha-Beta Pruning",
      "Zobrist Hashing",
      "Google Gemini API",
      "Adversarial Search",
      "Transposition Tables"
    ],
    "images": [
      {
        "src": "/viola-transcript.png",
        "externalLink": "https://drive.google.com/file/d/12rSB-tPEBykYAf8zznsytAMSes1QnLf7/view?usp=sharing"
      },
      {
        "src": "/viola-zobrist.png",
        "externalLink": "https://drive.google.com/file/d/1f8kocjaA0wB3Y3C9bl9khx0-dWJlUk74/view?usp=sharing"
      }
    ]
  },
  {
    "year": "2026",
    "accentColor": "#db2777",
    "accentColorDark": "#be185d",
    "sortOrder": 10,
    "slug": "sex-ed-center",
    "shortTitle": "Sex-Ed Center",
    "title": "Sex-Ed Center",
    "tagline": "A stigma-free sexual health education platform for U.S. high school students.",
    "problem": "Without a standardized curriculum, U.S. adolescents are left to fill critical sexual health knowledge gaps with peer advice and social media misinformation, perpetuating stigma and poor health literacy.",
    "solution": "Built a fully deployed, stigma-free web platform delivering accurate, age-appropriate sexual health content across 6 interactive learning modules. Features include a mastery-tracked quiz system with adaptive scoring, a filterable flashcard deck sourced from credible health references, daily reflection prompts with streak tracking, and a keyword-searchable glossary. Supports both anonymous and authenticated users via Google OAuth, ensuring zero barriers to access. Deployed to production on Firebase Hosting with secure Firestore rules isolating all user data.",
    "impact": "Addresses UN SDG 4 (Quality Education) and SDG 3 (Good Health and Well-Being) by replacing misinformation-driven peer advice with evidence-based content. The anonymous access model ensures the platform reaches users regardless of account barriers, maximizing accessibility for the target demographic.",
    "technologies": [
      "React",
      "Vite",
      "Firebase Auth",
      "Firebase Firestore",
      "Firebase Hosting",
      "Bootstrap",
      "React Router",
      "Vitest",
      "ESLint"
    ],
    "images": [
      "/sex-ed-center-profile.png",
      "/sex-ed-center-overview.png",
      "/sex-ed-center-quiz.png"
    ],
    "links": [
      {
        "label": "Website",
        "url": "https://kitty-kats.web.app/",
        "icon": "live"
      }
    ]
  },
  {
    "year": "2025",
    "accentColor": "#16a34a",
    "accentColorDark": "#15803d",
    "sortOrder": 6,
    "slug": "ecotrack",
    "shortTitle": "EcoTrack",
    "title": "EcoTrack",
    "tagline": "A gamified waste reduction web app that helps users track, visualize, and improve their environmental impact.",
    "problem": "Many people generate waste without understanding its environmental impact or how to improve their habits. Existing tools often lack personalization, feel tedious to use, or introduce cost barriers.",
    "solution": "Built a gamified waste reduction web app where users log daily waste activities, earn points for sustainable actions, and visualize progress through interactive charts. A community leaderboard adds motivation through friendly competition, while personalized insights help users understand and improve their habits.",
    "impact": "Transformed an often tedious behavior-change task into an engaging, rewarding experience with zero cost barriers, addressing a gap left by existing tools that are either paywalled or lack meaningful personalization.",
    "technologies": [
      "React",
      "Vite",
      "Bootstrap",
      "Chart.js",
      "Firebase Auth",
      "Firebase Realtime Database",
      "Git",
      "ESLint",
      "Node.js",
      "date-fns"
    ],
    "images": [
      "/ecotrack-home.png",
      "/ecotrack-log.png",
      "/ecotrack-visualizations.png"
    ],
    "links": [
      {
        "label": "Website",
        "url": "https://group-project-mayaoden.web.app/",
        "icon": "live"
      }
    ]
  },
  {
    "year": "2024",
    "accentColor": "#ea580c",
    "accentColorDark": "#c2410c",
    "sortOrder": 3,
    "slug": "restaurant-platform",
    "shortTitle": "Restaurant Management Platform",
    "title": "Restaurant Client-Server Management Platform",
    "tagline": "A full-stack web application designed to manage complex client-server relationships.",
    "problem": "Managing client-server data across multiple users and entities can become difficult without a clear architecture.",
    "solution": "Implemented a modular RESTful backend paired with a clean frontend interface. A carefully designed MongoDB schema ensures scalability, while structured APIs support full CRUD operations across multiple users and entities.",
    "impact": "Demonstrated clean separation of concerns across a multi-entity system, serving as a foundation for understanding scalable full-stack architecture patterns used in larger production applications.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
      "Postman"
    ],
    "images": [
      "/restaurant-dashboard.png",
      "/restaurant-not-logged.png"
    ]
  },
  {
    "year": "2025",
    "accentColor": "#7c3aed",
    "accentColorDark": "#6d28d9",
    "sortOrder": 8,
    "slug": "commute-assistant",
    "shortTitle": "Zero-Touch Commute Assistant",
    "title": "Zero-Touch Commute Assistant (DubHacks 2025)",
    "tagline": "A serverless web app that automatically adds commute-based reminders to users' calendars.",
    "problem": "Manually planning departure times is error-prone and inefficient, especially when transit delays and real-time conditions are involved.",
    "solution": "Built during a 24-hour hackathon, this serverless app uses React and Node.js to automatically determine optimal departure times and add reminders directly to users' calendars. Engineered an event-driven architecture using AWS Lambda and EventBridge to trigger real-time alerts, integrating AWS Bedrock and the OneBusAway API for transit-aware scheduling.",
    "impact": "Improved commute timing accuracy by approximately 30% and automated 100% of reminders for synced transit events, eliminating manual departure time estimation as a source of error entirely.",
    "technologies": [
      "React",
      "Node.js",
      "Express",
      "AWS Lambda",
      "EventBridge",
      "DynamoDB",
      "Bedrock",
      "OneBusAway API",
      "Google Calendar API"
    ]
  },
  {
    "year": "2024",
    "accentColor": "#0891b2",
    "accentColorDark": "#0e7490",
    "sortOrder": 2,
    "slug": "vaccine-reservation",
    "shortTitle": "Vaccine Reservation System",
    "title": "Vaccine Appointment Reservation System",
    "tagline": "A secure and scalable appointment reservation system for managing vaccine scheduling.",
    "problem": "Healthcare providers struggled with inefficient scheduling systems during the COVID-19 pandemic.",
    "solution": "Engineered a robust SQL schema managing 5,000+ patient records with atomic transactions via JDBC. Implemented secure user authentication with password salting and hashing to meet HIPAA compliance standards. Built Java CLI tools with optimized SQL JOIN queries to enable direct database management for patients throughout the full appointment reservation lifecycle.",
    "impact": "Delivered a secure, scalable scheduling system directly applicable to the bottlenecks experienced during the COVID-19 pandemic, with authentication practices meeting production security standards.",
    "technologies": [
      "Java",
      "JDBC",
      "SQLite",
      "Aurora SQL",
      "IntelliJ IDEA"
    ],
    "images": [
      "/vaccine-cli-options.png",
      "/vaccine-db-schema.png"
    ]
  },
  {
    "year": "2024",
    "accentColor": "#2563eb",
    "accentColorDark": "#1d4ed8",
    "sortOrder": 3,
    "slug": "geo-economic-mapping",
    "shortTitle": "Geo-Economic Mapping",
    "title": "Geo-Economic Mapping of Educational Access",
    "tagline": "An interactive data visualization analyzing income and education access in Washington State.",
    "problem": "Educational equity is often discussed in funding terms rather than geographic availability.",
    "solution": "Co-developed a data pipeline merging geospatial school data with census income metrics. Produced a choropleth map visualizing school availability and income distribution across Washington State.",
    "impact": "Revealed strong correlations between income and school availability across Washington State, reframing educational equity from a funding conversation into a geographic access problem backed by data.",
    "technologies": [
      "R",
      "dplyr",
      "ggplot2",
      "plotly",
      "ArcGIS",
      "Washington OSPI Data"
    ],
    "images": [
      {
        "src": "/washington-state-income.png",
        "externalLink": "https://drive.google.com/file/d/14yDqNR9J-gf0Ht6t_39Mx-g3iTlPCy3E/view?usp=sharing"
      }
    ]
  },
  {
    "year": "2024",
    "accentColor": "#0d9488",
    "accentColorDark": "#0f766e",
    "sortOrder": 4,
    "slug": "seattle-homeless",
    "shortTitle": "Seattle Homeless Platform",
    "title": "Seattle Homeless Community Platform (WINFO 2025)",
    "tagline": "A community-driven platform connecting the homeless population with critical resources.",
    "problem": "Seattle lacks centralized digital spaces for storytelling, awareness, and resource sharing.",
    "solution": "Built a community-driven platform providing storytelling, community updates, and a resource directory in an accessible, mobile-friendly design, developed during a hackathon to foster empathy and action around homelessness in Seattle.",
    "impact": "Addressed a gap in Seattle's digital infrastructure for the homeless population by centralizing storytelling and resource access in one place, lowering the barrier for community members to find and share critical information.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "VS Code"
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/owenwon/seattlehomelessplatform",
        "icon": "github"
      }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.slug === slug) ?? null;
}

export function getSortedProjects() {
  return [...projectsData].sort((a, b) => b.sortOrder - a.sortOrder);
}

export function getProjectCoverImage(project) {
  if (!project.images?.length) return null;
  const image = project.images[0];
  return typeof image === 'object' ? image.src : image;
}

export function getFeaturedProjects() {
  return FEATURED_SLUGS.map((slug) => getProjectBySlug(slug)).filter(Boolean);
}
