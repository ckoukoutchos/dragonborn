import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/rootReducer';

import Button from '../../components/button/Button';
import Jumbotron from '../../components/jumbotron/Jumbotron';

class Home extends Component<any> {
  signup = () => {
    this.props.history.push('/signup');
  };

  render() {
    const { user } = this.props;

    return (
      <>
        <Jumbotron header="Dragonborn" subHeader="Create, Track & Guide" />

        {!user ? (
          <Button btnType="Raised" color="Primary" clicked={this.signup}>
            Sign Up
          </Button>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Home);
