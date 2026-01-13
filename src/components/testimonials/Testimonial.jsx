import React from "react";
import "./testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { certifications } from "../../utils/data";

function Testimonial() {
  return (
    <section id="testimonials">
      <h2>Certifications & Awards</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={2}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {certifications.map((cert, index) => {
          return (
            <SwiperSlide key={index}>
              <ImageCard
                image={cert.image}
                title={cert.title}
                issuer={cert.issuer}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

function ImageCard({ image, title, issuer }) {
  return (
    <div className="image-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      {/* <img src={image} alt={title} className="card-image" /> */}

      <div className="card-content">
        <span>{title}</span>
        <p className="issuer">{issuer}</p>
        {/* <p className="year">{year}</p> */}
        {/* {description && <p className="desc">{description}</p>} */}
      </div>
    </div>
  );
}

export default Testimonial;
