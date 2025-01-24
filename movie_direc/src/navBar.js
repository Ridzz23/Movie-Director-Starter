import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "15px",
        backgroundColor: "#c92838",
        borderBottom: "1px solid #c92838",
      }}
    >
      <Link
        to="/"
        style={{
          margin: "0 15px",
          textDecoration: "none",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>
      <Link
        to="/search"
        style={{
          margin: "0 15px",
          textDecoration: "none",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Search
      </Link>
    </nav>
  );
};

export default Navbar;
