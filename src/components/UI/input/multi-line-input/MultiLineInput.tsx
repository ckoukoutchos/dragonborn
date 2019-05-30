import React from 'react';

import classes from './MultiLineInput.module.css';

interface ToggleLineInput {
  label: string[];
  value: any;
}

// TODO: fill out proper
const multiLineInput = (props: ToggleLineInput) => {
  const { label, value } = props;

  return (
    <div className={classes.Container}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={classes.Input1}>{value[0]}</div>
        <label className={classes.Label}>{label[0]}</label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={classes.Input2}>{value[1]}</div>
        <label className={classes.Label}>{label[1]}</label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={classes.Input3}>{value[2]}</div>
        <label className={classes.Label}>{label[2]}</label>
      </div>
    </div>
  );
};

export default multiLineInput;
