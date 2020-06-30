import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ViewVolunteersService = ({ drives, setCurrentDrive }) => {
  const [driveid, setdriveid] = useState({
    id: "",
  });
  useEffect(() => {
    setTimeout(() => {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src =
        "vendors/bower_components/datatables/media/js/jquery.dataTables.min.js";
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.async = true;
      script2.src =
        "vendors/bower_components/datatables.net-buttons/js/dataTables.buttons.min.js";
      document.body.appendChild(script2);

      const script3 = document.createElement("script");
      script3.async = true;
      script3.src =
        "vendors/bower_components/datatables.net-buttons/js/buttons.flash.min.js";
      document.body.appendChild(script3);

      const script4 = document.createElement("script");
      script4.async = true;
      script4.src = "vendors/bower_components/jszip/dist/jszip.min.js";
      document.body.appendChild(script4);

      const script7 = document.createElement("script");
      script7.async = true;
      script7.src =
        "vendors/bower_components/datatables.net-buttons/js/buttons.html5.min.js";
      document.body.appendChild(script7);

      const script8 = document.createElement("script");
      script8.async = true;
      script8.src =
        "vendors/bower_components/datatables.net-buttons/js/buttons.print.min.js";
      document.body.appendChild(script8);

      const script5 = document.createElement("script");
      script5.async = true;
      script5.src = "vendors/bower_components/pdfmake/build/pdfmake.min.js";
      document.body.appendChild(script5);

      const script6 = document.createElement("script");
      script6.async = true;
      script6.src = "vendors/bower_components/pdfmake/build/vfs_fonts.js";
      document.body.appendChild(script6);

      const script9 = document.createElement("script");
      script9.async = true;
      script9.src = "dist/js/export-table-data.js";
      document.body.appendChild(script9);
    }, 1000);
  }, []);
  const { id } = driveid;
  const onClick = (e, drive) => {
    console.log("i am onclick");
    console.log(drive);
    setdriveid({ id: drive._id });
    setCurrentDrive(drive);
  };

  return (
    <Fragment>
      <div class='row heading-bg bg-green'>
        <div class='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 class='txt-light'>View Drives Details</h5>
        </div>
        <div class='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol class='breadcrumb'>
            <li>
              <a href='/'>Dashboard</a>
            </li>
            <li>
              <a href='#'>
                <span>Drives</span>
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
                <h6 class='panel-title txt-dark'>Drive data</h6>
              </div>
              <div class='clearfix'></div>
            </div>
            <div class='panel-wrapper collapse in'>
              <div class='panel-body'>
                <div class='table-wrap'>
                  <div class='table-responsive'>
                    <table
                      id='example'
                      class='table table-hover display  pb-30'>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Type</th>
                          <th>Date</th>
                          <th>Description</th>
                          <th>Volunteers On Duty</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Type</th>
                          <th>Date</th>
                          <th>Description</th>
                          <th>Volunteers On Duty</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {drives !== null &&
                          drives.length > 0 &&
                          drives.map((drive) => {
                            console.log(drive);
                            return (
                              <tr key={drive._id}>
                                <td onClick={(e) => onClick(e, drive)}>
                                  <Link to={`/drive-profile/${drive._id}`}>
                                    {drive.name}
                                  </Link>{" "}
                                </td>
                                <td>{drive.email}</td>
                                <td>{drive.type}</td>
                                <td>{drive.date}</td>
                                <td>{drive.description}</td>
                                <td>
                                  {drive.volunteersOnDuty.map((vol) => {
                                    return vol.name + " ,";
                                  })}
                                </td>
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
  drives: PropTypes.array.isRequired,
};

export default ViewVolunteersService;