// BlogTile.jsx
import React, { useContext, useState } from 'react';
import { BlogContext } from '../store/BlogContext';
import Modal from './Modal';
import './css/blogTile.css';

function BlogTile({ blogId }) {
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find(b => b.id === blogId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!blog) return null;

  return (
    <div className='BlogTile'>
      <h2 onClick={() => setIsModalOpen(true)}>{blog.title}</h2>
      <p>{blog.author}</p>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <p>{blog.content}</p>
        </Modal>
      )}
    </div>
  );
}

export default BlogTile;