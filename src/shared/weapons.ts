import { WeaponTypes, DamageTypes, WeaponProps, GearTypes } from '../models/Gear';

// eventually will be stored in db and served as json from backend, till then will be served in app bundle

export default [
  {
    cost: '1 sp',
    damageType: DamageTypes.BLUDGEONING,
    desc: 'A simple blunt instrument of death, usually fashioned out of wood.',
    name: 'Club',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 4,
    properties: [WeaponProps.LIGHT],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.SIMPLE_MELEE,
    weight: '2 lb'
  },
  {
    weaponType: WeaponTypes.SIMPLE_RANGED,
    cost: '25 gp',
    damageType: DamageTypes.PIERCING,
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    desc: 'A contraption to sling arrows from the hip.',
    name: 'Light Crossbow',
    properties: [WeaponProps.AMMUNITION, WeaponProps.LOADING, WeaponProps.TWO_HANDED],
    range: '80/320',
    type: GearTypes.WEAPONS,
    weight: '5 lb'
  },
  {
    weaponType: WeaponTypes.MARTIAL_MELEE,
    cost: '10 gp',
    damageType: DamageTypes.SLASHING,
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    desc: 'A castle forged axe tailor made for the field of battle.',
    name: 'Battleaxe',
    properties: [WeaponProps.VERSATILE],
    type: GearTypes.WEAPONS,
    weight: '4 lb'
  },
  {
    weaponType: WeaponTypes.SIMPLE_MELEE,
    cost: '2 gp',
    damageType: DamageTypes.PIERCING,
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 4,
    desc: 'A small knife that fits nicely up a sleave, or through a heart.',
    name: 'Dagger',
    properties: [WeaponProps.LIGHT],
    type: GearTypes.WEAPONS,
    weight: '1 lb'
  },
  {
    weaponType: WeaponTypes.SIMPLE_MELEE,
    cost: '2 sp',
    damageType: DamageTypes.BLUDGEONING,
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    desc: 'A club of some repute known for felling large beasts and man alike.',
    name: 'Greatclub',
    properties: [WeaponProps.TWO_HANDED],
    type: GearTypes.WEAPONS,
    weight: '10 lb'
  },
  {
    weaponType: WeaponTypes.SIMPLE_MELEE,
    cost: '5 sp',
    damageType: DamageTypes.PIERCING,
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 6,
    desc: '',
    name: 'Javelin',
    properties: [WeaponProps.THROWN],
    type: GearTypes.WEAPONS,
    range: '30/120',
    weight: '2 lb'
  },
  {
    cost: '2 gp',
    damageType: DamageTypes.BLUDGEONING,
    desc: 'A small hammer, perfect for driving in nails and throwing at skulls.',
    name: 'Light Hammer',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 4,
    properties: [WeaponProps.THROWN, WeaponProps.LIGHT],
    range: '20/60',
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.SIMPLE_MELEE,
    weight: '2 lb'
  },
  {
    cost: '5 gp',
    damageType: DamageTypes.BLUDGEONING,
    desc: 'For when your club does not quite have enough metal.',
    name: 'Mace',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 6,
    properties: [],
    weaponType: WeaponTypes.SIMPLE_MELEE,
    type: GearTypes.WEAPONS,
    weight: '4 lb'
  },
  {
    cost: '2 sp',
    damageType: DamageTypes.BLUDGEONING,
    desc: 'Walk tall and carry a big stick.',
    name: 'Quarterstaff',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 6,
    properties: [WeaponProps.VERSATILE],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.SIMPLE_MELEE,
    weight: '4 lb'
  },
  {
    cost: '1 gp',
    damageType: DamageTypes.SLASHING,
    desc: 'Sickles: not just for threshing wheat. Separate the chaff from their bodies',
    name: 'Sickle',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 4,
    properties: [WeaponProps.LIGHT],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.SIMPLE_MELEE,
    weight: '2 lb'
  },
  {
    cost: '1 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'Remember to stick them with the pointy end.',
    name: 'Spear',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 6,
    properties: [WeaponProps.THROWN, WeaponProps.VERSATILE],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.SIMPLE_MELEE,
    weight: '3 lb'
  },
  {
    cost: '5 cp',
    damageType: DamageTypes.PIERCING,
    desc: 'A small sharp object to show you skill in the tavern, both in sport and combat.',
    name: 'Dart',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 4,
    properties: [WeaponProps.FINESSE, WeaponProps.THROWN],
    range: '20/60',
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.SIMPLE_RANGED,
    weight: '1/4 lb'
  },
  {
    cost: '25 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'A simple bow to project death across the field of battle.',
    name: 'Short Bow',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 6,
    properties: [WeaponProps.AMMUNITION, WeaponProps.TWO_HANDED],
    range: '80/320',
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.SIMPLE_RANGED,
    weight: '2 lb'
  },
  {
    cost: '1 sp',
    damageType: DamageTypes.BLUDGEONING,
    desc: 'Do not laugh, Goliath made that mistake.',
    name: 'Sling',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 4,
    properties: [WeaponProps.AMMUNITION],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.SIMPLE_RANGED,
    weight: '1/2 lb'
  },
  {
    cost: '10 gp',
    damageType: DamageTypes.BLUDGEONING,
    desc: 'What goes around, comes around with an iron spiked ball.',
    name: 'Flail',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    properties: [],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '2 lb'
  },
  {
    cost: '20 gp',
    damageType: DamageTypes.SLASHING,
    desc: 'Answering the question, what if you put a sword on a pole?',
    name: 'Glaive',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 10,
    properties: [WeaponProps.HEAVY, WeaponProps.TWO_HANDED, WeaponProps.REACH],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '6 lb'
  },
  {
    cost: '30 gp',
    damageType: DamageTypes.SLASHING,
    desc: 'A mighty weapon to cleave a way through the battle.',
    name: 'Greataxe',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 12,
    properties: [WeaponProps.HEAVY, WeaponProps.TWO_HANDED],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '7 lb'
  },
  {
    cost: '50 gp',
    damageType: DamageTypes.SLASHING,
    desc: 'Castle forged steel, the perfect weapon of war.',
    name: 'Greatsword',
    number: 1,
    numberOfDamageDice: 2,
    numberOfDamageDiceSides: 6,
    properties: [WeaponProps.HEAVY, WeaponProps.TWO_HANDED],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '6 lb'
  },
  {
    cost: '20 gp',
    damageType: DamageTypes.SLASHING,
    desc: 'Answering the question, what if you put an axe on a spear?',
    name: 'Halberd',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 10,
    properties: [WeaponProps.HEAVY, WeaponProps.TWO_HANDED, WeaponProps.REACH],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '6 lb'
  },
  {
    cost: '10 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'A swole spear for those on horseback.',
    name: 'Lance',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 12,
    properties: [WeaponProps.SPECIAL, WeaponProps.REACH],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '6 lb'
  },
  {
    cost: '15 gp',
    damageType: DamageTypes.SLASHING,
    desc: 'Like a shortsword, but longer.',
    name: 'Longsword',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    properties: [WeaponProps.VERSATILE],
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '3 lb'
  },
  {
    cost: '10 gp',
    damageType: DamageTypes.BLUDGEONING,
    desc: 'A massive hammer to pound your opponents into the earth.',
    name: 'Maul',
    number: 1,
    numberOfDamageDice: 2,
    numberOfDamageDiceSides: 6,
    properties: [WeaponProps.HEAVY, WeaponProps.TWO_HANDED],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '10 lb'
  },
  {
    cost: '15 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'Answering the question, what if you put a spiked ball on a pole?',
    name: 'Morningstar',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    properties: [],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '4 lb'
  },
  {
    cost: '5 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'When you do not want your enemies blood to soil your nice armor.',
    name: 'Pike',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 10,
    properties: [WeaponProps.HEAVY, WeaponProps.TWO_HANDED, WeaponProps.REACH],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '18 lb'
  },
  {
    cost: '25 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'An elegant and brutal sword.',
    name: 'Rapier',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    properties: [WeaponProps.FINESSE],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '2 lb'
  },
  {
    cost: '25 gp',
    damageType: DamageTypes.SLASHING,
    desc: 'When you do not want your enemies blood to soil your nice armor.',
    name: 'Scimitar',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 6,
    properties: [WeaponProps.FINESSE, WeaponProps.LIGHT],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '3 lb'
  },
  {
    cost: '10 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'Like a longsword, but shorter.',
    name: 'Shortsword',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 6,
    properties: [WeaponProps.FINESSE, WeaponProps.LIGHT],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '2 lb'
  },
  {
    cost: '5 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'Channel your inner Poseidon.',
    name: 'Trident',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 6,
    properties: [WeaponProps.THROWN, WeaponProps.VERSATILE],
    range: '20/60',
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '4 lb'
  },
  {
    cost: '5 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'Mine your foes organs.',
    name: 'War Pick',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    properties: [],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '2 lb'
  },
  {
    cost: '15 gp',
    damageType: DamageTypes.BLUDGEONING,
    desc: 'This hammer was made to help destory, not build.',
    name: 'Warhammer',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    properties: [WeaponProps.VERSATILE],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '2 lb'
  },
  {
    cost: '2 gp',
    damageType: DamageTypes.SLASHING,
    desc: 'Keep you enemies at bay, and your allies in line.',
    name: 'Whip',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 4,
    properties: [WeaponProps.FINESSE, WeaponProps.REACH],
    type: GearTypes.WEAPONS,
    weaponType: WeaponTypes.MARTIAL_MELEE,
    weight: '3 lb'
  },
  {
    cost: '75 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'For the ye olde gunsliger.',
    name: 'Hand Crossbow',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 6,
    properties: [WeaponProps.LIGHT, WeaponProps.LOADING, WeaponProps.AMMUNITION],
    weaponType: WeaponTypes.MARTIAL_RANGED,
    range: '30/120',
    type: GearTypes.WEAPONS,
    weight: '3 lb'
  },
  {
    cost: '50 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'Do not just shoot them, pin them to the castle walls.',
    name: 'Heavy Crossbow',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 10,
    properties: [WeaponProps.HEAVY, WeaponProps.LOADING, WeaponProps.TWO_HANDED, WeaponProps.AMMUNITION],
    weaponType: WeaponTypes.MARTIAL_RANGED,
    range: '100/400',
    type: GearTypes.WEAPONS,
    weight: '18 lb'
  },
  {
    cost: '50 gp',
    damageType: DamageTypes.PIERCING,
    desc: 'Death from great distances.',
    name: 'Longbow',
    number: 1,
    numberOfDamageDice: 1,
    numberOfDamageDiceSides: 8,
    properties: [WeaponProps.HEAVY, WeaponProps.AMMUNITION, WeaponProps.TWO_HANDED],
    weaponType: WeaponTypes.MARTIAL_RANGED,
    range: '150/600',
    type: GearTypes.WEAPONS,
    weight: '2 lb'
  },
];