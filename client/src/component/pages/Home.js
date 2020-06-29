import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div class='row heading-bg  bg-blue'>
        <div class='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <h5 class='txt-light'>Home</h5>
        </div>
        <div class='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
          <ol class='breadcrumb'>
            <li>
              <a href='/'>Home</a>
            </li>
          </ol>
        </div>
      </div>

      <div class='row'>
        <h6 className='text-center font-18 mb-20'>Welcome to TPC, DCSA, PU</h6>
      </div>

      <div class='row'>
        <div class='col-lg-4 col-md-4 col-sm-5 col-xs-12'>
          <div class='panel panel-default card-view'>
            <div class='panel-heading'>
              <div class='pull-left'>
                <h6 class='panel-title txt-dark'>
                  No of Volunteers Registered on module
                </h6>
              </div>
              <div class='clearfix'></div>
            </div>
            <div class='panel-wrapper collapse in'>
              <div class='panel-body'>
                <div class='sm-graph-box'>
                  <div class='row'>
                    <div class='col-xs-6'>
                      <div id='sparkline_1'></div>
                    </div>
                    <div class='col-xs-6'>
                      <div class='counter-wrap text-right'>
                        <span class='counter-cap'>
                          <i class='fa txt-success'></i>
                        </span>
                        <span class='counter'>23</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='col-lg-4 col-md-4 col-sm-5 col-xs-12'>
          <div class='panel panel-default card-view'>
            <div class='panel-heading'>
              <div class='pull-left'>
                <h6 class='panel-title txt-dark'>
                  No of Companies added to module
                </h6>
              </div>
              <div class='clearfix'></div>
            </div>
            <div class='panel-wrapper collapse in'>
              <div class='panel-body'>
                <div class='sm-graph-box'>
                  <div class='row'>
                    <div class='col-xs-6'>
                      <div id='sparkline_1'></div>
                    </div>
                    <div class='col-xs-6'>
                      <div class='counter-wrap text-right'>
                        <span class='counter-cap'>
                          <i class='fa  txt-success'></i>
                        </span>
                        <span class='counter'>23</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='col-lg-4 col-md-4 col-sm-5 col-xs-12'>
          <div class='panel panel-default card-view'>
            <div class='panel-heading'>
              <div class='pull-left'>
                <h6 class='panel-title txt-dark'>
                  No of Drives added to module
                </h6>
              </div>
              <div class='clearfix'></div>
            </div>
            <div class='panel-wrapper collapse in'>
              <div class='panel-body'>
                <div class='sm-graph-box'>
                  <div class='row'>
                    <div class='col-xs-6'>
                      <div id='sparkline_1'></div>
                    </div>
                    <div class='col-xs-6'>
                      <div class='counter-wrap text-right'>
                        <span class='counter-cap'>
                          <i class='fa  txt-success'></i>
                        </span>
                        <span class='counter'>23</span>
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
