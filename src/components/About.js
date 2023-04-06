import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
          <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="mb-6">I'm a Junior Frontend Developer with 1 years of experience.</h3>
            <p className="mb-8">
              I am a motivated and focused junior frontend developer who wants
              to grow in this field. I have work on my own projects that can be
              seen on my github. I have knowledge of HTML, CSS, jQuery,
              Bootstrap, JavaScript, React (in the process of learning),
              Responsive Desing.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-2 mt-2">
                  {
                    inView ?
                    <CountUp start={2} end={99} duration={9} /> :null}
                    k+
                </div>
                <div className="font-primary text-sm tracking-[3px]">Years of <br /> Experience</div>
              </div>
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-2 mt-2">
                  {
                    inView ?
                    <CountUp start={2} end={99} duration={9} /> :null}
                    k+
                    
                </div>
                <div className="font-primary text-sm tracking-[3px]">Project <br /> Completed</div>
              </div>
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-2 mt-2">
                  {
                    inView ?
                    <CountUp start={2} end={99} duration={9} /> :null}
                    k+
                    
                </div>
                <div className="font-primary text-sm tracking-[3px]">satisfied <br /> Clients</div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="https://github.com/gpatarkalashvili1" className="text-gradient btn-link"> My portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
