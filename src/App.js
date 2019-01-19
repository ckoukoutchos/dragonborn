import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Track from './containers/track/Track';
import Layout from './hoc/layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {/* <Route path="/" exact component={Dragonborn} /> */}
          {/* <Route path="/create" exact component={Create} /> */}
          <Route path="/track" exact component={Track} />
          {/* <Route path="/guide" exact component={Guide} /> */}
        </Switch>
      </Layout>
    );
  }
}

export default App;
