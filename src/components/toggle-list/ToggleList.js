import React, { Component } from 'react';

import { updateObjectInArray } from '../../shared/Utility';
import ToggleLineInput from '../input/toggle-line-input/ToggleLineInput';

class ToggleList extends Component {
  state = {
    items: this.props.items
  };

  onInputChange = index => evt =>
    this.setState({
      items: updateObjectInArray(
        this.state.items,
        index,
        'value',
        evt.target.value
      )
    });

  onInputToggle = index => () =>
    this.setState(prevState => ({
      items: updateObjectInArray(
        prevState.items,
        index,
        'proficient',
        !prevState.items[index].proficient
      )
    }));

  render() {
    return this.state.items.map((item, index) => (
      <ToggleLineInput
        key={index}
        label={item.name}
        editing={this.props.editing}
        onChange={this.onInputChange(index)}
        onToggle={this.onInputToggle(index)}
        toggled={item.proficient}
      />
    ));
  }
}

export default ToggleList;
