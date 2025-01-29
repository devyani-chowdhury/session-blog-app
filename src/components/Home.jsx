import React, { useContext } from 'react';
import { BlogContext } from '../store/BlogContext';

function Home() {
  const {blogs, setDialogBlog} = useContext(BlogContext);

  return (
    <div className="page">
      <h1>Welcome to Our Blog!</h1>
      <p>Discover the latest blogs and updates here.</p>
      <div className="blog-list">
        {blogs.length === 0 && <p>No blogs found.</p>}
        { blogs.length > 0 && blogs.map((blog, index) => (
          <div key={index} className="blog-tile" onClick={() => setDialogBlog(blog)}>
            <h2>{blog.title}</h2>
            <p>By {blog.author || "Anonymous"}</p>
          </div>
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
