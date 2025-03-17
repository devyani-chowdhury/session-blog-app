import { useParams, Navigate } from "react-router-dom";
function BlogDetails() {
    const { id } = useParams();
    const blogs = [
      { id: "1", title: "Understanding React Context API", content: "The Context API allows you to share state across your entire app easily..." },
      { id: "2", title: "Styling in React with CSS", content: "In React, CSS can be added using regular stylesheets, inline styles, or CSS modules..." },
      { id: "3", title: "Introduction to React Router", content: "React Router is a powerful library for handling routing in React applications..." }
    ];
  
    const blog = blogs.find(blog => blog.id === id);
  
    return blog ? (
      <div className="page">
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    ) : (
      <Navigate to="/404" />
    );
  }

export default BlogDetails;