import React, { Fragment, useEffect } from 'react';

const ddd = (props) => {
  //   useEffect(() => {
  //     const script = document.createElement('script');
  //     script.src = '/static/libs/your_script.js';
  //     script.async = true;
  //     script.onload = () => this.scriptLoaded();

  //     document.body.appendChild(script);
  //   }, []);
  console.log(props);

  return (
    <Fragment>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>Editing Table</h6>
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

export default ddd;
