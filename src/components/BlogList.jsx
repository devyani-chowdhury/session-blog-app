import { Link } from "react-router-dom";

function BlogList() {
    const blogs = [
      { id: 1, title: "Understanding React Context API" },
      { id: 2, title: "Styling in React with CSS" },
      { id: 3, title: "Introduction to React Router" }
    ];
  
    return (
      <div className="page">
        <h1>Blog List</h1>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default BlogList;