import React from 'react';

const LeftSideBar = () => {
  return (
    <div className="fixed-sidebar-left">
      <ul className="nav navbar-nav side-nav nicescroll-bar">
        <li>
          <a  className="active" href="#!" data-toggle="collapse" data-target="#dashboard_dr"><i className="icon-picture mr-10"></i>Add menu <span className="pull-right"><span className="label label-success mr-10">4</span><i className="fa fa-fw fa-angle-down"></i></span></a>
          <ul id="dashboard_dr" className="collapse collapse-level-1">
            <li>
              <a className="active" href="index.html">Add Volunteer</a>
            </li>
            <li>
              <a href="index2.html">Add Drive</a>
            </li>
            <li>
              <a href="index3.html">Add Entry</a>
            </li>
            <li>
              <a href="index4.html">Add Company</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideBar;
