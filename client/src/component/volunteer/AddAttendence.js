import React, { Fragment, useEffect, useState } from 'react';
import { getVolunteers } from '../../actions/volunteerAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddAttendenceService from './AddAttendenceService';
const AddAttendence = ({ volunteers, getVolunteers }) => {
  useEffect(() => {
    console.log('i am getting all volunteers');
    getVolunteers();
  }, []);

  return (
    <Fragment>
      {volunteers !== null && volunteers.length > 0 && (
        <AddAttendenceService volunteers={volunteers} />
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

export default connect(mapStateToProps, { getVolunteers })(AddAttendence);
