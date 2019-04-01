import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const HOCauth = ChildComponent => {
  const RequireAuth = props => {
    switch (props.auth) {
      case false:
        return <Redirect to="/" />;
      case null:
        return <div>Loading...</div>;
      default:
        return <ChildComponent {...props} />;
    }
  };

  RequireAuth.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(Object)])
  };

  RequireAuth.defaultProps = {
    auth: null
  };

  const mapStateToProps = state => ({ auth: state.auth });

  return connect(mapStateToProps)(RequireAuth);
};

export default HOCauth;
