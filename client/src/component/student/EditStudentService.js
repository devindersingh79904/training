import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import EditStudentModel from "./EditStudentModel";
import PropTypes from "prop-types";

const EditStudentService = ({ students, setCurrentStudent }) => {
  const [stdid, setStdid] = useState({
    id: "",
  });

  const [formData, setFormData] = useState({});
  useEffect(() => {
    setTimeout(() => {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = "dist/js/footable-data.js";
      document.body.appendChild(script1);
    }, 1000);
  }, []);
  const { id } = stdid;

  const onClick = (e, std) => {
    setStdid({ id: std._id });
    setCurrentStudent(std);
    setFormData({ std });
  };

  return (
    <Fragment>
      <div className='row heading-bg bg-green'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 className='txt-light'>Edit Student</h5>
        </div>
        <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol className='breadcrumb'>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='#'>
                <span>Student Edit</span>
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
                <h6 className='panel-title txt-dark'>Edit Student</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='table-wrap'>
                  <table
                    id='footable_2'
                    className='table'
                    data-paging='true'
                    data-filtering='true'
                    data-sorting='true'>
                    <thead>
                      <tr>
                        <th data-name='rollNo' data-type='number'>
                          rollNo
                        </th>
                        <th data-name='fullName'>Full Name</th>
                        <th data-name='course' data-breakpoints='sm'>
                          Course
                        </th>
                        <th data-name='batch' data-breakpoints='sm'>
                          Batch
                        </th>
                        <th data-name='email' data-breakpoints='sm'>
                          Email
                        </th>
                        <th data-name='phnno' data-breakpoints='sm'>
                          Phone No.
                        </th>
                        <th data-name='session' data-breakpoints='sm'>
                          Session
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {students !== null &&
                        students.length > 0 &&
                        students.map((student) => {
                          return (
                            <tr
                              key={student._id}
                              onClick={(e) => onClick(e, student)}>
                              <td>{student.rollno}</td>
                              <td>{student.name}</td>
                              <td>{student.clas}</td>
                              <td>{student.batch}</td>
                              <td>{student.email}</td>
                              <td>{student.phnno}</td>
                              <td>{student.session}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                  <EditStudentModel id={id} std={formData.std} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EditStudentService.propTypes = {
  students: PropTypes.object.isRequired,
  setCurrentStudent: PropTypes.func.isRequired,
};

export default EditStudentService;
