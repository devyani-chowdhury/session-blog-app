import React, { useContext } from 'react';
import { BlogContext } from '../store/BlogContext';
import BlogTile from './BlogTile';
import './css/About.css';

function Home() {
  const {blogs} = useContext(BlogContext);
  console.log(blogs.length);
  return (
    <div className="page">
      <h1>Welcome to Our Blog!</h1>
      <p>Discover the latest blogs and updates here.</p>
      <div className="TileList">
        {blogs.length === 0 && <p>No blogs found.</p>}
        { blogs.length > 0 && blogs.map((blog) => (
        <BlogTile key={blog.id} blogId={blog.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;

// use vs usecontext?
//  use can be used in blocks of code, while usecontext is used in functional components
// use is used to import hooks, while usecontext is used to import context
// use is in React 19 and above, while usecontext is in React 16.8 and above
