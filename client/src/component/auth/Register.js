import React, { useState } from 'react';
import { setAlert } from '../../actions/alertAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Register = ({ setAlert }) => {
  //   setAlert('bhut ganda', 'danger');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    role: 'admin',
  });

  const { name, email, password, password2, role } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('password dont match', 'danger');
    } else {
      setFormData({
        name: '',
        email: '',
        password: '',
        password2: '',
        role: 'admin',
      });
    }
  };
  return (
    <div class='auth-form  ml-auto mr-auto no-float'>
      <div class='panel panel-default card-view mb-0 mt-5'>
        <div class='panel-wrapper collapse in'>
          <div class='panel-body'>
            <div class='row'>
              <div class='col-sm-12 col-xs-12'>
                <div class='form-wrap'>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div class='form-group'>
                      <label
                        class='control-label mb-10'
                        for='exampleInputuname_2'
                      >
                        Name
                      </label>
                      <div class='input-group'>
                        <input
                          type='text'
                          class='form-control'
                          required=''
                          id='exampleInputuname_2'
                          placeholder='Username'
                          name='name'
                          value={name}
                          onChange={(e) => onChange(e)}
                        />
                        <div class='input-group-addon'>
                          <i class='icon-user'></i>
                        </div>
                      </div>
                    </div>
                    <div class='form-group'>
                      <label
                        class='control-label mb-10'
                        for='exampleInputEmail_2'
                      >
                        Email address
                      </label>
                      <div class='input-group'>
                        <input
                          type='email'
                          class='form-control'
                          required=''
                          id='exampleInputEmail_2'
                          placeholder='Enter email'
                          name='email'
                          value={email}
                          onChange={(e) => onChange(e)}
                        />
                        <div class='input-group-addon'>
                          <i class='icon-envelope-open'></i>
                        </div>
                      </div>
                    </div>
                    <div class='form-group'>
                      <label
                        class='control-label mb-10'
                        for='exampleInputpwd_2'
                      >
                        Password
                      </label>
                      <div class='input-group'>
                        <input
                          type='password'
                          class='form-control'
                          required=''
                          id='exampleInputpwd_2'
                          placeholder='Enter pwd'
                          name='password'
                          value={password}
                          onChange={(e) => onChange(e)}
                        />
                        <div class='input-group-addon'>
                          <i class='icon-lock'></i>
                        </div>
                      </div>
                    </div>
                    <div class='form-group'>
                      <label
                        class='control-label mb-10'
                        for='exampleInputpwd_3'
                      >
                        Confirm Password
                      </label>
                      <div class='input-group'>
                        <input
                          type='password'
                          class='form-control'
                          required=''
                          id='exampleInputpwd_3'
                          placeholder='Enter pwd'
                          name='password2'
                          value={password2}
                          onChange={(e) => onChange(e)}
                        />
                        <div class='input-group-addon'>
                          <i class='icon-lock'></i>
                        </div>
                      </div>
                    </div>
                    <div class='form-group'>
                      <button type='submit' class='btn btn-success btn-block'>
                        sign up
                      </button>
                    </div>
                    <div class='form-group mb-0'>
                      <span class='inline-block pr-5'>
                        Already have an account?
                      </span>
                      <a class='inline-block txt-danger' href='login-page.html'>
                        Sign In
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func,
};
export default connect(null, { setAlert })(Register);
