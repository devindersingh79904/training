import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import PropTypes from 'prop-types';
import LeftSideBar from './LeftSideBar';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const onClick = (e) => {
    logout();
  };
  const guestRoutes = (
    <li className='dropdown'>
      <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
        <i className='fa fa-th top-nav-icon'></i>
      </a>
      <ul
        className='dropdown-menu app-dropdown'
        data-dropdown-in='fadeIn'
        data-dropdown-out='fadeOut'
      >
        <li>
          <ul className='app-icon-wrap'>
            <li>
              <Link to='/register' className='connection-item'>
                <i className='pe-7s-users txt-info'></i>
                <span className='block'>Register</span>
              </Link>
            </li>
            <li>
              <Link to='/login' className='connection-item'>
                <i className='pe-7s-unlock txt-success'></i>
                <span className='block'>Login</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );

  const authRoutes = (
    <li className='dropdown'>
      <a href='#' className='dropdown-toggle pr-0' data-toggle='dropdown'>
        <img
          src='dist/img/user1.png'
          alt='user_auth'
          className='user-auth-img img-circle'
        />
        <span className='user-online-status'></span>
      </a>
      <ul
        className='dropdown-menu user-auth-dropdown'
        data-dropdown-in='fadeIn'
        data-dropdown-out='fadeOut'
      >
        <li>
          <a href='#'>
            <i className='fa fa-fw fa-user'></i> {user && user.name}
          </a>
        </li>
        <li>
          <Link to='/about' className='connection-item'>
            <span className='block'>About</span>
          </Link>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-fw fa-gear'></i> Settings
          </a>
        </li>
        <li className='divider'></li>
        <li>
          <Link to='/' onClick={(e) => onClick(e)}>
            <i className='fa fa-fw fa-power-off'></i> Log Out
          </Link>
        </li>
      </ul>
    </li>
  );
  return (
    <div className='wrapper'>
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <a
          id='toggle_nav_btn'
          className='toggle-left-nav-btn inline-block mr-20 pull-left'
          href='#!'
        >
          <i className='fa fa-bars'></i>
        </a>
        <a href='/'>
          <img
            className='brand-img pull-left'
            src='dist/img/logo.png'
            alt='brand'
          />
        </a>
        <ul className='nav navbar-right top-nav pull-right'>
          {isAuthenticated && !loading ? authRoutes : guestRoutes}
        </ul>
      </nav>

      <LeftSideBar />
    </div>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { logout })(Navbar);
