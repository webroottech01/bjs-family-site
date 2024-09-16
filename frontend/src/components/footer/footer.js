import React from "react";
import "./footer.scss";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <>
      <div className="site-footer">
        <div className="fotr-container">
          <div className="row justify-content-between">
            <div className="col-md-8 col-sm-8">
              <div className="leftColm d-flex">
                <div className="fotrAbout">
                  <h3>About BJS</h3>
                  
                  <Nav className="d-block">
                    <LinkContainer to="/our-story">
                      <Nav.Link>Our Story</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/our-values">
                      <Nav.Link>Our Values</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/our-difference">
                      <Nav.Link>
                        What Makes BJS Different
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/technology">
                      <Nav.Link>Our Technology</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/charity-community">
                      <Nav.Link>Charity & Community</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/training-academy">
                      <Nav.Link>Training Academy</Nav.Link>
                    </LinkContainer>
                  </Nav>
                  <div className="fotrSocial">
                    <div>
                      <a href="https://uk.trustpilot.com/review/bjshomedelivery.com" target="blank">
                        <img
                          src={process.env.PUBLIC_URL + "/images/Star-fotr.png"}
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.instagram.com/bjsdelivery" target="blank">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/Insta-fotr.png"
                          }
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/company/bjs-distribution" target="blank">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/Linkdin-fotr.png"
                          }
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fotrServices">
                  <h3>Our Services</h3>
                  <Nav className="d-block">
                  <LinkContainer to="/services">
                    <Nav.Link>Two-Person Home Delivery</Nav.Link>
                    </LinkContainer>
                  </Nav>
                </div>
                <div className="fotrInfo">
                  <h3>Information</h3>
                  <Nav className="d-block">
                  <LinkContainer to="/careers">
                      <Nav.Link>Careers</Nav.Link>
                      </LinkContainer>
                    
                    <Nav.Link href="https://bjs-static.s3.eu-west-2.amazonaws.com/privacy+policy.pdf" target="blank" className="nav-link">Privacy Policy</Nav.Link>
                  </Nav>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 rightColm text-end">
              <p>
                <a href="mailto:cali@bjshomedelivery.com">cali@bjshomedelivery.com</a>
              </p>
              <a href="https://maps.app.goo.gl/vNLHm4qGTxHHeiua6" target="_blank">
                <button className="headOffice">BJS head office</button>
              </a>
              <h4>gosh.pieced.exam</h4>
              <a href="https://maps.app.goo.gl/vNLHm4qGTxHHeiua6" target="_blank">
                <button className="view-map">View on Google Maps</button>
              </a> 
            </div>
          </div>
        </div>
      </div>
      <div className="reserved">
        <div className="container">
          <p className="text-center m-0">
            ©BJS Distribution Couriers & Storage Services Inc.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
