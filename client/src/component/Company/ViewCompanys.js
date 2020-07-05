import React, { Fragment, useLayoutEffect } from 'react';
import { getCompany } from '../../actions/companyAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ViewCompanyService from './ViewCompanyService';

const ViewCompanys = ({ companys, getCompany }) => {
  useLayoutEffect(() => {
    getCompany();
  }, []);
  return (
    <Fragment>
      {companys !== null && companys.length > 0 && (
        <ViewCompanyService companys={companys} />
      )}
    </Fragment>
  );
};

ViewCompanys.propTypes = {
  getCompany: PropTypes.func.isRequired,
  companys: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  companys: state.companyRuducer.companys,
});

export default connect(mapStateToProps, { getCompany })(ViewCompanys);
