import React from 'react';

import classes from './BasicCard.module.css';
import Button from '../../button/Button';

interface BasicCardProps {
  children: any;
  editing: boolean;
  onEdit: any;
  title: string;
}

const basicCard = (props: BasicCardProps) => {
  const { editing, onEdit, title } = props;

  return (
    <div className={classes.Card}>
      <div className={classes.Header}>
        <h3 className={classes.Title}>{title}</h3>

        <Button
          color={editing ? 'Secondary' : 'Primary'}
          btnType="Corner"
          clicked={onEdit}
        >
          {editing ? 'x' : '+'}
        </Button>
      </div>

      <div className={classes.Body}>{props.children}</div>
    </div>
  );
};

export default basicCard;
