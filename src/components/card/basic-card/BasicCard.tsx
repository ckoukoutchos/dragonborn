import React from 'react';

import classes from './BasicCard.module.css';
import Button from '../../button/Button';

interface BasicCardProps {
  children: any;
  editing?: boolean;
  onEdit?: any;
  readOnly?: boolean;
  title: string;
}

const basicCard = (props: BasicCardProps) => {
  const { editing, onEdit, readOnly, title } = props;

  return (
    <div className={classes.Card}>
      <div className={readOnly ? classes.Header : classes.HeaderEdit}>
        <h3 className={classes.Title}>{title}</h3>

        {!readOnly ? (
          <Button
            color={editing ? 'Accent' : 'Primary'}
            btnType="Corner"
            clicked={onEdit}
          >
            {editing ? 'Save' : 'Edit'}
          </Button>
        ) : null}
      </div>

      <div className={classes.Body}>{props.children}</div>
    </div>
  );
};

export default basicCard;
