import React from 'react';
import LeftSideBar from './LeftSideBar';

const Navbar = () => {
  return (
    <div className="wrapper">
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <a id="toggle_nav_btn" className="toggle-left-nav-btn inline-block mr-20 pull-left" href="#!"><i className="fa fa-bars"></i></a>
      <a href="index.html"><img className="brand-img pull-left" src="dist/img/logo.png" alt="brand"/></a>
      <ul className="nav navbar-right top-nav pull-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-th top-nav-icon"></i></a>
          <ul className="dropdown-menu app-dropdown" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
            <li>
              <ul className="app-icon-wrap">
                <li>
                  <a href="#" className="connection-item">
                  <i className="pe-7s-umbrella txt-info"></i>
                  <span className="block">Register</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="connection-item">
                  <i className="pe-7s-mail-open-file txt-success"></i>
                  <span className="block">Login</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        
        <li className="dropdown">
          <a href="#" className="dropdown-toggle pr-0" data-toggle="dropdown"><img src="dist/img/user1.png" alt="user_auth" className="user-auth-img img-circle"/><span className="user-online-status"></span></a>
          <ul className="dropdown-menu user-auth-dropdown" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
            <li>
              <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
            </li>
            <li>
              <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
            </li>
            <li className="divider"></li>
            <li>
              <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <LeftSideBar/>
    </div>
  );
};

export default Navbar;
