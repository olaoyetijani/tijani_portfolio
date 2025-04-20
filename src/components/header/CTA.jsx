import React from "react";
import "./header.css";
<<<<<<< HEAD
// import cv from "../../assets/Tijani__CV.pdf";

const myCV = 'https://drive.google.com/file/d/1DUOfdG11C4XPzEzTbL3apaDO_2whAVNF/view?usp=sharing'

// https://drive.google.com/uc?export=download&id=FILE_ID
=======
import cv from "../../assets/Tijani__CV.pdf";
>>>>>>> 0f2d4ca52a1b58f79dedb7af451c9f5a7030d968

const CTA = () => {
  return (
    <div className="cta">
<<<<<<< HEAD
      <a href={myCV} download className="btn">
=======
      <a href={cv} download className="btn">
>>>>>>> 0f2d4ca52a1b58f79dedb7af451c9f5a7030d968
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
