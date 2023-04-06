import React from "react";
import Image from "../assets/avatar.jpeg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1.5] lg:text-[80px]"
            >
              Giorgio<span> |</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[40px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4 ">I am a</span>
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Responsive Designer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I am a motivated and focused junior frontend developer who wants
              to grow in this field. I have work on my own projects that can be
              seen on my github. I have knowledge of HTML, CSS, jQuery,
              Bootstrap, JavaScript, React (in the process of learning),
              Responsive Desing.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="https://www.linkedin.com/in/giorgi-patarkalashvili-107172258/" className="text-gradient btn-link">
                My portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://instagram.com/gpatarkalashvili?igshid=YmMyMTA2M2Y=">
                <FaInstagram />
              </a>
              <a href="https://github.com/gpatarkalashvili1">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/giorgi-patarkalashvili-107172258/">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:flex ml-auto flex-1 max-w-[380px] lg:max-w-[400px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
