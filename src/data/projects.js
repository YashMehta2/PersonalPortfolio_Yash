import project1 from "../../public/images/projects/pedeprotect.png";
import groceryProject from "../../public/images/projects/grocery.png";
import gsapProject from "../../public/images/projects/gsap_showcase.png";
import travelProject from "../../public/images/projects/travel.png";
import agenticScraper from "../../public/images/projects/agentic-scraper.png";
import semiAnalysisProject from "../../public/images/projects/semianalysis.png";
import homebuyerMiniGames from "../../public/images/projects/homebuyer-minigames.png";

export const projectsData = [
  {
    id: 1,
    title: "PedeProtect",
    img: project1,
    summary: "PedeProtect is an innovative platform utilizing image processing, machine learning, deep learning and web development. It promotes rapid identification of the problems faced by pedestrians on footpaths, ensuring safer and smarter urban mobility.",
    link: "https://pede-protect.vercel.app/user/main",
    github: "/",
    type: "Featured Project"
  },
  {
    id: 2,
    title: "AI Grocery Price Aggregator",
    img: groceryProject,
    summary: "Built a full-stack AI-driven application that aggregates and compares grocery prices across U.S. retailers. Implemented a FastAPI backend with OpenAI-powered query processing and a Next.js frontend.",
    link: "https://grocery-price-aggregator.onrender.com/docs",
    github: "https://github.com/YashMehta2/Grocery-price-aggregator",
    type: "Full Stack AI"
  },
  {
    id: 3,
    title: "GSAP Animation Showcase",
    img: gsapProject,
    summary: "Created a collection of high-performance, interactive web animations using GSAP. Focused on smooth scroll effects, timeline control, and optimized rendering to enhance user experience.",
    link: "",
    github: "https://github.com/YashMehta2/GSAP_Animations",
    type: "Frontend Animation"
  },
  {
    id: 4,
    title: "Tours & Travel Booking",
    img: travelProject,
    summary: "Designed and developed a front-end travel booking website allowing users to explore destinations, view packages, and make reservations using dynamic content rendering and PHP backend integration.",
    link: "https://tour-and-travels-website.vercel.app/",
    github: "https://github.com/YashMehta2/Tour_and_Travels_Website",
    type: "Full Stack Web"
  },
  {
    id: 5,
    title: "Agentic Web Scraper",
    img: agenticScraper,
    summary: "Developed an autonomous web scraping system powered by Agentic AI. The agent iteratively refines its scraping strategies by detecting failures and self-correcting without human intervention.",
    link: "https://agentic-scraper-frontend.vercel.app/",
    github: "https://github.com/YashMehta2/Agentic-Scraper-Backend",
    type: "Agentic AI / Backend"
  },
  {
    id: 6,
    title: "SemiAnalysis MVP",
    img: semiAnalysisProject,
    summary: "Designed and built an MVP for SemiAnalysis to optimize and increase the sales funnel on the website. Developed using Next.js and deployed on Vercel, with an alternative version built on WordPress.",
    link: "https://semi-mvp-nextjs.vercel.app/",
    github: "https://github.com/YashMehta2/semi-mvp-nextjs",
    github2: "https://github.com/YashMehta2/semi-mvp-wordpress",
    type: "UI/UX & Sales Funnel"
  },
  {
    id: 7,
    title: "Interactive Homebuyer Mini-Games",
    img: homebuyerMiniGames,
    summary: "An educational platform designed to gamify and simplify the complex process of buying a first home. Developed a suite of interactive financial simulations using React, Vite, and Phaser 3, featuring custom 2D graphics and a premium glassmorphic UI.",
    link: "https://homebuyer-mini-games.vercel.app/",
    github: "https://github.com/YashMehta2/homebuyer-mini-games",
    type: "React Ed-Tech Game"
  }
];
