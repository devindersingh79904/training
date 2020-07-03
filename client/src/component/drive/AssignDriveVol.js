import React, { Fragment, useLayoutEffect, useState } from 'react';
import { getDrives, assignDriveVol } from '../../actions/driveAction';
import { getVolunteers } from '../../actions/volunteerAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AssignDriveVol = ({
  getVolunteers,
  getDrives,
  assignDriveVol,
  drives,
  volunteers,
}) => {
  const [formData, setFormData] = useState({
    assignVolunteers: [],
    drive: null,
    id: '',
  });
  useLayoutEffect(() => {
    getVolunteers();
    getDrives();
  }, []);

  const { drive, id, assignVolunteers } = formData;

  volunteers.sort(function (a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return 0;
  });

  drives.sort(function (a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return 0;
  });

  const onCompanyChange = (e) => {
    var sel = drives.filter((comp) => comp.name == e.target.value);
    console.log(sel[0]);
    setFormData({
      ...formData,
      id: sel[0]._id,
      drive: sel[0],
      assignVolunteers: [],
    });
  };

  const onCheckChange = (e, vol) => {
    console.log(e.target.checked);
    console.log(vol);
    const { _id, name, rollno, clas } = vol;
    if (e.target.checked) {
      setFormData({
        ...formData,
        assignVolunteers: [
          ...formData.assignVolunteers,
          { _id, name, rollno, clas },
        ],
      });
    } else {
      setFormData({
        ...formData,
        assignVolunteers: formData.assignVolunteers.filter(
          (volunteer) => volunteer._id != vol._id
        ),
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(formData);
  };

  function containsObject(obj, list) {
    var i;
    // console.log(drive);
    var volunteersAssigned = [];
    if (drive) {
      volunteersAssigned = drive.volunteersAssigned;
      if (volunteersAssigned) {
        // console.log(volunteersAssigned);
        for (i = 0; i < volunteersAssigned.length; i++) {
          if (volunteersAssigned[i]._id === obj._id) {
            return true;
          }
        }
      }
    }
    return false;
  }
  return (
    <Fragment>
      {drives.length > 0 && volunteers.length > 0 ? (
        <form>
          <div className='row heading-bg bg-blue'>
            <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
              <h5 className='txt-light'>basic table</h5>
            </div>
            <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
              <ol className='breadcrumb'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='#'>
                    <span>Assign Duty</span>
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
                    <h6 className='panel-title txt-dark'>
                      Assign Duty to Volunteer
                    </h6>
                  </div>
                  <div className='clearfix'></div>
                </div>
                <div className='panel-wrapper collapse in'>
                  <div className='panel-body'>
                    <p className='text-muted'>Select Drive</p>
                    <select
                      className='form-control'
                      name='drive'
                      onChange={(e) => onCompanyChange(e)}
                    >
                      <option value=''>Select Drive Name</option>
                      {drives &&
                        drives.map((drive) => {
                          return <option key={drive._id}>{drive.name}</option>;
                        })}
                    </select>
                    <button onClick={(e) => onSubmit(e)}>Submit</button>
                    <div className='table-wrap mt-40'>
                      <div className='table-responsive'>
                        <table className='table mb-0'>
                          <thead>
                            <tr>
                              <th>Rollno</th>
                              <th>Full Name</th>
                              <th>Class</th>
                              <th>Assign</th>
                            </tr>
                          </thead>
                          <tbody>
                            {volunteers &&
                              volunteers.length > 0 &&
                              volunteers.map((volunteer) => {
                                if (containsObject(volunteer, drive)) {
                                  return (
                                    <tr key={volunteer._id}>
                                      <td>{volunteer.rollno}</td>
                                      <td>{volunteer.name}</td>
                                      <td>{volunteer.clas}</td>
                                      <td>
                                        <input
                                          type='checkbox'
                                          name='assignVolunteers'
                                          value={volunteer}
                                          checked
                                          disabled
                                          onChange={(e) =>
                                            onCheckChange(e, volunteer)
                                          }
                                        />
                                      </td>
                                    </tr>
                                  );
                                } else {
                                  return (
                                    <tr key={volunteer._id}>
                                      <td>{volunteer.rollno}</td>
                                      <td>{volunteer.name}</td>
                                      <td>{volunteer.clas}</td>
                                      <td>
                                        <input
                                          type='checkbox'
                                          name='volunteers'
                                          value={volunteer}
                                          onChange={(e) =>
                                            onCheckChange(e, volunteer)
                                          }
                                        />
                                      </td>
                                    </tr>
                                  );
                                }
                              })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div>no data</div>
      )}
    </Fragment>
  );
};

AssignDriveVol.propTypes = {
  getVolunteers: PropTypes.func.isRequired,
  getDrives: PropTypes.func.isRequired,
  assignDriveVol: PropTypes.func.isRequired,
  drives: PropTypes.array.isRequired,
  volunteers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  volunteers: state.volunteerReducer.volunteers,
  drives: state.driveReducer.drives,
});
export default connect(mapStateToProps, {
  getDrives,
  getVolunteers,
  assignDriveVol,
})(AssignDriveVol);
