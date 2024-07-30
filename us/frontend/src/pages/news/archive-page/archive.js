import React, { useState, useEffect } from 'react';
import './archive.scss';
import { Link } from 'react-router-dom';
import newsData from '../../../api/news.json';

const Archive = () => {
  const [news, setNews] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to control showing all articles

  useEffect(() => {
    // Simulate fetching data from news.json
    setNews(newsData);
  }, []);

  const initialArticles = 5; // Number of articles to show initially
  const articlesToDisplay = showAll ? news : news.slice(0, initialArticles);

  const handleShowMore = () => {
    setShowAll(true); // Show all articles
  };

  const handleShowLess = () => {
    setShowAll(false); // Show only the initial set
  };

  return (
    <div className='archiveWrapper'>
      <div className='archivewrapperInner'>  {/* New wrapper div for better structure */}
      <div className='introSection d-flex justify-content-between align-items-center'>  {/* New intro section */}
        <Link to="/news">
          <img src={process.env.PUBLIC_URL + "/images/articlebackarrow.png"} alt="" className='comaImg' /> News Home
        </Link>
        <div className='newsMenu'>
          <p>Stories by type</p>
          <div className='d-flex gap-2'>
            <button>All</button>
            <button>Articles</button>
            <button>Videos</button>
          </div>
        </div>
        <p>{news.length} new stories</p> 
      </div>
      </div>

      <div className='archiveMain'>
        <div className='container imageSection'>
          <div className='row justify-content-between'>
            <div className='col-md-12 mainImg p-0'>
              {articlesToDisplay.map((newsItem) => (
                <div key={newsItem.id} className='singleNews d-flex'>
                  <img src={process.env.PUBLIC_URL + newsItem.imageUrl} alt="" />
                  <div className='mainImgContent d-flex justify-content-between align-items-center'>
                    <div className='articleListdescrip'>
                      <Link className='headLink' to={`/article/${newsItem.id}`}>
                        <h3 className='text-start'>{newsItem.heading}</h3>
                      </Link>
                      <div className='d-flex justify-content-start gap-3 article'>
                        <p><img src={process.env.PUBLIC_URL + "/images/articleIcon.png"} alt="" className='iconMain' /> {newsItem.article}</p>
                        <p>{newsItem.datePosted}</p>
                      </div>
                      <p className='describe text-start'>{newsItem.shortdescription}</p>
                    </div>
                    <div className='timeLink'>
                      <p><img src={process.env.PUBLIC_URL + "/images/clock.png"} alt="" className='iconMain' /> {newsItem.time}</p>
                      <Link className='readLink' to={`/article/${newsItem.id}`}>Read Article <img src={process.env.PUBLIC_URL + "/images/nextArrow.png"} alt="" className='iconMain' /></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='row justify-content-center'>
            {!showAll ? (
              <button className='showMoreButton' onClick={handleShowMore}>
                Show More
              </button>
            ) : (
              <button className='showMoreButton' onClick={handleShowLess}>
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
