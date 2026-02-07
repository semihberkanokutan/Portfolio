export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string; // Optional
}

export const projects: Project[] = [
  {
    title: "OS Scheduler Simulator",
    description: "Built a C++ simulation of Round Robin and Priority scheduling algorithms to analyze CPU efficiency.",
    techStack: ["C++", "Makefile", "GDB"],
    githubUrl: "https://github.com/youruser/os-sim",
  },
  {
    title: "E-Commerce Microservice",
    description: "Designed a scalable backend for processing orders using Node.js and Redis for caching.",
    techStack: ["Next.js", "TypeScript", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/youruser/shop-api",
    liveUrl: "https://shop-demo.vercel.app",
  },
  {
    title: "Weather App",
    description: "User friendly weather app.",
    techStack: ["React", "OpenWeather API", "Tailwing"],
    githubUrl: "https://github.com/semihberkanokutan/Weather-App",
    liveUrl: "https://weather-app-sage-five-95.vercel.app/",
  },
];