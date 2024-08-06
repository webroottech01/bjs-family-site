import React from 'react';
import Enquiries from '../../components/enquiries/enquiries';
import "./servicepage.scss";
import { Link } from 'react-router-dom';
import Partners from '../../components/partners-slider/partners';
import Testimonials from '../../components/testimonial-slider/testimonials';
import CaseStudy from '../../components/case-study/case-study';

const serviceData = {
  imageUrl: '', // Replace with your image URL
  articleLink: 'https://example.com/article', // Replace with your article link
};



const Servicepage = () => {
  return (
    <>
  <div className='servicePage'>
      <div className='service-banner'> 
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-md-8 left-sec'>
              <h2>High <span>Cali</span>ber Services</h2>
              <h3>industry-leading home delivery</h3>
              <p className='first-child'>We provide the very best home delivery in the US, offering a wide range of flexible services carried out by our friendly and well-trained teams of specialists.</p>
              <div className='row feature'>
                <div className='col-md-2'>
                  <img src={process.env.PUBLIC_URL + "/images/24-hours.svg"} alt="" />
                  <h4>Next day delivery</h4>
                </div>
                <div className='col-md-2'>
                  <img src={process.env.PUBLIC_URL + "/images/april.svg"} alt="" />
                  <h4>Choice-of-Day Delivery</h4>
                </div>
                <div className='col-md-2'>
                  <img src={process.env.PUBLIC_URL + "/images/room.svg"} alt="" />
                  <h4>Room of Choice</h4>
                </div>
                <div className='col-md-2'>
                  <img src={process.env.PUBLIC_URL + "/images/screwdriver.svg"} alt="" />  
                  <h4>Assembly</h4>
                </div>
                <div className='col-md-2'>
                  <p>and much more...</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 right-sec'>
              <img src={process.env.PUBLIC_URL + "/images/Handy-men.png"} alt="service" />  
            </div>
          </div>
        </div>
      </div>


      <div className='about-srvc'>
        <div className='container'>
            <div className='row'>
              <div className='col-md-3 p-0'>
                <h2>Your customers can expect</h2>
                <ul>
                  <li>Call to arrange a suitable delivery time</li>
                  <li>Three hour delivery window</li>
                  <li>Pre-delivery courtesy call prior to arrival</li>
                  <li>Place furniture in a room of their choice</li>
                  <li>Build and install furniture</li>
                  <li>Remove and dispose of packaging</li>
                  <li>Recycle or dispose of old furniture</li>
                  <li>Smiles on their doorstep, whatever the weather</li>
                </ul>
                <h2>We can offer you</h2>
                <ul>
                  <li>Products collected from your warehouse or supplier</li>
                  <li>Store & manage your stock in our own warehouse</li>
                  <li>Full delivery management system</li>
                  <li>Ensure that we deliver your items without damage</li>
                </ul>
              </div>

              <div className='col-md-6 bolt-on'>
                <h2>Bolt-on options</h2>
                <p>Above and beyond our standard ‘delivery to the door’ service at a convenient time, we offer several ‘bolt-on’ options to provide additional help for your customers – all to ensure their delivery experience matches your own high standards, again and again.</p>
                <div className='row options mt-4'>
                  <div className='col-sm-2 pe-0 text-start'>
                    <img src={process.env.PUBLIC_URL + "/images/roomChoice.png"} alt="" />  
                  </div>
                  <div className='col-sm-10 p-0'>
                    <h3>Room of Choice</h3>
                    <p>Delivering to a room of choice, carefully, safely and without damage or fuss.</p>
                  </div>
                </div>
                <div className='row options'>
                  <div className='col-sm-2 pe-0 text-start'>
                    <img src={process.env.PUBLIC_URL + "/images/wellBuilt.png"} alt="" /> 
                  </div>
                  <div className='col-sm-10 p-0'>
                    <h3>Well Built & Installed</h3>
                    <p>Our trained delivery team can correctly build and install furniture and electrical items.</p>
                  </div>
                </div>
                <div className='row options'>
                  <div className='col-sm-2 pe-0 text-start'>
                    <img src={process.env.PUBLIC_URL + "/images/packagRemoval.png"} alt="" /> 
                  </div>
                  <div className='col-sm-10 p-0'>
                    <h3>Packaging Removal</h3>
                    <p>Our teams can also dispose of all product packaging with our own recycling facility.</p>
                  </div>
                </div>
                <div className='row options'>
                  <div className='col-sm-2 pe-0 text-start'>
                    <img src={process.env.PUBLIC_URL + "/images/furnitureRemoval.png"} alt="" />  
                  </div>
                  <div className='col-sm-10 p-0'>
                    <h3>Old Furniture Removal</h3>
                    <p>Finally, we not only deliver hard-to-handle items but can take them away too.</p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 p-0'>
                <h2>Warehousing</h2>
                <p>We are located centrally in California, just minutes away from Interstate 99. Operating from our single hub reduces the risk of loss or damage to your furniture, and our warehouses are managed with the latest technology in inventory control.</p>
                <ul>
                  <li>Two-man handling</li>
                  <li>The highest Health & Safety standards</li>
                  <li>Use of mechanical equipment to move products</li>
                  <li>Unloading of containers</li>
                  <li>Secure storage of goods</li>
                  <li>Pick and pack service</li>
                  <li>Computer controlled inventory</li>
                  <li>Comprehensively trained and experienced warehouse team</li>
                </ul>
              </div>
            </div>
        </div>
      </div>


      <div className='gallery'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-2 ps-0 pe-2 '>
              <div className='row  m-0'>
                <div className='col-md-12 p-0 pb-2 m-0'>
                  <img src={process.env.PUBLIC_URL + "/images/gallery-1.jpg"} alt="gallery" />
                </div>
                <div className='col-md-12 p-0 m-0'>
                  <img src={process.env.PUBLIC_URL + "/images/gallery-2.jpg"} alt="gallery" />
                </div>
              </div>
            </div>
            <div className='col-sm-4 ps-0 pe-2'>
              <img src={process.env.PUBLIC_URL + "/images/gallery-3.jpg"} alt="gallery" />
            </div>
            <div className='col-sm-2 ps-0 pe-2'>
              <div className='row  m-0'>
                <div className='col-md-12 p-0 pb-2 m-0'>
                  <img src={process.env.PUBLIC_URL + "/images/gallery-4.jpg"} alt="gallery" />
                </div>
                <div className='col-md-12 p-0 m-0'>
                  <img src={process.env.PUBLIC_URL + "/images/gallery-5.jpg"} alt="gallery" />
                </div>
              </div>
            </div>
            <div className='col-sm-4 ps-0 pe-0'>
              <img src={process.env.PUBLIC_URL + "/images/gallery-6.jpg"} style={{height: "98%"}} alt="gallery" />
            </div>
          </div>
        </div>
      </div>
      
      <div className='partnersMAin'>
      <div className='newsPartners'>
        <h2 className='text-center'>Our Partners</h2>
        <Partners />
      </div>
      </div>


      <div className='caseStudy'>
        <div className='container p-0'>
          <h2 className='text-start'>Case Study</h2>
          <CaseStudy />
        </div>
        
      </div>

      <div className='our-people'>
        <div className='container p-0'>
          <div className='row'>
            <div className='col-md-8 textCol'>
          <h2>Our People</h2>
          <div className='row valueColm'>
            <div className='col-md-5 pe-0'>
              <p>We value <span>the whole customer experience,</span> and we aim to meet the highest standards across a wide variety of tasks. That’s why we’ve created our own dedicated training academy – ensuring that our delivery teams have all the skills required to provide the very best service experience for your customers.</p>
              <p>Our people are our product, so the whole team undertake a tailored training programme to provide the very best delivery service standards.</p>
            </div>
            <div className='col-md-5 pe-0'>
              <p>Our training includes furniture handling, furniture building, exacting Health & Safety standards as well as all the little things that make a big difference for your customers.</p>
              <p>All in all, we’re constantly looking for staff who are genuinely people-centric, or in other words… really, really nice.</p>
            </div>
          </div>
          </div>
          <div className='col-md-4 text-end'>
            <img src={process.env.PUBLIC_URL + "/images/PeopleRight.png"} alt="" />
          </div>
          </div>
        </div>
        </div>
        <div className='service-main'>
          <div className='container'>
            <div className='row srvcSlider'>
              <div className='col-md-2'>
                <img src={process.env.PUBLIC_URL + "/images/head.jpg"} alt="class-head" />
                <h3>Head of the class</h3>
                <p>Once we’ve found people with the right attitude – we invest time and energy into helping them ‘learn the ropes’ well.</p>
              </div>
              <div className='col-md-2'>
                <img src={process.env.PUBLIC_URL + "/images/getting.jpg"} alt="getting" />
                <h3>Getting from A to B</h3>
                <p>In order to get to a customer on-time, we help our teams improve their navigation and driving skills.</p>
              </div>
              <div className='col-md-2'>
                <img src={process.env.PUBLIC_URL + "/images/brains.jpg"} alt="brains" />
                <h3>Brains as well as brawn</h3>
                <p>All our teams are thoroughly trained in how to move large and awkward items safely and without damage.</p>
              </div>
              <div className='col-md-2'>
                <img src={process.env.PUBLIC_URL + "/images/prepared.jpg"} alt="class-head" />
                <h3>Be prepared</h3>
                <p>We check a home before moving items inside, measuring doors and tight-spaces to ensure the minimum of fuss.</p>
              </div>
              <div className='col-md-2'>
                <img src={process.env.PUBLIC_URL + "/images/putting.jpg"} alt="class-head" />
                <h3>Putting it all together</h3>
                <p>Each team is thoroughly trained in how to assemble and install every item of furniture and equipment we deliver.</p>
              </div>
              <div className='col-md-2'>
                <img src={process.env.PUBLIC_URL + "/images/people-qualified.jpg"} alt="class-head" />
                <h3>Qualified and Ready</h3>
                <p>After three weeks of training, our teams are ready to provide a great two-man delivery service to your customers.</p>
              </div>
            </div>
          </div>
        </div>



      <div className='heartFelt'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12 heartFeltCustomer'>
                    <h2 className='text-start'>what our customers think</h2>

                        <Testimonials />

                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 heartFeltContent'>
                        <h2>Heart Felt</h2>
                        <p>BJS is a corporate built on compassionate values; named after Baba Jaswant Singh Ji - who remains the spiritual inspiration and guidance behind the brand after his death in 2020 – BJS has an authentic desire to make a lasting and positive impact on the world. </p>
                        <Link to="/our-values">Our Values</Link>
                    

                    </div>
                </div>
        </div> 


      <Enquiries />

  </div>
    </>
  );
};
export default Servicepage;