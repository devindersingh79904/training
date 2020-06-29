import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

const ViewVolunteersService = ({ volunteers }) => {
  useEffect(() => {
    setTimeout(() => {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src =
        'vendors/bower_components/datatables/media/js/jquery.dataTables.min.js';
      document.body.appendChild(script1);

      const script2 = document.createElement('script');
      script2.async = true;
      script2.src =
        'vendors/bower_components/datatables.net-buttons/js/dataTables.buttons.min.js';
      document.body.appendChild(script2);

      const script3 = document.createElement('script');
      script3.async = true;
      script3.src =
        'vendors/bower_components/datatables.net-buttons/js/buttons.flash.min.js';
      document.body.appendChild(script3);

      const script4 = document.createElement('script');
      script4.async = true;
      script4.src = 'vendors/bower_components/jszip/dist/jszip.min.js';
      document.body.appendChild(script4);

      const script7 = document.createElement('script');
      script7.async = true;
      script7.src =
        'vendors/bower_components/datatables.net-buttons/js/buttons.html5.min.js';
      document.body.appendChild(script7);

      const script8 = document.createElement('script');
      script8.async = true;
      script8.src =
        'vendors/bower_components/datatables.net-buttons/js/buttons.print.min.js';
      document.body.appendChild(script8);

      const script5 = document.createElement('script');
      script5.async = true;
      script5.src = 'vendors/bower_components/pdfmake/build/pdfmake.min.js';
      document.body.appendChild(script5);

      const script6 = document.createElement('script');
      script6.async = true;
      script6.src = 'vendors/bower_components/pdfmake/build/vfs_fonts.js';
      document.body.appendChild(script6);

      const script9 = document.createElement('script');
      script9.async = true;
      script9.src = 'dist/js/export-table-data.js';
      document.body.appendChild(script9);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <div class='row heading-bg bg-green'>
        <div class='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 class='txt-light'>View Volunteer Details</h5>
        </div>
        <div class='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol class='breadcrumb'>
            <li>
              <a href='index.html'>Dashboard</a>
            </li>
            <li>
              <a href='#'>
                <span>Volunteers</span>
              </a>
            </li>
            <li class='active'>
              <span>Data</span>
            </li>
          </ol>
        </div>
      </div>

      <div class='row'>
        <div class='col-sm-12'>
          <div class='panel panel-default card-view'>
            <div class='panel-heading'>
              <div class='pull-left'>
                <h6 class='panel-title txt-dark'>Volunteer data</h6>
              </div>
              <div class='clearfix'></div>
            </div>
            <div class='panel-wrapper collapse in'>
              <div class='panel-body'>
                <div class='table-wrap'>
                  <div class='table-responsive'>
                    <table
                      id='example'
                      class='table table-hover display  pb-30'
                    >
                      <thead>
                        <tr>
                          <th>Roll Number</th>
                          <th>Full Name</th>
                          <th>Course</th>
                          <th>Batch</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Duty Assigned</th>
                          <th>Duty Accepted</th>
                          <th>Work Done</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Roll Number</th>
                          <th>Full Name</th>
                          <th>Course</th>
                          <th>Batch</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Duty Assigned</th>
                          <th>Duty Accepted</th>
                          <th>Work Done</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {volunteers.length > 0 &&
                          volunteers.map((volunteer) => {
                            console.log(volunteer);
                            return (
                              <tr key={volunteers._id}>
                                <td>{volunteer.rollno}</td>
                                <td>{volunteer.name}</td>
                                <td>{volunteer.clas}</td>
                                <td>{volunteer.batch}</td>
                                <td>{volunteer.email}</td>
                                <td>{volunteer.phnno}</td>
                                <td>{volunteer.dutiesAssigned}</td>
                                <td>{volunteer.dutiesAccepted}</td>
                                <td>{volunteer.workDone}</td>
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

ViewVolunteersService.propTypes = {
  volunteers: PropTypes.array.isRequired,
};

export default ViewVolunteersService;
