import React, { Component } from 'react';

import Jumbotron from '../../components/jumbotron/Jumbotron';
import TitleCard from '../../components/card/title-card/TitleCard';

class Create extends Component {
  render() {
    return (
      <>
        <Jumbotron header="Create" subHeader="So Begins a New Legend" />
        <TitleCard title="Traditional" readOnly>
          <h3>I know what I'm doing, just give me a clean sheet.</h3>
        </TitleCard>
      </>
    );
  }
}

export default Create;
