import React from 'react';

import classes from './TitleCard.module.css';
import Button from '../../button/Button';
import Input from '../../input/Input';

interface TitleCardProps {
  editing?: boolean;
  children: any;
  onChange?: any;
  onEdit?: any;
  readOnly?: boolean;
  title: string;
  value?: any;
  wide?: boolean;
}

// TODO: refactor, maybe merged with another card or unnecessary
const titleCard = (props: TitleCardProps) => {
  const { editing, onChange, onEdit, readOnly, title, value, wide } = props;

  return (
    <div className={wide ? classes.CardWide : classes.Card}>
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

      <div className={wide ? classes.BodyWide : classes.Body}>
        {props.children}
      </div>
    </div>
  );
};

export default titleCard;
