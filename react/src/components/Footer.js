import React from "react";
import { Menu } from "semantic-ui-react";

export default function Footer() {
    return (
      <div>
        <Menu fixed="bottom fixed">
          <Menu.Item link>
            <a href="https://docs.google.com/document/d/1XPA8YRSIOZ76fcg6IUIq0EbJ5eA_4KfejXNcFe7l8iM/">
              Read my Resume
            </a>
          </Menu.Item>
          <Menu.Item link>
            <a href="https://www.linkedin.com/in/jarrod-finn-41175665/">
              LinkedIn
            </a>
          </Menu.Item>
          <Menu.Item link>
            <a href="https://github.com/jarrodfinn">Github</a>
          </Menu.Item>
        </Menu>
      </div>
    );
};