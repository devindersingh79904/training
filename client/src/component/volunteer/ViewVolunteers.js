import React, { Fragment, useEffect, useLayoutEffect } from 'react';
import { getVolunteers } from '../../actions/volunteerAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tesj from './Tesj';
const ViewVolunteers = (props) => {
  useLayoutEffect(() => {
    getVolunteers();
    // eslint-disable-next-line
  }, []);
  const { volunteers, getVolunteers } = props;
  console.log(props);
  return (
    <Fragment>
      {volunteers !== null && volunteers.length > 0 && (
        <Tesj volunteers={volunteers} />
      )}
    </Fragment>
    // <Fragment>
    //   <div class='row heading-bg bg-green'>
    //     <div class='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
    //       <h5 class='txt-light'>View Volunteer Details</h5>
    //     </div>
    //     <div class='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
    //       <ol class='breadcrumb'>
    //         <li>
    //           <a href='index.html'>Dashboard</a>
    //         </li>
    //         <li>
    //           <a href='#'>
    //             <span>Volunteers</span>
    //           </a>
    //         </li>
    //         <li class='active'>
    //           <span>Data</span>
    //         </li>
    //       </ol>
    //     </div>
    //   </div>

    //   <div class='row'>
    //     <div class='col-sm-12'>
    //       <div class='panel panel-default card-view'>
    //         <div class='panel-heading'>
    //           <div class='pull-left'>
    //             <h6 class='panel-title txt-dark'>Volunteer data</h6>
    //           </div>
    //           <div class='clearfix'></div>
    //         </div>
    //         <div class='panel-wrapper collapse in'>
    //           <div class='panel-body'>
    //             <div class='table-wrap'>
    //               <div class='table-responsive'>
    //                 <table
    //                   id='example'
    //                   class='table table-hover display  pb-30'
    //                 >
    //                   <thead>
    //                     <tr>
    //                       <th>Roll Number</th>
    //                       <th>Full Name</th>
    //                       <th>Course</th>
    //                       <th>Batch</th>
    //                       <th>Email</th>
    //                       <th>Phone Number</th>
    //                       <th>Duty Assigned</th>
    //                       <th>Duty Accepted</th>
    //                       <th>Work Done</th>
    //                     </tr>
    //                   </thead>
    //                   <tfoot>
    //                     <tr>
    //                       <th>Roll Number</th>
    //                       <th>Full Name</th>
    //                       <th>Course</th>
    //                       <th>Batch</th>
    //                       <th>Email</th>
    //                       <th>Phone Number</th>
    //                       <th>Duty Assigned</th>
    //                       <th>Duty Accepted</th>
    //                       <th>Work Done</th>
    //                     </tr>
    //                   </tfoot>
    //                   <tbody>
    //                     {volunteers.length > 0 &&
    //                       volunteers.map((volunteer) => {
    //                         console.log(volunteer);
    //                         return (
    //                           <tr key={volunteers._id}>
    //                             <td>{volunteer.rollno}</td>
    //                             <td>{volunteer.name}</td>
    //                             <td>{volunteer.clas}</td>
    //                             <td>{volunteer.batch}</td>
    //                             <td>{volunteer.email}</td>
    //                             <td>{volunteer.phnno}</td>
    //                             <td>{volunteer.dutiesAssigned}</td>
    //                             <td>{volunteer.dutiesAccepted}</td>
    //                             <td>{volunteer.workDone}</td>
    //                           </tr>
    //                         );
    //                       })}
    //                     {/* <tr>
    //                       <td>1001</td>
    //                       <td>Sarvpreet singh</td>
    //                       <td>MCA</td>
    //                       <td>Morning</td>
    //                       <td>singhsarvpreet14@gmail.com</td>
    //                       <td>9501103251</td>
    //                       <td>1</td>
    //                       <td>0</td>
    //                       <td>0</td>
    //                     </tr> */}
    //                   </tbody>
    //                 </table>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Fragment>
  );
};

ViewVolunteers.propTypes = {
  getVolunteers: PropTypes.func.isRequired,
  volunteers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  volunteers: state.volunteerReducer.volunteers,
});

export default connect(mapStateToProps, { getVolunteers })(ViewVolunteers);