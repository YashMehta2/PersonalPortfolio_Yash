import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Onhover, enlarge the thing by a scale of 1.05
      initial={{ x: 0, y: 0 }} // Initial positions for each icon before the aniamtions
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }} // When the user scrolls and reaches that div, the icons will disperse to the location specified for each icon. (The position for x and y are passed as props )
      viewport={{ once: false }} // Describe how many time you whant the animations to occur. If you want the animations to occur infinite times set once as false or else true.
      className="cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 py-3 px-6 shadow-dark absolute flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center lg:text-6xl lg:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer p-8 shadow-dark flex items-center justify-center lg:p-6 md:p-4 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark"
        >
          Technical Skills
        </motion.div>
        {/* Name on the Div, the position of that Div when the div is in view */}
        <Skill name="HTML" x="-18vw" y="2vw" />
        <Skill name="CSS" x="-18vw" y="-5vw" />
        <Skill name="Javascript" x="15vw" y="8vw" />
        <Skill name="React.js" x="0vw" y="10vw" />
        <Skill name="Next.js" x="-20vw" y="-12vw" />
        <Skill name="Tailwind CSS" x="12vw" y="-14vw" />
        <Skill name="TypeScript" x="25vw" y="0vw" />
        <Skill name="React Native" x="0vw" y="-14vw" />
        <Skill name="Node.js" x="-12vw" y="14vw" />
        <Skill name="FastAPI" x="18vw" y="18vw" />
        <Skill name="Python" x="0vw" y="18vw" />
        <Skill name="SQL" x="-10vw" y="-14vw" />
        <Skill name="Firebase" x="-6vw" y="-6vw" />
        <Skill name="AWS" x="9vw" y="-4vw" />
        <Skill name="Docker" x="20vw" y="-10vw" />
        <Skill name="Git" x="0vw" y="-5vw" />
        <Skill name="GitHub" x="9vw" y="-10vw" />
        <Skill name="Postman" x="-14vw" y="-10vw" />
        <Skill name="Redux" x="-26vw" y="0vw" />
        <Skill name="GSAP" x="12vw" y="0vw" />
        <Skill name="Framer Motion" x="24vw" y="6vw" />
        <Skill name="Angular" x="-12vw" y="8vw" />
        <Skill name="Bootstrap" x="-24vw" y="6vw" />
        <Skill name="Vite" x="8vw" y="8vw" />
        <Skill name="Wordpress" x="0vw" y="-10vw" />
        <Skill name="cPanel" x="-14vw" y="4vw" />
        <Skill name="FlutterFlow" x="20vw" y="2vw" />
        <Skill name="Jira" x="0vw" y="14vw" />
        <Skill name="Chart.js" x="-8vw" y="12vw" />
        <Skill name="D3.js" x="10vw" y="18vw" />
        <Skill name="Tableau" x="25vw" y="-8vw" />
        <Skill name="PHP" x="-18vw" y="-18vw" />
        <Skill name="RESTful APIs" x="18vw" y="-18vw" />
        <Skill name="Power Automate" x="-26vw" y="18vw" />
        <Skill name="SCRUM" x="26vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
