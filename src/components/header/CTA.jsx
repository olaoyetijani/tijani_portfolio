import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
// import cv from "../../assets/Tijani__CV.pdf";
const myCV =
  "https://drive.google.com/file/d/1Nrwyzr30ZWBP7R74q5Jme53-YZQOjq2W/view?usp=sharing";

// https://drive.google.com/uc?export=download&id=FILE_ID

const CTA = () => {
  return (
    <div className="cta">
      <a href={myCV} download target="_blank" className="btn" rel="noreferrer">
        Download CV
      </a>
      <Link to="/contact" className="btn btn-primary">
        Let's Talk
      </Link>
    </div>
  );
};

export default CTA;
