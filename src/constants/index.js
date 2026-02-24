import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  threejs1,
  vibecode,
  house,
  newz,
  ecommerce,
  pdfRag,
} from "../assets/index.js";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Backend & REST API Developer",
    icon: backend,
  },
  {
    title: "Cloud & DevOps (AWS, Docker, K8s)",
    icon: mobile,
  },
  {
    title: "GenAI & LLM Integrations",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Bacholer in Computer Engineering",
    company_name: "Gujarat Technological University",
    icon: undefined,
    iconBg: "#383E56",
    date: "June 2020 - May 2024",
    points: [],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Semicolon Solution",
    icon: undefined,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - May 2024",
    points: [
      "Delivered 20+ REST APIs in Node.js/Express for core product workflows, implementing JWT, RBAC, schema validation, and rate limiting.",
      "Optimized MongoDB queries with indexes, pagination, and response shaping, reducing payload size and eliminating slow query hotspots.",
      "Established CI/CD pipelines with GitHub Actions for automated testing and deployments, cutting release time by 60% and improving reliability.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Semicolon Solution",
    icon: undefined,
    iconBg: "#383E56",
    date: "June 2024 - Feb 2025",
    points: [
      "Implemented contract-based pull request testing and orchestrated focused sprints, decreasing QA issues by 25%.",
      "Containerized services with Docker and managed them via Kubernetes, enhancing service availability by 50% during updates.",
      "Introduced TDD with JUnit and Jest to raise code coverage, leading to a 30% improvement in post-deployment stability.",
      "Collaborated with product owners and QA in an Agile/Scrum environment to deliver new features on schedule.",
    ],
  },
  {
    title: "Master in Computer Science",
    company_name: "Paderborn University",
    icon: undefined,
    iconBg: "#E6DEDD",
    date: "April 2025 - Present",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Vibe - Cloud Code Editor",
    description:
      "Built a full-stack cloud code editor with Next.js, TypeScript, Tailwind CSS, and MongoDB that enables 100% browser-based development using Monaco + WebContainer, GPT-4 code completion and chat, multi-framework project templates, RBAC with NextAuth, and real-time collaboration.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "xterm",
        color: "pink-text-gradient",
      },
    ],
    image: vibecode,
    source_code_link: "https://github.com/dhruv851/vibe-editor",
  },
  {
    name: "Artify - 3D Product Customizer",
    description:
      "Executed a 3D product-based website in React using Three.js that lets users customize t-shirt color, logo, and texture in real time, powering 3D previews via Three.js and generating logos and textures with the OpenAI DALL·E API on top of a responsive React + Tailwind CSS UI.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "valtio",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
    ],
    image: threejs1,
    source_code_link: "https://github.com/dhruv851/Artify_ThreeJS",
  },

  {
    name: "PDF-RAG",
    description:
      "Built a PDF question-answering web app with a Next.js/React/Tailwind CSS frontend and a Node.js/Express/LangChain/OpenAI backend so users can upload PDFs and ask natural-language questions. Designed an async RAG pipeline with BullMQ, Valkey/Redis, RecursiveCharacterTextSplitter, OpenAI embeddings, and Qdrant for reliable ingestion and low-latency semantic search over large documents.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
      },
      {
        name: "qdrant",
        color: "blue-text-gradient",
      },
      {
        name: "bullmq",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "blue-text-gradient",
      },
    ],
    image: pdfRag,
    source_code_link: "https://github.com/dhruv851/PDF_RAG",
  },

  {
    name: "Ecommerce Platform",
    description:
      "Developed a full-stack ecommerce application with React, Node.js, Express, MongoDB, and Stripe, featuring user authentication, an admin dashboard, shopping cart and order management, and secure JWT + bcrypt + RBAC-protected APIs. Optimized MongoDB-backed endpoints and wired SendGrid email alerts, eliminating 70% of unauthorized hits and cutting product-fetch latency by 35%.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/dhruv851/Ecommerce-Platform",
  },

  {
    name: "House Marketplace",
    description:
      "Improved search with smarter indexing/aggregation and a microservices backend (auth, listings, payments), added Google Geocoding for accurate locations, and used webhooks for real-time property and message notifications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: house,
    source_code_link: "https://github.com/dhruv851/House_marketplace",
  },

  {
    name: "Daily NewsDoze",
    description:
      "Built a React 18 SPA with React Router v6 across multiple news categories, fully tested with RTL/Jest, and set up npm scripts for automatic gh-pages deploys (build, test, publish on every push) to speed up releases.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: newz,
    source_code_link: "https://github.com/dhruv851/Daily-NewsDoze",
  },
];

export { services, technologies, experiences, testimonials, projects };
