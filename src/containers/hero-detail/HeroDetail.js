import React, { Component } from 'react';

import Card from '../../components/card/Card';
import NavBar from '../../components/nav-bar/NavBar';

class HeroDetail extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '64px'
          }}
        >
          <Card title="Vitals" />
          <Card title="Abilities" />
        </div>
      </>
    );
  }
}

export default HeroDetail;
