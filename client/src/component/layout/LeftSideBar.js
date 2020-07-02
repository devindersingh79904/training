import React from 'react';
import { Link } from 'react-router-dom';
const LeftSideBar = () => {
  return (
    <div className='fixed-sidebar-left'>
      <ul className='nav navbar-nav side-nav nicescroll-bar'>
        <li>
          <Link className='active' data-toggle='collapse' data-target='#dashboard_dr' to='#'>
            <i className='icon-arrow-right-circle mr-10'></i>Add menu{' '}
              <span className='pull-right'>
                <span className='label label-success mr-10'>4</span>
                <i className='fa fa-fw fa-angle-down'></i>
              </span>
          </Link>
          <ul id='dashboard_dr' className='collapse collapse-level-1'>
            <li>
              <Link to='/add-volunteer'>
                <span className='icon-plus mr-10'></span>Add Volunteer
              </Link>
            </li>
            <li>
              <Link to='/add-drive'>
                <span className='icon-plus mr-10'></span>Add Drive
              </Link>
            </li>
            <li>
              <Link to='/add-attendence'>
                <span className='icon-plus mr-10'></span>Add Entry
              </Link>
            </li>
            <li>
              <Link to='/add-company'>
                <span className='icon-plus mr-10'></span>Add Company
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link  className='active'
            data-toggle='collapse'
            data-target='#dashboard_dr_1' to='#'>
              <i className='icon-arrow-right-circle mr-10'></i>View / Edit menu{' '}
            <span className='pull-right'>
              <span className='label label-success mr-10'>4</span>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </Link>
          <ul id='dashboard_dr_1' className='collapse collapse-level-1'>
            <li>
              <Link to='/view-volunteers'>
                <span className='icon-pencil mr-10'></span>View Volunteer
              </Link>
            </li>
            <li>
            <Link to='/view-drives'>
              <span className='icon-pencil mr-10'></span>View Drive
            </Link>
            </li>
            <li>
            <Link to='/view-companys'>
            <span className='icon-pencil mr-10'></span>View Company
            </Link>
            </li>
            <li>
            <Link to='/edit-volunteers'>
            <span className='icon-pencil mr-10 text-danger'></span>Edit Volunteer
            </Link>
            </li>
            <li>
            <Link to='/edit-drives'>
            <span className='icon-pencil mr-10 text-danger'></span>Edit Drive
            </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
          className='active'
          data-toggle='collapse'
          data-target='#dashboard_dr_2'
          to='#'>
            <i className='icon-arrow-right-circle mr-10'></i>Delete menu{' '}
            <span className='pull-right'>
              <span className='label label-success mr-10'>4</span>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </Link>
          <ul id='dashboard_dr_2' className='collapse collapse-level-1'>
            <li>
              <Link to='/delete-volunteer'>
                <span className='icon-ban mr-10'></span>Delete Volunteer
              </Link>
            </li>
            <li>
            <Link to='/delete-drive'>
            <span className='icon-ban mr-10'></span>Delete Drive
              </Link>
            </li>
            <li>
            <Link to='/delete-entry'>
            <span className='icon-ban mr-10'></span>Delete Entry
              </Link>
            </li>
            <li>
            <Link to='/delete-company'>
            <span className='icon-ban mr-10'></span>Delete Company
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to='about'>
            <i className='icon-drawar mr-10'></i>About us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideBar;
