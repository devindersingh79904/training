import React, { Fragment , useEffect} from "react";
import {getVolunteer} from '../../actions/volunteerAction'
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const VolunteerProfile = ({ match,getVolunteer,currentVol }) => {
  useEffect(()=>{
    if(match.params.id){
      getVolunteer(match.params.id);
    }
  },[])
  console.log(currentVol);


  function isAccepted(id){
    var i;
    // console.log(drive);
    var dutiesAcceptedArray = [];
    if (currentVol) {
      dutiesAcceptedArray = currentVol.dutiesAcceptedArray;
      if (dutiesAcceptedArray) {
        // console.log(volunteersAssigned);
        for (i = 0; i < dutiesAcceptedArray.length; i++) {
          if (dutiesAcceptedArray[i]._id === id) {
            return "True";
          }
        }
      }
    }
    return "False";
  }

  function isPresent(id){
    var i;
    // console.log(drive);
    var presentArray = [];
    if (currentVol) {
      presentArray = currentVol.presentArray;
      if (presentArray) {
        // console.log(volunteersAssigned);
        for (i = 0; i < presentArray.length; i++) {
          if (presentArray[i]._id === id) {
            return "True";
          }
        }
      }
    }
    return "False";
  }
  return (
    <Fragment>
      {currentVol ? (<Fragment>      <div className='row heading-bg  bg-blue'>
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
                <span>Volunteer profile</span>
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
                <h6 className='panel-title txt-dark'>Volunteer Details</h6>
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
                        {currentVol.name}
                      </span>
                      <abbr>Rollno :</abbr>{" "}
                      { currentVol.rollno} <br />
                      <abbr>Class and Batch :</abbr>{" "}
                      { currentVol.clas + ' '+currentVol.batch} <br />
                      <abbr title='Email'>Email :</abbr>{" "}
                      { currentVol.email} <br />
                      <abbr>Phone :</abbr>{" "}
                      {  currentVol.phnno}
                    </address>
                  </div>
                  <div className='col-xs-6 text-right'>
                    <span className='txt-dark head-font inline-block capitalize-font mb-5'></span>
                    <address className='mb-15'>
                      <span className='address-head mb-5'>Total Duty Asigned : {  currentVol.dutiesAssignedArray.length}</span>
                      <span className='address-head mb-5'>Total Duty Accepted : {  currentVol.dutiesAcceptedArray.length}</span>
                      <span className='address-head mb-5'>Total Duty Present : {  currentVol.presentArray.length}</span>
                     
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
        <div className='col-lg-12 col-md-6'>
          <div className='panel panel-primary card-view'>
            <div className='panel-heading mb-20'>
              <div className='pull-left'>
                <h6 className='panel-title txt-light'>Detail duty assigned</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='table-wrap'>
                  <div className='table-responsive'>
                    <table className='table  top-countries'>
                      <tbody>
                        {currentVol.dutiesAssignedArray.length > 0 &&
                          currentVol.dutiesAssignedArray.map((comp) => {
                            return (
                              <tr>
                                <td>{comp.date}</td>
                                <td>{comp.name}</td>
                                <td>{comp.type}</td>
                                <td>{isAccepted(comp._id)}</td>
                                <td>{isPresent(comp._id)}</td>
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
  </Fragment>) : <div>sdsd</div>}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentVol: state.volunteerReducer.currentVol
});
export default connect(mapStateToProps,{getVolunteer})(VolunteerProfile);
