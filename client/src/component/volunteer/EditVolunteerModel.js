import React, { useState, useLayoutEffect, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateVolunteer } from '../../actions/volunteerAction';
import { setAlert } from '../../actions/alertAction';
import PropTypes from 'prop-types';

const EditVolunteerModel = ({ id, vol, updateVolunteer }) => {
  const [formData, setFormData] = useState({
    batch: '',
    clas: '',
    dutiesAccepted: 0,
    dutiesAssigned: 0,
    email: '',
    name: '',
    phnno: 0,
    rollno: 0,
    workDone: 0,
    _id: '',
  });
  //   const { rollno, name, clas, batch, phnno, email } = formData;
  useEffect(() => {
    if (vol) {
      setFormData(vol);
    }
  }, [vol]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    updateVolunteer(formData);
  };

  const {
    _id,
    rollno,
    name,
    email,
    phnno,
    batch,
    clas,
    dutiesAccepted,
    dutiesAssigned,
    workDone,
  } = formData;

  console.log(formData);
  return (
    <div
      className='modal fade'
      id='editor-modal'
      tabindex='-1'
      role='dialog'
      aria-labelledby='editor-title'
    >
      <div className='modal-dialog' role='document'>
        <form
          onSubmit={(e) => onSubmit(e)}
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
                  name='name'
                  value={name}
                  onChange={(e) => onChange(e)}
                  placeholder='Full Name'
                  required
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
                  placeholder='Course'
                  name='clas'
                  value={clas}
                  onChange={(e) => onChange(e)}
                  required
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
                  value={batch}
                  onChange={(e) => onChange(e)}
                  placeholder='Batch'
                />
              </div>
            </div>
            <div className='form-group'>
              <label for='phnno' className='col-sm-3 control-label'>
                Phone Number
              </label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  id='phnno'
                  name='phhno'
                  value={phnno}
                  onChange={(e) => onChange(e)}
                  placeholder='Phone Number'
                />
              </div>
            </div>
            <div className='form-group'>
              <label for='email' className='col-sm-3 control-label'>
                Email
              </label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='form-group text-center'>
              <label for='assigned' className='col-sm-3 control-label'>
                Assigned
              </label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='text-center text-danger form-control-xs'
                  id='assigned'
                  name='dutiesAssigned'
                  value={dutiesAssigned}
                  onChange={(e) => onChange(e)}
                  placeholder='Assigned'
                />
              </div>
            </div>
            <div className='form-group text-center'>
              <label for='accepted' className='col-sm-3 control-label'>
                Accepted
              </label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='text-center text-danger form-control-xs'
                  id='accepted'
                  name='dutiesAccepted'
                  value={dutiesAccepted}
                  onChange={(e) => onChange(e)}
                  placeholder='Accepted'
                />
              </div>
            </div>
            <div className='form-group text-center'>
              <label for='present' className='col-sm-3 control-label'>
                Present
              </label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='text-center text-danger form-control-xs'
                  id='present'
                  name='workDone'
                  value={workDone}
                  onChange={(e) => onChange(e)}
                  placeholder='Present'
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
  );
};

EditVolunteerModel.propTypes = {
  id: PropTypes.string.isRequired,
  vol: PropTypes.object.isRequired,
};

export default connect(null, { updateVolunteer })(EditVolunteerModel);
