import React from 'react';

import classes from './TitleCard.module.css';
import Button from '../../button/Button';

const titleCard = props => {
  const { editing, onEdit, readOnly, title } = props;
  return (
    <div className={classes.Card}>
      <div className={readOnly ? classes.Header : classes.HeaderEdit}>
        <h1 className={classes.Title}>{title}</h1>
        {readOnly ? null : (
          <Button
            color={editing ? 'Secondary' : 'Primary'}
            btnType="Corner"
            clicked={onEdit}
          >
            {editing ? 'x' : '+'}
          </Button>
        )}
      </div>
      <div className={classes.Body}>{props.children}</div>
    </div>
  );
};

export default titleCard;
