import React from 'react'
import "./training-academy.scss";
import Gallery from '../../../components/gallery/gallery';
import DifferentTechnology from "../../../components/differenttechnology/differenttechnology";
import Partners from '../../../components/partners-slider/partners';

const imagesForGallery = {
  leftColumn: [
    "/images/image 41.jpg",
    "/images/image 42.jpg",
    "/images/image 43.jpg"
  ],
  rightColumn: [
    "/images/image 44.jpg",
    "/images/image 45.jpg",
    "/images/image 46.jpg"
  ]
};

const TrainingAcademy = () => {
  return ( 
    <section className="about-training-academy">
        <div className='training-academy'>
            <div className='container-xy'>
                <h2 className="about-title">Training Academy</h2>
                <div className="row align-items-center">
                    <div className='col-md-7 left-coulmn'>
                        <p className='jt-p'>Making it look so easy takes a lot of hard work from our dedicated teams</p>
                        <p className='sm-p'>Our delivery service teams are brand ambassadors, customer service agents, and experts at moving your products. We aim to provide the very best in training and support for our teams.<br /><br />
                                            Our life size training academy, based at a top secret location (just off J9 M6), is a unique way for our teams to hone their home delivery skills. <br /><br />
                                            Practice does indeed make perfect so when it comes to crossing thresholds for our customers, our teams are confident at tight corners and awkward spaces.
                        </p>
                        <div className='link-btn text-start'> 
                            <a href='#'>
                                Join the BJS Family <img src={process.env.PUBLIC_URL + "/images/errow.png"} alt="image" /> 
                            </a>
                        </div>
                    </div>
                    <div className='col-md-5 right-column'>
                        <img src={process.env.PUBLIC_URL + "/images/Untitled-1 1.png"} alt="image" />
                    </div>
                </div>
            </div>
        </div>

        <Gallery images={imagesForGallery} />

        <DifferentTechnology
          layout="layout1"
          title="charity & community"
          content="From its very inception spiritual guidance was sought for the BJS venture from Baba Jaswant Singh Ji– whom the company is named after. Prior to his death in 2020 Baba Jaswant Singh Ji was based in Punjab and was the founder of a trust that runs projects for the welfare of humanity; provision of health care facilities, higher medical education and to show ‘the path of spiritual righteousness’. To ‘foster human values and welfare with esteemed devotion indeed’. "
          customContent="BJS continues to act on the pledge and commitment to do good."
          link="#"
          imageUrl1="/images/Clip path group (1).jpg" 
          customClass="training-ac-layout"
        />
        <div className='partnersMAin'>
            <div className='newsPartners'>
                <h2 className='text-center'>Our Partners</h2>
                <Partners />
            </div> 
        </div>
    </section>
  )
}

export default TrainingAcademy;