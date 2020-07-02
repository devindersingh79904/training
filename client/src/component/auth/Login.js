import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertAction';
import { loginUser, setLoading } from '../../actions/authAction';
import PropTypes from 'prop-types';

const Login = ({ setAlert, setLoading, loginUser, isAuthenticated }) => {
  // setAlert('login Page open', 'danger');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  // console.log(user);
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
                      <div class='checkbox checkbox-success pr-10 pull-left'>
                        <input id='checkbox_2' required='' type='checkbox' />
                        <label for='checkbox_2'> keep me logged in </label>
                      </div>
                      
                      <Link className='capitalize-font txt-danger block pt-5 pull-right' to='#'>
                        forgot password
                      </Link>
                        
                      <div class='clearfix'></div>
                    </div>
                    <div class='form-group'>
                      <button type='submit' class='btn btn-success btn-block'>
                        sign in
                      </button>
                    </div>
                    <div class='form-group mb-0'>
                      <span class='inline-block pr-5'>
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
