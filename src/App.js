import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/layout/Layout';
import Create from './containers/create/Create';
import Track from './containers/track/Track';
import TrackStats from './containers/track/track-stats/TrackStats';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {/* <Route path="/" exact component={Dragonborn} /> */}
          <Route path="/create" exact component={Create} />
          <Route path="/track" exact component={Track} />
          <Route path="/track/:id/stats" exact component={TrackStats} />
          {/* <Route path="/guide" exact component={Guide} /> */}
        </Switch>
      </Layout>
    );
  }
}

export default App;
