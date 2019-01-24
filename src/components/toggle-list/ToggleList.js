import React from 'react';

import classes from './ToggleList.module.css';
import ToggleLineInput from '../input/toggle-line-input/ToggleLineInput';

const toggleList = props => {
  const { editing, items, label, onToggle } = props;

  const toggleItems = items.map(item => (
    <ToggleLineInput
      key={item.name}
      label={item.name}
      editing={editing}
      onToggle={onToggle}
      toggled={item.isProficient}
    />
  ));

  return (
    <div className={classes.Container}>
      {toggleItems}
      <label className={classes.Label}>{label}</label>
    </div>
  );
};

export default toggleList;
