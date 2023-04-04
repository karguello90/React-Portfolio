import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
   <div>
    <ul className="nav-list">
    <li>
        <Link to = "/">
        Home
        </Link>
    </li>
    <li>
        <Link to = "/portfolio">
        Portfolio
        </Link>
    </li>
    <li>
        <Link to = "/contact">
        Contact
        </Link>
    </li>
    <li>
        <Link to = "/resume">
        Resume
        </Link>
    </li>
    </ul>
   </div>
  );
}

export default Navbar;