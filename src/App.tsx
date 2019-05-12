import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { AppState } from './store/rootReducer';
import { User } from './models/User';

import Login from './containers/auth/login/Login';
import Create from './containers/create/Create';
import Home from './containers/home/Home';
import Layout from './hoc/layout/Layout';
import Signup from './containers/auth/signup/Signup';
import Track from './containers/track/Track';
import TrackStats from './containers/track/track-stats/TrackStats';

interface AppProps {
  user: User;
}

class App extends Component<any> {
  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.user) {
      routes = (
        <Switch>
          <Route path="/create" component={Create} />
          <Route path="/track" component={Track} />
          <Route path="/track/:id/stats" component={TrackStats} />
          {/* <Route path="/guide" exact component={Guide} /> */}
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user
});

export default withRouter(connect(mapStateToProps)(App));
