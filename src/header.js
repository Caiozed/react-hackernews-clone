import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul style={{ padding: "0" }}>
            <li
              style={{
                listStyle: "none",
                backgroundColor: "#ff6600"
              }}
            >
              <Link to="/" style={{ fontSize: "18px", fontWeight: "900" }}>
                <img style={{ border: "1px white solid" }} src="../y18.gif" />Hacker
                News (Clone)
              </Link>
              <Link to="/new"> new |</Link>
              <Link to="/comments"> comments |</Link>
              <Link to="/show"> show |</Link>
              <Link to="/ask"> ask |</Link>
              <Link to="/jobs"> jobs |</Link>
              <Link to="/submit"> submit</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
