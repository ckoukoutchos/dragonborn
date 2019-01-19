import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CharacterStats from './containers/character/character-stats/CharacterStats';
import Layout from './hoc/layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/character/:id/stats" exact component={CharacterStats} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
