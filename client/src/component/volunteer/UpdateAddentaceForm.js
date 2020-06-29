import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UpdateAddentaceForm = ({ id }) => {
  console.log(id);
  const onAssinedIncClick = (e) => {
    e.preventDefault();

    console.log('a');
  };

  const onAcceptIncClick = (e) => {
    console.log('acc');
  };

  const onWorkDoneIncClick = (e) => {
    console.log('workdone');
  };

  return (
    <div
      className='modal fade'
      id='editor-modal'
      tabindex='-1'
      role='dialog'
      aria-labelledby='editor-title'
    >
      <div className='modal-dialog' role='document'>
        <form className='modal-content form-horizontal' id='editor'>
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
            <input type='number' id='rollNo' name='rollNo' className='hidden' />
            <div className='form-group required'>
              <label for='fullName' className='col-sm-3 control-label'>
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
              <label for='course' className='col-sm-3 control-label'>
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
              <label for='batch' className='col-sm-3 control-label'>
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
              <label for='assigned' className='col-sm-3 control-label'>
                Assigned
              </label>
              <div className='col-sm-9'>
                <button type='button' className='btnyo btn btn-danger btn-xs'>
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
                  onClick={(e) => onAssinedIncClick(e)}
                  type='button'
                  className='btnyo btn btn-success btn-xs'
                >
                  +
                </button>
              </div>
            </div>
            <div className='form-group text-center'>
              <label for='accepted' className='col-sm-3 control-label'>
                Accepted
              </label>
              <div className='col-sm-9'>
                <button type='button' className='btnyo btn btn-danger btn-xs'>
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
                  onClick={(e) => onAcceptIncClick(e)}
                  type='button'
                  className='btnyo btn btn-success btn-xs'
                >
                  +
                </button>
              </div>
            </div>
            <div className='form-group text-center'>
              <label for='present' className='col-sm-3 control-label'>
                Present
              </label>
              <div className='col-sm-9'>
                <button type='button' className='btnyo btn btn-danger btn-xs'>
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
                  onClick={(e) => onWorkDoneIncClick(e)}
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
  );
};

UpdateAddentaceForm.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default UpdateAddentaceForm;
