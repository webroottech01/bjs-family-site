import React from "react";
import "./heartfelt.scss";
import { Link } from "react-router-dom";
import Testimonials from "../testimonial-slider/testimonials";

const HeartFelt = (props) => {
  return (
    <>
      <div className="heartFelt">
        <div className="row mx-0">
          {/* <div className="col-lg-6 col-md-12 col-sm-12 heartFeltCustomer">
            <h2 className="text-start">what our customers think</h2>

            <Testimonials />
          </div> */}

          <div className="col-12 col-md-12 col-sm-12 heartFeltContent">
            <h2>Heart Felt</h2>
            <p>
              BJS is a corporation built on compassionate values. Inspired by Baba Jaswant Singh Ji, whose legacy of spiritual guidance lives on after his passing in 2020, BJS strives to make a lasting and positive impact on the world.
            </p>
            <Link to={`/${props.btnlink}`}>{props.btntext}</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeartFelt;
