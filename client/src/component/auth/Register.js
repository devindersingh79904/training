import React from 'react';
import { setAlert } from '../../actions/alertAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const Register = ({ setAlert }) => {
  //   setAlert('bhut ganda', 'danger');
  return (
    <div class='auth-form  ml-auto mr-auto no-float'>
      <div class='panel panel-default card-view mb-0 mt-5'>
        <div class='panel-wrapper collapse in'>
          <div class='panel-body'>
            <div class='row'>
              <div class='col-sm-12 col-xs-12'>
                <div class='form-wrap'>
                  <form action='#'>
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
                        />
                        <div class='input-group-addon'>
                          <i class='icon-lock'></i>
                        </div>
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='checkbox checkbox-success'>
                        <input id='checkbox_2' required='' type='checkbox' />
                        <label for='checkbox_2'>
                          {' '}
                          I agree to all{' '}
                          <a class='txt-danger capitalize-font' href='#'>
                            terms
                          </a>
                        </label>
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
