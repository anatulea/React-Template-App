import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import PostsList from "./components/PostsList";
import Dashboard from "./components/Dashboard";
import EditPost from "./components/EditPost";
import ProductList from "./components/ProductList";

import { getPosts } from "./services/posts";
import { PostsContext } from "./context/postsContext";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="App">
      <Navigation />
      <PostsContext.Provider value={{ posts, setPosts }}>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </PostsContext.Provider>
    </div>
  );
}

export default App;
