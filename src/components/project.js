import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/pedeprotect.png";
import groceryProject from "../../public/images/projects/grocery.png";
import gsapProject from "../../public/images/projects/gsap_showcase.png";
import travelProject from "../../public/images/projects/travel.png";
import agenticScraper from "../../public/images/projects/agentic-scraper.png";


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <div className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition-all duration-300"
          priority
        />
      </div>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>

        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
          {title}
        </h2>

        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light h-full">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />

      <div className="w-full cursor-pointer overflow-hidden rounded-lg aspect-[16/10]">
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="w-full flex flex-col items-start justify-between mt-4 flex-grow">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>

        <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        <p className="my-2 font-medium text-dark dark:text-light text-sm line-clamp-3">
          {summary}
        </p>

        <div className="mt-auto flex items-center justify-between w-full">
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
          {link && (
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline"
            >
              Visit
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <>
      {/* <TransitionEffect /> */}

      <main
        className="w-full mb-16 flex flex-col items-center justify-center dark:text-light"
        style={{ marginLeft: "-25%" }}
      >
        <div style={{ marginLeft: "50%", marginTop: "-8%" }}>
          <AnimatedText
            text="My Projects"
            className="text-4xl margintopproject"
          />
        </div>
        <div className="pt-12" style={{ marginLeft: "50%" }}>
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="PedeProtect"
                img={project1}
                summary="PedeProtect is built that introduces an innovative solution utilizing key technologies like image processing, machine learning, deep learning and web development to build the platform PedeProtect. This platform promotes rapid identification of the problems faced by pedestrians on the footpaths."
                link="https://pede-protect.vercel.app/user/main"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Projects
                title="AI Grocery Price Aggregator – U.S. Edition"
                img={groceryProject}
                summary="Built a full-stack AI-driven application that aggregates and compares grocery prices across U.S. retailers. Implemented a FastAPI backend with OpenAI-powered query processing and a Next.js frontend for real-time search and price comparison."
                link="https://grocery-price-aggregator.onrender.com/docs"
                github="https://github.com/YashMehta2/Grocery-price-aggregator"
                type="Full Stack AI"
              />
            </div>
            <div className="col-span-6">
              <Projects
                title="Advanced GSAP Animation Showcase"
                img={gsapProject}
                summary="Created a collection of high-performance, interactive web animations using GSAP. Focused on smooth scroll effects, timeline control, and optimized rendering to enhance user experience."
                link=""
                github="https://github.com/YashMehta2/GSAP_Animations"
                type="Frontend Animation"
              />
            </div>
            <div className="col-span-6">
              <Projects
                title="Tours & Travel Booking System"
                img={travelProject}
                summary="Designed and developed a front-end travel booking website allowing users to explore destinations, view packages, and make reservations. Implemented dynamic content rendering and backend integration using PHP and MySQL."
                link="https://tour-and-travels-website.vercel.app/"
                github="https://github.com/YashMehta2/Tour_and_Travels_Website"
                type="Full Stack Web"
              />
            </div>
            <div className="col-span-6">
              <Projects
                title="Self-Improving Agentic Web Scraper"
                img={agenticScraper}
                summary="Developed an autonomous web scraping system powered by Agentic AI. The agent iteratively refines its scraping strategies by detecting failures, reasoning about remediation, and self-correcting without human intervention."
                link=""
                github="https://github.com/YashMehta2/Agentic-Scraper-Backend"
                type="Agentic AI / Backend"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
