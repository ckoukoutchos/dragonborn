import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { logout } from '../../../store/auth/authActionCreators';
import { AuthActionTypes } from '../../../store/auth/authActionTypes';

class Logout extends Component<any, any> {
  componentDidMount() {
    this.props.logout();
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchtoProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchtoProps
)(Logout);
