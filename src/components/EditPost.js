import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, TextArea, Button } from "semantic-ui-react";
import { getPostById, updatePost } from "../services/posts";
import { PostsContext } from "../context/postsContext";

const initialState = {
  title: "",
  text_content: "",
  description: "",
  author: "second Author",
  likes_count: 0,
  user_id: 7,
};

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostsContext);

  const [post, setPost] = useState(initialState);

  useEffect(() => {
    getPostById(id).then((post) => setPost(post));
  }, []);

  const [updatedPost, setUpdatedPost] = useState(post);

  const handleInputChanges = (e) => {
    setUpdatedPost({
      ...updatedPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updatePost(updatedPost, id)
      .then((res) => {
        setPosts(posts.map((post) => (post.id === id ? res : post)));
        navigate(-1);
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
          value={updatedPost.title}
          onChange={handleInputChanges}
        />
      </Form.Field>
      <Form.Field>
        <input
          placeholder="Give a short description"
          name="description"
          type="text"
          value={updatedPost.description}
          onChange={handleInputChanges}
        />
      </Form.Field>
      <Form.Field>
        <TextArea
          rows={2}
          name="text_content"
          placeholder="Tell us your story"
          style={{ minHeight: 100 }}
          value={updatedPost.text_content}
          onChange={handleInputChanges}
        />
      </Form.Field>

      <Button primary style={{ marginTop: "10px" }}>
        Update Post
      </Button>
    </Form>
  );
};
export default EditPost;
