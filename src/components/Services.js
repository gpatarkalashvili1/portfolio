import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "HTML5, CSS(Tailwind CSS)",
    description:
      "I am a motivated and focused junior frontend developer who wants to grow in this field. I have work on my own projects that can be seen on my github",
    link: "Learn more",
  },
  {
    name: "Javascript",
    description:
      "I am a motivated and focused junior frontend developer who wants to grow in this field. I have work on my own projects that can be seen on my github",
    link: "Learn more",
  },
  {
    name: "React.JS",
    description:
      "I am a motivated and focused junior frontend developer who wants to grow in this field. I have work on my own projects that can be seen on my github",
    link: "Learn more",
  },
  {
    name: "Bootstrap, Responsive Design",
    description:
      "I am a motivated and focused junior frontend developer who wants to grow in this field. I have work on my own projects that can be seen on my github",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto mt-[50px]">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-10"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[450px] mb-16">
              I'm a Junior Frontend Developer with 1 years of experience.{" "}
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description,} = service;

                return (
                  <div
                    className="border-b border-white/20 h-[145px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[470px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-4">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div>
                      <a
                        className="btn w-9 h-9 mb-[40px] flex justify-center items-center"
                        href="https://github.com/gpatarkalashvili1"
                      >
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
