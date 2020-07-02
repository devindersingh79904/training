import React, { Fragment, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { getStudents, setCurrentStudent } from '../../actions/studentAction';
import EditStudentService from './EditStudentService';
import PropTypes from 'prop-types';

const EditStudent = ({ students, getStudents, setCurrentStudent }) => {
  useLayoutEffect(() => {
    getStudents();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {students !== null && students.length > 0 && (
        <EditStudentService
          students={students}
          setCurrentStudent={setCurrentStudent}
        />
      )}
    </Fragment>
  );
};

EditStudent.propTypes = {
  getStudents: PropTypes.func.isRequired,
  students: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  students: state.studentRuducer.students,
});

export default connect(mapStateToProps, { getStudents, setCurrentStudent })(
  EditStudent
);
