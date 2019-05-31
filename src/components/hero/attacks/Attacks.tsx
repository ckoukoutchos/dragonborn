// library
import React, { Component } from 'react';
import { connect } from 'react-redux';

// store
import { AppState } from '../../../store/rootReducer';

// components
import BasicCard from '../../UI/card/basic-card/BasicCard';
import MultiLineInput from '../../UI/input/multi-line-input/MultiLineInput';
import SecondaryCard from '../../UI/card/secondary-card/SecondaryCard';

// shared
import Weapons from '../../../shared/weapons';
import { Weapon } from '../../../models/Weapon';
import { calcAttackBonus, calcDamageDice } from '../../../shared/convert';
import Hero from '../../../models/Hero';

interface AttackProps {
  hero: Hero;
  weapons?: Weapon[];
}

// TODO: use props rather than dumby data
class Attacks extends Component<AttackProps> {
  render() {
    const { hero, weapons } = this.props;

    const attacks = Weapons.map((weapon: Weapon) => (
      <SecondaryCard key={weapon.name} label={weapon.name} wide>
        <MultiLineInput
          label={['Atk Bonus', 'Damage', 'Damage Type']}
          value={[
            calcAttackBonus(hero, weapon),
            calcDamageDice(hero, weapon),
            weapon.damageType
          ]}
        />
      </SecondaryCard>
    ));

    return <BasicCard title='Attacks'>{attacks}</BasicCard>;
  }
}

const mapStateToProps = (state: AppState) => ({
  hero: state.hero.hero,
  weapons: state.hero.hero.weapons
});

export default connect(mapStateToProps)(Attacks);
