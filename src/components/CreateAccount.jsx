import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", username: "", password: "", confirmPassword: "" });
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (user.password !== user.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      dispatch({ type: "SET_USER", payload: user.username });
      navigate("/");
    };
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} className="block p-2 border w-full" required />
          <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} className="block p-2 border w-full" required />
          <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} className="block p-2 border w-full" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={user.confirmPassword} onChange={handleChange} className="block p-2 border w-full" required />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">Save</button>
        </form>
      </div>
    );
  };

export default CreateAccount;