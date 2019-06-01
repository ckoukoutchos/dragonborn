import React from 'react';
import classes from './MultiLineInput.module.css';

interface MultiLineInput {
  equal?: boolean;
  label: string[];
  value: any;
}

const multiLineInput = (props: MultiLineInput) => {
  const { equal, label, value } = props;

  let multiLine = (
    <div className={classes.Container}>
      <div className={classes.Column}>
        <div className={equal ? classes.Input2 : classes.Input1}>
          {value[0]}
        </div>
        <label className={classes.Label}>{label[0]}</label>
      </div>

      <div className={classes.Column}>
        <div className={classes.Input2}>{value[1]}</div>
        <label className={classes.Label}>{label[1]}</label>
      </div>

      <div className={classes.Column}>
        <div className={equal ? classes.Input2 : classes.Input3}>
          {value[2]}
        </div>
        <label className={classes.Label}>{label[2]}</label>
      </div>
    </div>
  );

  if (value.length < 3) {
    multiLine = (
      <div className={classes.Container}>
        <div className={classes.Column}>
          <div className={classes.Input3}>{value[0]}</div>
          <label className={classes.Label}>{label[0]}</label>
        </div>

        <div className={classes.Column}>
          <div className={classes.Input3}>{value[1]}</div>
          <label className={classes.Label}>{label[1]}</label>
        </div>
      </div>
    );
  }

  return multiLine;
};

export default multiLineInput;
