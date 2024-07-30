// Newspage.js
import React, { useState, useEffect } from 'react';
import './newspage.scss';
import { Link } from 'react-router-dom';
import Testimonials from '../../../components/testimonial-slider/testimonials';
import Partners from '../../../components/partners-slider/partners';
import Media from '../../../components/media-slider/media';
import newsData from '../../../api/news.json'


const Newspage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simulate fetching data from news.json
    setNews(newsData);
  }, []);

  const viewedStories = 5; // Static value for viewed stories
  const totalStories = news.length;
  const percentage = (viewedStories / totalStories) * 100;

  return (
    <div className='newsMain'>
      <div className='container imageSection'>
        <div className='row justify-content-between listnewsDesktop'>
          <div className='col-md-6 mainImg p-0'>
            <div className='singleNews'>
              <img src={process.env.PUBLIC_URL + newsData[0].imageUrl} alt="" />
              <div className='mainImgContent'>
                <div className='row'>
                  <div className='col-md-9'>
                  <Link className='headLink' to={`/article/${news.id}`}><h3 className='text-start'>{newsData[0].heading}</h3></Link>
                  </div>
                  <div className='col-md-3 d-flex justify-content-between article'>
                    <p><img src={process.env.PUBLIC_URL + "/images/articleIcon.png"} alt="" className='iconMain' /> {newsData[0].article}</p>
                    <p>{newsData[0].datePosted}</p>
                  </div>
                </div>
                <p className='description text-start'>{newsData[0].description}</p>
                <div className='d-flex justify-content-between articleTime'>
                  <p><img src={process.env.PUBLIC_URL + "/images/clock.png"} alt="" className='iconMain' /> {newsData[0].time}</p>
                  <Link to={`/article/${newsData[0].id}`}>Read Article <img src={process.env.PUBLIC_URL + "/images/nextArrow.png"} alt="" className='iconMain' /> </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 listNews'>
            {newsData.slice(1, 5).map((news) => (
              <div key={news.id} className='singleNews d-flex'>
                <img src={process.env.PUBLIC_URL + news.imageUrl} alt="" />
                <div className='mainImgContent'>
                <Link className='headLink' to={`/article/${news.id}`}><h3 className='text-start'>{newsData[0].heading}</h3></Link>
                  <div className='d-flex justify-content-start gap-3 article'>
                    <p><img src={process.env.PUBLIC_URL + "/images/articleIcon.png"} alt="" className='iconMain' /> {news.article}</p>
                    <p>{news.datePosted}</p>
                  </div>
                  <div className='d-flex justify-content-between timeLink'>
                    <p><img src={process.env.PUBLIC_URL + "/images/clock.png"} alt="" className='iconMain' /> {news.time}</p>
                    <Link to={`/article/${news.id}`}>Read Article <img src={process.env.PUBLIC_URL + "/images/nextArrow.png"} alt="" className='iconMain' /> </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

              
          <div className='listNews listnewsMobile p-0'>
            {newsData.slice(0, 5).map((news) => (
              <div key={news.id} className='singleNews d-flex'>
                <img src={process.env.PUBLIC_URL + news.imageUrl} alt="" />
                <div className='mainImgContent'>
                <Link className='headLink' to={`/article/${news.id}`}><h3 className='text-start'>{newsData[0].heading}</h3></Link>
                  <div className='d-flex justify-content-start gap-3 article'>
                    <p><img src={process.env.PUBLIC_URL + "/images/articleIcon.png"} alt="" className='iconMain' /> {news.article}</p>
                    <p>{news.datePosted}</p>
                  </div>
                  <div className='d-flex justify-content-between timeLink'>
                    <p><img src={process.env.PUBLIC_URL + "/images/clock.png"} alt="" className='iconMain' /> {news.time}</p>
                    <Link to={`/article/${news.id}`}>Read Article <img src={process.env.PUBLIC_URL + "/images/nextArrow.png"} alt="" className='iconMain' /> </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>



      </div>
      <div className='totalStories'>
        <p>You have viewed {viewedStories} out of {totalStories} stories</p>
        <div className="progress-bar">
          <div className="fill" style={{ width: `${percentage}%` }}></div>
        </div>
        <a href='/archive'>VIEW ALL STORIES</a>
      </div>
      <div className='mediaSlider'>
        <h2 className='text-center'>MENTIONED IN THE MEDIA</h2>
        <div className='sliderMediaMain'>
          <Media />
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
  );
};

export default Newspage;
