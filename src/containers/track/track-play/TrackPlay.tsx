import React, { Component } from 'react';

import TabBar from '../../../components/tab-bar/TabBar';

class TrackPlay extends Component<any, any> {
  render() {
    return (
      <>
        <h1>Coming soon in phase 3!</h1>
        <h3>
          You'll be able to keep tabs on your hero's current campaign status.
        </h3>
        <TabBar id={this.props.match.params.id} />
      </>
    );
  }
}

export default TrackPlay;
