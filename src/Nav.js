import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link className="h3" to="/">
        <h3>Elvis Gjevori's works</h3>
      </Link>
    </nav>
  );
}

export default Nav;
