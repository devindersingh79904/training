import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <div className='row heading-bg bg-yellow'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 className='txt-light'>About Us</h5>
        </div>
        <div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol className='breadcrumb'>
            <li>
              <a href='/'>Dashboard</a>
            </li>
            <li>
              <a href='#'>
                <span>About us</span>
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className='col-md-12'>
        <div className='panel panel-default card-view'>
          <div className='panel-heading'>
            <div className='pull-left'>
              <h6 className='panel-title txt-dark'>About this module.</h6>
            </div>
            <div className='clearfix'></div>
          </div>
          <div className='panel-wrapper collapse in'>
            <div className='panel-body'>
              <p className='text-muted'>
                This module is to make record keeping of volunteers details and
                volunteers duties in drives conducted easier. We can upload
                volunteer's data, companies data, volunteer's attendence using
                interactive forms. The module has an option to view the reports
                of different kind. You can always export the data into the Excel
                sheets, Pdf etc for your convinience with just a click of
                button. The module has security parameters which ensure that our
                data will not be exposed to any un-authorized user.
              </p>
              <p>Features:</p>
              <ul classNameName='list-icons'>
                <li>
                  <i className='fa fa-angle-double-right text-info mr-5'></i>Secure
                  from unauthorized access.
                </li>
                <li>
                  <i className='fa fa-angle-double-right text-info mr-5'></i>
                  Interactive Forms
                </li>
                <li>
                  <i className='fa fa-angle-double-right text-info mr-5'></i>
                  Sortable, Searchable Tables to get you data easily
                </li>
                <li>
                  <i className='fa fa-angle-double-right text-info mr-5'></i>Export
                  you data for local storage at any time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div classNameName='text-center'>
        <h2 classNameName='mb-20'>Our Team</h2>
      </div>

      <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
        <div className='panel panel-default card-view'>
          <div className='panel-wrapper collapse in'>
            <div className='panel-body contact-card'>
              <a href='#'>
                <div className='text-center'>
                  <span className='block card-user-name mt-10'>Devinder singh</span>
                  <span className='block card-user-email mt-10'>
                    email@gmail.com
                  </span>
                  <span className='block card-user-phone mt-5 mb-20'>
                    +91 999999999
                  </span>
                  <span className='inline-block label label-danger'>DCSA, PU</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
        <div className='panel panel-default card-view'>
          <div className='panel-wrapper collapse in'>
            <div className='panel-body contact-card'>
              <a href='#'>
                <div className='text-center'>
                  <span className='block card-user-name mt-10'>Aditi Jain</span>
                  <span className='block card-user-email mt-10'>
                    email@gmail.com
                  </span>
                  <span className='block card-user-phone mt-5 mb-20'>
                    +91 999999999
                  </span>
                  <span className='inline-block label label-danger'>DCSA, PU</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
        <div className='panel panel-default card-view'>
          <div className='panel-wrapper collapse in'>
            <div className='panel-body contact-card'>
              <a href='#'>
                <div className='text-center'>
                  <span className='block card-user-name mt-10'>
                    Sarvpreet singh
                  </span>
                  <span className='block card-user-email mt-10'>
                    email@gmail.com
                  </span>
                  <span className='block card-user-phone mt-5 mb-20'>
                    +91 999999999
                  </span>
                  <span className='inline-block label label-danger'>DCSA, PU</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
