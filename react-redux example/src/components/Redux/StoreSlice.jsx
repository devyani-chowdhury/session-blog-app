import { createStore, combineReducers } from "redux";

const initialBlogs = [
    { id: 1, title: "First Blog", content: "This is the first blog content", author: "Admin" },
    { id: 2, title: "Second Blog", content: "This is the second blog content", author: "Guest" },
    { id: 3, title: "Third Blog", content: "This is the third blog content", author: "User" },
  ];
  
  const blogReducer = (state = initialBlogs, action) => {
    if (action.type === "ADD_BLOG") {
      return [...state, action.payload];
    }
    return state;
  };
  
  const userReducer = (state = { username: "Guest User" }, action) => {
    if (action.type === "SET_USER") {
      return { username: action.payload };
    }
    return state;
  };
  
  const rootReducer = combineReducers({ blogs: blogReducer, user: userReducer });
  const Store = createStore(rootReducer);
export default Store;  