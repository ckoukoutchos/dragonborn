// library
import React from 'react';

// component
import classes from './ArmorDetails.module.css';
import MultiLineInput from '../../UI/input/multi-line-input/MultiLineInput';

// shared
import { Armor } from '../../../models/Armor';

interface ArmorDetailsProps {
  armor: Armor;
}

// TODO: remove style tags

const armorDetails = (props: ArmorDetailsProps) => {
  const {
    armor: {
      armorClass,
      cost,
      desc,
      equipped,
      stealthDisadvatage,
      type,
      weight
    }
  } = props;

  return (
    <div>
      <p style={{ padding: '0 8px' }}>{desc}</p>

      <hr className={classes.Divide} />

      <MultiLineInput
        label={['Type', 'Armor Class']}
        value={[type, armorClass]}
      />

      <MultiLineInput
        label={['Weight', 'Cost', 'Stealth Disadvantage']}
        value={[weight, cost, stealthDisadvatage ? 'Disadvatage' : 'None']}
      />

      <hr className={classes.Divide} />
    </div>
  );
};

export default armorDetails;
