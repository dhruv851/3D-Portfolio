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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Bug Fixing",
    icon: backend,
  },
  {
    title: "Website Design",
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
    company_name: "",
    icon: undefined,
    iconBg: "#383E56",
    date: "June 2020 - May 2024",
    points: [],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "",
    icon: undefined,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - May 2024",
    points: [
      "Built REST APIs and secured them with JWT, role-based access, and rate limiting to keep data safe and reliable.",
      "Deployed and tuned MERN apps end to end, making pages load faster and improving the user experience.",
      "Wrote solid unit and integration tests so the team could ship confidently and catch major issues before production.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "",
    icon: undefined,
    iconBg: "#383E56",
    date: "June 2024 - Feb 2025",
    points: [
      "Increased test coverage and cleaned up the codebase, preventing edge-case bugs from reaching QA.",
      "Introduced contract-based PR testing and ran focused sprints, keeping releases on schedule and reducing QA issues.",
      "Wrote clear documentation and set up modern tooling, making onboarding faster and smoother.",
    ],
  },
  {
    title: "Master in Computer Science",
    company_name: "",
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
      "Built a modern cloud-based code editor using Next.js, TypeScript, and MongoDB that enables browser-based development with Monaco Editor, WebContainer API for live previews, OpenAI GPT-4 integration for AI code assistance, multi-framework template support, real-time collaboration, project management dashboard, and intelligent file management.",
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
        name: "prisma and mongodb",
        color: "green-text-gradient",
      },
      {
        name: "xterm",
        color: "pink-text-gradient",
      },
    ],
    image: vibecode,
    source_code_link: "https://github.com/dhruv851/Daily-NewsDoze",
  },
  {
    name: "Artify - 3D Product",
    description:
      "Created a full-stack web application for designing t-shirts in real time in 3D using AI-generated design. Employed interactive rendering in 3D using Three.js, OpenAI DALL·E API to create images, and responsive UI constructed using React and Tailwind CSS. Managed app state using Valtio and created smooth animations using Framer Motion.",

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
    source_code_link: "https://github.com/dhruv851/Daily-NewsDoze",
  },

  {
    name: "Ecommerce Platform",
    description:
      "Developed a complete full-stack ecommerce web application using Node.js, Express.js, MongoDB, and React.js featuring user registration/authentication, admin dashboard for product and user management, shopping cart functionality, order processing, and payment integration. Implemented secure JWT authentication, RESTful API architecture, database design, responsive React UI with API and hooks.",

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
