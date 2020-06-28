import React from 'react';
import PropTypes from 'prop-types';

const volunteerAttendence = (props) => {
  return (
    <tr>
      <td>Volunteer Name</td>
      <td>Class</td>
      <td>Roll No</td>
      <td>
        <button
          onClick={() => incAssign({ id: 1, name: 'x' })}
          className='btn btn-primary'
        >
          +
        </button>
      </td>
      <td>
        <button
          onClick={() => incAccept({ id: 1, name: 'x' })}
          className='btn btn-primary'
        >
          +
        </button>
      </td>
      <td>
        <button
          onClick={() => incWorkDone({ id: 1, name: 'x' })}
          className='btn btn-primary'
        >
          +
        </button>
      </td>
    </tr>
  );
};

volunteerAttendence.propTypes = {};

export default volunteerAttendence;
