import React from 'react';

import classes from './ToggleLineInput.module.css';

interface ToggleLineInput {
  editing: boolean;
  label: string;
  onChange: any;
  onToggle: any;
  proficient: boolean;
  proficientBonus: number;
  value: any;
}

const toggleLineInput = (props: ToggleLineInput) => {
  const {
    editing,
    label,
    onChange,
    onToggle,
    proficient,
    proficientBonus,
    value
  } = props;

  return (
    <div className={classes.Container}>
      <div
        className={[
          classes.Toggle,
          proficient ? classes.Toggled : classes.Edit
        ].join(' ')}
        onClick={onToggle}
      />

      <input
        className={[
          classes.Input,
          editing ? classes.Edit : classes.Disabled
        ].join(' ')}
        disabled={!editing}
        onChange={onChange}
        value={proficient ? Number(value) + Number(proficientBonus) : value}
      />

      <label className={classes.Label}>{label}</label>
    </div>
  );
};

export default toggleLineInput;
