import React, { useState, useContext } from 'react';
import { BlogContext } from '../store/BlogContext';
import { Form } from 'react-bootstrap';
import './css/CreateForm.css';

function CreateBlog() {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    const newBlog = { title, content, author: anonymous ? "Anonymous" : author };
    setBlogs([...blogs, newBlog]);
    setTitle("");
    setContent("");
    setAuthor("");
    window.location.href = "/";
  };


  return (
    <div className="page">
      <h1>Create a Blog Post</h1>
      <Form onSubmit={handleSave} className="create-blog-form">
        <Form.Group controlId="formTitle" className="form-group">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formContent" className="form-group">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formAnonymous" className="form-group">
          <Form.Check type="checkbox" label="Post Anonymously" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
        </Form.Group>
        {!anonymous && (
          <Form.Group controlId="formAuthor" className="form-group">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </Form.Group>
        )}
        <button type="submit" className="SaveButton">Save</button>
        <button type="button" className="CancelButton" onClick={() => window.location.href = "/"}>Cancel</button>
      </Form>
    </div>
  );
}

export default CreateBlog;
