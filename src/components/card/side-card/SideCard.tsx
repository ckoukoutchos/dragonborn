import React from 'react';
import classes from './SideCard.module.css';

const sideCard = (props: any) => {
  const { align, children, title } = props;

  return (
    <div className={[classes.SideCard, classes[align]].join(' ')}>
      <div className={classes.Header}>
        <h1>{title}</h1>
      </div>
      <div className={classes.Body}>{children}</div>
    </div>
  );
};

export default sideCard;
