import React from 'react';

import classes from './TitleCard.module.css';
import Button from '../../button/Button';

const titleCard = props => {
  const { editing, onEdit, title } = props;
  return (
    <div className={classes.Card}>
      <div className={classes.Header}>
        <h1 className={classes.Title}>{title}</h1>
        <Button color="Primary" btnType="Fab" clicked={onEdit}>
          {editing ? 'x' : '+'}
        </Button>
      </div>
      <div className={classes.Body}>{props.children}</div>
    </div>
  );
};

export default titleCard;
