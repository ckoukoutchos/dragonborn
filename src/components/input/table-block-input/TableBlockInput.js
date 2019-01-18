import React from 'react';

import classes from './TableBlockInput.module.css';

const tableBlockInput = props => {
  const { editing, label, value } = props;
  return (
    <div
      className={[
        classes.Container,
        editing ? classes.Edit : classes.Disabled
      ].join(' ')}
    >
      <input
        className={[
          classes.Input,
          editing ? classes.Edit : classes.Disabled
        ].join(' ')}
        disabled={!editing}
        value={value}
      />
    </div>
  );
};

export default tableBlockInput;
