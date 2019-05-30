import React from 'react';

import classes from './SecondaryCard.module.css';
import Button from '../../button/Button';

interface SecondaryCardProps {
  btnColor?: string[];
  btnText?: string[];
  children: any;
  editing?: boolean;
  onCancel?: any;
  onEdit?: any;
  label: string;
  wide?: boolean;
}

const secondaryCard = (props: SecondaryCardProps) => {
  const {
    btnColor = ['Accent', 'Primary', 'Warn'],
    btnText = ['Save', 'Edit', 'Cancel'],
    children,
    editing,
    onCancel,
    onEdit,
    label,
    wide
  } = props;

  let primaryButton = null;
  let secondaryButton = null;

  if (onEdit) {
    primaryButton = (
      <Button
        color={editing ? btnColor[0] : btnColor[1]}
        btnType='CornerBottomRight'
        clicked={onEdit}
      >
        {editing ? btnText[0] : btnText[1]}
      </Button>
    );
  }

  if (onCancel && editing) {
    secondaryButton = (
      <Button color={btnColor[2]} btnType='CornerBottomLeft' clicked={onCancel}>
        {btnText[2]}
      </Button>
    );
  }

  return (
    <div className={wide ? classes.ContainerWide : classes.Container}>
      {children}

      <div className={onEdit ? classes.FooterEdit : classes.Footer}>
        {secondaryButton}

        <div className={classes.Label}>{label}</div>

        {primaryButton}
      </div>
    </div>
  );
};

export default secondaryCard;
