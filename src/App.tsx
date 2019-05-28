import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { AppState } from './store/rootReducer';
import { User } from './models/User';

import Dashboard from './containers/dashboard/Dashboard';
import Home from './containers/home/Home';
import Layout from './containers/layout/Layout';
import Login from './containers/auth/login/Login';
import Logout from './containers/auth/logout/Logout';
import Signup from './containers/auth/signup/Signup';
import TrackPlay from './containers/track/track-play/TrackPlay';
import TrackSpells from './containers/track/track-spells/TrackSpells';
import TrackStats from './containers/track/track-stats/TrackStats';

interface AppProps {
  user: User | null;
}

class App extends Component<AppProps> {
  render() {
    let routes = (
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/' exact component={Home} />
        <Redirect to='/' />
      </Switch>
    );

    if (this.props.user) {
      routes = (
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/track/:id/stats' component={TrackStats} />
          <Route path='/track/:id/spells' component={TrackSpells} />
          <Route path='/track/:id/play' component={TrackPlay} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={Home} />
          <Redirect to='/' />
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
