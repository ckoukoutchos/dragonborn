import React from 'react';

import classes from './BasicCard.module.css';
import Button from '../../button/Button';

interface BasicCardProps {
  btnColor?: string[];
  btnText?: string[];
  children: any;
  editing?: boolean;
  onCancel?: any;
  onEdit?: any;
  title: string;
}

const basicCard = (props: BasicCardProps) => {
  const {
    btnColor = ['Accent', 'Primary', 'Warn'],
    btnText = ['Save', 'Edit', 'Cancel'],
    editing,
    onCancel,
    onEdit,
    title
  } = props;

  let primaryButton = null;
  let secondaryButton = null;

  if (onEdit) {
    primaryButton = (
      <Button
        color={editing ? btnColor[0] : btnColor[1]}
        btnType="CornerTopRight"
        clicked={onEdit}
      >
        {editing ? btnText[0] : btnText[1]}
      </Button>
    );
  }

  if (onCancel && editing) {
    secondaryButton = (
      <Button color={btnColor[2]} btnType="CornerTopLeft" clicked={onCancel}>
        {btnText[2]}
      </Button>
    );
  }

  return (
    <div className={classes.Card}>
      <div className={onEdit ? classes.HeaderEdit : classes.Header}>
        {secondaryButton}
        <h3 className={classes.Title}>{title}</h3>
        {primaryButton}
      </div>

      <div className={classes.Body}>{props.children}</div>
    </div>
  );
};

export default basicCard;
