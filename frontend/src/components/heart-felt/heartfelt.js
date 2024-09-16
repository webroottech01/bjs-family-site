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
              BJS is a corporate built on compassionate values; named after Baba
              Jaswant Singh Ji - who remains the spiritual inspiration and
              guidance behind the brand after his death in 2020 – BJS has an
              authentic desire to make a lasting and positive impact on the
              world.{" "}
            </p>
            <Link to={`/${props.btnlink}`}>{props.btntext}</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeartFelt;
