import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <div>
        <Menu fixed="bottom fixed">
          <Menu.Item link>
            <Link to="https://docs.google.com/document/d/1XPA8YRSIOZ76fcg6IUIq0EbJ5eA_4KfejXNcFe7l8iM/">
              Read my Resume
            </Link>
          </Menu.Item>
          <Menu.Item link>
            <Link to="https://www.linkedin.com/in/jarrod-finn-41175665/">
              LinkedIn
            </Link>
          </Menu.Item>
          <Menu.Item link>
            <Link to="/https://github.com/jarrodfinn">Github</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
};