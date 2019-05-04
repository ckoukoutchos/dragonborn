import React from 'react';

import classes from './SecondaryCard.module.css';

interface SecondaryCardProps {
  children: any;
  label: string;
}

const secondaryCard = (props: SecondaryCardProps) => (
  <div className={classes.Container}>
    {props.children}
    <label className={classes.Label}>{props.label}</label>
  </div>
);

export default secondaryCard;
