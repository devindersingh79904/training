import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  const [type, setType] = useState({});
  var divStyle = {
    display: 'inline-block',
    backgroundColour: 'rgb(60, 184, 120)',
    boxShadow:
      'rgba(60, 184, 120, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset',
  };

  function setAlertType(alert) {
    console.log('I am in alert custom function' + alert);
    console.log(alert);
    switch (alert.alertType) {
      case 'danger':
        console.log('I am in danger custom function' + alert);

        return (
          <div
            key={alert.id}
            className='sweet-alert showSweetAlert visible'
            data-custom-class=''
            data-has-cancel-button='true'
            data-has-confirm-button='true'
            data-allow-outside-click='false'
            data-has-done-function='true'
            data-animation='pop'
            data-timer='null'
            style={{ display: 'block', marginTop: '-167px' }}
          >
            <div className='sa-icon sa-error' style={{ display: 'none' }}>
              <span className='sa-x-mark'>
                <span className='sa-line sa-left'></span>
                <span className='sa-line sa-right'></span>
              </span>
            </div>
            <div
              className='sa-icon sa-warning pulseWarning'
              style={{ display: 'none' }}
            >
              <span className='sa-body pulseWarningIns'></span>
              <span className='sa-dot pulseWarningIns'></span>
            </div>
            <div className='sa-icon sa-info' style={{ display: 'none' }}></div>
            <div className='sa-icon sa-success' style={{ display: 'none' }}>
              <span className='sa-line sa-tip'></span>
              <span className='sa-line sa-long'></span>

              <div className='sa-placeholder'></div>
              <div className='sa-fix'></div>
            </div>
            <div
              className='sa-icon sa-custom'
              style={{
                display: 'none',
                backgroundImage: 'url(&quot;dist/img/user.png&quot;)',
                width: '80px',
                height: '80px',
              }}
            ></div>
            <h2>Error</h2>
            <p style={{ display: 'block' }}>
              <li>{alert.msg}</li>
            </p>
            <fieldset>
              <input type='text' tabIndex='3' placeholder='' />
              <div className='sa-input-error'></div>
            </fieldset>
            <div className='sa-error-container'>
              <div className='icon'>!</div>
              <p>Not valid!</p>
            </div>
            <div className='sa-button-container'>
              {/* <button className="cancel" tabIndex="2" style={{display: 'inline-block', boxShadow: 'none'}}>Cancel</button>
    <div className="sa-confirm-button-container">
      <button className="confirm" tabIndex="1" style={{display: 'inline-block', backgroundColor: 'rgb(252, 176, 59)', boxShadow: 'rgba(252, 176, 59, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset'}}>Yes, delete it!</button><div className="la-ball-fall">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div> */}
            </div>
          </div>
        );

      case 'success':
        return (
          <div
            key={alert.id}
            className='sweet-alert showSweetAlert visible'
            data-custom-class=''
            data-has-cancel-button='false'
            data-has-confirm-button='true'
            data-allow-outside-click='false'
            data-has-done-function='false'
            data-animation='pop'
            data-timer='null'
            style={{ display: 'block', marginTop: '-167px' }}
          >
            <div className='sa-icon sa-error' style={{ display: 'none' }}>
              <span className='sa-x-mark'>
                <span className='sa-line sa-left'></span>
                <span className='sa-line sa-right'></span>
              </span>
            </div>
            <div className='sa-icon sa-warning' style={{ display: 'none' }}>
              <span className='sa-body'></span>
              <span className='sa-dot'></span>
            </div>
            <div className='sa-icon sa-info' style={{ display: 'none' }}></div>
            <div
              className='sa-icon sa-success animate'
              style={{ display: 'block' }}
            >
              <span className='sa-line sa-tip animateSuccessTip'></span>
              <span className='sa-line sa-long animateSuccessLong'></span>

              <div className='sa-placeholder'></div>
              <div className='sa-fix'></div>
            </div>
            <div
              className='sa-icon sa-custom'
              style={{ display: 'none' }}
            ></div>
            <h2>Success</h2>
            <p style={{ display: 'block' }}>{alert.msg.toUpperCase()}</p>
            <fieldset>
              <input type='text' tabIndex='3' placeholder='' />
              <div className='sa-input-error'></div>
            </fieldset>
            <div className='sa-error-container'>
              <div className='icon'>!</div>
              <p>Not valid!</p>
            </div>
            <div className='sa-button-container'>
              {/* <button className="cancel" tabIndex="2" style={{display:"none"}}>Cancel</button> */}
            </div>
          </div>
        );

      default:
        break;
    }
  }

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => setAlertType(alert))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alertReducer,
});
export default connect(mapStateToProps)(Alert);
