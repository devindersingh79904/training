import React, { Fragment, useLayoutEffect, useState } from 'react';
import { getDrives, doneDriveVol } from '../../actions/driveAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DoneDriveVol = ({ getDrives, doneDriveVol, drives }) => {
    const [formData, setFormData] = useState({
        assignVolunteers: [],
        acceptVolunteers: [],
        doneVolunteers: [],
        drive: null,
        id: '',
      });
      useLayoutEffect(() => {
        getDrives();
      }, []);

    const { drive, id, acceptVolunteers, assignVolunteers,doneVolunteers } = formData;

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
        var sel = drives.filter((comp) => comp._id === e.target.value);
        console.log(sel[0]);
        setFormData({
          ...formData,
          id: sel[0]._id,
          drive: sel[0],
          assignVolunteers: sel[0].volunteersAssigned,
          acceptVolunteers: sel[0].volunteersAccepted,
          doneVolunteers: []
        });
    };

    const onCheckChange = (e, vol) => {
        console.log(e.target.checked);
        console.log(vol);
        const { _id, name } = vol;
        if (e.target.checked) {
          setFormData({
            ...formData,
            doneVolunteers: [...formData.doneVolunteers, { _id, name }],
          });
        } else {
          setFormData({
            ...formData,
            doneVolunteers: formData.doneVolunteers.filter(
              (volunteer) => volunteer._id != vol._id
            ),
          });
        }
      };

      const onSubmit = (e) => {
          doneDriveVol(id,{doneVolunteers})
        };
      
        function containsObject(obj) {
            var i;
            var volunteersPresent = [];
            if (drive) {
              volunteersPresent = drive.volunteersPresent;
              if (volunteersPresent) {
                for (i = 0; i < volunteersPresent.length; i++) {
                  if (volunteersPresent[i]._id === obj._id) {
                    return true;
                  }
                }
              }
            }
            return false;
          }

          const getAllData = (volid) =>{
            var i;
            var volunteersAssigned = [];
            if (drive) {
              volunteersAssigned = drive.volunteersAssigned;
              if (volunteersAssigned) {
                for (i = 0; i < volunteersAssigned.length; i++) {
                  if (volunteersAssigned[i]._id === volid) {
                    return volunteersAssigned[i];
                  }
                }
              }
            }
          }
    return (
        <Fragment>
        {drives.length > 0 ? (
          <form>
            <div className='row heading-bg bg-blue'>
              <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
                <h5 className='txt-light'>
                  Change status of volunteer to Present
                </h5>
              </div>
              <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
                <ol className='breadcrumb'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <span>Done Duty</span>
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
                        Change status of Duty
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
                            return <option key={drive._id} value={drive._id}>{drive.name + ' ' + drive.date.substring(0, 10)}</option>;
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
                                <th>Present</th>
                              </tr>
                            </thead>
                            <tbody>
                              {acceptVolunteers &&
                                acceptVolunteers.length > 0 &&
                                acceptVolunteers.map((volunteer) => {
                                    const allData = getAllData(volunteer._id)
                                  if (containsObject(allData)) {
                                    return (
                                      <tr key={allData._id}>
                                        <td>{allData.rollno}</td>
                                        <td>{allData.name}</td>
                                        <td>{allData.clas}</td>
                                        <td>
                                          <input
                                            type='checkbox'
                                            name='assignVolunteers'
                                            value={allData}
                                            checked
                                            disabled
                                            onChange={(e) =>
                                              onCheckChange(e, allData)
                                            }
                                          />
                                        </td>
                                      </tr>
                                    );
                                  } else {
                                    return (
                                      <tr key={allData._id}>
                                        <td>{allData.rollno}</td>
                                        <td>{allData.name}</td>
                                        <td>{allData.clas}</td>
                                        <td>
                                          <input
                                            type='checkbox'
                                            name='volunteers'
                                            value={allData}
                                            onChange={(e) =>
                                              onCheckChange(e, allData)
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
    
    )
}

DoneDriveVol.propTypes = {
    getDrives: PropTypes.func.isRequired,
    doneDriveVol: PropTypes.func.isRequired,
    drives: PropTypes.array.isRequired,
}
  
  const mapStateToProps = (state) => ({
    volunteers: state.volunteerReducer.volunteers,
    drives: state.driveReducer.drives,
  });
  
  export default connect(mapStateToProps, {
    getDrives,
    doneDriveVol,
  })(DoneDriveVol)