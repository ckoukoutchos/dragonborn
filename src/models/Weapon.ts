export interface Weapon {
  attackBonus: number;
  cost: string;
  damageType: DamageTypes;
  desc: string;
  name: string;
  numberOfDamageDice: number;
  numberOfDamageDiceSides: number;
  properties: WeaponProps[];
  range?: string;
  type: WeaponTypes;
  weight: string;
}

export enum DamageTypes {
  BLUDGEONING = 'Bludgeoning',
  PIERCING = 'Piercing',
  SLASHING = 'Slashing'
}

export enum WeaponProps {
  AMMUNITION = 'Ammunition',
  FINESSE = 'Finesse',
  HEAVY = 'Heavy',
  LIGHT = 'Light',
  LOADING = 'Loading',
  RANGE = 'Range',
  REACH = 'Reach',
  SPECIAL = 'Special',
  THROWN = 'Thrown',
  TWO_HANDED = 'Two-Handed',
  VERSATILE = 'Versatile'
}

export enum WeaponTypes {
  SIMPLE_MELEE = 'Simple Melee',
  SIMPLE_RANGED = 'Simple Ranged',
  MARTIAL_MELEE = 'Martial Melee',
  MARTIAL_RANGED = 'Martial Ranged'
}