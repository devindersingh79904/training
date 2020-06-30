import React, { Fragment, useLayoutEffect } from 'react';
import { getVolunteers } from '../../actions/volunteerAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ViewVolunteersService from './ViewVolunteersService';

const ViewVolunteers = (props) => {
  useLayoutEffect(() => {
    getVolunteers();
    // eslint-disable-next-line
  }, []);
  const { volunteers, getVolunteers } = props;
  console.log('fgfgfd');
  return (
    <Fragment>
      {volunteers !== null && volunteers.length > 0 ? (
        <ViewVolunteersService volunteers={volunteers} />
      ) : (
        <div>no volunteers</div>
      )}
    </Fragment>
  );
};

ViewVolunteers.propTypes = {
  getVolunteers: PropTypes.func.isRequired,
  volunteers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  volunteers: state.volunteerReducer.volunteers,
});

export default connect(mapStateToProps, { getVolunteers })(ViewVolunteers);
