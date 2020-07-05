import React, { useLayoutEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getStudents, setCurrentStudent } from '../../actions/studentAction';
import PropTypes from 'prop-types';
import ViewStudentService from './ViewStudentService';

const ViewStudents = ({ students, getStudents, setCurrentStudent }) => {
  useLayoutEffect(() => {
    getStudents();
  }, []);
  return (
    <Fragment>
      {students !== null && students.length > 0 ? (
        <ViewStudentService
          students={students}
          setCurrentStudent={setCurrentStudent}
        />
      ) : (
        <div>no Students</div>
      )}
    </Fragment>
  );
};

ViewStudents.propTypes = {
  students: PropTypes.array.isRequired,
  getStudents: PropTypes.func.isRequired,
  setCurrentStudent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  students: state.studentRuducer.students,
});

export default connect(mapStateToProps, { getStudents, setCurrentStudent })(
  ViewStudents
);
