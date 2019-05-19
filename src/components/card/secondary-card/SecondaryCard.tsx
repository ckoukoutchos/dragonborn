import React from 'react';

import classes from './SecondaryCard.module.css';
import Button from '../../button/Button';

interface SecondaryCardProps {
  btnColor?: string[];
  btnText?: string[];
  children: any;
  editing?: boolean;
  onEdit?: any;
  onCancel?: any;
  label: string;
  wide?: boolean;
}

const secondaryCard = (props: SecondaryCardProps) => {
  const {
    btnColor = ['Accent', 'Primary', 'Warn'],
    btnText = ['Save', 'Edit', 'Cancel'],
    children,
    editing,
    onEdit,
    label,
    wide
  } = props;

  let primaryButton = null;

  if (onEdit) {
    primaryButton = (
      <Button
        color={editing ? btnColor[0] : btnColor[1]}
        btnType="CornerBottom"
        clicked={onEdit}
      >
        {editing ? btnText[0] : btnText[1]}
      </Button>
    );
  }

  return (
    <div className={wide ? classes.ContainerWide : classes.Container}>
      {children}

      <div className={onEdit ? classes.FooterEdit : classes.Footer}>
        <div className={classes.Label}>{label}</div>

        {primaryButton}
      </div>
    </div>
  );
};

export default secondaryCard;
