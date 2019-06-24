// library
import React from 'react';

// component
import classes from './WeaponDetails.module.css';
import MultiLineInput from '../../UI/input/multi-line-input/MultiLineInput';

// shared
import { WeaponProps, Weapon } from '../../../models/Gear';

interface WeaponDetailsProps {
  weapon: Weapon;
}

// TODO: remove style tags

const weaponDetails = (props: WeaponDetailsProps) => {
  const {
    weapon: {
      cost,
      damageType,
      desc,
      numberOfDamageDice,
      numberOfDamageDiceSides,
      properties,
      range,
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

  const weaponProps = range
    ? `Properties: ${properties.join(', ')}, Range: ${range}`
    : `Properties: ${properties.join(', ')}`;

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
      {properties.length > 0 ? (
        <>
          <p style={{ padding: '0 8px' }}>{weaponProps}</p>
          <hr className={classes.Divide} />
        </>
      ) : null}
    </div>
  );
};

export default weaponDetails;
