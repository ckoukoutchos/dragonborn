import React from 'react';

import classes from './SecondaryCard.module.css';

const secondaryCard = props => (
  <div className={classes.Container}>
    {props.children}
    <label className={classes.Label}>{props.label}</label>
  </div>
);

export default secondaryCard;
