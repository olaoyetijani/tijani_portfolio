import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h2>My Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                I possess a strong command of HTML, CSS, and JavaScript,
                enabling me to create visually appealing and interactive user
                interfaces.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                My expertise includes crafting responsive designs that ensure
                seamless user experiences across various devices and screen
                sizes.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                I am well-versed in popular front-end frameworks and libraries
                such as React.js and Next.js, allowing me to build dynamic and
                scalable web applications efficiently.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                I ensure that my code is compatible with different web browsers,
                enhancing accessibility and usability for all users.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                I prioritize user experience (UX) and user interface (UI) design
                principles, striving to create intuitive, easy-to-navigate
                interfaces that cater to the needs of the end-users.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                I excel in collaborating with design and back-end teams,
                effectively translating design concepts into functional
                front-end code. Additionally, I communicate effectively to
                ensure alignment with project goals and timelines.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                The fast-paced nature of technology motivates me to stay updated
                with the latest trends and best practices in front-end
                development. I am adaptable and embrace new tools and
                methodologies to enhance my skill set.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                I approach challenges with a problem-solving mindset, analyzing
                issues and finding innovative solutions to optimize performance
                and user interaction.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF FRONTEND DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Back-End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                {" "}
                Proficiency in Node.js, allowing me to build scalable and
                efficient server-side applications. I leverage the asynchronous
                nature of Node.js to develop high-performance applications
                handling concurrent requests effectively.{" "}
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Extensive experience with Express.js, enabling me to create
                robust and RESTful APIs swiftly. I utilize Express.js middleware
                to manage requests, routes, and integrate various
                functionalities seamlessly.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                {" "}
                A strong command over MongoDB, including database modeling,
                query optimization, and CRUD operations. I design MongoDB
                schemas tailored for specific application requirements, ensuring
                efficient data storage and retrieval.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                I excel in designing schemas that maximize performance and
                scalability while ensuring data integrity and security within
                MongoDB databases. I optimize queries and indexes to enhance
                database performance.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Expertise in designing and implementing RESTful APIs using
                Node.js and Express.js, facilitating communication between the
                server and client-side applications.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Proficient in integrating various third-party services and APIs
                into Node.js applications, expanding functionality and
                capabilities as required by the project.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Implementing robust authentication and authorization mechanisms
                using technologies like JSON Web Tokens (JWT) or OAuth to secure
                Node.js and Express.js applications.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF  BACKEND*/}
      </div>
    </section>
  );
}

export default Services;
