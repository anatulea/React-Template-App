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

import { getPosts } from "./services/posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/edit-post" element={<EditPost />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/posts" element={<PostsList posts={posts} />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
