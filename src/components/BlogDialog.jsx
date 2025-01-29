// Blog Dialog Component
function BlogDialog({ blog, onClose }) {
    return (
      <div className="dialog">
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <p>By {blog.author}</p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }

export default BlogDialog;