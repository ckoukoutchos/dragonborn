import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HeroDetail from './containers/hero-detail/HeroDetail';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/hero-detail" exact component={HeroDetail} />
      </Switch>
    );
  }
}

export default App;
