import React from 'react'
import "./careers.scss";
import Testimonials from '../../components/testimonial-slider/testimonials';
import Partners from '../../components/partners-slider/partners';
import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <>
            <div className="careersMain">
                <div className='careerBanner'>
                    <div className='container'>
                    <div className='careerInner d-flex'>
                        <div className='careerContent text-start'>
                            <h1>putting you in the driver’s seat</h1>
                            <p>Do you dream of hitting the open road? Are big trucks your thing? Maybe you’re an IT wizard or passionate about working with people? If that sounds like you, we’d love to have you on our team! Whether it’s joining our delivery crews, getting behind the wheel of our haulage trucks, applying your tech expertise, or helping our customer care team provide exceptional service—we need your talents.</p>
                            <p>We’re growing fast, with exciting opportunities across a variety of departments. Keep an eye out for current openings, and don’t hesitate to tell us more about yourself and how you could make a difference here at BJS!</p>
                            <div className='careerButtons d-flex gap-5'>
                            <Link to="/#">See our current vacancies <img src={process.env.PUBLIC_URL + "/images/nextArrow.png"} alt="" className='iconMain' /></Link>
                            <a href="mailto:cali@bjshomedelivery.com">Send us your CV <img src={process.env.PUBLIC_URL + "/images/nextArrow.png"} alt="" className='iconMain' /></a>
                            </div>
                        </div>
                        <div className='careerImage'></div>
                        <img src={process.env.PUBLIC_URL + "/images/sofacutout.webp"} alt="" className='careerImage' width="100%" />
                    </div>
                    </div>
                </div>

                {/* <div className='container newstestimonial'>
                    <h2 className='text-start'>what our customers think</h2>
                    <Testimonials />
                </div> */}


                {/* <div className='partnersMAin'>
                    <div className='newsPartners'>
                        <h2 className='text-center'>Our Partners</h2>
                        <Partners />
                    </div>
                </div> */}


            </div>
        </>
    )
}

export default Careers;