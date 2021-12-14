import React from "react";
import { Container } from "semantic-ui-react";
import AddPost from "./AddPost";
import PostsList from "./PostsList";

const Dashboard = () => {
  return (
    <Container>
      <AddPost />
      <br />
      <PostsList posts={newposts} />
    </Container>
  );
};
export default Dashboard;
const newposts = [
  {
    id: 1,
    title: " My Post title",
    author: "Tom Smith",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi blandit cursus risus. Pharetra sit amet aliquam id diam maecenas ultricies mi. Sit amet cursus sit amet dictum. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Convallis convallis tellus id interdum. Risus quis varius quam quisque. Quam nulla porttitor massa id neque aliquam vestibulum. Integer malesuada nunc vel risus commodo viverra. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Egestas erat imperdiet sed euismod nisi porta. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Ut ornare lectus sit amet est. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Neque viverra justo nec ultrices dui. Lacinia at quis risus sed vulputate odio. Odio ut sem nulla pharetra diam sit amet nisl suscipit.",
    likes_count: 3,
    user_id: 10,
    date: "1 week ago",
  },
  {
    id: 4,
    title: " My Post title4",
    author: "Tom Smith",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi blandit cursus risus. Pharetra sit amet aliquam id diam maecenas ultricies mi. Sit amet cursus sit amet dictum. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Convallis convallis tellus id interdum. Risus quis varius quam quisque. Quam nulla porttitor massa id neque aliquam vestibulum. Integer malesuada nunc vel risus commodo viverra. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Egestas erat imperdiet sed euismod nisi porta. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Ut ornare lectus sit amet est. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Neque viverra justo nec ultrices dui. Lacinia at quis risus sed vulputate odio. Odio ut sem nulla pharetra diam sit amet nisl suscipit.",
    likes_count: 3,
    user_id: 11,
    date: "1 week ago",
  },
  {
    id: 2,
    title: " My Post title2",
    author: "Tom Smith",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi blandit cursus risus. Pharetra sit amet aliquam id diam maecenas ultricies mi. Sit amet cursus sit amet dictum. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Convallis convallis tellus id interdum. Risus quis varius quam quisque. Quam nulla porttitor massa id neque aliquam vestibulum. Integer malesuada nunc vel risus commodo viverra. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Egestas erat imperdiet sed euismod nisi porta. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Ut ornare lectus sit amet est. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Neque viverra justo nec ultrices dui. Lacinia at quis risus sed vulputate odio. Odio ut sem nulla pharetra diam sit amet nisl suscipit.",
    likes_count: 3,
    user_id: 12,
    date: "1 week ago",
  },
  {
    id: 3,
    title: " My Post title3",
    author: "Tom Smith",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi blandit cursus risus. Pharetra sit amet aliquam id diam maecenas ultricies mi. Sit amet cursus sit amet dictum. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Convallis convallis tellus id interdum. Risus quis varius quam quisque. Quam nulla porttitor massa id neque aliquam vestibulum. Integer malesuada nunc vel risus commodo viverra. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Egestas erat imperdiet sed euismod nisi porta. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Ut ornare lectus sit amet est. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Neque viverra justo nec ultrices dui. Lacinia at quis risus sed vulputate odio. Odio ut sem nulla pharetra diam sit amet nisl suscipit.",
    likes_count: 3,
    user_id: 13,
    date: "1 week ago",
  },
];
