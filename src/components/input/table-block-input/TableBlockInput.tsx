import React from 'react';

import classes from './TableBlockInput.module.css';

interface TableBlockInput {
  editing: boolean;
  value: string;
}

const tableBlockInput = (props: TableBlockInput) => {
  const { editing, value } = props;
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
