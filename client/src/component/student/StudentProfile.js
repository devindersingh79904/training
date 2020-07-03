import React, { Fragment , useEffect} from "react";
import {getVolunteer} from '../../actions/volunteerAction'
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const StudentProfile = ({ match,getVolunteer,currentVol }) => {
  useEffect(()=>{
    if(match.params.id){
      getVolunteer(match.params.id);
    }
  },[])
  console.log(currentVol);
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
                        {currentVol && currentVol.name}
                      </span>
                      <abbr>Rollno :</abbr>{" "}
                      {currentVol && currentVol.rollno} <br />
                      <abbr>Class and Batch :</abbr>{" "}
                      {currentVol && currentVol.clas} {currentVol && currentVol.batch} <br />
                      <abbr title='Email'>Email :</abbr>{" "}
                      {currentVol && currentVol.email} <br />
                      <abbr>Phone :</abbr>{" "}
                      {currentVol && currentVol.phnno}
                    </address>
                  </div>
                  <div className='col-xs-6 text-right'>
                    <span className='txt-dark head-font inline-block capitalize-font mb-5'></span>
                    <address className='mb-15'>
                      <span className='address-head mb-5'>Total Drives Attended : {currentVol && currentVol.dutiesAssigned}</span>
                      <span className='address-head mb-5'>Total Workshops Attended : {currentVol && currentVol.workshopAssigned}</span>
                      <span className='address-head mb-5'>Total Drives Short Listed : {currentVol && currentVol.dutiesAccepted}</span>
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
                        {currentVol &&
                          currentVol.companies.map((comp) => {
                            return (
                              <tr>
                                <td>{comp.name}</td>
                                <td>{comp.date}</td>
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
                        {currentVol &&
                          currentVol.companies.map((comp) => {
                            return (
                              <tr>
                                <td>{comp.name}</td>
                                <td>{comp.date}</td>
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
  currentVol: state.volunteerReducer.currentVol
});
export default connect(mapStateToProps,{getVolunteer})(StudentProfile);
