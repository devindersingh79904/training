import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UpdateAddentaceForm from './UpdateAddentaceForm';
import { Link } from 'react-router-dom';

const AddAttendenceService = ({ volunteers, setCurrentVol }) => {
  const [volid, setVolid] = useState({
    id: '',
  });
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'dist/js/footable-data.js';
    document.body.appendChild(script1);
  }, []);

  const { id } = volid;
  const onClick = (e, vol) => {
    setVolid({ id: vol._id });
    setCurrentVol(vol);
  };
  return (
    <Fragment>
      <div className='row heading-bg bg-green'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 className='txt-light'>Add Volunteer Duty</h5>
        </div>
        <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol className='breadcrumb'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='#'>
                <span>Volunteer Add Duty</span>
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
                <h6 className='panel-title txt-dark'>Attendece</h6>
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
                        <th
                          data-name='rollNo'
                          data-breakpoints='xs'
                          data-type='number'
                        >
                          rollNo
                        </th>
                        <th data-name='fullName'>Full Name</th>
                        <th data-name='course'>Course</th>
                        <th data-name='batch' data-breakpoints='xs'>
                          Batch
                        </th>
                        <th data-name='assigned' data-breakpoints='xs'>
                          Assigned
                        </th>
                        <th data-name='accepted' data-breakpoints='xs'>
                          Accepted
                        </th>
                        <th data-name='workshopAssign' data-breakpoints='xs'>
                          Wokrshop assinged
                        </th>
                        <th data-name='workshopDone' data-breakpoints='xs'>
                          Wokrshop done
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {volunteers.map((vol) => {
                        return (
                          <tr key={vol._id} onClick={(e) => onClick(e, vol)}>
                            <td>{vol.rollno}</td>
                            <td>{vol.name}</td>
                            <td>{vol.clas}</td>
                            <td>{vol.batch}</td>
                            <td>{vol.dutiesAssigned}</td>
                            <td>{vol.dutiesAccepted}</td>
                            <td>{vol.workshopAssigned}</td>
                            <td>{vol.workshopDone}</td>
                          </tr>
                        );
                      })}
                      
                    </tbody>
                  </table>
                  <UpdateAddentaceForm id={id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AddAttendenceService.propTypes = {
  volunteers: PropTypes.array.isRequired,
  setCurrentVol: PropTypes.func.isRequired,
};

export default AddAttendenceService;
