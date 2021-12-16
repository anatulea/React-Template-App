import React, { useState, useContext } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { createPost } from "../services/posts";
import { UserContext } from "../context/userContext";
import { PostsContext } from "../context/postsContext";

const initialState = {
  title: "",
  text_content: "",
  description: "",
  author: "second Author",
  likes_count: 0,
  user_id: 7,
};

const AddPost = () => {
  const [newPost, setNewPost] = useState(initialState);
  const { userPosts, setUserPosts } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);
  // console.log(`newPost in postList`, newPost);

  const handleInputChanges = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost(newPost)
      .then((res) => {
        setUserPosts([res, ...userPosts]);
        setPosts([res, ...posts]);
        setNewPost(initialState);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form className="add-post-input" onSubmit={handleSubmit}>
      <Form.Field>
        <input
          placeholder="Title"
          name="title"
          type="text"
          onChange={handleInputChanges}
          value={newPost.title}
        />
      </Form.Field>
      <Form.Field>
        <input
          placeholder="Give a short description"
          name="description"
          type="text"
          onChange={handleInputChanges}
          value={newPost.description}
        />
      </Form.Field>
      <Form.Field>
        <TextArea
          rows={2}
          name="text_content"
          placeholder="Tell us your story"
          style={{ minHeight: 100 }}
          onChange={handleInputChanges}
          value={newPost.text_content}
        />
      </Form.Field>

      <Button primary style={{ marginTop: "10px" }}>
        Add Post
      </Button>
    </Form>
  );
};
export default AddPost;
