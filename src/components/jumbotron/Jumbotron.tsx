import React from 'react';

import classes from './Jumbotron.module.css';

interface JumbotronProps {
  header: string;
  subHeader: string;
}

const jumbotron = (props: JumbotronProps) => {
  return (
    <div className={classes.Jumbotron}>
      <h1 className={classes.Header}>{props.header}</h1>
      <h4 className={classes.SubHeader}>{props.subHeader}</h4>
    </div>
  );
};

export default jumbotron;
