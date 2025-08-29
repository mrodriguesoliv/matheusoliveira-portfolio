import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Matheus Oliveira  — Full-Stack Developer",
  author: "Matheus Oliveira",
  description:
    "Software Engineer based in Sertãozinho, SP. I specialize in full stack web application development and maintenance.",
  lang: "en",
  siteLogo: "/Matheus Oliveira-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/mathsrodrigues/" },
    { text: "Github", href: "https://github.com/mrodriguesoliv" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://matheus-oliveira.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Matheus Oliveira",
    specialty: "Full-Stack Developer",
    summary:
      "Developer based in Sertãozinho, SP. I specialize in full-stack web application development and maintenance.",
    email: "mrodriguesoliv@hotmail.com",
  },
  experience: [
    {
      company: "Mr. Turing - AI Research and Solutions",
      position: "Full-Stack Developer",
      startDate: "Apr 2024",
      endDate: "Present",
      summary: [
        "Backend development with Node.js (TypeScript) and Python (Django, Flask, FastAPI)",
        "Integration of solutions using OpenAI and Gemini APIs.",
        "Creation of interactive web applications using React, NextJS, Angular.",
        "Monitoring of QA and production deployments, with integration with CI/CD pipelines.",
        "Clean Code practices and Design Patterns.",
        "Active participation in Daily, Sprint and Plannings."
      ],
    },
    {
      company: "Barra Mansa Alimentos",
      position: "Maintenance Coordinator",
      startDate: "Jan 2021",
      endDate: "May 2025",
      summary: [
        "Managing multidisciplinary teams and conducting continuous improvement projects.",
        "Structuring and standardizing processes with a focus on operational efficiency and scalability.",
        "Participation in industrial automation projects, working on mapping and defining processes with the programming team to implement automated solutions.",
        "Planning and implementation of new systems and equipment, defining scope, schedule, and performance KPIs."
      ],
    },
    {
      company: "Reis Advogados",
      position: "Estrategist",
      startDate: "May 2019",
      endDate: "Jan 2021",
      summary: [
        "Development of reporting applications using VBA and Python,mensuring reproducibility and efficiency.",
        "Creation of algorithms to optimize the daily performance of employees.",
        "Defining strategies and designing databases for analysis and decision-making.",
        "Data mapping and modeling to support the business."
      ],
    },
  ],
  projects: [
    {
      name: "TrafficAlerts Waze Clone",
      summary: "A traffic monitoring API that transforms real-time driver reports into immediate alerts for supervisors.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
  ],
  about: {
    description: `
     I'm a developer with a background in engineering and a passion for building robust and user-friendly web applications. With my experience in coordinating industrial projects, I've developed a strong ability to manage and deliver efficient solutions.

    I've honed my skills in creating and maintaining web applications, developing responsive interfaces, and integrating APIs. My expertise extends to programming, code versioning, and technical troubleshooting. I'm committed to best development practices, code quality, and delivering effective solutions that not only meet user needs but also push the boundaries of what's possible.
    `,
    image: "/Matheus Oliveira-big.jpg",
  },
};

// #5755ff
