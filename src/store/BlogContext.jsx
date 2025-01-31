import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'First Blog', author: 'Author One', content: 'Content of the first blog' },
    { id: 2, title: 'Second Blog', author: 'Author Two', content: 'Content of the second blog' }
  ]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};