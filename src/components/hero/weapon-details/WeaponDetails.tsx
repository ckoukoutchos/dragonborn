import React from 'react';
import MultiLineInput from '../../UI/input/multi-line-input/MultiLineInput';
import classes from './WeaponDetails.module.css';
import { WeaponProps } from '../../../models/Weapon';

const weaponDetails = (props: any) => {
  const {
    weapon: {
      cost,
      damageType,
      desc,
      numberOfDamageDice,
      numberOfDamageDiceSides,
      properties,
      type,
      weight
    }
  } = props;

  let mod = 'str';
  if (properties.includes(WeaponProps.AMMUNITION)) {
    mod = 'dex';
  } else if (properties.includes(WeaponProps.FINESSE)) {
    mod = 'dex/str';
  }

  return (
    <div>
      <p style={{ padding: '0 8px' }}>{desc}</p>
      <hr className={classes.Divide} />
      <MultiLineInput
        label={['Type', 'Damage Type']}
        value={[type, damageType]}
      />
      <MultiLineInput
        label={['Weight', 'Cost', 'Damage']}
        value={[
          weight,
          cost,
          `${numberOfDamageDice}d${numberOfDamageDiceSides} + ${mod}`
        ]}
      />
      <hr className={classes.Divide} />
    </div>
  );
};

export default weaponDetails;
