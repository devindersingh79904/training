import React, { Fragment,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {getVolunteers}  from '../../actions/volunteerAction'
import {getDrives}  from '../../actions/driveAction'
import {getCompany}  from '../../actions/companyAction'
import {getStudents}  from '../../actions/studentAction'



const Home = ({getCompany,getDrives,getStudents,getVolunteers,volunteers,students,drives,companys}) => {
 
  useEffect(() => {
    getCompany()
    getDrives()
    getStudents()
    getVolunteers()
  }, [])

  const totalStudentsShortlisted = () =>{
    var count = 0;
    if(students)
    {
      students.forEach((student) => {
        if(student.driveShortlisted.length!==0){
          count++;
        }
    });
    }
    return count;
  }

  const percentagePlacement = () =>{
    var percentage = 0;
    var count = totalStudentsShortlisted()
    var totalStudent = students.length
    percentage = count * 100 / totalStudent
    return percentage;
  }

  return (
    <Fragment>
      <div className='row heading-bg  bg-blue'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 className='txt-light'>Home</h5>
        </div>
        <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol className='breadcrumb'>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className='row'>
        <h6 className='text-center font-18 mb-20'>Welcome to TPC, DCSA, PU</h6>
      </div>

      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-5 col-xs-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>
                  No of Volunteers Registered on module
                </h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='sm-graph-box'>
                  <div className='row'>
                    <div className='col-xs-6'>
                      <div id='sparkline_1'></div>
                    </div>
                    <div className='col-xs-6'>
                      <div className='counter-wrap text-right'>
                        <span className='counter-cap'>
                          <i className='fa txt-success'></i>
                        </span>
  <span className='counter'>{volunteers.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-5 col-xs-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>
                  No of Companies added to module
                </h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='sm-graph-box'>
                  <div className='row'>
                    <div className='col-xs-6'>
                      <div id='sparkline_1'></div>
                    </div>
                    <div className='col-xs-6'>
                      <div className='counter-wrap text-right'>
                        <span className='counter-cap'>
                          <i className='fa  txt-success'></i>
                        </span>
                        <span className='counter'>{companys.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-5 col-xs-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>
                  No of Drives added to module
                </h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='sm-graph-box'>
                  <div className='row'>
                    <div className='col-xs-6'>
                      <div id='sparkline_1'></div>
                    </div>
                    <div className='col-xs-6'>
                      <div className='counter-wrap text-right'>
                        <span className='counter-cap'>
                          <i className='fa  txt-success'></i>
                        </span>
                        <span className='counter'>{drives.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
      <div className='col-lg-4 col-md-4 col-sm-5 col-xs-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>
                  No of Students Registered
                </h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='sm-graph-box'>
                  <div className='row'>
                    <div className='col-xs-6'>
                      <div id='sparkline_1'></div>
                    </div>
                    <div className='col-xs-6'>
                      <div className='counter-wrap text-right'>
                        <span className='counter-cap'>
                          <i className='fa  txt-success'></i>
                        </span>
                        <span className='counter'>{students.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-5 col-xs-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>
                  No of Students Placed
                </h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='sm-graph-box'>
                  <div className='row'>
                    <div className='col-xs-6'>
                      <div id='sparkline_1'></div>
                    </div>
                    <div className='col-xs-6'>
                      <div className='counter-wrap text-right'>
                        <span className='counter-cap'>
                          <i className='fa  txt-success'></i>
                        </span>
  <span className='counter'>{totalStudentsShortlisted()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-5 col-xs-12'>
          <div className='panel panel-default card-view'>
            <div className='panel-heading'>
              <div className='pull-left'>
                <h6 className='panel-title txt-dark'>
                  Percent of Students Placed
                </h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='sm-graph-box'>
                  <div className='row'>
                    <div className='col-xs-6'>
                      <div id='sparkline_1'></div>
                    </div>
                    <div className='col-xs-6'>
                      <div className='counter-wrap text-right'>
                        <span className='counter-cap'>
                          <i className='fa  txt-success'></i>
                        </span>
  <span className='counter'>{percentagePlacement()} %</span>
                      </div>
                    </div>
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
  students: state.studentRuducer.students,
  volunteers: state.volunteerReducer.volunteers,
  drives: state.driveReducer.drives,
  companys: state.companyRuducer.companys,
});

export default connect(mapStateToProps, {getVolunteers,getStudents,getDrives,getCompany })(
  Home
);
