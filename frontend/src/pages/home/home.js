import React from "react";
import "./home.scss";
import Withbigbulky from "../../components/big-bulky/withbigbulky";
import DifferentTechnology from "../../components/differenttechnology/differenttechnology";
import Partners from "../../components/partners-slider/partners";
import Enquiries from "../../components/enquiries/enquiries";
import { Link } from "react-router-dom";
import HeartFelt from "../../components/heart-felt/heartfelt";
import CheckOs from "../../checkOs";

const Home = () => {
  const os = CheckOs();
  
  return (
    <>
      <div className={`homepage ${os}`}>
        <div className="bannerSection">
          <div className="container">
            <p>We’ve come all the way from the UK to offer the very best</p>
            <p>big and bulky two-person home delivery</p>
            <div className="maintextouter">
              <h1>california dreamin’</h1>
              <h5>no more</h5>
            </div>

            <div className="col-12 bannerButtons">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-sm-6">
                    <Link to="/our-values">Learn more about BJS</Link>
                  </div>
                  <div className="col-sm-6">
                    <Link to="/services" className="bjsServices">
                      <span>BJS</span> Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="homeDeliverSection">
          <div className="container mb-5">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12  leftContent">
                <h2>
                  high <span>cali</span>ber home delivery
                </h2>
                <p>
                  Award winning two-person home delivery teams, trained in
                  excellence and trusted by leading brands. With an enviable
                  track record of more than a decade the BJS family offer a
                  range of flexible services to keep you and your customers
                  happy.
                </p>
                <div className="col-12 twoparts">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <b>We offer flexibility</b>
                      <ul>
                        <li>Next day delivery</li>
                        <li>Choice-of-day delivery</li>
                        <li>Three hour delivery window</li>
                        <li>Room of choice</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <b>We go above & beyond</b>
                      <ul>
                        <li>Room of choice</li>
                        <li>Professionally built & installed</li>
                        <li>Packaging removal & recycle</li>
                        <li>Removal of old furniture</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 muchmore">And much more...</div>
                <div className="col-12 moreinfo">
                  <Link to="/services">
                    More info{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 img-sec">
                <img
                  src={process.env.PUBLIC_URL + "/images/sofaimage.webp"}
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>

        <Withbigbulky />

        <div className="beliefDevine">
          <div className="container mb-5">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 leftContent">
                <h2>belief in a divine flow and the team</h2>
                <p>
                  From the very inception of BJS, spiritual guidance was sought
                  from Baba Jaswant Singh Ji – whom the company is named after.
                  Before his death in 2020, Baba Jaswant Singh Ji was based in
                  Punjab and had a trust that ran projects for the welfare of
                  humanity; providing health care facilities, higher medical
                  education and to show ‘the path of spiritual righteousness’,
                  to ‘foster human values and welfare with esteemed devotion
                  indeed’.
                </p>
                <p>
                  Harinder, BJS Managing Director, explains that he believes in
                  a divine flow and his team;
                </p>

                <img
                  src={process.env.PUBLIC_URL + "/images/comas.png"}
                  alt=""
                  className="comaImg"
                />
                <div className="col-12 twoparts">
                  <div className="row mx-0">
                    <div className="col-8 p-0">
                      <p>
                        Who we are as people, our values and emotional needs,
                        shouldn’t be ignored within the world of work. There is
                        no division in our hearts before you start work and
                        after you sit at your desk or the cab of a truck. By
                        respecting my team and treating them with compassion and
                        kindness they are better able to continue that conduct
                        to the benefit of everyone they encounter, including our
                        customers. It is what has set us apart as a business.{" "}
                      </p>
                    </div>
                    <div className="col-4 p-0">
                      <div className="d-flex authorDetailing align-items-center gap-4">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/managerImage.png"
                          }
                          alt=""
                          className="comaImg"
                        />
                        <div className="w-100">
                          <h3>Harinder Singh</h3>
                          <p>Managing Director</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 moreinfo">
                  <Link to="our-story">OUR STORY</Link>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 ">
                <img
                  src={process.env.PUBLIC_URL + "/images/devineimg.jpg"}
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bjsDifferentSec">
          <DifferentTechnology
            layout="layout1"
            title="what makes bjs different"
            content="We provide the very best customer service at every stage of the delivery process, putting customers at the heart of everything we do – so that your products, reputation, customers and peace of mind really are safe in our hands."
            link="/our-difference"
            imageUrl1="/images/Clip path group_11zon.jpg"
          />
        </div>

        {/* Partners Carousel */}
        <div className="partnersMAin">
          <div className="newsPartners">
            <h2 className="text-center">Our Partners</h2>
            <Partners />
          </div>
        </div>

        <HeartFelt btntext="our values" btnlink="our-values" />

        <Enquiries />
      </div>
    </>
  );
};

export default Home;
