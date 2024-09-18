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
                    <div className='careerInner d-flex'>
                        <div className='careerContent text-start'>
                            <h1>putting you in the driver’s seat</h1>
                            <p>Do you dream of the open road? Do big trucks float your boat? Are you an IT whizz or do you have a passion for people? You do! Then you could join our delivery teams or sit behind the wheel of our haulage trucks. We need your computer know-how and we would love you to help our customer care team help our customers.</p>
                            <p>We are growing fast and have lots of exciting opportunities across varied departments so do keep an eye out for current vacancies, also please do let us know about you and what you could bring to us. </p>
                            <div className='careerButtons d-flex gap-5'>
                            <Link to="/#">See our current vacancies <img src={process.env.PUBLIC_URL + "/images/nextArrow.png"} alt="" className='iconMain' /></Link>
                            <a href="mailto:cali@bjshomedelivery.com">Send us your CV <img src={process.env.PUBLIC_URL + "/images/nextArrow.png"} alt="" className='iconMain' /></a>
                            </div>
                        </div>
                        <div className='careerImage'></div>
                        <img src={process.env.PUBLIC_URL + "/images/sofacutout.webp"} alt="" className='careerImage' width="100%" />
                    </div>
                </div>

                <div className='container newstestimonial'>
                    <h2 className='text-start'>what our customers think</h2>
                    <Testimonials />
                </div>


                <div className='partnersMAin'>
                    <div className='newsPartners'>
                        <h2 className='text-center'>Our Partners</h2>
                        <Partners />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Careers;