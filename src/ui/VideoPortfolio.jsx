import React from "react";
import "../components/portfolio/portfolio.css";
import { videoData } from "../utils/data";

function VideoPortfolio() {
  return (
    <div className="portfolio__container">
      {videoData.map((data) => {
        return (
          <article key={data.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <video
                key={data.id}
                src={data.video}
                controls
                width="100%"
                style={{ marginBottom: "1rem" }}
              />
            </div>
            <h3>{data.title}</h3>
          </article>
        );
      })}
    </div>
  );
}

export default VideoPortfolio;
