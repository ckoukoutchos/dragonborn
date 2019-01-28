import React from 'react';

import classes from './TitleCard.module.css';
import Button from '../../button/Button';
import Input from '../../input/Input';

const titleCard = props => {
  const { editing, onChange, onEdit, readOnly, title, value } = props;
  return (
    <div className={classes.Card}>
      <div className={readOnly ? classes.Header : classes.HeaderEdit}>
        {!readOnly && editing ? (
          <Input onChange={onChange} value={value} editing={editing} />
        ) : (
          <h1 className={classes.Title}>{title}</h1>
        )}
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
