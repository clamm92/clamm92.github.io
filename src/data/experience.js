export const experienceData = [
  {
    slug: "uw-informatics",
    section: "education",
    type: "education",
    status: "current",
    sortOrder: 20,
    dateStart: "2023-09",

    title: "Bachelor's in Informatics",
    organization: "University of Washington",
    link: "https://ischool.uw.edu/programs/informatics",
    location: "Seattle, WA",
    dates: "Sep 2023 – June 2027",
    tagline: "Full-stack development with a focus on UX design and product management.",
    accentColor: "#4b2e83",

    preview: {
      tags: ["Full-stack", "UX Design", "Product management"],
    },

    contentBlocks: [
      {
        type: "overview",
        text:
          "Pursuing a Bachelor's in Informatics at the UW Information School, with coursework spanning software engineering, UX design, product management, and data science. Fourth-year student actively seeking full-time software roles after graduation.",
      },
      {
        type: "bullets",
        title: "Highlights",
        items: [
          "PeaceHealth capstone: mobile-first sepsis readmission prevention app with a clinical sponsor",
          "Coursework across frontend, backend, and database systems with team-based software projects",
          "WINFO 2026: built AwareAI, a privacy-first Chrome extension for AI environmental impact tracking",
        ],
      },
      {
        type: "skills",
        title: "Focus areas",
        items: [
          "Full-stack development",
          "UX Design",
          "Product management",
          "Data science",
        ],
      },
    ],
  },
  {
    slug: "mountain-view-high-school",
    section: "education",
    type: "education",
    status: "past",
    sortOrder: 10,
    dateStart: "2021-09",

    title: "High School Diploma",
    organization: "Mountain View High School",
    location: "Vancouver, WA",
    dates: "2021 – 2023",
    tagline: "Graduated while balancing school with my first job and long-term fitness goals.",
    accentColor: "#2563eb",

    preview: {
      tags: ["STEM interest", "Work ethic"],
    },

    contentBlocks: [
      {
        type: "overview",
        text:
          "Completed high school in Vancouver, WA while working part-time at Fred Meyer and training consistently in weightlifting. Built early discipline around time management that carried into college and internships.",
      },
      {
        type: "bullets",
        title: "Highlights",
        items: [
          "Balanced 20+ hour work weeks with coursework during junior and senior year",
          "Reached my high school leaderboard for squats and cleans through structured training",
          "Developed an early interest in technology that led into Informatics at UW",
        ],
      },
    ],
  },
  {
    slug: "ibm-fall-2026",
    section: "professional",
    type: "internship",
    status: "incoming",
    sortOrder: 40,
    dateStart: "2026-10",

    title: "Application Developer Intern",
    organization: "IBM",
    link: "https://www.ibm.com/",
    location: "Baton Rouge, LA",
    dates: "Oct 2026 – Dec 2026",
    tagline: "Incoming application developer internship.",
    accentColor: "#0f62fe",

    preview: {
      tags: ["Application development", "Incoming"],
    },

    contentBlocks: [
      {
        type: "overview",
        text:
          "Starting as an Application Developer Intern with IBM from October through December 2026. Details on team and project focus will be updated as the role begins.",
      },
    ],
  },
  {
    slug: "applied-materials",
    section: "professional",
    type: "internship",
    status: "current",
    sortOrder: 35,
    dateStart: "2026-06",

    title: "Software Engineering Intern",
    organization: "Applied Materials",
    link: "https://www.appliedmaterials.com/",
    location: "Santa Clara, CA",
    dates: "Jun 2026 – Sep 2026",
    tagline:
      "Built a production manufacturing tool from a 35-page systems spec, end-to-end.",
    accentColor: "#00629b",

    preview: {
      tags: ["Java", "React", "Spring Boot"],
    },

    contentBlocks: [
      {
        type: "overview",
        text:
          "Spent the summer as a Software Engineering Intern in the semiconductor industry, building a full-stack manufacturing tool from a 35-page systems requirements spec. Owned the project end-to-end, translating ambiguous hardware requirements into a phased software roadmap, shipping a production tool used daily by lab engineers, and presenting the finished product to Applied Materials executive leadership.",
      },
      {
        type: "bullets",
        title: "What I did",
        items: [
          "Translated a 35-page systems requirements spec (145 requirements, 22 features) into a phased software architecture and delivery roadmap (P0 through P3), resolving conflicting requirement definitions through conversations with systems engineers and on-site lab visits",
          "Built a full-stack tool end-to-end using React, TypeScript, Java, Spring Boot, and PostgreSQL, shipping complete vertical slices from UI to API to database and backing the app with a 2,000+ test suite through test-driven development",
          "Containerized the application with Docker and deployed it on Kubernetes, enabling automated recovery and reliable daily use by 30+ lab engineers",
          "Built a retrieval-augmented generation pipeline and an MCP server exposing CRUD tools over the app's REST API, powering an in-app chatbot that resolves natural language queries in seconds",
        ],
      },
      {
        type: "text",
        title: "Leadership & problem solving",
        text:
          "Worked across a wide range of stakeholders, meeting weekly with systems engineers and my manager to weigh feature scope and priority tradeoffs, and iterating biweekly with engineering teams in Taiwan and India to align on architecture and algorithm decisions. Reviewed other interns' designs and projects to find ways our work could connect, which led directly to building an MCP server so my application's data could be read and edited by multiple external clients, not just my own frontend.",
      },
      {
        type: "text",
        title: "Impact & takeaways",
        text:
          "Presented the finished tool to 200+ attendees, including the company's CEO, at the internship's capstone showcase. The tool moved beyond the demo into real daily use: 30+ lab engineers now rely on it directly, and the in-app chatbot resolves natural language queries in seconds, noticeably quicker than digging through the tool manually. The internship pushed me past pure coding into product thinking: understanding who a tool is actually for, and building something people choose to rely on.",
      },
      {
        type: "skills",
        title: "Skills",
        items: [
          "Java",
          "React",
          "Spring Boot",
          "PostgreSQL",
          "RAG",
          "MCP",
          "Docker/Kubernetes",
        ],
      },
    ],
  },
  {
    slug: "coding-with-kids",
    section: "professional",
    type: "work",
    status: "past",
    sortOrder: 25,
    dateStart: "2025-05",

    title: "Coding Instructor",
    organization: "Coding with Kids",
    link: "https://www.codingwithkids.com/",
    location: "Portland, OR",
    dates: "May 2025 – Sep 2025",
    tagline: "Taught 120+ students across 12 weeks of coding camps and classes.",
    accentColor: "#9333ea",

    preview: {
      tags: ["Python", "Java", "Teaching"],
    },

    contentBlocks: [
      {
        type: "gallery",
        title: "Photos",
        images: ["/cwk-logo.png", "/robotics-cwk.jpg"],
      },
      {
        type: "overview",
        text:
          "I taught weekly coding camps and classes to students ages 5-18, primarily working with middle and high school students learning programming fundamentals and applied software development. Over the course of the summer, I instructed 120+ students across 12 weeks, leading both beginner and advanced cohorts.",
      },
      {
        type: "bullets",
        title: "What I did",
        items: [
          "Designed and taught lessons covering Python, Java, HTML/CSS/JavaScript, TCP/IP fundamentals, APIs, object-oriented programming, Scratch, and robotics",
          "Led Monday-Friday coding camps (6 hours/day) requiring sustained engagement, adaptability, and energy",
          "Guided advanced students through collaborative team projects using Replit and VS Code to build games and web applications",
          "Facilitated individual Scratch and robotics projects for younger students, adapting instruction to diverse learning styles",
        ],
      },
      {
        type: "text",
        title: "Leadership & problem solving",
        text:
          "Worked closely with parents by writing detailed student reports, communicating progress, addressing individual learning needs, and troubleshooting challenges such as WiFi failures or offline instruction. Created backup lesson plans and offline activities to ensure consistent learning under constraints.",
      },
      {
        type: "text",
        title: "Impact & takeaways",
        text:
          "Maintained a 4.8/5.0 instructor rating while helping students grow from writing their first lines of code to confidently presenting final projects. Developed strong leadership, communication, and technical teaching skills while reinforcing my passion for making learning accessible and engaging.",
      },
      {
        type: "skills",
        title: "Skills",
        items: ["Python", "Java", "JavaScript", "Teaching", "Leadership"],
      },
    ],
  },
  {
    slug: "fred-meyer",
    section: "professional",
    type: "work",
    status: "past",
    sortOrder: 15,
    dateStart: "2021-09",

    title: "Front-End Employee",
    organization: "Fred Meyer",
    link: "https://www.fredmeyer.com/",
    location: "Vancouver, WA",
    dates: "Sep 2021 – May 2023",
    tagline: "Customer-facing retail role during high school and early college.",
    accentColor: "#dc2626",

    preview: {
      tags: ["Customer service", "Teamwork"],
    },

    contentBlocks: [
      {
        type: "gallery",
        title: "Photos",
        images: ["/fred-meyer.jpg", "/fred-meyer-stands.jpg"],
      },
      {
        type: "overview",
        text:
          "Worked in a fast-paced retail environment supporting 1,000+ customers daily. While operational in nature, the role required composure under pressure, clear communication, and strong teamwork.",
      },
      {
        type: "bullets",
        title: "What I did",
        items: [
          "Provided customer service through grocery bagging, carryouts, cart management, and front-of-store maintenance",
          "Responded to supervisor requests including cleaning floors and restrooms, restocking supplies, trash removal, and vacuuming common areas",
          "Handled direct customer complaints and urgent requests, learning to prioritize tasks calmly and communicate expectations clearly",
        ],
      },
      {
        type: "text",
        title: "Leadership & problem solving",
        text:
          "Regularly worked 20-25 hours per week while balancing school and often took on extra shifts when short-staffed. As a parcel/cart attendant, navigated busy parking lots safely while keeping store entryways organized and stocked.",
      },
      {
        type: "text",
        title: "Impact & takeaways",
        text:
          "This role strengthened my reliability, work ethic, and ability to stay calm and effective in high-pressure environments, skills that translate directly to collaborative engineering teams.",
      },
      {
        type: "skills",
        title: "Skills",
        items: [
          "Customer Service",
          "Communication",
          "Teamwork",
          "Time Management",
          "Problem Solving",
        ],
      },
    ],
  },
];

export function getExperienceBySlug(slug) {
  return experienceData.find((entry) => entry.slug === slug) ?? null;
}
