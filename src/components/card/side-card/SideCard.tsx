import React from 'react';
import classes from './SideCard.module.css';

interface SideCardProps {
  align: string;
  children: any;
  title: string;
}

const sideCard = (props: SideCardProps) => {
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
