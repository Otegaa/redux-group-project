import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../Images/logo.png';

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="container_nav">
          <div className="logo">
            <img src={logo} alt="logo" width={70} />
            <h1>Space Travels Hub</h1>

          </div>
          <div className="routeLinks">
            <NavLink to="/">Rockets</NavLink>
            <NavLink to="/myProfile">My Profile</NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
export default Header;
