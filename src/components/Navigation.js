import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation";

class Navigation extends Component {
  render() {
    return (
      <div>
        <h3> Navigation Component </h3>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/documents">Documents</NavLink>
          </li>
          <li>
            <NavLink to="/proposals">Proposals</NavLink>
          </li>
          <li>
            <NavLink to="/proposal-new">New Proposal</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
