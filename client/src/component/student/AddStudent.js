import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../../actions/studentAction';
import { setAlert } from '../../actions/alertAction';
import PropTypes from 'prop-types';
const AddStudent = ({ setAlert, addStudent }) => {
  const [formData, setFormData] = useState({
    rollno: 0,
    name: '',
    clas: '',
    batch: '',
    session: '',
    phnno: 0,
    email: '',
  });

  const { rollno, name, clas, batch, phnno, email, session } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (rollno === 0) {
      setAlert('rollno cannot be empty', 'danger');
    } else if (name === '') {
      setAlert('name cannot be empty', 'danger');
    } else if (clas === '') {
      setAlert('className cannot be empty', 'danger');
    } else if (batch === '') {
      setAlert('batch cannot be empty', 'danger');
    } else if (email === '') {
      setAlert('email cannot be empty', 'danger');
    } else if (phnno === 0) {
      setAlert('phnno cannot be empty', 'danger');
    } else {
      var data = {
        rollno,
        name,
        clas,
        batch,
        email,
        phnno,
        session,
      };
      addStudent(data);
      setFormData({
        rollno: 0,
        name: '',
        clas: '',
        batch: '',
        phnno: 0,
        session: '',
        email: '',
      });
    }
  };

  return (
    <Fragment>
      <div className='row heading-bg bg-blue'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 className='txt-light'>Add Student Form</h5>
        </div>

        <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol className='breadcrumb'>
            <li>
              <a href='index.html'>Home</a>
            </li>
            <li>
              <a href='#'>
                <span>Add</span>
              </a>
            </li>
            <li className='active'>
              <span>Student</span>
            </li>
          </ol>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>Add Student Form</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='form-wrap'>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                      <label className='control-label mb-10 text-left'>
                        Roll Number
                      </label>
                      <input
                        type='number'
                        className='form-control rounded-input'
                        placeholder='Roll Number'
                        name='rollno'
                        value={rollno}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <label className='control-label mb-10 text-left'>
                        Full Name
                      </label>
                      <input
                        type='text'
                        className='form-control rounded-input'
                        placeholder='Full name'
                        name='name'
                        value={name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <label
                        className='control-label mb-10 text-left'
                        htmlFor='email'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        className='form-control rounded-input'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    
                    
                    
                    
                    
                    
                    
                    <div className='form-group'>
                        <label
                          className='control-label mb-10 text-left'
                          htmlFor='class'
                        >
                          Class
                        </label>
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

                      <div className='form-group'>
                        <label
                          className='control-label mb-10 text-left'
                          htmlFor='class'
                        >
                          Batch
                        </label>
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


                      <div className='form-group'>
                      <label
                        className='control-label mb-10 text-left'
                        htmlFor='session'
                      >
                        Session
                      </label>
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

                    <div className='form-group'>
                      <label className='control-label mb-10 text-left'>
                        Phone Number
                      </label>
                      <input
                        type='text'
                        placeholder=''
                        className='form-control rounded-input'
                        name='phnno'
                        value={phnno}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <input
                      type='submit'
                      className='btn btn-block btn-success'
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AddStudent.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addStudent: PropTypes.func.isRequired,
};

export default connect(null, { addStudent, setAlert })(AddStudent);
