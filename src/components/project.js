import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/pedeprotect.png";
import groceryProject from "../../public/images/projects/grocery.png";
import gsapProject from "../../public/images/projects/gsap_showcase.png";
import travelProject from "../../public/images/projects/travel.png";
import agenticScraper from "../../public/images/projects/agentic-scraper.png";
import semiAnalysisProject from "../../public/images/projects/semianalysis.png";
import homebuyerMiniGames from "../../public/images/projects/homebuyer-minigames.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full flex items-center justify-center rounded-3xl relative overflow-hidden shadow-2xl group min-h-[500px] border border-solid border-dark/20 dark:border-light/20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full h-full flex flex-col items-start justify-end p-16 lg:p-12 sm:p-8 mt-auto pt-[250px]">
        <span className="text-primary dark:text-primaryDark font-bold text-xl tracking-widest uppercase mb-3 drop-shadow-md">
          {type}
        </span>

        <h2 className="w-full text-left text-5xl sm:text-4xl font-extrabold text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-300 mb-6 drop-shadow-lg leading-tight">
          {title}
        </h2>

        <p className="font-medium text-light/90 max-w-3xl text-lg sm:text-base mb-8 drop-shadow-md leading-relaxed">
          {summary}
        </p>

        <div className="flex items-center gap-6">
          <Link href={github} target="_blank" className="w-12 sm:w-10 text-light hover:text-primaryDark transition-colors duration-300">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-full bg-light text-dark py-3 px-8 sm:px-6 text-lg sm:text-base font-bold hover:bg-primaryDark hover:text-dark transition-all duration-300 shadow-lg"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = ({ type, title, summary, img, link, github, github2 }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark/20 bg-light p-6 relative dark:bg-dark dark:border-light/20 h-full group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primaryDark/20 transition-all duration-300 overflow-hidden"
    >
      <div className="w-full cursor-pointer overflow-hidden rounded-xl relative">
        <Image
          src={img}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="w-full flex flex-col items-start justify-between mt-6 flex-grow">
        <span className="text-primary dark:text-primaryDark font-bold text-sm uppercase tracking-widest mb-2">
          {type}
        </span>
        <h2 className="w-full text-left text-3xl font-bold dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-300">{title}</h2>
        <p className="my-4 font-medium text-dark/70 dark:text-light/70 text-sm leading-relaxed line-clamp-3">
          {summary}
        </p>

        <div className="mt-auto flex items-center justify-between w-full pt-5 border-t border-dark/10 dark:border-light/10">
          <div className="flex items-center gap-4">
            <Link href={github} target="_blank" className="flex items-center group">
              <div className="w-8 text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-300">
                <GithubIcon />
              </div>
              {github2 && <span className="ml-2 text-xs font-bold dark:text-light opacity-70">NEXT.JS</span>}
            </Link>
            {github2 && (
              <Link href={github2} target="_blank" className="flex items-center group border-l border-dark/20 dark:border-light/20 pl-4">
                <div className="w-7 text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-300">
                  <GithubIcon />
                </div>
                <span className="ml-2 text-xs font-bold dark:text-light opacity-70">WORDPRESS</span>
              </Link>
            )}
          </div>
          {link && (
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary dark:after:bg-primaryDark after:transition-all after:duration-300 hover:after:w-full"
            >
              Visit →
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Project = () => {
  return (
    <>
      <main className="w-full max-w-7xl mx-auto mb-24 flex flex-col items-center justify-center dark:text-light mt-12">
        
        <div className="w-full">
          <div className="grid grid-cols-12 gap-16 gap-y-24 lg:gap-8 md:gap-y-16 sm:gap-6">
            <div className="col-span-12">
              <FeaturedProject
                title="PedeProtect"
                img={project1}
                summary="PedeProtect is an innovative platform utilizing image processing, machine learning, deep learning and web development. It promotes rapid identification of the problems faced by pedestrians on footpaths, ensuring safer and smarter urban mobility."
                link="https://pede-protect.vercel.app/user/main"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Projects
                title="AI Grocery Price Aggregator"
                img={groceryProject}
                summary="Built a full-stack AI-driven application that aggregates and compares grocery prices across U.S. retailers. Implemented a FastAPI backend with OpenAI-powered query processing and a Next.js frontend."
                link="https://grocery-price-aggregator.onrender.com/docs"
                github="https://github.com/YashMehta2/Grocery-price-aggregator"
                type="Full Stack AI"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Projects
                title="GSAP Animation Showcase"
                img={gsapProject}
                summary="Created a collection of high-performance, interactive web animations using GSAP. Focused on smooth scroll effects, timeline control, and optimized rendering to enhance user experience."
                link=""
                github="https://github.com/YashMehta2/GSAP_Animations"
                type="Frontend Animation"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Projects
                title="Tours & Travel Booking"
                img={travelProject}
                summary="Designed and developed a front-end travel booking website allowing users to explore destinations, view packages, and make reservations using dynamic content rendering and PHP backend integration."
                link="https://tour-and-travels-website.vercel.app/"
                github="https://github.com/YashMehta2/Tour_and_Travels_Website"
                type="Full Stack Web"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Projects
                title="Agentic Web Scraper"
                img={agenticScraper}
                summary="Developed an autonomous web scraping system powered by Agentic AI. The agent iteratively refines its scraping strategies by detecting failures and self-correcting without human intervention."
                link=""
                github="https://github.com/YashMehta2/Agentic-Scraper-Backend"
                type="Agentic AI / Backend"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Projects
                title="SemiAnalysis MVP"
                img={semiAnalysisProject}
                summary="Designed and built an MVP for SemiAnalysis to optimize and increase the sales funnel on the website. Developed using Next.js and deployed on Vercel, with an alternative version built on WordPress."
                link="https://semi-mvp-nextjs.vercel.app/"
                github="https://github.com/YashMehta2/semi-mvp-nextjs"
                github2="https://github.com/YashMehta2/semi-mvp-wordpress"
                type="UI/UX & Sales Funnel"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Projects
                title="Interactive Homebuyer Mini-Games"
                img={homebuyerMiniGames}
                summary="An educational platform designed to gamify and simplify the complex process of buying a first home. Developed a suite of interactive financial simulations using React, Vite, and Phaser 3, featuring custom 2D graphics and a premium glassmorphic UI."
                link="https://homebuyer-mini-games.vercel.app/"
                github="https://github.com/YashMehta2/homebuyer-mini-games"
                type="React Ed-Tech Game"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
