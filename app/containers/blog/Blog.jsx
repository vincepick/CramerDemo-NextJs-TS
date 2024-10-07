import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="cramer__blog section__padding" id="blog">
    <div className="cramer__blog-heading">
      <h1 className="gradient__text">Keep Up To Date With Cramer</h1>
    </div>
    <div className="cramer__blog-container">
      <div className="cramer__blog-container_groupA">
        <Article imgUrl={blog01} date="August 5, 2023" text="The Platform: A novel non-invasive fish monitoring method?" />
      </div>
      <div className="cramer__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2023" text="Summer Internships at CFS" />
        <Article imgUrl={blog03} date="Aug 21, 2021" text="Cramer Retreat 2021" />
        {/* <Article imgUrl={blog04} date="May 5, 2023" text="Remembering Our Founder, Steve Putnam Cramer" /> */}
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Remembering Our Founder, Steve Putnam Cramer" />
      </div>
    </div>
  </div>
);

export default Blog;