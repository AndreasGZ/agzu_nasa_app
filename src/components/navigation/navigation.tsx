import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation(): ReactElement {
  return (
    <nav className="ui tabular menu">
      <NavLink to="/home" className="item">Home</NavLink>
      <NavLink exact to="/apod" className="item">APOD</NavLink>
      <NavLink exact to="/epic" className="item">EPIC</NavLink>
      <NavLink exact to="/rover" className="item">ROVER</NavLink>
      <NavLink exact to="/donki" className="item">DONKI</NavLink>
      <NavLink exact to="/techtransfer" className="item">TECHTRANSFER</NavLink>
    </nav>
  );
}

