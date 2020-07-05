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
           

            <div className='form-group'>
              <label
                className='col-sm-3 control-label'
                htmlFor='class'
              >
                Batch
                        </label>
              <div className='col-sm-9'>
                <select
                  id='batch'
                  className='form-control rounded-input'
                  name='batch'
                  value={batch}
                  onChange={(e) => onChange(e)}
                >
                  <option value=''>Select</option>

                  <option value='Morning'>Morning</option>
                  <option value='Evening'>Evening</option>

                </select>
              </div>
              </div>



              <div className='form-group'>
                <label
                  className='col-sm-3 control-label'
                  htmlFor='class'
                >
                  Class
                        </label>
                <div className='col-sm-9'>
                  <select
                    id='class'
                    className='form-control rounded-input'
                    name='clas'
                    value={clas}
                    onChange={(e) => onChange(e)}
                  >
                    <option value=''>Select</option>

                    <option value='MCA'>MCA</option>
                    <option value='MSC'>MSC</option>

                  </select>
                </div>
              </div>

              <div className='form-group'>
                <label
                  className='col-sm-3 control-label'
                  htmlFor='session'
                >
                  Session
                        </label>
                <div className='col-sm-9'>
                  <select
                    id='session'
                    className='form-control rounded-input'
                    name='session'
                    value={session}
                    onChange={(e) => onChange(e)}
                  >
                    <option value=''>Select</option>

                    <option value='2018-21'>2018-21</option>
                    <option value='2019-22'>2019-22</option>

                  </select>
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
