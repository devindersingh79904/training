import React, { Fragment, useLayoutEffect, useState } from 'react';
import { getDrives, shortlistedDriveStd } from '../../actions/driveAction';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertAction';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ShortlistedDriveStudent = ({
  shortlistedDriveStd,
  getDrives,
  drives,
  setAlert,
}) => {
  const [formData, setFormData] = useState({
    studentsAttended: [],
    selectedStudents: [],
    salary: '',
    drive: null,
    id: '',
  });

  useLayoutEffect(() => {
    getDrives();
  }, []);

  const { salary, drive, id, studentsAttended, selectedStudents } = formData;

  drives.sort(function (a, b) {
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
  const onCompanyChange = (e) => {
    var sel = drives.filter((comp) => comp._id === e.target.value);
    console.log(sel[0]);
    setFormData({
      ...formData,
      id: sel[0]._id,
      drive: sel[0],
      studentsAttended: sel[0].studentsAttended,
      selectedStudents: [],
    });
  };

  const onCheckChange = (e, std) => {
    console.log(e.target.checked);
    console.log(std);
    const { _id, name } = std;
    if (e.target.checked) {
      setFormData({
        ...formData,
        selectedStudents: [...formData.selectedStudents, { _id, name }],
      });
    } else {
      setFormData({
        ...formData,
        selectedStudents: formData.selectedStudents.filter(
          (student) => student._id != std._id
        ),
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (salary === '') {
      setAlert('Package cant be empty', 'danger');
    } else if (selectedStudents.lrngth === 0) {
      setAlert('Select atleast one Student', 'danger');
    } else {
      console.log(id);
      console.log(formData);
      shortlistedDriveStd(id, { salary, selectedStudents });
      window.location.reload(false);
      // doneDriveVol(id, { doneVolunteers });
    }
  };

  function containsObject(obj) {
    var i;
    // console.log(drive);
    var selectedStudents = [];
    if (drive) {
      selectedStudents = drive.selectedStudents;
      if (selectedStudents) {
        // console.log(volunteersAssigned);
        for (i = 0; i < selectedStudents.length; i++) {
          if (selectedStudents[i]._id === obj._id) {
            return true;
          }
        }
      }
    }
    return false;
  }

  return (
    <Fragment>
      {drives.length > 0 ? (
        <form>
          <div className='row heading-bg bg-blue'>
            <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
              <h5 className='txt-light'>Change status of student</h5>
            </div>
            <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
              <ol className='breadcrumb'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='#'>
                    <span>Shortlisted</span>
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
                      Shortlisted student
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
                          return (
                            <option key={drive._id} value={drive._id}>
                              {drive.name + ' ' + drive.date}
                            </option>
                          );
                        })}
                    </select>

                    <p className='text-muted'>Student package in Lakh's</p>
                    <input
                      type='text'
                      className='form-control rounded-input'
                      placeholder='Package in Lakh'
                      name='salary'
                      value={salary}
                      onChange={(e) => onChange(e)}
                    />
                    <button onClick={(e) => onSubmit(e)}>Submit</button>
                    <div className='table-wrap mt-40'>
                      <div className='table-responsive'>
                        <table className='table mb-0'>
                          <thead>
                            <tr>
                              <th>Rollno</th>
                              <th>Full Name</th>
                              <th>Class</th>
                              <th>Present</th>
                            </tr>
                          </thead>
                          <tbody>
                            {studentsAttended &&
                              studentsAttended.length > 0 &&
                              studentsAttended.map((std) => {
                                // const allData = getAllData(volunteer._id);
                                if (containsObject(std)) {
                                  return (
                                    <tr key={std._id}>
                                      <td>{std.rollno}</td>
                                      <td>{std.name}</td>
                                      <td>{std.clas}</td>
                                      <td>
                                        <input
                                          type='checkbox'
                                          name='selectedStudents'
                                          value={std}
                                          checked
                                          disabled
                                          onChange={(e) =>
                                            onCheckChange(e, std)
                                          }
                                        />
                                      </td>
                                    </tr>
                                  );
                                } else {
                                  return (
                                    <tr key={std._id}>
                                      <td>{std.rollno}</td>
                                      <td>{std.name}</td>
                                      <td>{std.clas}</td>
                                      <td>
                                        <input
                                          type='checkbox'
                                          name='selectedStudents'
                                          value={std}
                                          onChange={(e) =>
                                            onCheckChange(e, std)
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

ShortlistedDriveStudent.propTypes = {
  getDrives: PropTypes.func.isRequired,
  shortlistedDriveStd: PropTypes.func.isRequired,
  drives: PropTypes.array.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  drives: state.driveReducer.drives,
});
export default connect(mapStateToProps, {
  getDrives,
  shortlistedDriveStd,
  setAlert,
})(ShortlistedDriveStudent);
