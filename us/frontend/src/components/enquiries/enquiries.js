import React from 'react';
import "./enquiries.scss";



const Enquiries = () => {
  return (
    <>

    <div className='enquiry'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-lg-6 col-md-6 col-sm-12 sec-leftone'>
            <h2>Enquiries</h2>
            <a href="tel:+15593385575">559 338 5575</a>
            <p>7 Days: 8am - 6pm</p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h2>Sales</h2>
            <a href="tel:+16194523931">619 452 3931</a>
            <p>Weekdays: 9am - 5pm</p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
export default Enquiries;