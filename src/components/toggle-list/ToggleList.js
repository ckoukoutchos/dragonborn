import React from 'react';

import classes from './ToggleList.module.css';
import ToggleLineInput from '../input/toggle-line-input/ToggleLineInput';

const toggleList = props => {
  const { editing, items, onToggle, toggled } = props;

  const toggleItems = items.map(item => (
    <ToggleLineInput
      label={item.name}
      editing={editing}
      onToggle={onToggle}
      toggled={toggled}
    />
  ));

  return <div className={classes.Container}>{toggleItems}</div>;
};

export default toggleList;
