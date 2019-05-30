import React from 'react';

import classes from './TitleCard.module.css';
import Button from '../../button/Button';
import Input from '../../input/Input';

interface TitleCardProps {
  btnColor?: string[];
  btnText?: string[];
  children: any;
  editing?: boolean;
  onCancel?: any;
  onChange?: any;
  onEdit?: any;
  subTitle?: string;
  title: string;
  value?: any;
  wide?: boolean;
}

// TODO: refactor, maybe merged with basic card using css
const titleCard = (props: TitleCardProps) => {
  const {
    btnColor = ['Accent', 'Primary', 'Warn'],
    btnText = ['Save', 'Edit', 'Cancel'],
    children,
    editing,
    onCancel,
    onChange,
    onEdit,
    subTitle,
    title,
    value,
    wide
  } = props;

  let heading = <h1 className={classes.Title}>{title}</h1>;

  if (onEdit && editing) {
    heading = <Input onChange={onChange} value={value} editing={editing} />;
  }

  let primaryButton = null;
  let secondaryButton = null;

  if (onEdit) {
    primaryButton = (
      <Button
        color={editing ? btnColor[0] : btnColor[1]}
        btnType='CornerTopRight'
        clicked={onEdit}
      >
        {editing ? btnText[0] : btnText[1]}
      </Button>
    );
  }

  if (onCancel && editing) {
    secondaryButton = (
      <Button color={btnColor[2]} btnType='CornerTopLeft' clicked={onEdit}>
        {btnText[2]}
      </Button>
    );
  }

  return (
    <div className={wide ? classes.CardWide : classes.Card}>
      <div className={onEdit ? classes.HeaderEdit : classes.Header}>
        {secondaryButton}

        {heading}

        {subTitle ? <h4>{subTitle}</h4> : null}

        {primaryButton}
      </div>

      <div className={wide ? classes.BodyWide : classes.Body}>{children}</div>
    </div>
  );
};

export default titleCard;
