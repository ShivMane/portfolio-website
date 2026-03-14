import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Shivprasad Shridhar Mane",
  initials: "SM",
  url: "https://github.com/ShivMane/portfolio-website",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra",
  description:
    "Full Stack Developer specializing in JavaScript, React, and modern web technologies. Passionate about building scalable applications and AI-powered products.",
  summary:
    "I am a Computer Science engineering student and a Full Stack Developer passionate about building modern, scalable web applications. I enjoy working with technologies like JavaScript, React, Node.js, and modern frontend libraries to create high-performance user experiences and robust backend systems. I have experience working with databases such as MySQL and MongoDB and integrating REST APIs to build complete end-to-end applications. I am also interested in Artificial Intelligence and enjoy experimenting with AI-powered features such as chatbots, intelligent assistants, and generative AI integrations. I am continuously improving my problem-solving skills, exploring new technologies, and building impactful projects that combine modern web development with AI capabilities.",
  avatarUrl: "/me.png.jpeg",
  skills: [
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "Tailwind CSS",
    "Docker",
    "Git",
    "AWS Basics",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "shivprasadmane190@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ShivMane",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shivprasad-mane/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Shiv_mane14",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shivprasadmane190@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mettarev",
      badges: [],
      href: "https://mettarev.com/#/home",
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/mettarev-logo.svg",
      start: "Feb 2026",
      end: "Present",
      description:
        "• Developed and maintained a full-stack fintech platform using NestJS, TypeScript, React, and PostgreSQL, enabling end-to-end policy and investment workflows for advisers, investors, guest users, and internal operations teams.\n• Designed and implemented secure authentication and authorization using Azure AD B2C, JWT-based guest access, and CASL-powered RBAC to enforce granular permissions across backend APIs and frontend interfaces.\n• Built critical finance operations modules for general ledger and bank reconciliation, including transaction ingestion pipelines, batch processing workflows, historical transaction tracking, automated archival, and Excel-based reporting.\n• Improved platform stability and resilience by implementing OTP anti-replay protection, retry strategies for concurrency conflicts, scheduled background jobs, structured logging with correlation IDs, and health monitoring endpoints for better observability.",
    },
  ],
  education: [
    {
      school: "G H Raisoni College of Engineering and Management, Pune",
      href: "",
      degree: "B.Tech Degree",
      logoUrl: "/ghrce-logo.png",
      start: "Sep 2022",
      end: "Jul 2025",
    },
  ],
  projects: [
    {
      title: "Portfolio Website",
      href: "https://github.com/ShivMane/portfolio-website",
      active: true,
      description:
        "Personal developer portfolio built with Next.js and TypeScript to showcase experience, projects, and technical skills with a clean responsive UI.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShivMane/portfolio-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Meet AI",
      href: "https://github.com/ShivMane/MEET_AI",
      active: true,
      description:
        "AI-powered meeting assistant that helps users schedule, manage, and summarize meetings using AI.",
      technologies: [
        "React",
        "Node.js",
        "OpenAI API",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShivMane/MEET_AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FilePorter",
      href: "https://github.com/ShivMane/FilePorter",
      active: true,
      description:
        "Peer-to-peer port-to-port file sharing application built in Java for fast local file transfers.",
      technologies: [
        "Java",
        "Socket Programming",
        "File Transfer",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShivMane/FilePorter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
