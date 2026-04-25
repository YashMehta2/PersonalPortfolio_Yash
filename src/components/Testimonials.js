import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TestimonialCard = ({ name, role, review, title, date, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full flex flex-col items-start justify-between rounded-2xl border border-solid border-dark bg-light p-8 relative dark:bg-dark dark:border-light h-full"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-dark/10 dark:bg-light/10 flex items-center justify-center mr-4">
          <span className="text-xl font-bold">{name.charAt(0)}</span>
        </div>
        <div>
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-sm font-medium text-dark/75 dark:text-light/75">{date}</p>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <h4 className="font-bold text-lg mb-2 text-primary dark:text-primaryDark">{title}</h4>
        <p className="font-medium text-dark dark:text-light text-sm italic mb-4">
          "{review}"
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-dark/10 dark:border-light/10 w-full">
        <p className="text-sm font-bold">{role}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hunter Huang",
      date: "September 20, 2025",
      title: "Great collaborator",
      review: "I had the opportunity to work with Yash during his internship, and he consistently demonstrated adaptability, but above all: creativity. One example was his work on creating custom fonts, where he quickly adjusted to new tools and requirements. He also took initiative in importing libraries and bringing unique ideas to the team, ensuring our projects were innovative in our mission to create interactive storytelling. What stood out most was his approach to coding: Yash writes clean, effective, but straightforward solutions. His ability to balance originality with clarity made him a valuable team member. I'm confident Yash will continue to excel!",
      role: "Team Lead at Playtoon Inc.",
    },
    {
      name: "Christina Pan",
      date: "January 10, 2026",
      title: "Proactive Ownership & Technical Maturity",
      review: "From re-engineering critical state-management logic to delivering seamless onboarding flows, Yash consistently impressed us. He balances technical constraints with a focus on usability, making him a valuable asset to any engineering team.",
      role: "CEO at fAIshion AI",
    },
    {
      name: "Niket Shah",
      date: "December 01, 2024",
      title: "Enthusiastic Developer & Proactive Problem Solver",
      review: "Yash was a standout intern who contributed across diverse projects, from building real-time data dashboards to implementing complex UI animations. His ability to handle everything from Redux state management to BLE integration with high enthusiasm makes him a valuable asset to any technical team.",
      role: "Director at Openspace services PVT. LTD.",
    },
  ];

  return (
    <div className="mt-32">
      <h2 className="font-bold text-6xl mb-16 w-full text-center lg:text-5xl md:text-4xl">
        What People Say
      </h2>
      <div className="grid grid-cols-12 gap-16 gap-y-24">
        {testimonials.map((t, index) => (
          <div key={index} className="col-span-4 lg:col-span-6 md:col-span-12">
            <TestimonialCard {...t} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
