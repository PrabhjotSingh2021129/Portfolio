import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>A Product Designer</span>
                    <span className="flex items-center gap-2">
                        <span>Based</span>
                        <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        <span>In India</span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                I'm a passionate Java developer with a love for crafting robust and scalable software solutions.
                 With a background in computer science and several years of hands-on experience, 
                 I thrive in the world of Java and enjoy every bit of it. 
                 My journey in the software development realm has been marked by a dedication to writing clean, 
                 efficient, and maintainable code.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                I believe in the power of innovation and continuous learning, 
                which drives me to stay up-to-date with the latest trends and technologies in the Java ecosystem. 
                My expertise extends to building backend applications, API development, and working with databases. 
                I'm also well-versed in Java frameworks like Spring, which enable me to create efficient, enterprise-grade applications.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                My commitment to quality and detail, combined with my problem-solving mindset,
                empowers me to tackle complex challenges head-on. Collaboration and teamwork are at the core of my work ethos, 
                as I'm a firm believer in the collective strength of diverse minds working toward a common goal.
                </Div>
                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                I take pride in creating software that not only meets the functional requirements 
                but also delights end-users with a seamless and intuitive experience.
                I'm excited to take on new projects, collaborate with creative minds,
                and contribute to the ever-evolving landscape of software development.
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
