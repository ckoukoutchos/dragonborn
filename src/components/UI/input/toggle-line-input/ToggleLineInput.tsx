import React from 'react';

import classes from './ToggleLineInput.module.css';

interface ToggleLineInput {
  editing: boolean;
  label: string;
  onToggle: any;
  proficient: boolean;
  proficientBonus: number;
  value: any;
}

const toggleLineInput = (props: ToggleLineInput) => {
  const {
    editing,
    label,
    onToggle,
    proficient,
    proficientBonus,
    value
  } = props;

  let skillModifier = proficient
    ? Number(value) + Number(proficientBonus)
    : value;

  skillModifier > 0 ? (skillModifier = '+' + skillModifier) : null;

  return (
    <div className={classes.Container}>
      <div
        className={[
          classes.Toggle,
          proficient ? classes.Toggled : classes.Edit
        ].join(' ')}
        onClick={editing ? onToggle : null}
      />

      <input
        className={[classes.Input, classes.Disabled].join(' ')}
        disabled
        value={skillModifier}
      />

      <label className={classes.Label}>{label}</label>
    </div>
  );
};

export default toggleLineInput;
