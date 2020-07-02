import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
                        <span className='counter'>23</span>
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
                        <span className='counter'>23</span>
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
                        <span className='counter'>23</span>
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

export default Home;
