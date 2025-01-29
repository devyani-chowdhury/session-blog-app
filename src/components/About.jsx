import React from 'react';
import BlogTile from './BlogTile';
import { BlogProvider } from '../store/BlogContext';
import './css/About.css';
function About() {
    return (
      <BlogProvider>
        <div className="page">
          <h1>About Us</h1>
          <p>This is a simple blog application to share your thoughts and ideas.</p>
          <div className='TileList'>
            <BlogTile blogId={1} />
            <BlogTile blogId={2} />
          </div>
          {/* Add more BlogTile components as needed */}
        </div>
    </BlogProvider>
    );
  }

export default About;