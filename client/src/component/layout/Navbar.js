import React from 'react';
import LeftSideBar from './LeftSideBar';

const Navbar = () => {
  return (
    <div className="wrapper">
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <a id="toggle_nav_btn" className="toggle-left-nav-btn inline-block mr-20 pull-left" href="#!"><i className="fa fa-bars"></i></a>
      <a href="index.html"><img className="brand-img pull-left" src="dist/img/logo.png" alt="brand"/></a>
      <ul className="nav navbar-right top-nav pull-right">
        <li>
          <a href="#!" data-toggle="collapse" data-target="#site_navbar_search">
          <i className="fa fa-search top-nav-icon"></i>
          </a>
        </li>
        <li>
          <a id="open_right_sidebar" href="#!"><i className="fa fa-cog top-nav-icon"></i></a>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-th top-nav-icon"></i></a>
          <ul className="dropdown-menu app-dropdown" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
            <li>
              <ul className="app-icon-wrap">
                <li>
                  <a href="#" className="connection-item">
                  <i className="pe-7s-umbrella txt-info"></i>
                  <span className="block">weather</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="connection-item">
                  <i className="pe-7s-mail-open-file txt-success"></i>
                  <span className="block">e-mail</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="connection-item">
                  <i className="pe-7s-date txt-primary"></i>
                  <span className="block">calendar</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="connection-item">
                  <i className="pe-7s-map txt-danger"></i>
                  <span className="block">map</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="connection-item">
                  <i className="pe-7s-comment txt-warning"></i>
                  <span className="block">chat</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="connection-item">
                  <i className="pe-7s-notebook"></i>
                  <span className="block">contact</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="divider"></li>
            <li className="text-center"><a href="#">More</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell top-nav-icon"></i><span className="top-nav-icon-badge">5</span></a>
          <ul  className="dropdown-menu alert-dropdown" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
            <li>
              <div className="streamline message-box message-nicescroll-bar">
                <div className="sl-item">
                  <div className="sl-avatar avatar avatar-sm avatar-circle">
                    <img className="img-responsive img-circle" src="dist/img/user.png" alt="avatar"/>
                  </div>
                  <div className="sl-content">
                    <a href="#!" className="inline-block capitalize-font  pull-left">Sandy Doe</a>
                    <span className="inline-block font-12  pull-right">12/10/16</span>
                    <div className="clearfix"></div>
                    <p>Neque porro quisquam est!</p>
                  </div>
                </div>
                <hr/>
                <div className="sl-item">
                  <div className="icon">
                    <i className="fa fa-spotify"></i>
                  </div>
                  <div className="sl-content">
                    <a href="#!" className="inline-block capitalize-font  pull-left">
                    2 voice mails</a>
                    <span className="inline-block font-12  pull-right">2pm</span>
                    <div className="clearfix"></div>
                    <p>Neque porro quisquam est</p>
                  </div>
                </div>
                <hr/>
                <div className="sl-item">
                  <div className="icon">
                    <i className="fa fa-whatsapp"></i>
                  </div>
                  <div className="sl-content">
                    <a href="#!" className="inline-block capitalize-font  pull-left">8 voice messanger</a>
                    <span className="inline-block font-12 pull-right">1pm</span>
                    <div className="clearfix"></div>
                    <p>8 texts</p>
                  </div>
                </div>
                <hr/>
                <div className="sl-item">
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="sl-content">
                    <a href="#!" className="inline-block capitalize-font  pull-left">2 new messages</a>
                    <span className="inline-block font-12  pull-right">1pm</span>
                    <div className="clearfix"></div>
                    <p>ashjs@gmail.com</p>
                  </div>
                </div>
                <hr/>
                <div className="sl-item">
                  <div className="sl-avatar avatar avatar-sm avatar-circle">
                    <img className="img-responsive img-circle" src="dist/img/user4.png" alt="avatar"/>
                  </div>
                  <div className="sl-content">
                    <a href="#!" className="inline-block capitalize-font  pull-left">Sandy Doe</a>
                    <span className="inline-block font-12  pull-right">1pm</span>
                    <div className="clearfix"></div>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                  </div>
                </div>
              </div>
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
              <a href="#"><i className="fa fa-fw fa-credit-card-alt"></i> my balance</a>
            </li>
            <li>
              <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
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
      <div className="collapse navbar-search-overlap" id="site_navbar_search">
        <form role="search">
          <div className="form-group mb-0">
            <div className="input-search">
              <div className="input-group">	
                <input type="text" id="overlay_search" name="overlay-search" className="form-control pl-30" placeholder="Search"/>
                <span className="input-group-addon pr-30">
                <a  href="#!" className="close-input-overlay" data-target="#site_navbar_search" data-toggle="collapse" aria-label="Close" aria-expanded="true"><i className="fa fa-times"></i></a>
                </span> 
              </div>
            </div>
          </div>
        </form>
      </div>
    </nav>
    <LeftSideBar/>
    </div>
  );
};

export default Navbar;
