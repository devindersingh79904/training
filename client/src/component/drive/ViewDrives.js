import React, { Fragment, useLayoutEffect } from "react";
import { getDrives, setCurrentDrive } from "../../actions/driveAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ViewDrivesService from "./ViewDrivesService";

const ViewVolunteers = ({ drives, getDrives, setCurrentDrive }) => {
  useLayoutEffect(() => {
    getDrives();
  }, []);
  return (
    <Fragment>
      {drives !== null && drives.length > 0 ? (
        <ViewDrivesService drives={drives} setCurrentDrive={setCurrentDrive} />
      ) : (
        <div>no drives</div>
      )}
    </Fragment>
  );
};

ViewVolunteers.propTypes = {
  getDrives: PropTypes.func.isRequired,
  setCurrentDrive: PropTypes.func.isRequired,
  drives: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  drives: state.driveReducer.drives,
});

export default connect(mapStateToProps, { getDrives, setCurrentDrive })(
  ViewVolunteers
);
