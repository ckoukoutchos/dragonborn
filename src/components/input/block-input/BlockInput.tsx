import React from 'react';

import classes from './BlockInput.module.css';

interface BlockInput {
  editing: boolean;
  label: string;
  onChange: any;
  value: string;
}

const blockInput = (props: BlockInput) => {
  const { editing, label, onChange, value } = props;

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
        onChange={onChange}
        value={value}
      />

      <label
        className={[
          classes.Label,
          editing ? classes.Edit : classes.Disabled
        ].join(' ')}
      >
        {label}
      </label>
    </div>
  );
};

export default blockInput;
