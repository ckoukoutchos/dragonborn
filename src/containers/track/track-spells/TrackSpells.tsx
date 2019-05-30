import React, { Component } from 'react';

import TabBar from '../../../components/UI/tab-bar/TabBar';

class TrackSpells extends Component<any, any> {
  render() {
    return <TabBar id={this.props.match.params.id} />;
  }
}

export default TrackSpells;
