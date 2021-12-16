import React, { useContext } from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { deletePostById } from "../services/posts";
import { UserContext } from "../context/userContext";
import { PostsContext } from "../context/postsContext";

const UserPost = ({ post }) => {
  const { userPosts, setUserPosts } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);

  const deletePost = () => {
    deletePostById(post.id);
    setUserPosts(userPosts.filter((item) => item.id !== post.id));
    setPosts(posts.filter((item) => item.id !== post.id));
  };
  return (
    <Card key={post.id} data-index={post.i}>
      <Card.Content textAlign="left">
        <Card.Header>{post.title}</Card.Header>
        <Card.Meta>{post.author}</Card.Meta>
        <Card.Meta textAlign="right">{post.date}</Card.Meta>
        <Card.Description>{post.description}</Card.Description>
        <br />
        <Button> Read more </Button>
      </Card.Content>
      <Card.Content extra textAlign="left">
        <Icon name="like" />
        {post.likes_count} likes <Link to={`/edit-post/${post.id}`}>Edit</Link>{" "}
        <Button onClick={deletePost}>Delete</Button>
      </Card.Content>
    </Card>
  );
};
export default UserPost;
