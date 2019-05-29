import { WeaponTypes, DamageTypes, WeaponProps } from '../models/Weapon';

// eventually will be stored in db and served as json from backend, till then will be served in app bundle

export default [
  {
    type: WeaponTypes.SIMPLE_MELEE,
    cost: '1 sp',
    damage: {
      attackBonus: 0,
      damageType: DamageTypes.BLUDGEONING,
      numberOfDamageDice: 1,
      numberOfDamageDiceSides: 4
    },
    desc: 'A simple blunt instrument of death, usually fashioned out of wood.',
    name: 'Club',
    properties: [WeaponProps.LIGHT],
    weight: '2 lb'
  },
  {
    type: WeaponTypes.MARTIAL_MELEE,
    cost: '10 gp',
    damage: {
      attackBonus: 0,
      damageType: DamageTypes.SLASHING,
      numberOfDamageDice: 1,
      numberOfDamageDiceSides: 8
    },
    desc: 'A castle forged axe tailor made for the field of battle.',
    name: 'Battleaxe',
    properties: [WeaponProps.VERSATILE],
    weight: '4 lb'
  }
];