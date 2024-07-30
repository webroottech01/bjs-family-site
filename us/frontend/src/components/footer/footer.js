import React from 'react';
import "./footer.scss";

import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <>
    <div className='site-footer'>
        <div className='fotr-container'>
            <div className="row justify-content-between">
                <div className="col-md-8 col-sm-8">
                    <div className="leftColm d-flex">
                        <div className="fotrAbout">
                            <h3>About BJS</h3>            
                            <Nav className="d-block">
                                <Nav.Link href="#">Our Story</Nav.Link>
                                <Nav.Link href="#">Our Values</Nav.Link>
                                <Nav.Link href="#">What Makes BJS Different</Nav.Link>
                                <Nav.Link href="#">Our Technology</Nav.Link>
                                <Nav.Link href="#">Charity & Community</Nav.Link>
                                <Nav.Link href="#">Training Academy</Nav.Link>                                                                
                            </Nav>   
                            <div className="fotrSocial">
                                <div><a href="#"><img src={process.env.PUBLIC_URL + "/images/Star-fotr.png"} alt="" /></a></div>
                                <div><a href="#"><img src={process.env.PUBLIC_URL + "/images/Insta-fotr.png"} alt="" /></a></div>
                                <div><a href="#"><img src={process.env.PUBLIC_URL + "/images/Linkdin-fotr.png"} alt="" /></a></div>
                            </div>                      
                        </div>
                        <div className="fotrServices"> 
                            <h3>Our Services</h3>
                            <Nav className="d-block">
                                <Nav.Link href="#">Two-Man Home Delivery</Nav.Link>                                                          
                            </Nav>                             
                        </div>
                        <div className="fotrInfo">
                            <h3>Information</h3>
                            <Nav className="d-block">
                                <Nav.Link href="#">Careers</Nav.Link>
                                <Nav.Link href="#">Privacy Policy</Nav.Link>
                                <Nav.Link href="#">CCTV Policy</Nav.Link>                                                              
                            </Nav>                             
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 rightColm text-end">
                    <p><a href="mailto:hello@bjsfamily.com">hello@bjsfamily.com</a></p>
                    <a href="#"><button className="headOffice">BJS head office</button></a>
                    <h4>retire.grow.empire</h4>
                    <a href="#"><button className="view-map">View on Google Maps</button></a>

                </div>
            </div>
    
        </div> 
    </div>
    <div className="reserved">
        <div className='container'>
            <p className='text-center m-0'>©BJS Distribution Limited, 2024 - All rights reserved.</p>
        </div>
    </div>
    </> 
  )
}
export default Footer;