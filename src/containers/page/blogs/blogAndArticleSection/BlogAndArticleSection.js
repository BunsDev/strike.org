import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { fetchAllPosts } from 'utilities/fetchSanityPosts';
import PlaceHolderBlog from 'assets/img/blogs/t-blog-1.png';
import TopBlogsCard from './topBlogsCard/TopBlogsCard';
import './BlogAndArticleSection.scss';

const BlogAndArticleSection = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetchAllPosts();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    posts.length > 0 && (
      <div className="wrap-blogs-top flex">
        <Link to={`/blog-detail/${posts[0].slug.current}`} className="main">
          <img alt="placeholder blog" src={PlaceHolderBlog} />
          <p className="blog-date main-margin">
            {moment(posts[0].publishedAt).format('ll')}
          </p>
          <Typography className="blog-titlt-main">{posts[0].title}</Typography>
          <p className="main-description">{posts[0].description}</p>
        </Link>
        <div className="col-2 flex flex-column">
          {posts.slice(1, posts.length).map((item, idx) => {
            return <TopBlogsCard key={idx} item={item} />;
          })}
        </div>
      </div>
    )
  );
};

export default BlogAndArticleSection;
