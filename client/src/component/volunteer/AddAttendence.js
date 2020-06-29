import React, { Fragment, useEffect, useState } from 'react';
import { getVolunteers, setCurrentVol } from '../../actions/volunteerAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddAttendenceService from './AddAttendenceService';
const AddAttendence = ({ volunteers, getVolunteers, setCurrentVol }) => {
  useEffect(() => {
    console.log('i am getting all volunteers');
    getVolunteers();
  }, []);

  return (
    <Fragment>
      {volunteers !== null && volunteers.length > 0 && (
        <AddAttendenceService
          volunteers={volunteers}
          setCurrentVol={setCurrentVol}
        />
      )}
    </Fragment>
  );
};

AddAttendence.propTypes = {
  getVolunteers: PropTypes.func.isRequired,
  volunteers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  volunteers: state.volunteerReducer.volunteers,
});

export default connect(mapStateToProps, { getVolunteers, setCurrentVol })(
  AddAttendence
);
