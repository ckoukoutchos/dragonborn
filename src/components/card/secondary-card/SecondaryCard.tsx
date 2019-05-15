import React from 'react';

import classes from './SecondaryCard.module.css';
import Button from '../../button/Button';

interface SecondaryCardProps {
  children: any;
  editing?: boolean;
  onEdit?: any;
  label: string;
  readOnly?: boolean;
  wide?: boolean;
}

const secondaryCard = (props: SecondaryCardProps) => {
  const { children, editing, onEdit, label, readOnly, wide } = props;

  return (
    <div className={wide ? classes.ContainerWide : classes.Container}>
      {children}
      <div className={readOnly ? classes.Footer : classes.FooterEdit}>
        <div className={classes.Label}>{label}</div>
        {!readOnly ? (
          <Button
            color={editing ? 'Accent' : 'Primary'}
            btnType="CornerBottom"
            clicked={onEdit}
          >
            {editing ? 'Save' : 'Edit'}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default secondaryCard;
