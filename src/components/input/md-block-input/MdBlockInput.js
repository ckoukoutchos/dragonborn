import React, { Component } from 'react';

import classes from './MdBlockInput.module.css';

class MdBlockInput extends Component {
  state = {
    selected: false
  };

  onSelection = () => {
    this.setState(prevState => (prevState.selected = !prevState.selected));
  };

  render() {
    return (
      <div
        className={[
          classes.Container,
          this.props.edit ? classes.Edit : classes.Disabled
        ].join(' ')}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '6px',
            width: '8px',
            background: this.state.selected ? 'black' : 'white',
            border: '1px solid black',
            borderRadius: '50%'
          }}
          onClick={this.onSelection}
        />
        <div
          style={{
            display: 'inline-block',
            padding: '6px',
            width: '8px',
            background: 'white',
            border: '1px solid black',
            borderRadius: '50%'
          }}
        />
        <div
          style={{
            display: 'inline-block',
            padding: '6px',
            width: '8px',
            background: 'white',
            border: '1px solid black',
            borderRadius: '50%'
          }}
        />
      </div>
    );
  }
}

export default MdBlockInput;
