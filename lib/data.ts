import rmtdevImg from "@/public/rmtdev.png";
import codeinfo from "@/public/codeinfo.png"
import moviesite from "@/public/moviesite.png"
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "Code-Info",
    description: "Code-Info is a Blogging website for personal use. I used Nextjs and Sanity to create this.",
    tags:["React", "Nextjs", "Tailwind", "Sanity"],
    imageUrl: codeinfo,
  },
  {
    title: "Movie Streamer",
    description: "This is a simple movie watching website. I tried to clone Netflix itself.",
    tags:["React", "Nextjs", "Tailwind", "Prisma", "MongoDB"],
    imageUrl: moviesite,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
