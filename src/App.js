import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import CreateBlog from './components/CreateBlog';
import CreateAccount from './components/CreateAccount';
import NotFound from './components/NotFound';
import { BlogProvider } from './store/BlogContext';

// Theme Context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BlogProvider>
        <Router>
          <div className={`app ${theme}`}>
            <header className="header">
              <nav className="nav-links">
                <Link to="/" className="nav-link brand">TheDevWays - <small style={{'font-style':'italic'}}>Blogging App</small></Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/create-blog" className="nav-link">Create Blog Post</Link>
                <Link to="/create-account" className="nav-link">Create Account</Link>
              </nav>
              <button className='theme-toggle' onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
            </header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/create-blog" element={<CreateBlog />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </div>
        </Router>
      </BlogProvider>
    </ThemeContext.Provider>
  );
}

export default App;