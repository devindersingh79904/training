import React, { Fragment, useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { addDrive } from '../../actions/driveAction';
import { setAlert } from '../../actions/alertAction';
import { getVolunteers } from '../../actions/volunteerAction';
import ShowVolunteerInDrive from './ShowVolunteerInDrive';
import PropTypes from 'prop-types';

const AddDrive = ({ setAlert, addDrive, getVolunteers, volunteers }) => {
  useLayoutEffect(() => {
    getVolunteers();
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    date: '',
    volunteersOnDuty: [],
  });

  const { name, email, type, description, date, volunteersOnDuty } = formData;

  volunteers.sort(function (a, b) {
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

  const onCheckChange = (e, vol) => {
    console.log(e.target.checked);
    console.log(vol);
    const { _id, name, rollno } = vol;
    if (e.target.checked) {
      setFormData({
        ...formData,
        [e.target.name]: [...formData.volunteersOnDuty, { _id, name, rollno }],
      });
    } else {
      console.log('in else');
      console.log();
      setFormData({
        ...formData,
        [e.target.name]: volunteersOnDuty.filter(
          (volunteer) => volunteer._id != vol._id
        ),
      });
      // volList.forEach((volunteer, index, volList) => {
      //   if (volunteer._id === vol._id) {
      //     console.log('in else di if ch');
      //     volList.splice(index, 1);
      //   }
      // });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setAlert('name cannot be empty', 'danger');
    } else if (date === '') {
      setAlert('email cannot be empty', 'danger');
    } else if (type === '') {
      setAlert('type cannot be empty', 'danger');
    } else if (description === '') {
      setAlert('description cannot be empty', 'danger');
    } else {
      var data = {
        name,
        type,
        description,
        date,
        volunteersOnDuty,
      };
      addDrive(data);
      setFormData({
        name: '',
        type: '',
        description: '',
        date: '',
        volunteersOnDuty: [],
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
                      <label class='control-label mb-10 text-left'>Name</label>
                      <input
                        type='text'
                        class='form-control rounded-input'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div class='form-group'>
                      <label class='control-label mb-10 text-left' for='date'>
                        Date
                      </label>
                      <input
                        type='date'
                        id='date'
                        class='form-control rounded-input'
                        placeholder='Date'
                        name='date'
                        value={date}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div class='form-group'>
                      <label class='control-label mb-10 text-left' for='class'>
                        Type
                      </label>
                      <select
                        id='type'
                        class='form-control rounded-input'
                        name='type'
                        value={type}
                        onChange={(e) => onChange(e)}
                      >
                        <option value=''>Select</option>
                        <option>Drive</option>
                        <option>Workshop</option>
                      </select>
                    </div>
                    <div class='form-group'>
                      <label class='control-label mb-10 text-left' for='batch'>
                        Description
                      </label>
                      <input
                        type='text'
                        id='description'
                        class='form-control rounded-input'
                        placeholder='Description'
                        name='description'
                        value={description}
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div class='form-group'>
                      <label class='control-label mb-10 text-left'>
                        Volunteer's On duty
                      </label>
                      <div class='form-group'>
                        {volunteers.map((vol) => {
                          return (
                            <ShowVolunteerInDrive
                              volunteer={vol}
                              onCheckChange={onCheckChange}
                            />
                          );
                        })}
                      </div>
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
});

export default connect(mapStateToProps, { addDrive, setAlert, getVolunteers })(
  AddDrive
);
