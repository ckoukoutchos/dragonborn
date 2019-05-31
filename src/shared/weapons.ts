import { WeaponTypes, DamageTypes, WeaponProps } from '../models/Weapon';

// eventually will be stored in db and served as json from backend, till then will be served in app bundle

export default [
  {
    cost: '1 sp',
    damageType: DamageTypes.BLUDGEONING,
    desc: 'A simple blunt instrument of death, usually fashioned out of wood.',
    name: 'Club',
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 4,
    properties: [WeaponProps.LIGHT],
    type: WeaponTypes.SIMPLE_MELEE,
    weight: '2 lb'
  },
  {
    type: WeaponTypes.SIMPLE_RANGED,
    cost: '25 gp',
    damageType: DamageTypes.PIERCING,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    desc: 'A contraption to sling arrows from the hip.',
    name: 'Light Crossbow',
    properties: [WeaponProps.AMMUNITION, WeaponProps.LOADING, WeaponProps.TWO_HANDED],
    weight: '5 lb'
  },
  {
    type: WeaponTypes.MARTIAL_MELEE,
    cost: '10 gp',
    damageType: DamageTypes.SLASHING,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    desc: 'A castle forged axe tailor made for the field of battle.',
    name: 'Battleaxe',
    properties: [WeaponProps.VERSATILE],
    weight: '4 lb'
  }
];