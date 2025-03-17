import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, Navigate } from 'react-router-dom';
import Home from './components/Home';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import './App.css';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <div className={`app ${theme}`}>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}
export default App;
