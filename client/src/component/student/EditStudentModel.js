import React, { useState, Fragment, useLayoutEffect, useEffect } from "react";
import { connect } from "react-redux";
import { updateStudent } from "../../actions/studentAction";
import { setAlert } from "../../actions/alertAction";
import PropTypes from "prop-types";

const EditStudentModel = ({ std, id, updateStudent }) => {
  const [formData, setFormData] = useState({
    batch: "",
    clas: "",
    session: "",
    email: "",
    name: "",
    phnno: 0,
    rollno: 0,
    _id: "",
  });
  useEffect(() => {
    if (std) {
      setFormData(std);
    }
  }, [std]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    updateStudent(formData);
  };

  const { _id, rollno, name, email, phnno, batch, clas, session } = formData;
  return (
    <div
      className='modal fade'
      id='editor-modal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='editor-title'>
      <div className='modal-dialog' role='document'>
        <form
          onSubmit={(e) => onSubmit(e)}
          className='modal-content form-horizontal'
          id='editor'>
          <div className='modal-header'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'>
              <span aria-hidden='true'>×</span>
            </button>
            <h5 className='modal-title' id='editor-title'></h5>
          </div>
          <div className='modal-body'>
            <input type='number' id='rollNo' name='rollNo' className='hidden' />
            <div className='form-group required'>
              <label htmlFor='fullName' className='col-sm-3 control-label'>
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
              <label htmlFor='course' className='col-sm-3 control-label'>
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
              <label htmlFor='batch' className='col-sm-3 control-label'>
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
              <label htmlFor='phnno' className='col-sm-3 control-label'>
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
              <label htmlFor='email' className='col-sm-3 control-label'>
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
              <label htmlFor='session' className='col-sm-3 control-label'>
                Session
              </label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='text-center text-danger form-control-xs'
                  id='session'
                  name='session'
                  value={session}
                  onChange={(e) => onChange(e)}
                  placeholder='session'
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
              data-dismiss='modal'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditStudentModel.propTypes = {
  updateStudent: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  std: PropTypes.object.isRequired,
};

export default connect(null, { updateStudent })(EditStudentModel);
