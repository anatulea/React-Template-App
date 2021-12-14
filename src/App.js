import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import PostsList from "./components/PostsList";
import Dashboard from "./components/Dashboard";
import posts from "./data";
import EditPost from "./components/EditPost";

function App() {
  console.log(`posts`, posts);
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
