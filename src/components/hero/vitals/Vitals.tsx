// library
import React, { Component, ChangeEvent } from 'react';
import { connect } from 'react-redux';

// store
import { AppState } from '../../../store/rootReducer';

// components
import BasicCard from '../../UI/card/basic-card/BasicCard';
import BlockInput from '../../UI/input/block-input/BlockInput';

// shared
import { updateObject } from '../../../shared/immutable';

class Vitals extends Component<any> {
  state = {
    armor: this.props.armor,
    hp: this.props.hp,
    editing: false,
    initative: this.props.initative,
    numberOfHitDice: this.props.numberOfHitDice,
    numberOfHitDiceSides: this.props.numberOfHitDiceSides,
    speed: this.props.speed,
    updated: false,
    xp: this.props.xp
  };

  componentWillReceiveProps(nextProps: any) {
    const newState: any = {};

    for (const [key, value] of Object.entries(nextProps)) {
      // @ts-ignore
      if (this.state[key] === value) {
        newState[key] = value;
      }
    }
    this.setState({ ...newState });
  }

  /**
   * @name onCancelClicked
   * @description on cancel clicked, sets editing and updated to false
   */
  onCancelClicked = () => {
    this.setState((prevState: any) => {
      return { editing: !prevState.editing, updated: false };
    });
  };

  /**
   * @name onEditToggled
   * @description updates editing status when toggled
   */
  onEditToggled = () => {
    this.setState((prevState: any) => {
      if (prevState.updated) {
        // @ts-ignore
        this.props.updateHero(prevState.hero, this.props.user.uid);
      }
      return { editing: !prevState.editing, updated: false };
    });
  };

  /**
   * @name onInputChange
   * @description updates value for field on input change
   */
  onInputChange = (label: string) => (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [label]: evt.target.value,
      updated: true
    });
  };

  render() {
    const {
      armor,
      hp,
      editing,
      initative,
      numberOfHitDice,
      numberOfHitDiceSides,
      speed,
      xp
    } = this.state;

    return (
      <BasicCard
        title='Vitals'
        editing={editing}
        onCancel={this.onCancelClicked()}
        onEdit={this.onEditToggled()}
      >
        <BlockInput
          label='Armor Class'
          editing={false}
          onChange={() => console.log('Easter Egg')}
          value={armor && armor.length ? armor[0].armorClass : 0}
        />

        <BlockInput
          label='Initiative'
          editing={editing}
          onChange={this.onInputChange('initative')}
          value={initative}
        />

        <BlockInput
          label='Experience'
          editing={editing}
          onChange={this.onInputChange('xp')}
          value={xp}
        />

        <BlockInput
          label='Speed'
          editing={editing}
          onChange={this.onInputChange('speed')}
          value={speed}
        />

        <BlockInput
          label='Hit Points'
          editing={editing}
          onChange={this.onInputChange('hp')}
          value={hp}
        />

        <BlockInput
          label='Hit Dice'
          editing={editing}
          onChange={this.onInputChange('numberOfDice')}
          value={numberOfHitDice + 'd' + numberOfHitDiceSides}
        />
      </BasicCard>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  armor: state.hero.hero.armor,
  hp: state.hero.hero.hp,
  id: state.hero.hero.id,
  initative: state.hero.hero.initative,
  numberOfHitDice: state.hero.hero.numberOfHitDice,
  numberOfHitDiceSides: state.hero.hero.numberOfHitDiceSides,
  speed: state.hero.hero.speed,
  xp: state.hero.hero.xp
});

export default connect(
  mapStateToProps,
  null
)(Vitals);
