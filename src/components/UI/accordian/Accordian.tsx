import React from 'react';
import classes from './Accordian.module.css';

interface AccordianProps {
  children: any;
}

const accordian = (props: AccordianProps) => (
  <div className={classes.Container}>{props.children}</div>
);

export default accordian;
