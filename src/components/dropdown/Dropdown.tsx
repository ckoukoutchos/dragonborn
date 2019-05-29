import React, { Component } from 'react';
import classes from './Dropdown.module.css';

interface DropdownProps {
  disabled: boolean;
  label: string;
  optArr?: any[];
  optObj?: any;
  value: string;
  onSelected: (value: string) => void;
}

interface DropdownState {
  showDropdown: boolean;
}

class Dropdown extends Component<DropdownProps, DropdownState> {
  state = {
    showDropdown: false
  }

  /**
   * @name onToggleDropdown
   * @description toggles state of dropdown menu
   */
  onToggleDropdown = () => {
    this.setState((prevState: DropdownState) => ({ showDropdown: !prevState.showDropdown }));
  }

  /**
   * @name onOptionSelected
   * @description calls onSlected props callback with selected value
   */
  onOptionSelected = (value: string) => (evt: any) => {
    this.props.onSelected(value);
  }

  render() {
    const { disabled, label, optArr, optObj } = this.props;
    const { showDropdown } = this.state;

    // set value to 'select' text if empty or null
    let value = this.props.value;
    if (value === '' || value == null) {
      value = 'Select';
    }

    // if disabled, close menu
    if (disabled && showDropdown) {
      this.onToggleDropdown();
    }

    let options = null;
    // if option props are in an array
    if (optArr) {
      options = optArr.map((option: any) => (
        <div
          key={option}
          onClick={this.onOptionSelected(option)}
        >
          {option}
        </div>)
      );
      // if option props are in an object
    } else {
      options = []
      for (const option in optObj) {
        options.push(
          <div
            key={optObj[option]}
            onClick={this.onOptionSelected(optObj[option])}
          >
            {optObj[option]}
          </div>
        );
      }
    }

    return (
      <div className={classes.Dropdown}>
        <button
          className={classes.DropdownBtn}
          onClick={this.onToggleDropdown}
          disabled={disabled}
        >
          <span>{value}</span>

          <span className={showDropdown ? classes.UpArrow : classes.DownArrow}></span>
        </button>

        {showDropdown ?
          <div className={classes.DropdownMenu}>
            {options}
          </div>
          : null}

        <label className={classes.Label}>{label}</label>
      </div>
    );
  }
}

export default Dropdown;