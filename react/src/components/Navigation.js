import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Component } from "react";
import "./styles/style.css"
export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Menu className="top fixed">
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
      </div>
    );
  }
}
