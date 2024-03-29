import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ViewCompanyService = ({ companys }) => {
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
      <div className='row heading-bg bg-green'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 className='txt-light'>View Company Details</h5>
        </div>
        <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol className='breadcrumb'>
            <li>
              <Link to='/' >
                Home
              </Link>
            </li>
            <li>
              <Link className='active' to='#' >
                <span>Company Data</span>
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
                <h6 className='panel-title txt-dark'>Company data</h6>
              </div>
              <div className='clearfix'></div>
            </div>
            <div className='panel-wrapper collapse in'>
              <div className='panel-body'>
                <div className='table-wrap'>
                  <div className='table-responsive'>
                    <table
                      id='example'
                      className='table table-hover display  pb-30'
                    >
                      <thead>
                        <tr>
                          <th>Company Name</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Company Name</th>
                          <th>Email</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {companys.length > 0 &&
                          companys.map((company) => {
                            return (
                              <tr key={company._id}>
                                <td>{company.name}</td>
                                <td>{company.email}</td>
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

ViewCompanyService.propTypes = {
  companys: PropTypes.array.isRequired,
};

export default ViewCompanyService;
