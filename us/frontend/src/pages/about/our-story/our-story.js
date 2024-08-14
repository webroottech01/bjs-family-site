import React from 'react';
import "./our-story.scss";
import DifferentTechnology from "../../../components/differenttechnology/differenttechnology";
import Partners from '../../../components/partners-slider/partners';

const Ourstory = () => {
    return (
        <div className='ourStoryMain'>
            <h1>Our Story</h1>

            <div className='ourStoryInner'>
                <div className='storyContent d-flex align-items-start'>
                    <p className='storyYear'>2021</p>
                    <div className='storyDetail'>
                        <h3>Another string in our logistics bow</h3>
                        <div className='d-flex gap-4 align-items-center'>
                            <img src={process.env.PUBLIC_URL + "/images/Construct_IT.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/tarmac.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/wienerberger.svg"} alt="" />
                        </div>
                        <p>We built Construct IT from the ground up to provide a safe pair of hands for industry leading construction material manufacturers.</p>
                        <p>A water-shed moment as Wienerberger choose Construct IT as a key delivery partner, based upon our stringent approach to safety and innovative IT systems.</p>
                        <p>Construct IT continues to make waves in the construction haulage industry as another world-renowned brand in Tarmac also chooses to partner with us.</p>
                        <p className='m-0'>
                            Rounding off a challenging but amazing year, both BJS Haulage and Construct IT are finalists in the MTA Livery of the Year Awards – which we’re happy to say was won by Construct IT!</p>
                    </div>
                </div>


                <div className='storyContent d-flex align-items-start'>
                    <p className='storyYear'>2020</p>
                    <div className='storyDetail'>
                        <h3>An eventful year</h3>
                        <div className='d-flex gap-4 align-items-center'>
                            <img src={process.env.PUBLIC_URL + "/images/bjs-haulage.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/bjs-extra.svg"} alt="" />
                        </div>
                        <p>An eventful year of exciting growth for BJS as we expanded our capabilities and launched two new service-led brands.</p>
                        <p>BJS Haulage offers a broad range of services from tailor-made to economy and everything in-between, so with our family of delivery services — you’ll be safe in our hands.</p>
                        <p className='m-0'>BJS Extra delivers an extra helping hand in home delivery for growing businesses – including extra reach, extra care, extra choice... and extra smiles.</p>
                    </div>
                </div>


                <div className='storyContent d-flex align-items-start'>
                    <p className='storyYear'>2019</p>
                    <div className='storyDetail'>
                        <h3>Established partnerships</h3>
                        <div className='d-flex align-items-center gap-4'>
                            <img src={process.env.PUBLIC_URL + "/images/julianbowen.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/oliverbonass.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/nectarsleep.svg"} alt="" />
                        </div>
                        <p>We begin working with Julian Bowen, a well known and established family furniture wholesaler who work with large high street retailers such as Next and DFS.</p>
                        <p>A strong brand in retail since it was founded in 1993, BJS won a tender to support Oliver Bonas in their home deliveries.</p>
                        <p>We moved to ease customer integrations and get new customers up-and-running quickly by providing a suite of 'public' APIs.</p>
                        <p>We developed our own vehicle route-planning and optimisation system in-house and from the ground-up - going live in Q1 2019.</p>
                        <p className='m-0'>The USA 'matress in a box' company, Nectar Sleep - come on-board.</p>
                    </div>
                </div>


                <div className='storyContent d-flex align-items-start'>
                    <p className='storyYear'>2017</p>
                    <div className='storyDetail'>
                        <h3>Business growth</h3>
                        <div className='d-flex align-items-center gap-4'>
                            <img src={process.env.PUBLIC_URL + "/images/growth1.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/growth2.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/growth3.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/growth4.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/growth5.svg"} alt="" />
                        </div>
                        <p>We increased our fleet of vans yet again, reflecting increasing demand for home-deliveries.</p>
                        <p>We increased our warehouse space to 250,000 sq.ft. to reflect increasing demand for our services.</p>
                        <p>We increased our fleet of HGVs to meet increasing demand from our retail clients to collect stock from them.</p>
                        <p>We launched our own tracking technology. This makes it easier for customers to anticipate their deliveries and improves our in-full and first-time delivery performance.</p>
                        <p className='m-0'>We set-up a BJS office in India to augment our UK operations.</p>
                    </div>
                </div>


                <div className='storyContent d-flex align-items-start'>
                    <p className='storyYear'>2016</p>
                    <div className='storyDetail'>
                        <h3>Partners & expansion</h3>
                        <div className='d-flex align-items-center gap-4'>
                            <img src={process.env.PUBLIC_URL + "/images/wayfairs.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/richer-sounds.svg"} alt="" />
                        </div>
                        <p>Our fleet of delivery vans increased again to 125.</p>
                        <p>Wayfair and Richer Sounds come on-board.</p>
                        <p className='m-0'>We launched our new warehouse in Scotland, employing local people, to improve our service to customers in The Highlands.</p>
                    </div>
                </div>


                <div className='storyContent d-flex align-items-start'>
                    <p className='storyYear'>2014</p>
                    <div className='storyDetail'>
                        <h3>Recalibration</h3>
                        <div className='d-flex align-items-center gap-4'>
                            <img src={process.env.PUBLIC_URL + "/images/recalibration1.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/recalibration2.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/recalibration3.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/recalibration4.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/recalibration5.svg"} alt="" />
                        </div>
                        <p className='m-0'>As well as improving processes and systems to increase and improve our services, we recalibrated our business to ensure that our rapid growth would not affect our overall performance.</p>
                    </div>
                </div>


                <div className='storyContent d-flex align-items-start'>
                    <p className='storyYear'>2013</p>
                    <div className='storyDetail'>
                        <h3>Never standing still</h3>
                        <div className='d-flex align-items-center gap-4'>
                            <img src={process.env.PUBLIC_URL + "/images/made.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/onecall.svg"} alt="" />
                        </div>
                        <p>We began working with MADE.COM and One Call to support their success in the UK furniture market.</p>
                        <p>We moved from our 18,000 sq.ft. facility into a 125,000 sq.ft. facility to meet the demands of our business growth.</p>
                        <p className='m-0'>Never standing still, and to meet the ever-growing demands of our customers and end-users, we upgraded our IT system again.</p>
                    </div>
                </div>


                <div className='storyContent d-flex align-items-start'>
                    <p className='storyYear'>2012</p>
                    <div className='storyDetail'>
                        <h3>Next day breakthrough</h3>
                        <div className='d-flex align-items-center gap-4'>
                            <img src={process.env.PUBLIC_URL + "/images/costwold.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/nextdaydelievery.svg"} alt="" />
                        </div>
                        <p>We began delivering for The Cotswold Company, with whom we continue to work closely.</p>
                        <p className='m-0'>We were one of the first to introduce ‘next day’ and ‘choice of delivery day’ for our customers; a breakthrough in the two-man delivery market.</p>
                    </div>
                </div>


                <div className='storyContent d-flex align-items-start'>
                    <p className='storyYear'>2010</p>
                    <div className='storyDetail'>
                        <h3>Growing fast</h3>
                        <div className='d-flex align-items-center gap-4'>
                            <img src={process.env.PUBLIC_URL + "/images/growing1.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/growing2.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/growing3.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/growing4.svg"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/growing5.svg"} alt="" />
                        </div>
                        <p>We grew fast, purchasing a fleet of 10 vans, enabling us to grow our business and win some great new clients.</p>
                        <p className='m-0'>To handle the upturn in orders and improve our overall efficiency, we invested in a new IT system.</p>
                    </div>
                </div>


                <div className='storyContent d-flex align-items-start m-0'>
                    <p className='storyYear'>2009</p>
                    <div className='storyDetail'>
                        <h3>Where it all began</h3>
                        <div className='d-flex align-items-center gap-4'>
                            <img src={process.env.PUBLIC_URL + "/images/bjsdistrubution.svg"} alt="" />
                        </div>
                        <p className='m-0'>We began with a clear vision - to provide the best two-man delivery service in the UK, based upon our great people skills and reliable service that is second-to-none.</p>
                    </div>
                </div>


            </div>

            <DifferentTechnology
                layout="layout1"
                title="our services"
                content="We’ve been delivering all sorts of things for all sorts of people for over a decade. Our fleet of vehicles has grown over the years, but the excellent customer service foundations remain the same. So, if you need a small van and friendly two-man delivery team, or a truck or a trailer with DVS compliance and peace of mind with every booking… we are happy to help. "
                link="/services"
                imageUrl1="/images/serviceman.jpg"
                customClass="blue-bg"
            />

            
      <div className='partnersMAin'>
        <div className='newsPartners'>
          <h2 className='text-center'>Our Partners</h2>
          <Partners />
        </div>
      </div>

        </div>
    )
}

export default Ourstory;
