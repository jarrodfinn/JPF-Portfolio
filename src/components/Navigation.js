import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Menu>
      <Menu.Item link>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to="/contact">Contact</Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to="/portfolio">Portfolio</Link>
      </Menu.Item>
    </Menu>
  );
}
