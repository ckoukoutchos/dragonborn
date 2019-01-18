import React from 'react';

import classes from './BasicCard.module.css';
import Button from '../../button/Button';

const basicCard = props => {
  const { editing, onEdit, title } = props;
  return (
    <div className={classes.Card}>
      <div className={classes.Header}>
        <h3 className={classes.Title}>{title}</h3>
        <Button color="Primary" btnType="Fab" clicked={onEdit}>
          {editing ? 'x' : '+'}
        </Button>
      </div>
      <div className={classes.Body}>{props.children}</div>
    </div>
  );
};

export default basicCard;
