import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Menu>
      <Link to="/">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
      </Link>

      <Link to="/dashboard">
        <Menu.Item
          name="dashboard"
          active={activeItem === "dashboard"}
          onClick={handleItemClick}
        />
      </Link>

      <Link to="/posts">
        <Menu.Item
          name="posts"
          active={activeItem === "posts"}
          onClick={handleItemClick}
        />
      </Link>

      <Menu.Menu position="right">
        <Link to="/login">
          <Menu.Item
            name="LogIn"
            active={activeItem === "LogIn"}
            onClick={handleItemClick}
          />
        </Link>

        <Link to="/register">
          <Menu.Item
            name="Register"
            active={activeItem === "Register"}
            onClick={handleItemClick}
          />
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;
