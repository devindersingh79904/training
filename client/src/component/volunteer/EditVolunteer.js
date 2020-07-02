import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getVolunteers, setCurrentVol } from '../../actions/volunteerAction';
import EditVolunteerService from './EditVolunteerService';
import PropTypes from 'prop-types';

const EditVolunteers = ({ getVolunteers, volunteers, setCurrentVol }) => {
  useEffect(() => {
    getVolunteers();
  }, []);
  return (
    <Fragment>
      {volunteers !== null && volunteers.length > 0 && (
        <EditVolunteerService
          volunteers={volunteers}
          setCurrentVol={setCurrentVol}
        />
      )}
    </Fragment>
  );
};

EditVolunteers.propTypes = {
  getVolunteers: PropTypes.func.isRequired,
  volunteers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  volunteers: state.volunteerReducer.volunteers,
});

export default connect(mapStateToProps, { getVolunteers, setCurrentVol })(
  EditVolunteers
);
