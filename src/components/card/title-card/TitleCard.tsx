import React from 'react';

import classes from './TitleCard.module.css';
import Button from '../../button/Button';
import Input from '../../input/Input';

interface TitleCardProps {
  btnColor?: string[];
  btnText?: string[];
  children: any;
  editing?: boolean;
  onChange?: any;
  onEdit?: any;
  title: string;
  value?: any;
  wide?: boolean;
}

// TODO: refactor, maybe merged with another card or unnecessary
const titleCard = (props: TitleCardProps) => {
  const {
    btnColor = ['Accent', 'Primary'],
    btnText = ['Save', 'Edit'],
    children,
    editing,
    onChange,
    onEdit,
    title,
    value,
    wide
  } = props;

  let heading = <h1 className={classes.Title}>{title}</h1>;

  if (onEdit && editing) {
    heading = <Input onChange={onChange} value={value} editing={editing} />;
  }

  let button = null;

  if (onEdit) {
    button = (
      <Button
        color={editing ? btnColor[0] : btnColor[1]}
        btnType="Corner"
        clicked={onEdit}
      >
        {editing ? btnText[0] : btnText[1]}
      </Button>
    );
  }
  return (
    <div className={wide ? classes.CardWide : classes.Card}>
      <div className={onEdit ? classes.HeaderEdit : classes.Header}>
        {heading}
        {button}
      </div>

      <div className={wide ? classes.BodyWide : classes.Body}>{children}</div>
    </div>
  );
};

export default titleCard;
