import React, { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
    const blogs = useSelector((state) => state.blogs);
    const [selectedBlog, setSelectedBlog] = useState(null);
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Welcome to the Blog!</h1>
        <ul className="mt-4">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => setSelectedBlog(blog)}
            >
              {blog.title}
            </li>
          ))}
        </ul>
        {selectedBlog && (
          <div className="mt-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
            <span className="text-sm italic">By {selectedBlog.author}</span>
          </div>
        )}
      </div>
    );
  };

export default Home;