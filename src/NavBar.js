import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const style ={
 display: "inline-block",
  width: "60px",
  padding: "10px",
  margin: "0 10px 10px",
  background: "black",
  textDecoration: "none",
  color: "white",
    }
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={style}
          activeStyle={{
            background: "red",
          }}
        >
          Home
        </NavLink>
       
        <NavLink
          to="/books"
          exact
          style={style}
          activeStyle={{
            background: "red",
          }}
        className="NavLink">
          Books
        </NavLink>
      </div>
    );
  }

  export default NavBar