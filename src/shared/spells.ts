import { SpellComponents, Durations, SpellTypes } from '../models/Spell';

export default [
  {
    castingTime: '1 action',
    spellComponents: [SpellComponents.VERBAL, SpellComponents.SOMATIC],
    concentration: false,
    desc: 'Three glowing darts hits a creature of your choice that you can see within range. The darts all strike simultaneously, and you can direct them to hit one creature or several.',
    duration: Durations.INSTANTANEOUS,
    level: 1,
    name: 'Magic Missle',
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 4,
    range: '120',
    type: SpellTypes.EVOCATION,
  }
]

/* template
{
  astingTime: ,
  spellComponents: [],
  concentration: ,
  damageMod?: ,
  desc: ,
  duration: ,
  level: ,
  name: ,
  numberOfDamageDice?: ,
  numberOfDamageDiceSides?: ,
  range: ,
  savingThrow?: ,
  type: ,
}
*/