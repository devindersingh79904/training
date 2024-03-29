import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt=' '
      style={{ width: '100%', margin: 'auto', display: 'block' }}
    ></img>
  </Fragment>
);

export default Spinner;
