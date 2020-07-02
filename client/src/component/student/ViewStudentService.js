import React from 'react';
import PropTypes from 'prop-types';

const ViewStudentService = (props) => {
  return <div></div>;
};

ViewStudentService.propTypes = {};

export default connect(mapStateToProps, { getVolunteers, setCurrentVol })(
  ViewStudentService
);
