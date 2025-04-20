import React from "react";
import "./header.css";
// import cv from "../../assets/Tijani__CV.pdf";

const myCV = 'https://drive.google.com/file/d/1DUOfdG11C4XPzEzTbL3apaDO_2whAVNF/view?usp=sharing'

// https://drive.google.com/uc?export=download&id=FILE_ID

const CTA = () => {
  return (
    <div className="cta">
      <a href={myCV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
