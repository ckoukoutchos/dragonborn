import React from 'react';

import ToggleLineInput from '../input/toggle-line-input/ToggleLineInput';

const toggleList = props => {
  const { editing, items, onChange, onToggle } = props;

  return items.map(item => (
    <ToggleLineInput
      key={item.name}
      label={item.name}
      editing={editing}
      onChange={onChange}
      onToggle={onToggle}
      toggled={item.isProficient}
    />
  ));
};

export default toggleList;
