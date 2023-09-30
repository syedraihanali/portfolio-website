"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a self-taught full-stack web developer with a passion for learning and a strong determination to tackle complex problems, finding innovative solutions along the way. The ever-evolving nature of web development fascinates me, and I continuously strive to stay up-to-date with the latest technologies and industry trends.<br/><br/>

        <span className="font-bold text-yellow-500">As a full stack web developer</span>, I have acquired proficiency in both front-end and back-end technologies.<br/>

        <span className="font-bold text-green-300">On the front-end</span>, I have a solid foundation in <span className="font-bold text-orange-600">HTML</span>, <span className="font-bold text-blue-600">CSS</span>, and <span className="text-yellow-400 font-bold">JavaScript</span>, enabling me to craft visually appealing and user-friendly interfaces. I am experienced in working with modern frameworks and libraries such as <span className="text-blue-400 font-bold">React.js</span>,<span className="text-green-400 font-bold"> Vue.js</span> and <span className="text-red-400 font-bold">Angular</span>, which allow me to create dynamic and interactive web applications.<br/>

        <span className="font-bold text-blue-800">On the back-end side</span>, I have a strong understanding of server-side programming languages like <span className="text-green-400 font-bold">Node.js</span> and <span className="text-blue-600 font-bold">Python</span>, along with frameworks such as <span className="text-red-600 font-bold">Express.js</span> and <span className="text-green-600 font-bold">Django</span>. I am comfortable working with databases, both <span className="font-bold">SQL and NoSQL</span>, and have experience with query languages like <span className="italic">SQL and MongoDB</span>. Building robust and scalable APIs, integrating third-party services, and ensuring efficient data management are areas I excel in.<br/><br/>

        I believe that effective collaboration and communication are crucial for successful project development. I am a proactive team player who thrives in collaborative environments, bringing enthusiasm and fresh ideas to the table. I am also adept at understanding and translating client requirements into actionable plans, delivering results that align with their vision.

        I am excited about the opportunity to apply my skills and contribute to meaningful web development projects. Whether it's creating responsive websites, developing e-commerce platforms, or building web applications from scratch, I am ready to take on new challenges and grow as a developer.<br/><br/>

        <span className="italic">Thank you for taking the time to learn more about me. I look forward to connecting and discussing how we can work together to bring your ideas to life through innovative web solutions.</span>
      </p>



    </motion.section>
  );
}
