import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
        <div>
          <h3> Navigation Component </h3>
          <ul>
                 <li><Link to='/home'>Home</Link></li>
                 <li><Link to='/documents'>Documents</Link></li>
               </ul>

        </div>
    )
  }
}

export default Navigation;
