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
              <small>3+ Years </small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h4>Clients</h4>
              <small>03+ Worldwide</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h4>Projects</h4>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            Hey there! 👋 I’m Tijani — a Software Engineer with a deep curiosity
            for tech and a love for building things that actually make a
            difference. I got into software development out of pure fascination,
            and since then, I’ve been hooked on bringing ideas to life through
            code. <br />
            Over time, I’ve grown confident working with a wide range of tools
            and technologies — including the MERN stack (MongoDB, Express.js,
            React.js, Next.js, TypeScript, and Node.js), as well as Vue.js,
            Macle SDK, Mini App development, and Appcube. I’ve built
            full-fledged web and mobile apps that are scalable, efficient, and
            user-friendly from start to finish.
          </p>
          <p>
            Even though I come from a traditional computer engineering
            background, most of what I know today came from rolling up my
            sleeves and learning by doing. From online courses and tutorials to
            real-world projects, I’ve explored both the front-end and back-end
            sides of development. <br />
            What really drives me is solving problems and turning complex ideas
            into clean, working solutions. I enjoy crafting smooth user
            experiences just as much as I enjoy optimizing the logic behind
            them. For me, tech is all about evolving — learning new things,
            taking on challenges, and leveling up with every project I take on.
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
