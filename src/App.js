import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HeroDetail from './containers/hero-detail/HeroDetail';
import Layout from './hoc/layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/hero-detail" exact component={HeroDetail} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
