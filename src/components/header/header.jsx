import React from "react";
import "./header.scss";
import logo from "../../static/Logo.svg";
import Avatar from "../../static/Avatar.jpg";
import { Link } from "react-router-dom";
import { LogOut } from '../../pages/Auth/Login/Login';


export const HeaderComp = () => (
  <header>
    <nav>
      <div className="logoBox">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
        {window.localStorage.getItem("email") ? (
          <li>
            <Link to="/login" onClick={LogOut}>
              logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </>
        )}
      </ul>

      <div className="accountBox">
        <Link to="/login">
          <img src={Avatar} alt="" className="accountImg" />
        </Link>
      </div>
    </nav>
  </header>
);
