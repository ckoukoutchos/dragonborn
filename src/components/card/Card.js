import React from 'react';

import classes from './Card.module.css';
import Button from '../button/Button';

const card = props => {
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

export default card;
