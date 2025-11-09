import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div whileInView={{ y: 0 }}>
        <h3 className="capitalize font-bold text-2xl ">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-blue-600"
          >
            @{company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="mt-30 mb-64">
        <h2 className="font-bold text-6xl mb-32 w-full text-center dark:text-light">
          Experience
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative dark:text-primaryDark"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light "
          />
          <ul className="w-full flex flex-col justify-between items-start ml-4">
            <Details
              position="Software Engineer Intern"
              companyLink="https://www.faishion.ai/"
              company="fAIshion"
              time="September 2025 – Present"
              address="San Francisco, California"
              work="Buildling AI system for virtual try-on and recommendation system to make shopping easier."
            />
            <Details
              position="Software Engineer"
              companyLink="https://professionalstudies.syracuse.edu/academics/iconsult-collaborative-at-syracuse-university/"
              company="iConsult Collaborative at Syracuse University"
              time="March 2025 – Present"
              address="Syracuse, New York"
              work="Building Clique — an exclusive community connecting student-athletes with pro-athletes to foster mentorship, deal flow, and entrepreneurial growth."
            />
            <Details
              position="Frontend Developer Intern, Lead Role"
              companyLink="https://playtoon.it.com/"
              company="Playtoon it, inc."
              time="May 2025 – August 2025"
              address="New York"
              work="Frontend Development Intern delivering responsive UIs, robust RESTful APIs, and scalable server-side logic with React.js, Node.js, and Express."
            />
            <Details
              position="Software Developer Intern"
              companyLink="https://www.openspaceservices.com/"
              company="Openspace services PVT. LTD"
              time="May 2023 – November 2023"
              address="Mumbai, India"
              work="Led the development of responsive and user-friendly web applications, collaborating closely with designers and back-end developers to deliver high-quality products."
            />
            <Details
              position="Web Developer Intern (Wordpress)"
              companyLink="https://i-solarlite.com/"
              company="Sonne Energies PVT. LTD"
              time="January 2022 – June 2022"
              address="Mumbai, India"
              work="Designed user interfaces and user experiences for various web and mobile applications. Conducted user testing and iterated on designs for improved usability."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
