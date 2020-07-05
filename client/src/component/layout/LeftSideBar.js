import React from 'react';
import { Link } from 'react-router-dom';
const LeftSideBar = () => {
  return (
    <div className='fixed-sidebar-left'>
      <ul className='nav navbar-nav side-nav nicescroll-bar'>
        <li>
          <Link className='active' data-toggle='collapse' data-target='#dashboard_dr_1' to='#'>
            <i className='icon-arrow-right-circle mr-10'></i>Manage Duties{' '}
              <span className='pull-right'>
                <span className='label label-success mr-10'></span>
                <i className='fa fa-fw fa-angle-down'></i>
              </span>
          </Link>
          <ul id='dashboard_dr_1' className='collapse collapse-level-1'>
            <li>
              <Link to='/assign-drive-vol'>
                <span className='icon-plus mr-10'></span>Assign Volunteer
              </Link>
            </li>
            <li>
              <Link to='/mark-accepted'>
                <span className='icon-plus mr-10'></span>Change to accepted
              </Link>
            </li>
            <li>
              <Link to='/mark-present'>
                <span className='icon-plus mr-10'></span>Change to present
              </Link>
            </li>
          </ul>
        </li>

       
          




        


        <li>
          <Link  className='active'
            data-toggle='collapse'
            data-target='#dashboard_dr_3' to='#'>
              <i className='icon-arrow-right-circle mr-10'></i>Company Menu{' '}
            <span className='pull-right'>
              <span className='label label-success mr-10'></span>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </Link>
          <ul id='dashboard_dr_3' className='collapse collapse-level-1'>
            <li>
              <Link to='/add-company'>
                <span className='icon-plus mr-10'></span>Add Company
              </Link>
            </li>
            <li>
            <Link to='/edit-company'>
              <span className='icon-pencil mr-10 text-primary'></span>Edit Company
            </Link>
            </li>
            <li>
            <Link to='/delete-company'>
            <span className='icon-ban mr-10 text-danger'></span>Delete Company
            </Link>
            </li>
            <li>
            <Link to='/view-companys'>
            <span className='icon-list mr-10'></span>View Company
            </Link>
            </li>
          </ul>
        </li>







        <li>
          <Link  className='active'
            data-toggle='collapse'
            data-target='#dashboard_dr_4' to='#'>
              <i className='icon-arrow-right-circle mr-10'></i>Drive Menu{' '}
            <span className='pull-right'>
              <span className='label label-success mr-10'></span>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </Link>
          <ul id='dashboard_dr_4' className='collapse collapse-level-1'>
            <li>
              <Link to='/add-drive'>
                <span className='icon-plus mr-10'></span>Add Drive
              </Link>
            </li>
            <li>
            <Link to='/edit-drives'>
              <span className='icon-pencil mr-10 text-primary'></span>Edit Drive
            </Link>
            </li>
            <li>
            <Link to='/delete-drive'>
            <span className='icon-ban mr-10 text-danger'></span>Delete Drive
            </Link>
            </li>
            <li>
            <Link to='/view-drives'>
            <span className='icon-list mr-10'></span>View Drive
            </Link>
            </li>
          </ul>
        </li>





        <li>
          <Link  className='active'
            data-toggle='collapse'
            data-target='#dashboard_dr_5' to='#'>
              <i className='icon-arrow-right-circle mr-10'></i>Student Menu{' '}
            <span className='pull-right'>
              <span className='label label-success mr-10'></span>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </Link>
          <ul id='dashboard_dr_5' className='collapse collapse-level-1'>
            <li>
              <Link to='/add-student'>
                <span className='icon-plus mr-10'></span>Add Student
              </Link>
            </li>
            <li>
            <Link to='/edit-students'>
              <span className='icon-pencil mr-10 text-primary'></span>Edit Student
            </Link>
            </li>
            <li>
            <Link to='/delete-student'>
            <span className='icon-ban mr-10 text-danger'></span>Delete Student
            </Link>
            </li>
            <li>
            <Link to='/view-students'>
            <span className='icon-list mr-10'></span>View Student
            </Link>
            </li>
          </ul>
        </li>




        <li>
          <Link  className='active'
            data-toggle='collapse'
            data-target='#dashboard_dr_6' to='#'>
              <i className='icon-arrow-right-circle mr-10'></i>Volunteer Menu{' '}
            <span className='pull-right'>
              <span className='label label-success mr-10'></span>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </Link>
          <ul id='dashboard_dr_6' className='collapse collapse-level-1'>
            <li>
              <Link to='/add-volunteer'>
                <span className='icon-plus mr-10'></span>Add Volunteer
              </Link>
            </li>
            <li>
            <Link to='/edit-volunteers'>
              <span className='icon-pencil mr-10 text-primary'></span>Edit Volunteer
            </Link>
            </li>
            <li>
            <Link to='/delete-volunteer'>
            <span className='icon-ban mr-10 text-danger'></span>Delete Volunteer
            </Link>
            </li>
            <li>
            <Link to='/view-volunteers'>
            <span className='icon-list mr-10'></span>View Volunteer
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
