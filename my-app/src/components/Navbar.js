import React from "react";
import {Link, useLocation} from "react-router-dom";
import "../styling/Navbar.css";

function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="Navbar">
      <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
      <Link to="/create" className={isActive('/create') ? 'active' : ''}>Create a Board</Link>
      <Link to="/saved" className={isActive('/saved') ? 'active' : ''}>Saved Boards</Link>
    </nav>
    );
}

export default Navbar;
