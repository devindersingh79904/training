import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { addVolunteer } from '../../actions/volunteerAction';
import { setAlert } from '../../actions/alertAction';
import PropTypes from 'prop-types';

const AddVolunteer = ({ setAlert, addVolunteer }) => {
  const [formData, setFormData] = useState({
    rollno: 0,
    name: '',
    clas: '',
    batch: '',
    phnno: 0,
    email: '',
  });

  const { rollno, name, clas, batch, phnno, email } = formData;

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
      setAlert('Class cannot be empty', 'danger');
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
      };
      //   console.log(date);
      addVolunteer(data);
      setFormData({
        rollno: 0,
        name: '',
        clas: '',
        batch: '',
        phnno: 0,
        email: '',
      });
    }
  };

  return (
    <Fragment>
      <div class='row heading-bg bg-blue'>
        <div class='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 class='txt-light'>Add Volunteer Form</h5>
        </div>

        <div class='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol class='breadcrumb'>
            <li>
              <a href='index.html'>Home</a>
            </li>
            <li>
              <a href='#'>
                <span>Add</span>
              </a>
            </li>
            <li class='active'>
              <span>Volunteer</span>
            </li>
          </ol>
        </div>
      </div>

      <div class='row'>
        <div class='col-sm-12'>
          <div class='panel panel-default card-view'>
            <div class='panel-heading'>
              <div class='pull-left'>
                <h6 class='panel-title txt-dark'>Add Volunteer Form</h6>
              </div>
              <div class='clearfix'></div>
            </div>
            <div class='panel-wrapper collapse in'>
              <div class='panel-body'>
                <div class='form-wrap'>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div class='form-group'>
                      <label class='control-label mb-10 text-left'>
                        Roll Number
                      </label>
                      <input
                        type='number'
                        class='form-control rounded-input'
                        placeholder='Roll Number'
                        name='rollno'
                        value={rollno}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div class='form-group'>
                      <label class='control-label mb-10 text-left'>
                        Full Name
                      </label>
                      <input
                        type='text'
                        class='form-control rounded-input'
                        placeholder='Full name'
                        name='name'
                        value={name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div class='form-group'>
                      <label class='control-label mb-10 text-left' for='email'>
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        class='form-control rounded-input'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div class='form-group'>
                      <label class='control-label mb-10 text-left' for='class'>
                        Class
                      </label>
                      <input
                        type='text'
                        id='class'
                        class='form-control rounded-input'
                        placeholder='Class'
                        name='clas'
                        value={clas}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div class='form-group'>
                      <label class='control-label mb-10 text-left' for='batch'>
                        Batch
                      </label>
                      <input
                        type='text'
                        id='batch'
                        class='form-control rounded-input'
                        placeholder='Batch'
                        name='batch'
                        value={batch}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div class='form-group'>
                      <label class='control-label mb-10 text-left'>
                        Phone Number
                      </label>
                      <input
                        type='text'
                        placeholder=''
                        // data-mask='99999-99999'
                        class='form-control rounded-input'
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

AddVolunteer.propTypes = {
  addVolunteer: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//     addDrive: state.authReducer.isAuthenticated,
// });

export default connect(null, { addVolunteer, setAlert })(AddVolunteer);
