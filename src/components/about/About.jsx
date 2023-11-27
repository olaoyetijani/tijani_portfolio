import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>2+ Years </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h4>Clients</h4>
              <small>03+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h4>Projects</h4>
              <small>9+ Completed</small>
            </article>
          </div>

          <p>
            Hello there! 👋 I'm Tijani, a self-taught full stack MERN developer
            driven by an insatiable curiosity for technology and a passion for
            crafting innovative solutions. My journey into the world of software
            development began out of sheer fascination and a desire to bring
            ideas to life through code. <br /> I've delved deep into the MERN stack,
            mastering the integration of MongoDB, Express.js, React.js,Next.js, TypeScript and
            Node.js to create versatile, scalable, and efficient web solutions.
            My expertise lies in developing end-to-end applications, from
            conceptualization to deployment.
          </p>
          <p>
            With a traditional computer engineering background, I embarked on
            this journey through self-learning and hands-on experience. Through
            countless online resources, tutorials, and project-based learning,
            I've gained expertise in a spectrum of technologies spanning both
            front-end and back-end development.
          </p>
          <p>
            I thrive on the thrill of problem-solving and the satisfaction of
            turning complex concepts into elegant, functional applications. I
            find joy in the art of creating seamless user experiences while
            ensuring the underlying logic runs efficiently. I believe in
            continuous learning and adaptability in the ever-evolving tech
            landscape. Embracing challenges as opportunities to grow, I immerse
            myself in diverse projects, each offering a chance to expand my
            skill set and refine my craft.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
