import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './articlepage.scss';
import newsData from '../../../api/news.json';

const Articlepage = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simulate fetching data from news.json or any API
    setNews(newsData);
  }, []);

  const currentArticleId = parseInt(id);
  const article = news.find(article => article.id === currentArticleId);

  // Find the next article
  const nextArticleId = (currentArticleId % news.length) + 1;
  const nextArticle = news.find(article => article.id === nextArticleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="articlepageMain">
      <div className="articlepage">
        <div className='d-flex justify-content-between align-items-center'>
          <button>
            <Link to="/">
              <img src={process.env.PUBLIC_URL + "/images/articlebackarrow.png"} alt="" className='comaImg' /> Article List
            </Link>
          </button>
          <div className='articleHeader text-center'>
            <h3>{article.heading}</h3>
            <div className='d-flex justify-content-center gap-4'>
              <p><img src={process.env.PUBLIC_URL + "/images/articleIcon.png"} alt="" className='comaImg' /> {article.article}</p>
              <p>{article.datePosted}</p>
              <p><img src={process.env.PUBLIC_URL + "/images/watchWhite.png"} alt="" className='comaImg' /> {article.time}</p>
            </div>
          </div>
          <button>
            <Link to={`/article/${nextArticleId}`}>
              Next Article <img src={process.env.PUBLIC_URL + "/images/articlenextarrow.png"} alt="" className='comaImg' />
            </Link>
          </button>
        </div>
      </div>
      <div className='articleContentMain'>
        <img src={process.env.PUBLIC_URL + article.imageUrl} alt="" />
        <div className='row justify-content-between'>
          <div className='col-md-11 p-0 text-start descriptionArticles'>
            <h2>{article.heading}</h2>
            <p>{article.content}</p>
            <p>{article.content1}</p>
            <p>{article.content2}</p>
            <p>{article.content3}</p>
            <div className='whatSaid'>
              <h3>{article.clientname}</h3>
              <img src={process.env.PUBLIC_URL + article.comaimage} alt="" />
              <p>{article.clientinfo1}</p>
              <p>{article.clientinfo2}</p>
              <p>{article.clientinfo3}</p>
              <h4>{article.contentdescription}</h4>
            </div>
          </div>
          <div className='col-md-1 p-0 articlesocialMedia d-flex'>
            <h4>SHARE</h4>
            <a href=''><img src={process.env.PUBLIC_URL + "/images/linkedinIcon.png"} alt="" /></a>
            <a href=''><img src={process.env.PUBLIC_URL + "/images/facebookIcon.png"} alt="" /></a>
            <a href=''><img src={process.env.PUBLIC_URL + "/images/twiiterIcon.png"} alt="" /></a>
            <a href=''><img src={process.env.PUBLIC_URL + "/images/linkIcon.png"} alt="" /></a>
          </div>
        </div>
        <div className='d-flex justify-content-end articleLastsec align-items-center'>
          <p>Read Next Article :</p>
          {nextArticle ? (
            <Link to={`/article/${nextArticleId}`}>
              {nextArticle.heading}
            </Link>
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articlepage;
