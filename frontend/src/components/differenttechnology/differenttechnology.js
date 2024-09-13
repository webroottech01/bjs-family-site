import React from "react";
import "./differenttechnology.scss";
import { Link } from "react-router-dom";

const DifferentTechnology = ({ title, content, customContent, link, imageUrl1, imageUrl2, layout, customClass }) => {
  return (
    <div className={`different-technology ${customClass || ''}`}>
      {layout === 'layout1' && (
        <div className="row align-items-center section-content">
          <div className="col-lg-6 col-md-12 left-column-sc">
            <div className="title-column">
              <h2>{title}</h2>
              <p>{content}</p>
              <p>{customContent}</p>
              <Link to={link}>Learn More</Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 right-column-sc">
            <div className="image-column">
              <img src={process.env.PUBLIC_URL + imageUrl1} alt="Image" />
            </div>
          </div>
        </div>
      )}
      {layout === 'layout2' && (
        <div className="row align-items-center section-content">
          <div className="col-md-6 left-column-sc">
            <div className="title-column">
              <h2>{title}</h2>
              <p>{content}</p>
              <p>{customContent}</p>
              <Link to={link}>Learn More</Link>
            </div>
          </div>
          <div className="col-md-6 right-column-sc">
            <div className="image-column">
              <img src={process.env.PUBLIC_URL + imageUrl2} alt="Different Image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default DifferentTechnology;