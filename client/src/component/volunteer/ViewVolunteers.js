import React, { Fragment, useLayoutEffect } from 'react';
import { getVolunteers, setCurrentVol } from '../../actions/volunteerAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ViewVolunteersService from './ViewVolunteersService';

const ViewVolunteers = ({ volunteers, getVolunteers, setCurrentVol }) => {
  useLayoutEffect(() => {
    getVolunteers();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {volunteers !== null && volunteers.length > 0 ? (
        <ViewVolunteersService
          volunteers={volunteers}
          setCurrentVol={setCurrentVol}
        />
      ) : (
        <div>no volunteers</div>
      )}
    </Fragment>
  );
};

ViewVolunteers.propTypes = {
  getVolunteers: PropTypes.func.isRequired,
  volunteers: PropTypes.array.isRequired,
  setCurrentVol: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  volunteers: state.volunteerReducer.volunteers,
});

export default connect(mapStateToProps, { getVolunteers, setCurrentVol })(
  ViewVolunteers
);
