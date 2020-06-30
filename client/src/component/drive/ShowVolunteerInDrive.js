import React from 'react';
import PropTypes from 'prop-types';

const ShowVolunteerInDrive = ({ volunteer, onCheckChange }) => {
  return (
    <div class='checkbox checkbox-inline checkbox-primary'>
      <input
        id={volunteer._id}
        type='checkbox'
        value={volunteer}
        name='volunteersOnDuty'
        onChange={(e) => onCheckChange(e, volunteer)}
      />
      <label for={volunteer._id}>{volunteer.name}</label>
    </div>
  );
};

ShowVolunteerInDrive.propTypes = {
  volunteer: PropTypes.object.isRequired,
  onCheckChange: PropTypes.func.isRequired,
};

export default ShowVolunteerInDrive;
