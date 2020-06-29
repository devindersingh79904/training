import React, { Fragment, useEffect, useState } from 'react';
import { getVolunteers } from '../../actions/volunteerAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ddd from './ddd';
const AddAttendence = ({ volunteers, getVolunteers }) => {
  useEffect(() => {
    console.log('i am getting all volunteers');
    getVolunteers();
  }, []);

  return (
    // <Fragment>
    //   {volunteers.length > 0 && <Ddd volunteers={volunteers} />}
    // </Fragment>
    <Fragment>
      <div class='row heading-bg bg-green'>
        <div class='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 class='txt-light'>Add Volunteer Duty</h5>
        </div>
        <div class='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol class='breadcrumb'>
            <li>
              <a href='index.html'>Dashboard</a>
            </li>
            <li>
              <a href='#'>
                <span>Volunteer</span>
              </a>
            </li>
            <li class='active'>
              <span>Add Duty</span>
            </li>
          </ol>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>Attendece</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='table-wrap'>
                  <table
                    id='footable_2'
                    className='table'
                    data-paging='true'
                    data-filtering='true'
                    data-sorting='true'
                  >
                    <thead>
                      <tr>
                        <th
                          data-name='rollNo'
                          data-breakpoints='xs'
                          data-type='number'
                        >
                          rollNo
                        </th>
                        <th data-name='fullName'>Full Name</th>
                        <th data-name='course'>Course</th>
                        <th data-name='batch' data-breakpoints='xs'>
                          Batch
                        </th>
                        <th data-name='assigned' data-breakpoints='xs'>
                          Assigned
                        </th>
                        <th data-name='accepted' data-breakpoints='xs'>
                          Accepted
                        </th>
                        <th data-name='present' data-breakpoints='xs'>
                          Present
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {volunteers.map((vol) => {
                        console.log(vol);

                        return (
                          <tr key={vol._id}>
                            {/* <td style={{ display: 'table-cell' }}>
                              {vol[0].rollno}
                            </td>
                            <td style={{ display: 'table-cell' }}>
                              {vol[0].name}
                            </td>
                            <td style={{ display: 'table-cell' }}>
                              {vol[0].clas}
                            </td>
                            <td style={{ display: 'table-cell' }}>
                              {vol[0].batch}
                            </td>
                            <td style={{ display: 'table-cell' }}>
                              {vol[0].rollno}
                            </td>
                            <td style={{ display: 'table-cell' }}>
                              {vol[0].rollno}
                            </td>
                            <td style={{ display: 'table-cell' }}>
                              {vol[0].rollno}
                            </td> */}

                            <td>{vol.rollno}</td>
                            <td>{vol.name}</td>
                            <td>{vol.clas}</td>
                            <td>{vol.batch}</td>
                            <td>{vol.dutiesAssigned}</td>
                            <td>{vol.dutiesAccepted}</td>
                            <td>{vol.workDone}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td>1001</td>
                        <td>Sarvpreet singh</td>
                        <td>MCA</td>
                        <td>Morning</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>1001</td>
                        <td>naman singh</td>
                        <td>MCA</td>
                        <td>Morning</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td
                          class='footable-editing'
                          style={{ display: 'none' }}
                        >
                          <div class='btn-group btn-group-xs' role='group'>
                            <button
                              type='button'
                              class='btn btn-default footable-edit'
                            >
                              <span
                                class='fooicon fooicon-pencil'
                                aria-hidden='true'
                              ></span>
                            </button>{' '}
                            <button
                              type='button'
                              class='btn btn-default footable-delete'
                            >
                              <span
                                class='fooicon fooicon-trash'
                                aria-hidden='true'
                              ></span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    className='modal fade'
                    id='editor-modal'
                    tabindex='-1'
                    role='dialog'
                    aria-labelledby='editor-title'
                  >
                    <div className='modal-dialog' role='document'>
                      <form
                        className='modal-content form-horizontal'
                        id='editor'
                      >
                        <div className='modal-header'>
                          <button
                            type='button'
                            className='close'
                            data-dismiss='modal'
                            aria-label='Close'
                          >
                            <span aria-hidden='true'>×</span>
                          </button>
                          <h5 className='modal-title' id='editor-title'></h5>
                        </div>
                        <div className='modal-body'>
                          <input
                            type='number'
                            id='rollNo'
                            name='rollNo'
                            className='hidden'
                          />
                          <div className='form-group required'>
                            <label
                              for='fullName'
                              className='col-sm-3 control-label'
                            >
                              Full Name
                            </label>
                            <div className='col-sm-9'>
                              <input
                                type='text'
                                className='form-control'
                                id='fullName'
                                name='fullName'
                                placeholder='Full Name'
                                required
                                readOnly
                              />
                            </div>
                          </div>
                          <div className='form-group required'>
                            <label
                              for='course'
                              className='col-sm-3 control-label'
                            >
                              Course
                            </label>
                            <div className='col-sm-9'>
                              <input
                                type='text'
                                className='form-control'
                                id='course'
                                name='course'
                                placeholder='Course'
                                required
                                readOnly
                              />
                            </div>
                          </div>
                          <div className='form-group'>
                            <label
                              for='batch'
                              className='col-sm-3 control-label'
                            >
                              Batch
                            </label>
                            <div className='col-sm-9'>
                              <input
                                type='text'
                                className='form-control'
                                id='batch'
                                name='batch'
                                placeholder='Batch'
                                readOnly
                              />
                            </div>
                          </div>
                          <div className='form-group text-center'>
                            <label
                              for='assigned'
                              className='col-sm-3 control-label'
                            >
                              Assigned
                            </label>
                            <div className='col-sm-9'>
                              <button
                                type='button'
                                className='btnyo btn btn-danger btn-xs'
                              >
                                -
                              </button>
                              <input
                                type='text'
                                className='text-center text-danger form-control-xs'
                                id='assigned'
                                name='assigned'
                                placeholder='Assigned'
                                readOnly
                              />
                              <button
                                type='button'
                                className='btnyo btn btn-success btn-xs'
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className='form-group text-center'>
                            <label
                              for='accepted'
                              className='col-sm-3 control-label'
                            >
                              Accepted
                            </label>
                            <div className='col-sm-9'>
                              <button
                                type='button'
                                className='btnyo btn btn-danger btn-xs'
                              >
                                -
                              </button>
                              <input
                                type='text'
                                className='text-center text-danger form-control-xs'
                                id='accepted'
                                name='accepted'
                                placeholder='Accepted'
                                readOnly
                              />
                              <button
                                type='button'
                                className='btnyo btn btn-success btn-xs'
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className='form-group text-center'>
                            <label
                              for='present'
                              className='col-sm-3 control-label'
                            >
                              Present
                            </label>
                            <div className='col-sm-9'>
                              <button
                                type='button'
                                className='btnyo btn btn-danger btn-xs'
                              >
                                -
                              </button>
                              <input
                                type='text'
                                className='text-center text-danger form-control-xs'
                                id='present'
                                name='present'
                                placeholder='Present'
                                readOnly
                              />
                              <button
                                type='button'
                                className='btnyo btn btn-success btn-xs'
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='modal-footer'>
                          <button type='submit' className='btn btn-primary'>
                            Save changes
                          </button>
                          <button
                            type='button'
                            className='btn btn-default'
                            data-dismiss='modal'
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
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
