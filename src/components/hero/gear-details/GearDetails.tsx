// library
import React from 'react';

// component
import classes from './GearDetails.module.css';
import MultiLineInput from '../../UI/input/multi-line-input/MultiLineInput';

// shared
import { Gear } from '../../../models/Gear';

interface GearDetailsProps {
  gear: Gear;
}

// TODO: remove style tags

const gearDetails = (props: GearDetailsProps) => {
  const {
    gear: { cost, desc, weight }
  } = props;

  return (
    <div>
      <p style={{ padding: '0 8px' }}>{desc}</p>

      <hr className={classes.Divide} />

      <MultiLineInput label={['Weight', 'Cost']} value={[weight, cost]} />

      <hr className={classes.Divide} />
    </div>
  );
};

export default gearDetails;
