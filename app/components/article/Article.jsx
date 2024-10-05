import React from 'react';
import Image from 'next/image';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="cramer__blog-container_article">
    <div className="cramer__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" width={500} height={300}/>
    </div>
    <div className="cramer__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;