import React, { Fragment,useEffect} from 'react';
const EditVolunteers = () => {
  useEffect(() => {
    setTimeout(() => {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src =
        'dist/js/footable-data.js';
      document.body.appendChild(script1);
    }, 100);
  }, []);
  return (
    <Fragment>
					<div class="row heading-bg bg-green">
					<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					  <h5 class="txt-light">Edit Volunteer</h5>
					</div>
					<div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
					  <ol class="breadcrumb">
						<li><a href="index.html">Dashboard</a></li>
						<li><a href="#"><span>Volunteer</span></a></li>
						<li class="active"><span>Edit</span></li>
					  </ol>
					</div>
				</div>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>Edit Volunteer</h6>
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
                          data-type='number'
                        >
                          rollNo
                        </th>
                        <th data-name='fullName'            
                            
                        >Full Name</th>
                        <th data-name='course'                           data-breakpoints='sm'
>Course</th>
                        <th data-name='batch'
                            data-breakpoints='sm'
                        >
                          Batch
                        </th>
                        <th data-name='email'
                        data-breakpoints='sm'>
                          Email
                        </th>
                        <th data-name='phnno'
                        data-breakpoints='sm'>
                          Phone Num
                        </th>
                        <th data-name='assigned'
                        data-breakpoints='sm'>
                          Assigned
                        </th>
                        <th data-name='accepted'
                        data-breakpoints='sm'>
                          Accepted
                        </th>
                        <th data-name='present'
                        data-breakpoints='sm'>
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
                              />
                            </div>
                          </div>
                          <div className='form-group'>
                            <label
                              for='phnno'
                              className='col-sm-3 control-label'
                            >
                              Phone Number
                            </label>
                            <div className='col-sm-9'>
                              <input
                                type='text'
                                className='form-control'
                                id='phnno'
                                name='phnno'
                                placeholder='Phone Number'
                              />
                            </div>
                          </div>
                          <div className='form-group'>
                            <label
                              for='email'
                              className='col-sm-3 control-label'
                            >
                              Email
                            </label>
                            <div className='col-sm-9'>
                              <input
                                type='text'
                                className='form-control'
                                id='email'
                                name='email'
                                placeholder='Email'
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
                              <input
                                type='text'
                                className='text-center text-danger form-control-xs'
                                id='assigned'
                                name='assigned'
                                placeholder='Assigned'
                                readOnly
                              />
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
                              
                              <input
                                type='text'
                                className='text-center text-danger form-control-xs'
                                id='accepted'
                                name='accepted'
                                placeholder='Accepted'
                                readOnly
                              />
                              
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
                              
                              <input
                                type='text'
                                className='text-center text-danger form-control-xs'
                                id='present'
                                name='present'
                                placeholder='Present'
                                readOnly
                              />
                              
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
export default EditVolunteers;
