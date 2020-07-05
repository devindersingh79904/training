import React, { Fragment , useEffect} from "react";
import {getStudent} from '../../actions/studentAction'
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const StudentProfile = ({ match,getStudent,currentStudent }) => {
  useEffect(()=>{
    if(match.params.id){
      getStudent(match.params.id);
    }
  },[])


  const getAllStudentData = (volid) => {
    var i;
    var driveAttended = [];
    if (currentStudent) {
      driveAttended = currentStudent.driveAttended;
      if (driveAttended) {
        for (i = 0; i < driveAttended.length; i++) {
          if (driveAttended[i]._id === volid) {
            return driveAttended[i];
          }
        }
      }
    }
  };




  return (
    <Fragment>
      <div className='row heading-bg  bg-blue'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 className='txt-light'>Volunteer Profile</h5>
        </div>
        <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol className='breadcrumb'>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='#'>
                <span>Student profile</span>
              </Link>
            </li>
          </ol>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>Student Details</h6>
              </div>
              <div className='pull-right'>
                <h6 className='txt-dark'>Summary</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='row'>
                  <div className='col-xs-6'>
                    <span className='txt-dark head-font inline-block capitalize-font mb-5'></span>
                    <address className='mb-15'>
                      <span className='address-head mb-5'>
                        {currentStudent && currentStudent.name}
                      </span>
                      <abbr>Rollno :</abbr>{" "}
                      {currentStudent && currentStudent.rollno} <br />
                      <abbr>Class and Batch :</abbr>{" "}
                      {currentStudent && currentStudent.clas} {currentStudent && currentStudent.batch} <br />
                      <abbr title='Email'>Email :</abbr>{" "}
                      {currentStudent && currentStudent.email} <br />
                      <abbr>Phone :</abbr>{" "}
                      {currentStudent && currentStudent.phnno}
                    </address>
                  </div>
                  <div className='col-xs-6 text-right'>
                    <span className='txt-dark head-font inline-block capitalize-font mb-5'></span>
                    <address className='mb-15'>
                      <span className='address-head mb-5'>Total Drives Attended : {currentStudent && currentStudent.driveAttended.length}</span>
                      <span className='address-head mb-5'>Total Drives Shortlisted : {currentStudent && currentStudent.driveShortlisted.length}</span>
                    </address>
                  </div>
                </div>
                <div className='seprator-block'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-6 col-md-6'>
          <div className='panel panel-primary card-view'>
            <div className='panel-heading mb-20'>
              <div className='pull-left'>
                <h6 className='panel-title txt-light'>Detail Drives Attended</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='table-wrap'>
                  <div className='table-responsive'>
                    <table className='table  top-countries'>
                      <tbody>
                        {currentStudent &&
                          currentStudent.driveAttended.map((drive) => {
                            return (
                              <tr>
                                <td>{drive.name}</td>
                                <td>{drive.date}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-6 col-md-6'>
          <div className='panel panel-primary card-view'>
            <div className='panel-heading mb-20'>
              <div className='pull-left'>
                <h6 className='panel-title txt-light'>Detail Shortlisted</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='table-wrap'>
                  <div className='table-responsive'>
                    <table className='table  top-countries'>
                      <tbody>
                        {currentStudent &&
                          currentStudent.driveShortlisted.map((drive) => {
                            const x = getAllStudentData(drive._id)
                            return (
                              <tr>
                                <td>{x.name}</td>
                                <td>{x.date}</td>
                                <td>{drive.package}</td>
                              </tr>
                            );
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
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentStudent : state.studentRuducer.currentStudent
});
export default connect(mapStateToProps,{getStudent})(StudentProfile);
