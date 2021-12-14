import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/posts" element={<PostsList />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
