import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { addCompany } from '../../actions/companyAction';
import { setAlert } from '../../actions/alertAction';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      <div className='row heading-bg bg-blue'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 className='txt-light'>Add Drive Form</h5>
        </div>

        <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol className='breadcrumb'>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='active' to='#'>
                <span>Add Company</span>
              </Link>
            </li>
          </ol>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>Add Company Form</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='form-wrap'>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                      <label className='control-label mb-10 text-left'>
                        Company Name
                      </label>
                      <input
                        type='text'
                        className='form-control rounded-input'
                        placeholder='Company Name'
                        name='name'
                        value={name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <label className='control-label mb-10 text-left' htmlFor='email'>
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
