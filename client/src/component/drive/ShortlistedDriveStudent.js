import React, { Fragment, useLayoutEffect, useState } from 'react';
import { getDrives, shortlistedDriveStd } from '../../actions/driveAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ShortlistedDriveStudent = ({
  shortlistedDriveStd,
  getDrives,
  drives,
}) => {
  const [formData, setFormData] = useState({
    selectedStudents: [],
    studentsAttended: [],
    drive: null,
    id: '',
    salary: '',
  });
  useLayoutEffect(() => {
    getDrives();
  }, []);

  const { drive, id, selectedStudents, studentsAttended } = formData;

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
    var sel = drives.filter((comp) => comp._id == e.target.value);
    console.log(sel[0]);
    setFormData({
      ...formData,
      id: sel[0]._id,
      drive: sel[0],
      studentsAttended: sel[0].studentsAttended,
      selectedStudents: [],
    });
  };

  const onCheckChange = (e, vol) => {
    console.log(e.target.checked);
    console.log(vol);
    const { _id } = vol;
    if (e.target.checked) {
      setFormData({
        ...formData,
        selectedStudents: [...formData.selectedStudents, { _id }],
      });
    } else {
      setFormData({
        ...formData,
        selectedStudents: formData.selectedStudents.filter(
          (std) => std._id != vol._id
        ),
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(selectedStudents);
    // attendedDriveStd(id, { selectedStudents });
  };

  function containsObject(obj) {
    var i;
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
              <h5 className='txt-light'>ShortListed Student for Drive</h5>
            </div>
            <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
              <ol className='breadcrumb'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='#'>
                    <span>ShortListed Student</span>
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
                      ShortListed Students
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
                              {drive.name + '  ' + drive.date}
                            </option>
                          );
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
                              <th>Attend</th>
                            </tr>
                          </thead>
                          <tbody>
                            {studentsAttended &&
                              studentsAttended > 0 &&
                              studentsAttended.map((student) => {
                                console.log('sss');
                                if (containsObject(student)) {
                                  return (
                                    <tr key={student._id}>
                                      <td>{student.rollno}</td>
                                      <td>{student.name}</td>
                                      <td>{student.clas}</td>
                                      <td>
                                        <input
                                          type='checkbox'
                                          name='studentsAttended'
                                          value={student}
                                          checked
                                          disabled
                                          onChange={(e) =>
                                            onCheckChange(e, student)
                                          }
                                        />
                                      </td>
                                    </tr>
                                  );
                                } else {
                                  return (
                                    <tr key={student._id}>
                                      <td>{student.rollno}</td>
                                      <td>{student.name}</td>
                                      <td>{student.clas}</td>
                                      <td>
                                        <input
                                          type='checkbox'
                                          name='studentsAttended'
                                          value={student}
                                          onChange={(e) =>
                                            onCheckChange(e, student)
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
};

const mapStateToProps = (state) => ({
  drives: state.driveReducer.drives,
});
export default connect(mapStateToProps, {
  getDrives,
  shortlistedDriveStd,
})(ShortlistedDriveStudent);
