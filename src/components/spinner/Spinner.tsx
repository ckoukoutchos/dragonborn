import React from 'react';
import classes from './Spinner.module.css';

const spinner = (props: any) => (
  <div className={classes.Spinner}>
    <div className={classes.DoubleBounce1} />
    <div className={classes.DoubleBounce2} />
  </div>
);

export default spinner;
