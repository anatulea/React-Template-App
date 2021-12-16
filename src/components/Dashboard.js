import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { getPostsByUserId } from "../services/posts";
import AddPost from "./AddPost";
import UserPostsList from "./UserPostsList";
import { UserContext } from "../context/userContext";

const Dashboard = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    getPostsByUserId(7).then((posts) => setUserPosts(posts));
  }, []);

  return (
    <UserContext.Provider value={{ userPosts, setUserPosts }}>
      <Container>
        <AddPost />
        <br />
        <UserPostsList />
      </Container>
    </UserContext.Provider>
  );
};
export default Dashboard;
