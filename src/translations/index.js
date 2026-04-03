const translations = {
  en: {
    // Navbar
    nav: {
      about: "About",
      work: "Work",
      projects: "Projects",
      contact: "Contact",
    },

    // Hero
    hero: {
      greeting: "Hi, I'm",
      name: "Dhruv",
      subtitle:
        "Full-stack software engineer crafting production-ready web apps, ",
      subtitleBreak: "GenAI workflows, and 3D experiences.",
    },

    // About
    about: {
      subText: "Introduction",
      headText: "Overview.",
      description:
        "I'm a full-stack software engineer based in Paderborn, Germany, focused on building production-ready web applications and scalable services. At Semicolon Solution, I delivered 20+ secured REST APIs, introduced contract-based pull request testing, and used TDD to improve code coverage and post-deployment stability. I work across the MERN stack with tooling like Docker, Kubernetes, GitHub Actions, and Stripe, and I enjoy designing clean APIs, resilient backends, and smooth, responsive UIs. I'm currently pursuing an M.Sc. in Computer Science at Paderborn University and exploring GenAI workflows with Hugging Face, LangChain/LangGraph, and RAG to build data-driven, AI‑powered experiences.",
    },

    // Services
    services: [
      "Full-Stack Web Developer",
      "Backend & REST API Developer",
      "Cloud & DevOps (AWS, Docker, K8s)",
      "GenAI & LLM Integrations",
    ],

    // Experience
    experience: {
      subText: "What I have done so far",
      headText: "Education & Work Experience.",
    },

    experiences: [
      {
        title: "Bachelor in Computer Engineering",
        company_name: "Gujarat Technological University",
        date: "June 2020 - May 2024",
        points: [],
      },
      {
        title: "Full Stack Developer Intern",
        company_name: "Semicolon Solution",
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
        date: "April 2025 - Present",
        points: [],
      },
    ],

    // Works
    works: {
      subText: "My work",
      headText: "Projects.",
      description:
        "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
    },

    projects: [
      {
        name: "Vibe - Cloud Code Editor",
        description:
          "Built a full-stack cloud code editor with Next.js, TypeScript, Tailwind CSS, and MongoDB that enables 100% browser-based development using Monaco + WebContainer, GPT-4 code completion and chat, multi-framework project templates, RBAC with NextAuth, and real-time collaboration.",
      },
      {
        name: "Artify - 3D Product Customizer",
        description:
          "Executed a 3D product-based website in React using Three.js that lets users customize t-shirt color, logo, and texture in real time, powering 3D previews via Three.js and generating logos and textures with the OpenAI DALL·E API on top of a responsive React + Tailwind CSS UI.",
      },
      {
        name: "PDF-RAG",
        description:
          "Built a PDF question-answering web app with a Next.js/React/Tailwind CSS frontend and a Node.js/Express/LangChain/OpenAI backend so users can upload PDFs and ask natural-language questions. Designed an async RAG pipeline with BullMQ, Valkey/Redis, RecursiveCharacterTextSplitter, OpenAI embeddings, and Qdrant for reliable ingestion and low-latency semantic search over large documents.",
      },
      {
        name: "Ecommerce Platform",
        description:
          "Developed a full-stack ecommerce application with React, Node.js, Express, MongoDB, and Stripe, featuring user authentication, an admin dashboard, shopping cart and order management, and secure JWT + bcrypt + RBAC-protected APIs. Optimized MongoDB-backed endpoints and wired SendGrid email alerts, eliminating 70% of unauthorized hits and cutting product-fetch latency by 35%.",
      },
      {
        name: "House Marketplace",
        description:
          "Improved search with smarter indexing/aggregation and a microservices backend (auth, listings, payments), added Google Geocoding for accurate locations, and used webhooks for real-time property and message notifications.",
      },
      {
        name: "Daily NewsDoze",
        description:
          "Built a React 18 SPA with React Router v6 across multiple news categories, fully tested with RTL/Jest, and set up npm scripts for automatic gh-pages deploys (build, test, publish on every push) to speed up releases.",
      },
    ],

    // Contact
    contact: {
      subText: "Get in touch",
      headText: "Contact.",
      nameLabel: "Your Name",
      namePlaceholder: "What's your good name?",
      emailLabel: "Your email",
      emailPlaceholder: "What's your email address?",
      messageLabel: "Your Message",
      messagePlaceholder: "What would you like to say?",
      sending: "Sending...",
      send: "Send",
      successAlert:
        "Thank you. I will get back to you as soon as possible.",
      errorAlert: "Ahh, something went wrong.",
    },
  },

  de: {
    // Navbar
    nav: {
      about: "Über mich",
      work: "Erfahrung",
      projects: "Projekte",
      contact: "Kontakt",
    },

    // Hero
    hero: {
      greeting: "Hallo, ich bin",
      name: "Dhruv",
      subtitle:
        "Full-Stack-Softwareentwickler für produktionsreife Web-Apps, ",
      subtitleBreak: "GenAI-Workflows und 3D-Erlebnisse.",
    },

    // About
    about: {
      subText: "Einleitung",
      headText: "Überblick.",
      description:
        "Ich bin ein Full-Stack-Softwareentwickler mit Sitz in Paderborn, Deutschland, und konzentriere mich auf die Entwicklung produktionsreifer Webanwendungen und skalierbarer Dienste. Bei Semicolon Solution habe ich über 20 gesicherte REST-APIs bereitgestellt, vertragsbasierte Pull-Request-Tests eingeführt und TDD genutzt, um die Codeabdeckung und die Stabilität nach dem Deployment zu verbessern. Ich arbeite über den gesamten MERN-Stack mit Tools wie Docker, Kubernetes, GitHub Actions und Stripe und genieße es, saubere APIs, widerstandsfähige Backends und reibungslose, responsive UIs zu entwerfen. Derzeit verfolge ich meinen M.Sc. in Informatik an der Universität Paderborn und erforsche GenAI-Workflows mit Hugging Face, LangChain/LangGraph und RAG, um datengetriebene, KI-gestützte Anwendungen zu entwickeln.",
    },

    // Services
    services: [
      "Full-Stack-Webentwickler",
      "Backend- & REST-API-Entwickler",
      "Cloud & DevOps (AWS, Docker, K8s)",
      "GenAI- & LLM-Integrationen",
    ],

    // Experience
    experience: {
      subText: "Was ich bisher gemacht habe",
      headText: "Ausbildung & Berufserfahrung.",
    },

    experiences: [
      {
        title: "Bachelor in Informatik",
        company_name: "Gujarat Technological University",
        date: "Juni 2020 - Mai 2024",
        points: [],
      },
      {
        title: "Full-Stack-Entwickler Praktikant",
        company_name: "Semicolon Solution",
        date: "Jan. 2024 - Mai 2024",
        points: [
          "Über 20 REST-APIs in Node.js/Express für zentrale Produkt-Workflows bereitgestellt, mit JWT, RBAC, Schema-Validierung und Rate-Limiting.",
          "MongoDB-Abfragen mit Indizes, Paginierung und Response-Shaping optimiert, Payload-Größe reduziert und langsame Abfrage-Hotspots eliminiert.",
          "CI/CD-Pipelines mit GitHub Actions für automatisierte Tests und Deployments eingerichtet, Release-Zeit um 60 % verkürzt und Zuverlässigkeit verbessert.",
        ],
      },
      {
        title: "Junior-Softwareentwickler",
        company_name: "Semicolon Solution",
        date: "Juni 2024 - Feb. 2025",
        points: [
          "Vertragsbasierte Pull-Request-Tests implementiert und fokussierte Sprints orchestriert, QA-Probleme um 25 % reduziert.",
          "Dienste mit Docker containerisiert und über Kubernetes verwaltet, Dienstverfügbarkeit bei Updates um 50 % verbessert.",
          "TDD mit JUnit und Jest eingeführt, um die Codeabdeckung zu erhöhen, was zu einer 30%igen Verbesserung der Post-Deployment-Stabilität führte.",
          "Mit Product Ownern und QA in einer Agile/Scrum-Umgebung zusammengearbeitet, um neue Features termingerecht zu liefern.",
        ],
      },
      {
        title: "Master in Informatik",
        company_name: "Universität Paderborn",
        date: "April 2025 - Heute",
        points: [],
      },
    ],

    // Works
    works: {
      subText: "Meine Arbeit",
      headText: "Projekte.",
      description:
        "Die folgenden Projekte zeigen meine Fähigkeiten und Erfahrungen anhand realer Beispiele meiner Arbeit. Jedes Projekt ist kurz beschrieben mit Links zu Code-Repositories und Live-Demos. Sie spiegeln meine Fähigkeit wider, komplexe Probleme zu lösen, mit verschiedenen Technologien zu arbeiten und Projekte effektiv zu verwalten.",
    },

    projects: [
      {
        name: "Vibe - Cloud Code Editor",
        description:
          "Einen Full-Stack-Cloud-Code-Editor mit Next.js, TypeScript, Tailwind CSS und MongoDB entwickelt, der 100 % browserbasierte Entwicklung mit Monaco + WebContainer, GPT-4-Code-Vervollständigung und Chat, Multi-Framework-Projektvorlagen, RBAC mit NextAuth und Echtzeit-Zusammenarbeit ermöglicht.",
      },
      {
        name: "Artify - 3D-Produkt-Konfigurator",
        description:
          "Eine 3D-produktbasierte Website in React mit Three.js umgesetzt, die es Nutzern ermöglicht, T-Shirt-Farbe, Logo und Textur in Echtzeit anzupassen, 3D-Vorschauen über Three.js zu betreiben und Logos und Texturen mit der OpenAI DALL·E API auf einer responsiven React + Tailwind CSS UI zu generieren.",
      },
      {
        name: "PDF-RAG",
        description:
          "Eine PDF-Frage-Antwort-Web-App mit einem Next.js/React/Tailwind CSS-Frontend und einem Node.js/Express/LangChain/OpenAI-Backend entwickelt, damit Nutzer PDFs hochladen und natürlichsprachliche Fragen stellen können. Eine asynchrone RAG-Pipeline mit BullMQ, Valkey/Redis, RecursiveCharacterTextSplitter, OpenAI-Embeddings und Qdrant für zuverlässige Verarbeitung und latenzarme semantische Suche über große Dokumente entworfen.",
      },
      {
        name: "E-Commerce-Plattform",
        description:
          "Eine Full-Stack-E-Commerce-Anwendung mit React, Node.js, Express, MongoDB und Stripe entwickelt, mit Benutzerauthentifizierung, Admin-Dashboard, Warenkorb- und Bestellverwaltung sowie sicheren JWT + bcrypt + RBAC-geschützten APIs. MongoDB-gestützte Endpunkte optimiert und SendGrid-E-Mail-Benachrichtigungen integriert, 70 % unautorisierter Zugriffe eliminiert und Produkt-Abruf-Latenz um 35 % reduziert.",
      },
      {
        name: "Immobilienmarktplatz",
        description:
          "Suche mit intelligenterer Indizierung/Aggregation und einem Microservices-Backend (Auth, Inserate, Zahlungen) verbessert, Google Geocoding für genaue Standorte hinzugefügt und Webhooks für Echtzeit-Immobilien- und Nachrichtenbenachrichtigungen verwendet.",
      },
      {
        name: "Daily NewsDoze",
        description:
          "Eine React 18 SPA mit React Router v6 über mehrere Nachrichtenkategorien erstellt, vollständig mit RTL/Jest getestet und npm-Skripte für automatische gh-pages-Deploys (Build, Test, Veröffentlichung bei jedem Push) eingerichtet, um Releases zu beschleunigen.",
      },
    ],

    // Contact
    contact: {
      subText: "Kontakt aufnehmen",
      headText: "Kontakt.",
      nameLabel: "Ihr Name",
      namePlaceholder: "Wie heißen Sie?",
      emailLabel: "Ihre E-Mail",
      emailPlaceholder: "Wie lautet Ihre E-Mail-Adresse?",
      messageLabel: "Ihre Nachricht",
      messagePlaceholder: "Was möchten Sie sagen?",
      sending: "Wird gesendet...",
      send: "Senden",
      successAlert:
        "Vielen Dank. Ich werde mich so schnell wie möglich bei Ihnen melden.",
      errorAlert: "Ups, etwas ist schiefgelaufen.",
    },
  },
};

export default translations;
