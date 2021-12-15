import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { getPostsByUserId } from "../services/posts";
import AddPost from "./AddPost";
import UserPostsList from "./UserPostsList";
import { UserContext } from "../context/userContext";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsByUserId(1).then((posts) => setPosts(posts));
  }, []);

  return (
    <UserContext.Provider value={{ posts, setPosts }}>
      <Container>
        <AddPost />
        <br />
        <UserPostsList />
      </Container>
    </UserContext.Provider>
  );
};
export default Dashboard;
