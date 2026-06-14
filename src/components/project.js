import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { projectsData } from "@/data/projects";

const ProjectCard = ({ type, title, summary, img, link, github, github2 }) => {
  return (
    <article 
      className="w-full flex flex-col items-start justify-start rounded-2xl border-2 border-solid border-dark bg-light relative dark:bg-dark dark:border-light group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden"
    >
      <div className="w-full cursor-pointer overflow-hidden relative border-b-2 border-solid border-dark dark:border-light">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 aspect-video"
        />
      </div>

      <div className="w-full flex flex-col items-start justify-start p-6 sm:p-4 flex-grow">
        <span className="text-primary dark:text-primaryDark font-bold text-xs uppercase tracking-widest mb-2">
          {type}
        </span>
        <h2 className="w-full text-left text-2xl sm:text-xl font-bold dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-300 mb-3">
          {title}
        </h2>
        <p className="mb-6 font-medium text-dark/75 dark:text-light/75 text-sm leading-relaxed">
          {summary}
        </p>

        <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-dark/10 dark:border-light/10">
          <div className="flex items-center gap-4">
            <Link href={github} target="_blank" className="flex items-center group">
              <div className="w-6 text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-300">
                <GithubIcon />
              </div>
              {github2 && <span className="ml-2 text-xs font-bold dark:text-light opacity-70">NEXT.JS</span>}
            </Link>
            {github2 && (
              <Link href={github2} target="_blank" className="flex items-center group border-l border-dark/20 dark:border-light/20 pl-4">
                <div className="w-5 text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-300">
                  <GithubIcon />
                </div>
                <span className="ml-2 text-xs font-bold dark:text-light opacity-70">WP</span>
              </Link>
            )}
          </div>
          {link && (
            <Link
              href={link}
              target="_blank"
              className="text-sm font-bold dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors duration-300 underline underline-offset-4"
            >
              Visit →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  const [shuffledProjects, setShuffledProjects] = useState([]);

  useEffect(() => {
    // Shuffle the projects array on client side to avoid hydration mismatch
    const shuffled = [...projectsData].sort(() => Math.random() - 0.5);
    setShuffledProjects(shuffled);
  }, []);

  return (
    <>
      <main className="w-full max-w-[90rem] mx-auto mb-24 flex flex-col items-center justify-center dark:text-light mt-4 px-8 lg:px-6 md:px-4 sm:px-2">
        <div className="w-full grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-8 lg:gap-6 md:gap-4">
          {shuffledProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              img={project.img}
              summary={project.summary}
              link={project.link}
              github={project.github}
              github2={project.github2}
              type={project.type}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Project;
