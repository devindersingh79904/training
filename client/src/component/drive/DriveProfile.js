import React, { Fragment ,useEffect} from "react";
import {getDrive} from '../../actions/driveAction';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const DriveProfile = ({match, getDrive,currentDrive }) => {
  useEffect(
    ()=>{
      if(match.params.id){
        getDrive(match.params.id)
      }
    },[]
  )

  return (
    <Fragment>
      <div className='row heading-bg  bg-blue'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 className='txt-light'>Company Profile</h5>
        </div>
        <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol className='breadcrumb'>
            <li>
              <a href='/'>Dashboard</a>
            </li>
            <li>
              <a href='#'>
                <span>Company profile</span>
              </a>
            </li>
          </ol>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>Drive Details</h6>
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
                        {currentDrive && currentDrive.name}
                      </span>
                      {/* Company city Here <br /> */}
                      <abbr title='Email'>Email :</abbr>{" "}
                      {currentDrive && currentDrive.email}
                    </address>
                  </div>
                  <div className='col-xs-6 text-right'>
                    <span className='txt-dark head-font inline-block capitalize-font mb-5'></span>
                    <address className='mb-15'>
                      <span className='address-head mb-5'>
                        Date of Drive : {currentDrive && currentDrive.date}
                      </span>
                      <span className='address-head mb-5'>
                        Type of Drive : {currentDrive && currentDrive.type}
                      </span>
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
        <div className='col-lg-4 col-md-6'>
          <div className='panel panel-primary card-view'>
            <div className='panel-heading mb-20'>
              <div className='pull-left'>
                <h6 className='panel-title txt-light'>Volunteers in Drive</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='table-wrap'>
                  <div className='table-responsive'>
                    <table className='table  top-countries'>
                      <tbody>
                        {currentDrive &&
                          currentDrive.volunteersOnDuty.map((vol) => {
                            return (
                              <tr>
                                <td>{vol.rollno}</td>
                                <td>{vol.name}</td>
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

        <div className='col-lg-4 col-md-6'>
          <div className='panel panel-primary card-view'>
            <div className='panel-heading mb-20'>
              <div className='pull-left'>
                <h6 className='panel-title txt-light'>Students in Drive</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='table-wrap'>
                  <div className='table-responsive'>
                    <table className='table  top-countries'>
                      <tbody>
                        <tr>
                          <td>Student Rollno</td>
                          <td>Student Name</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6'>
          <div className='panel panel-primary card-view'>
            <div className='panel-heading mb-20'>
              <div className='pull-left'>
                <h6 className='panel-title txt-light'>Students Shortlisted</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='table-wrap'>
                  <div className='table-responsive'>
                    <table className='table  top-countries'>
                      <tbody>
                        <tr>
                          <td>Shortlist Rollno</td>
                          <td>shortlist Name</td>
                        </tr>
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

DriveProfile.propTypes = {
  currentDrive: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  currentDrive: state.driveReducer.currentDrive,
});

export default connect(mapStateToProps,{getDrive})(DriveProfile);
