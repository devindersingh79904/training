import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { addCompany } from '../../actions/companyAction';
import { setAlert } from '../../actions/alertAction';
import PropTypes from 'prop-types';

const AddCompany = ({ addCompany, setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setAlert('name cannot be empty', 'danger');
    } else if (email === '') {
      setAlert('email cannot be empty', 'danger');
    } else {
      var data = {
        name,
        email,
      };

      addCompany(data);
      setFormData({
        name: '',
        email: '',
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
              <span>Company</span>
            </li>
          </ol>
        </div>
      </div>

      <div class='row'>
        <div class='col-sm-12'>
          <div class='panel panel-default card-view'>
            <div class='panel-heading'>
              <div class='pull-left'>
                <h6 class='panel-title txt-dark'>Add Company Form</h6>
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

AddCompany.propTypes = {
  addCompany: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default connect(null, { addCompany, setAlert })(AddCompany);
