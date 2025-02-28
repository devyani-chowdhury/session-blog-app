import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.username);
    const [blog, setBlog] = useState({ title: "", content: "", author: username });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setBlog({ ...blog, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: "ADD_BLOG", payload: { ...blog, id: Date.now() } });
      navigate("/");
    };
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Create Blog</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={blog.title} onChange={handleChange} className="block p-2 border w-full" required />
          <textarea name="content" placeholder="Content" value={blog.content} onChange={handleChange} className="block p-2 border w-full" required></textarea>
          <input type="text" name="author" placeholder="Author" value={blog.author} onChange={handleChange} className="block p-2 border w-full" disabled={username !== "Guest User"} required />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
        </form>
      </div>
    );
  };

export default CreateBlog;