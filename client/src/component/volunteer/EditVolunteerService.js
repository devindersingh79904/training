import React, { useEffect, Fragment, useState } from 'react';
import EditVolunteerForm from './EditVolunteerModel';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EditVolunteerService = ({ volunteers, setCurrentVol }) => {
  const [volid, setVolid] = useState({
    id: '',
  });
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'dist/js/footable-data.js';
      document.body.appendChild(script1);
    }, 1000);
  }, []);
  const { id } = volid;
  const onClick = (e, vol) => {
    console.log('i am onclick');
    console.log(vol);
    setVolid({ id: vol._id });
    setCurrentVol(vol);
    setFormData({ vol });
  };

  return (
    <Fragment>
      <div className='row heading-bg bg-green'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 className='txt-light'>Edit Volunteer</h5>
        </div>
        <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol className='breadcrumb'>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='#'>
                <span>Volunteer Edit</span>
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
                <h6 className='panel-title txt-dark'>Edit Volunteer</h6>
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
                    data-sorting='true'
                  >
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

                        <th data-name='assigned' data-breakpoints='sm'>
                          Assigned
                        </th>

                        <th data-name='present' data-breakpoints='sm'>
                          WorkshopAssined
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {volunteers !== null &&
                        volunteers.length > 0 &&
                        volunteers.map((volunteer) => {
                          //   console.log(volunteer);
                          return (
                            <tr
                              key={volunteer._id}
                              onClick={(e) => onClick(e, volunteer)}
                            >
                              <td>{volunteer.rollno}</td>
                              <td>{volunteer.name}</td>
                              <td>{volunteer.clas}</td>
                              <td>{volunteer.batch}</td>

                              <td>{volunteer.phnno}</td>
                              <td>{volunteer.dutiesAssigned}</td>

                              <td>{volunteer.workshopAssigned}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                  <EditVolunteerForm id={id} vol={formData.vol} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EditVolunteerService.propTypes = {
  volunteers: PropTypes.array.isRequired,
};

export default EditVolunteerService;
