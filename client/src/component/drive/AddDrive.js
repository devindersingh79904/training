import React, { Fragment, useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { addDrive } from '../../actions/driveAction';
import { setAlert } from '../../actions/alertAction';
import { getVolunteers } from '../../actions/volunteerAction';
import { getCompany } from '../../actions/companyAction';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AddDrive = ({
  history,
  setAlert,
  addDrive,
  getVolunteers,
  volunteers,
  getCompany,
  companys,
}) => {
  useLayoutEffect(() => {
    getVolunteers();
    getCompany();
  }, []);
  const [formData, setFormData] = useState({
    isCompany: false,
    name: '',
    email: '',
    type: '',
    description: '',
    date: '',
    volunteersAssigned: [],
  });

  const {
    name,
    email,
    type,
    description,
    date,
    volunteersAssigned,
    isCompany,
  } = formData;

  volunteers.sort(function (a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return 0;
  });

  companys.sort(function (a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return 0;
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onIsCompChange = (e) => {
    setFormData({ ...formData, isCompany: !isCompany, email: '', name: '' });
  };

  const onCompanyChange = (e) => {
    var sel = companys.filter((comp) => comp.name == e.target.value);
    var email = sel[0].email;
    setFormData({ ...formData, [e.target.name]: e.target.value, email: email });
  };
  

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setAlert('name cannot be empty', 'danger');
    }else if (email === '') {
      setAlert('email cannot be empty', 'danger');
    } 
    else if (date === '') {
      setAlert('date cannot be empty', 'danger');
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
        date
      };
      addDrive(data,history);
      setFormData({
        name: '',
        email: '',
        type: '',
        description: '',
        date: '',
        isCompany: false,
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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link className='active' to='#'>
                <span>Add Drive</span>
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
                <h6 className='panel-title txt-dark'>Add Drive Form</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='form-wrap'>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className='checkbox checkbox-inline checkbox-primary'>
                      <input
                        id='isCompany'
                        type='checkbox'
                        value={isCompany}
                        name='isCompany'
                        onChange={(e) => onIsCompChange(e)}
                      />
                      <label htmlFor='isCompany'>isCompany</label>
                    </div>

                    {!isCompany ? (
                      <div className='form-group'>
                        <label className='control-label mb-10 text-left'>
                          Name
                        </label>
                        <input
                          type='text'
                          className='form-control rounded-input'
                          placeholder='Name'
                          name='name'
                          value={name}
                          onChange={(e) => onChange(e)}
                        />
                      </div>
                    ) : (
                      <div className='form-group'>
                        <label
                          className='control-label mb-10 text-left'
                          htmlFor='className'
                        >
                          Company name
                        </label>
                        <select
                          id='name'
                          className='form-control rounded-input'
                          name='name'
                          value={name}
                          onChange={(e) => onCompanyChange(e)}
                        >
                          <option value=''>Select</option>
                          {companys.map((company) => {
                            return (
                              <option key={company._id}>{company.name}</option>
                            );
                          })}
                        </select>
                      </div>
                    )}

                    <div className='form-group'>
                      <label className='control-label mb-10 text-left'>
                        Email
                      </label>
                      <input
                        type='text'
                        className='form-control rounded-input'
                        placeholder='email'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className='form-group'>
                      <label
                        className='control-label mb-10 text-left'
                        htmlFor='date'
                      >
                        Date
                      </label>
                      <input
                        type='date'
                        id='date'
                        className='form-control rounded-input'
                        placeholder='Date'
                        name='date'
                        value={date}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <label
                        className='control-label mb-10 text-left'
                        htmlFor='className'
                      >
                        Type
                      </label>
                      <select
                        id='type'
                        className='form-control rounded-input'
                        name='type'
                        value={type}
                        onChange={(e) => onChange(e)}
                      >
                        <option value=''>Select</option>
                        <option>Drive</option>
                        <option>Workshop</option>
                        <option>Mock Placement</option>
                        <option>Tech Talks</option>
                      </select>
                    </div>
                    <div className='form-group'>
                      <label
                        className='control-label mb-10 text-left'
                        htmlFor='batch'
                      >
                        Description
                      </label>
                      <input
                        type='text'
                        id='description'
                        className='form-control rounded-input'
                        placeholder='Description'
                        name='description'
                        value={description}
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
  getVolunteers: PropTypes.func.isRequired,
  volunteers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  volunteers: state.volunteerReducer.volunteers,
  companys: state.companyRuducer.companys,
});

export default connect(mapStateToProps, {
  addDrive,
  setAlert,
  getVolunteers,
  getCompany,
})(AddDrive);
