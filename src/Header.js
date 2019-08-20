import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card-body col-4 p-0 header">SPEC PACKS</div>
          <div className="card-body col-4 p-0 header">
            ALL PIECES DESIGNED AND DRAWN
          </div>
          <div className="card-body col-4 p-0 header">
            <span>AW18</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
