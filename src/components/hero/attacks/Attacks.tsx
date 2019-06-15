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
import { Weapon } from '../../../models/Weapon';
import { calcAttackBonus, calcDamageDice } from '../../../shared/convert';
import Hero from '../../../models/Hero';

interface AttackProps {
  hero: Hero;
}
// TODO: consider changing using a smaller slice of hero state so render is called less often

class Attacks extends Component<AttackProps> {
  createAttackCards = () => {
    const { hero } = this.props;

    let attacks: any = <p>You need to add a weapon or spell first.</p>;

    if (hero.weapons) {
      attacks = hero.weapons.map((weapon: Weapon) => (
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
    }

    return attacks;
  };

  render() {
    return <BasicCard title='Attacks'>{this.createAttackCards()}</BasicCard>;
  }
}

const mapStateToProps = (state: AppState) => ({
  hero: state.hero.hero
});

export default connect(mapStateToProps)(Attacks);