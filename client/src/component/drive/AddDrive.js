import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { addDrive } from '../../actions/driveAction';
import { setAlert } from '../../actions/alertAction';
import PropTypes from 'prop-types';

const AddDrive = ({ setAlert, addDrive }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    description: '',
    date: null,
  });

  const { name, email, type, description, date } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setAlert('name cannot be empty', 'danger');
    } else if (email === '') {
      setAlert('email cannot be empty', 'danger');
    } else if (type === '') {
      setAlert('type cannot be empty', 'danger');
    } else if (description === '') {
      setAlert('description cannot be empty', 'danger');
    } else {
      var data = {
        name,
        email,
        type,
        description,
        date,
      };
      console.log(date);
      addDrive(data);
      setFormData({
        name: '',
        email: '',
        type: '',
        description: '',
        date: null,
      });
    }
  };
  return (
    <Fragment>
      <div class='row heading-bg bg-blue'>
        <div class='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 class='txt-light'>Add Drive Form</h5>
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
              <span>Drive</span>
            </li>
          </ol>
        </div>
      </div>

      <div class='row'>
        <div class='col-sm-12'>
          <div class='panel panel-default card-view'>
            <div class='panel-heading'>
              <div class='pull-left'>
                <h6 class='panel-title txt-dark'>Add Drive Form</h6>
              </div>
              <div class='clearfix'></div>
            </div>
            <div class='panel-wrapper collapse in'>
              <div class='panel-body'>
                <div class='form-wrap'>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div class='form-group'>
                      <label class='control-label mb-10 text-left'>
                        Company Name
                      </label>
                      <input
                        type='text'
                        class='form-control rounded-input'
                        placeholder='Company Name'
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
                      <label
                        class='control-label mb-10 text-left'
                        for='drive-type'
                      >
                        Drive Type
                      </label>
                      <input
                        type='text'
                        id='drive-type'
                        class='form-control rounded-input'
                        placeholder='Drive type'
                        name='type'
                        value={type}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div class='form-group'>
                      <label
                        class='control-label mb-10 text-left'
                        for='description'
                      >
                        Description
                      </label>
                      <textarea
                        id='description'
                        name='description'
                        className='form-control rounded-input'
                        name='description'
                        value={description}
                        onChange={(e) => onChange(e)}
                      ></textarea>
                    </div>
                    <div class='form-group'>
                      <label class='control-label mb-10 text-left'>Date</label>
                      <input
                        type='text'
                        placeholder=''
                        data-mask='99-99-9999'
                        class='form-control rounded-input'
                        name='date'
                        value={date}
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

AddDrive.propTypes = {
  addDrive: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//     addDrive: state.authReducer.isAuthenticated,
// });

export default connect(null, { addDrive, setAlert })(AddDrive);
