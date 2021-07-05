import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1> Welcome to FESTORM</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Homepage
    </NavLink>
    <NavLink to="/portfolio" activeClassName="is-active" exact={true}>
      Portfolio
    </NavLink>
    <NavLink to="/contacts" activeClassName="is-active">
      Contacts
    </NavLink>
  </header>
);

export default Header;
