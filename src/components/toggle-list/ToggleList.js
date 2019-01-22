import React from 'react';

import classes from './ToggleList.module.css';
import ToggleLineInput from '../input/toggle-line-input/ToggleLineInput';

const toggleList = props => {
  const { editing, items, label, onToggle, toggled } = props;

  const toggleItems = [];
  for (const item in items) {
    toggleItems.push(
      <ToggleLineInput
        key={item}
        label={item}
        editing={editing}
        onToggle={onToggle}
        toggled={toggled}
      />
    );
  }

  return (
    <div className={classes.Container}>
      {toggleItems}
      <label className={classes.Label}>{label}</label>
    </div>
  );
};

export default toggleList;
