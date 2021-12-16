import axios from "axios";

const postBaseURl = "http://localhost/api/posts/";
const userBaseURl = "http://localhost/api/user/";

export const getPosts = () => {
  return axios
    .get(postBaseURl)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getPostsByUserId = (user_id) => {
  return axios
    .get(`${userBaseURl}${user_id}/posts`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const createPost = (body) => {
  return axios
    .post(postBaseURl, body)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const deletePostById = (post_id) => {
  return axios.delete(`${postBaseURl}${post_id}`);
};

export const getPostById = (post_id) => {
  return axios
    .get(`${postBaseURl}${post_id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const updatePost = (body, post_id) => {
  return axios
    .put(`${postBaseURl}${post_id}`, body)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
