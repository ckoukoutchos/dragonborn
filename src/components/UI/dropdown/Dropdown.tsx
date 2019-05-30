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

  componentDidUpdate(prevProps: DropdownProps, prevState: DropdownState) {
    if (this.props.disabled && prevState.showDropdown) {
      this.setState({ showDropdown: false });
    }
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
   * @description calls onSelected props callback with selected value
   */
  onOptionSelected = (value: string) => (evt: any) => {
    this.setState({ showDropdown: false });
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
          disabled={disabled}
          onClick={this.onToggleDropdown}
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