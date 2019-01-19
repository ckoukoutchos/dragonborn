import React from 'react';

import classes from './Jumbotron.module.css';

const jumbotron = props => {
  return (
    <div className={classes.Jumbotron}>
      <h1 className={classes.Header}>{props.header}</h1>
      <h4 className={classes.SubHeader}>{props.subHeader}</h4>
    </div>
  );
};

export default jumbotron;
