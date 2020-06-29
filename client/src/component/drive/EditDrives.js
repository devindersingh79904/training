import React, { Fragment,useEffect} from 'react';
const EditDrives = () => {
  useEffect(() => {
    setTimeout(() => {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src =
        'dist/js/edit-drive.js';
      document.body.appendChild(script1);
    }, 100);
  }, []);  return (
    <Fragment>
					<div class="row heading-bg bg-green">
					<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					  <h5 class="txt-light">Edit Drive</h5>
					</div>
					<div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
					  <ol class="breadcrumb">
						<li><a href="index.html">Dashboard</a></li>
						<li><a href="#"><span>Drive</span></a></li>
						<li class="active"><span>Edit</span></li>
					  </ol>
					</div>
				</div>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>Edit Drive</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='table-wrap'>
                  <table
                    id='footable_5'
                    className='table'
                    data-paging='true'
                    data-filtering='true'
                    data-sorting='true'
                  >
                    <thead>
                      <tr>
                        <th
                          data-name='cname'
                          data-type='text'
                        >
                          Company Name
                        </th>
                       
                        <th data-name='email'
                        data-breakpoints='sm'>
                          Email
                        </th>
                        <th data-name='driveDate'
                        data-breakpoints='sm'>
                          Drive Date
                        </th>
                        <th data-name='driveType'
                        data-breakpoints='sm'>
                          Type
                        </th>
                        <th data-name='description'
                        data-breakpoints='sm'>
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        
                        <td>Sarvpreet singh</td>
                        <td>MCA</td>
                        <td>2018/06/19</td>
                        <td>MCA</td>
                        <td>Morning</td>
                        
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
                        id='editor5'
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
                        <div className='form-group required'>
                            <label
                              for='cname'
                              className='col-sm-3 control-label'
                            >
                              Company Name
                            </label>
                            <div className='col-sm-9'>
                              <input
                                type='text'
                                className='form-control'
                                id='cname'
                                name='name'
                                placeholder='Company Name'
                                required
                              />
                            </div>
                          </div>
                          <div className='form-group required'>
                            <label
                              for='email'
                              className='col-sm-3 control-label'
                            >
                              Email
                            </label>
                            <div className='col-sm-9'>
                              <input
                                type='email'
                                className='form-control'
                                id='email'
                                name='email'
                                placeholder='Email'
                              />
                            </div>
                          </div>
                          <div className='form-group required'>
                            <label
                              for='driveDate'
                              className='col-sm-3 control-label'
                            >
                              Drive Date
                            </label>
                            <div className='col-sm-9'>
                              <input
                                type='text'
                                className='form-control'
                                id='driveDate'
                                name='Date'
                                placeholder='Drive Date'
                                required
                              />
                            </div>
                          </div>
                          <div className='form-group'>
                            <label
                              for='driveType'
                              className='col-sm-3 control-label'
                            >
                              Type
                            </label>
                            <div className='col-sm-9'>
                              <input
                                type='text'
                                className='form-control'
                                id='driveType'
                                name='type'
                                placeholder='Drive type'
                              />
                            </div>
                          </div>
                          <div className='form-group'>
                            <label
                              for='description'
                              className='col-sm-3 control-label'
                            >
                              Description
                            </label>
                            <div className='col-sm-9'>
                              <input
                                type='text'
                                className='form-control'
                                id='description'
                                name='description'
                                placeholder='Description'
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
export default EditDrives;
