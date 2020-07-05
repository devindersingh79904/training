import React, { useState } from 'react';
import { setAlert } from '../../actions/alertAction';
import { Link, Redirect } from 'react-router-dom';
import { registerUser, setLoading } from '../../actions/authAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Register = ({ setAlert, registerUser, setLoading, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    role: 'admin',
  });

  const { name, email, password, password2, role } = formData;

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('password dont match', 'danger');
    } else {
      var user = {
        name,
        email,
        password,
        role,
      };
      setLoading();
      registerUser(user);
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
    <div className='auth-form  ml-auto mr-auto no-float'>
      <div className='panel panel-default card-view mb-0 mt-5'>
        <div className='panel-wrapper collapse in'>
          <div className='panel-body'>
            <div className='row'>
              <div className='col-sm-12 col-xs-12'>
                <div className='form-wrap'>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                      <label
                        className='control-label mb-10'
                        htmlFor='exampleInputuname_2'
                      >
                        Name
                      </label>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control'
                          required=''
                          id='exampleInputuname_2'
                          placeholder='Username'
                          name='name'
                          value={name}
                          onChange={(e) => onChange(e)}
                        />
                        <div className='input-group-addon'>
                          <i className='icon-user'></i>
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <label
                        className='control-label mb-10'
                        htmlFor='exampleInputEmail_2'
                      >
                        Email address
                      </label>
                      <div className='input-group'>
                        <input
                          type='email'
                          className='form-control'
                          required=''
                          id='exampleInputEmail_2'
                          placeholder='Enter email'
                          name='email'
                          value={email}
                          onChange={(e) => onChange(e)}
                        />
                        <div className='input-group-addon'>
                          <i className='icon-envelope-open'></i>
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <label
                        className='control-label mb-10'
                        htmlFor='exampleInputpwd_2'
                      >
                        Password
                      </label>
                      <div className='input-group'>
                        <input
                          type='password'
                          className='form-control'
                          required=''
                          id='exampleInputpwd_2'
                          placeholder='Enter pwd'
                          name='password'
                          value={password}
                          onChange={(e) => onChange(e)}
                        />
                        <div className='input-group-addon'>
                          <i className='icon-lock'></i>
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <label
                        className='control-label mb-10'
                        htmlFor='exampleInputpwd_3'
                      >
                        Confirm Password
                      </label>
                      <div className='input-group'>
                        <input
                          type='password'
                          className='form-control'
                          required=''
                          id='exampleInputpwd_3'
                          placeholder='Enter pwd'
                          name='password2'
                          value={password2}
                          onChange={(e) => onChange(e)}
                        />
                        <div className='input-group-addon'>
                          <i className='icon-lock'></i>
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <button
                        type='submit'
                        className='btn btn-success btn-block'
                      >
                        sign up
                      </button>
                    </div>
                    <div className='form-group mb-0'>
                      <span className='inline-block pr-5'>
                        Already have an account?
                      </span>
                      <Link to='/login'>Sign In</Link>
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
  setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerUser, setLoading })(
  Register
);
