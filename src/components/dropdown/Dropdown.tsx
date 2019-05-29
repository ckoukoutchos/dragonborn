import React, { Component } from 'react';
import classes from './Dropdown.module.css';

class Dropdown extends Component<any, any> {
  state = {
    showDropdown: false
  }

  onToggleDropdown = () => {
    this.setState((prevState: any) => ({ showDropdown: !prevState.showDropdown }));
  }

  render() {
    const { optArr, optObj, value } = this.props;
    const { showDropdown } = this.state;

    let options = null;
    if (optArr) {
      options = optArr.map((option: any) => (
        <div
          key={option}
        >
          {option}
        </div>)
      );
    } else {
      options = []
      for (const option in optObj) {
        options.push(
          <div
            key={optObj[option]}
          >
            {optObj[option]}
          </div>
        );
      }
    }

    return (
      <div className={classes.Dropdown}>
        <button className={classes.DropdownBtn} onClick={this.onToggleDropdown}><span>{value}</span><span className={showDropdown ? classes.UpArrow : classes.DownArrow}></span></button>
        {showDropdown ? <div className={classes.DropdownMenu}>
          {options}
        </div> : null}
        <label className={classes.Label}>Race</label>
      </div>
    );
  }
}

export default Dropdown;