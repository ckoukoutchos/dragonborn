import React, { Component } from 'react';

import ToggleLineInput from '../input/toggle-line-input/ToggleLineInput';

class ToggleList extends Component {
  state = {
    items: this.props.items
  };

  onInputChange = index => evt => {
    const updatedValue = [...this.state.items];
    updatedValue[index].value = evt.target.value;
    this.setState({ items: updatedValue });
  };

  onInputToggle = index => () => {
    this.setState(prevState => {
      const updatedValue = [...prevState.items];
      updatedValue[index].isProficient = !prevState.items[index].isProficient;
      return { items: updatedValue };
    });
  };

  render() {
    return this.state.items.map((item, index) => (
      <ToggleLineInput
        key={index}
        label={item.name}
        editing={this.props.editing}
        onChange={this.onInputChange(index)}
        onToggle={this.onInputToggle(index)}
        toggled={item.isProficient}
      />
    ));
  }
}

export default ToggleList;
