// BlogContext.jsx
import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs] = useState([
    { id: 1, title: 'First Blog', author: 'Author One', content: 'Content of the first blog' },
    { id: 2, title: 'Second Blog', author: 'Author Two', content: 'Content of the second blog' },
    // Add more blogs as needed
  ]);

  return (
    <BlogContext.Provider value={{ blogs }}>
      {children}
    </BlogContext.Provider>
  );
};