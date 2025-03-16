import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import CreateAccount from "./components/CreateAccount";
import Store from "./components/Redux/StoreSlice";
import "tailwindcss/tailwind.css";

const App = () => {
  const username = useSelector((state) => state.user.username);
  return (
    <Router>
      <div className="p-4 border-b flex justify-between">
        <nav className="space-x-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/create-blog" className="text-blue-500 hover:underline">Create Blog</Link>
          <Link to="/create-account" className="text-blue-500 hover:underline">Create Account</Link>
        </nav>
        <span className="text-gray-700">{username}</span>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
};

export default () => (
  <Provider store={Store}>
    <App />
  </Provider>
);
