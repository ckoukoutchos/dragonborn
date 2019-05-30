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

interface AttackProps {
  weapons?: Weapon[];
}

// TODO: use props rather than dumby data
class Attacks extends Component<AttackProps> {
  render() {
    const { weapons } = this.props;

    const attacks = Weapons.map(
      ({
        attackBonus,
        name,
        numberOfDamageDice,
        numberOfDamageDiceSides,
        damageType
      }: Weapon) => (
        <SecondaryCard key={name} label={name} wide>
          <MultiLineInput
            label={['Atk Bonus', 'Damage', 'Damage Type']}
            value={[
              attackBonus,
              `${numberOfDamageDice}d${numberOfDamageDiceSides}`,
              damageType
            ]}
          />
        </SecondaryCard>
      )
    );

    return <BasicCard title='Attacks'>{attacks}</BasicCard>;
  }
}

const mapStateToProps = (state: AppState) => ({
  abilityScores: state.hero.hero.abilityScores,
  weapons: state.hero.hero.weapons
});

export default connect(mapStateToProps)(Attacks);
