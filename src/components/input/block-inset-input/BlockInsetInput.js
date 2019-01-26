import React from 'react';

import { calcAbilityModifier } from '../../../shared/Convert';
import classes from './BlockInsetInput.module.css';

const blockInsetInput = props => {
  const { editing, label, onChange, value } = props;
  const modifier = calcAbilityModifier(value);

  return (
    <div
      className={[
        classes.Container,
        editing ? classes.Edit : classes.Disabled
      ].join(' ')}
    >
      <label
        className={[
          classes.Label,
          editing ? classes.Edit : classes.Disabled
        ].join(' ')}
      >
        {label}
      </label>
      <input
        className={[
          classes.Input,
          editing ? classes.Edit : classes.Disabled
        ].join(' ')}
        disabled={!editing}
        onChange={onChange}
        value={value}
      />
      <div className={classes.Inset}>
        {modifier >= 0 ? '+' : ''}
        {modifier}
      </div>
    </div>
  );
};

export default blockInsetInput;
