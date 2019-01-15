import React, { Component } from 'react';

import classes from './Card.module.css';
import Button from '../button/Button';
import Input from '../input/Input';
import SmBlockInput from '../input/sm-block-input/SmBlockInput';

class Card extends Component {
  state = {
    isEditing: false
  };

  onEditToggleHandler = () => {
    this.setState(prevState => (prevState.isEditing = !prevState.isEditing));
  };

  render() {
    return (
      <div className={classes.Card}>
        <div className={classes.Header}>
          <h3 className={classes.Title}>{this.props.title}</h3>
          <Button
            color="Primary"
            btnType="Fab"
            clicked={this.onEditToggleHandler}
          >
            {this.state.isEditing ? 'x' : '+'}
          </Button>
        </div>
        <SmBlockInput label="Armor Class" edit={this.state.isEditing} />
        <SmBlockInput label="Initiative" edit={this.state.isEditing} />
        <SmBlockInput label="Speed" edit={this.state.isEditing} />
        <Input label="Hit Points" edit={this.state.isEditing} />
        <Input label="Hit Dice" edit={this.state.isEditing} />
        <Input label="Death Saves" edit={this.state.isEditing} />
      </div>
    );
  }
}

export default Card;
