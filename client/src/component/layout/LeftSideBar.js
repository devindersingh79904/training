import React from 'react';

const LeftSideBar = () => {
  return (
    <div className="fixed-sidebar-left">
      <ul className="nav navbar-nav side-nav nicescroll-bar">
        <li>
          <a  className="active" href="#!" data-toggle="collapse" data-target="#dashboard_dr"><i className="icon-arrow-right-circle mr-10"></i>Add menu <span className="pull-right"><span className="label label-success mr-10">4</span><i className="fa fa-fw fa-angle-down"></i></span></a>
          <ul id="dashboard_dr" className="collapse collapse-level-1">
            <li>
              <a href="./add-volunteer"><span className="icon-plus mr-10"></span>Add Volunteer</a>
            </li>
            <li>
              <a href="./add-drive"><span className="icon-plus mr-10"></span>Add Drive</a>
            </li>
            <li>
              <a href="./add-attendence"><span className="icon-plus mr-10"></span>Add Entry</a>
            </li>
            <li>
              <a href="index4.html"><span className="icon-plus mr-10"></span>Add Company</a>
            </li>
          </ul>
        </li>

        <li>
          <a  className="active" href="#!" data-toggle="collapse" data-target="#dashboard_dr_1"><i className="icon-arrow-right-circle mr-10"></i>View / Edit menu <span className="pull-right"><span className="label label-success mr-10">4</span><i className="fa fa-fw fa-angle-down"></i></span></a>
          <ul id="dashboard_dr_1" className="collapse collapse-level-1">
            <li>
              <a href="index.html"><span className="icon-pencil mr-10"></span>View / Edit Volunteer</a>
            </li>
            <li>
              <a href="index2.html"><span className="icon-pencil mr-10"></span>View / Edit Drive</a>
            </li>
            <li>
              <a href="index3.html"><span className="icon-pencil mr-10"></span>View / Edit Entry</a>
            </li>
            <li>
              <a href="index4.html"><span className="icon-pencil mr-10"></span>View / Edit Company</a>
            </li>
          </ul>
        </li>

        <li>
          <a  className="active" href="#!" data-toggle="collapse" data-target="#dashboard_dr_2"><i className="icon-arrow-right-circle mr-10"></i>Delete menu <span className="pull-right"><span className="label label-success mr-10">4</span><i className="fa fa-fw fa-angle-down"></i></span></a>
          <ul id="dashboard_dr_2" className="collapse collapse-level-1">
            <li>
              <a href="index.html"><span className="icon-ban mr-10"></span>Delete Volunteer</a>
            </li>
            <li>
              <a href="index2.html"><span className="icon-ban mr-10"></span>Delete Drive</a>
            </li>
            <li>
              <a href="index3.html"><span className="icon-ban mr-10"></span>Delete Entry</a>
            </li>
            <li>
              <a href="index4.html"><span className="icon-ban mr-10"></span>Delete Company</a>
            </li>
          </ul>
        </li>
      

      </ul>
    </div>
  );
};

export default LeftSideBar;
