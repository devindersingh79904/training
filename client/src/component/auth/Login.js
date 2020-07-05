import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertAction';
import { loginUser, setLoading } from '../../actions/authAction';
import PropTypes from 'prop-types';

const Login = ({ setAlert, setLoading, loginUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading();
    loginUser({ email, password });
    setFormData({
      email: '',
      password: '',
    });
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
                      <div className='checkbox checkbox-success pr-10 pull-left'>
                        <input id='checkbox_2' required='' type='checkbox' />
                        <label htmlFor='checkbox_2'> keep me logged in </label>
                      </div>
                      
                      <Link className='capitalize-font txt-danger block pt-5 pull-right' to='#'>
                        forgot password
                      </Link>
                        
                      <div className='clearfix'></div>
                    </div>
                    <div className='form-group'>
                      <button type='submit' className='btn btn-success btn-block'>
                        sign in
                      </button>
                    </div>
                    <div className='form-group mb-0'>
                      <span className='inline-block pr-5'>
                        Don't have an account?
                      </span>
                      <Link to='/login'>Sign UP</Link>
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

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, loginUser, setLoading })(
  Login
);
