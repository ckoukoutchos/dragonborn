import React, { Component } from 'react';

import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import NavBar from '../../components/nav-bar/NavBar';

class HeroDetail extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Card>
          <p>Name</p>
          <p>Class & Level</p>
          <p>Background</p>
          <p>Race</p>
          <p>Alignment</p>
          <p>XP</p>
          <Button color="Primary" btnType="Fab">
            +
          </Button>
        </Card>
      </>
    );
  }
}

export default HeroDetail;
