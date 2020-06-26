import React from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertAction';
import PropTypes from 'prop-types';

const Login = ({ setAlert }) => {
  setAlert('login Page open', 'danger');
  return <div></div>;
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Login);
