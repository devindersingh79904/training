import React, { Fragment, useEffect, useState } from 'react';
import { getVolunteers } from '../../actions/volunteerAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddAttendence = ({ volunteers, getVolunteers }) => {
  useState(() => {
    console.log('i am getting all volunteers');
    getVolunteers();
  }, []);
  const incAssign = (prop) => {
    if (window.confirm('Assign duty to ' + prop.name)) {
      console.log('Ok');
    } else {
      console.log('cancel');
    }
  };
  const incAccept = (prop) => {
    if (window.confirm('Assign duty to ' + prop.name)) {
      console.log('Ok');
    } else {
      console.log('cancel');
    }
  };
  const incWorkDone = (prop) => {
    if (window.confirm('Assign duty to ' + prop.name)) {
      console.log('Ok');
    } else {
      console.log('cancel');
    }
  };

  return (
    <Fragment>
      <div class='row heading-bg bg-green'>
        <div class='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 class='txt-light'>List of Volunteers</h5>
        </div>
        <div class='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol class='breadcrumb'>
            <li>
              <a href='index.html'>Dashboard</a>
            </li>
            <li>
              <a href='#'>
                <span>List Volunteers</span>
              </a>
            </li>
            <li class='active'>
              <span>Duty Page</span>
            </li>
          </ol>
        </div>
      </div>

      <div class='row'>
        <div class='col-sm-12'>
          <div class='panel panel-default card-view'>
            <div class='panel-heading'>
              <div class='pull-left'>
                <h6 class='panel-title txt-dark'>Available Volunteers</h6>
              </div>
              <div class='clearfix'></div>
            </div>
            <div class='panel-wrapper collapse in'>
              <div class='panel-body'>
                <div class='table-wrap'>
                  <div class='table-responsive'>
                    <table
                      id='datable_1'
                      class='table table-hover display  pb-30'
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Class</th>
                          <th>Roll Number</th>
                          <th>Assign Duty</th>
                          <th>Accepted Duty</th>
                          <th>Work Done</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Class</th>
                          <th>Roll Number</th>
                          <th>Assign Duty</th>
                          <th>Accepted Duty</th>
                          <th>Work Done</th>
                        </tr>
                      </tfoot>
                      <tbody className='text-primary font-18'>
                        <tr>
                          <td>Volunteer Name</td>
                          <td>Class</td>
                          <td>Roll No</td>
                          <td>
                            <button
                              onClick={() => incAssign({ id: 1, name: 'x' })}
                              className='btn btn-primary'
                            >
                              +
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => incAccept({ id: 1, name: 'x' })}
                              className='btn btn-primary'
                            >
                              +
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => incWorkDone({ id: 1, name: 'x' })}
                              className='btn btn-primary'
                            >
                              +
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AddAttendence.propTypes = {
  getVolunteers: PropTypes.func.isRequired,
  volunteers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  volunteers: state.volunteerReducer.volunteers,
});

export default connect(mapStateToProps, { getVolunteers })(AddAttendence);
