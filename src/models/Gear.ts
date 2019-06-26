// base adventuring gear interface
export interface Gear {
  cost: string;
  desc: string;
  name: string;
  type: string;
  weight: string;
}

export interface Armor extends Gear {
  armorClass: number;
  dexMod: boolean;
  equipped: boolean;
  stealthDisadvatage: boolean;
  strengthReq?: number;
  armorType: string;
}

export interface Coinage {
  cp: number;
  sp: number;
  ep: number;
  gp: number;
  pp: number;
}

export interface Weapon extends Gear {
  damageType: string;
  numberOfDamageDice: number;
  numberOfDamageDiceSides: number;
  properties: string[];
  range?: string;
  weaponType: string;
}

export enum ArmorTypes {
  HEAVY = 'Heavy',
  LIGHT = 'Light',
  MEDIUM = 'Medium',
  SHIELD = 'Shield'
}

export enum CoinTypes {
  CP = 'cp',
  SP = 'sp',
  EP = 'ep',
  GP = 'gp',
  PP = 'pp'
}

export enum DamageTypes {
  BLUDGEONING = 'Bludgeoning',
  PIERCING = 'Piercing',
  SLASHING = 'Slashing'
}

export enum GearTypes {
  ARMOR = 'armor',
  ITEMS = 'items',
  TOOLS = 'tools',
  WEAPONS = 'weapons'
}

export enum ToolTypes {
  ARTISAN = 'Artisan Tools',
  DISGUISE = 'Disguise Kit',
  FORGERY = 'Forgery',
  GAMING = 'Gaming Set',
  HERBALISM = 'Herbalism Kit',
  MUSICAL = 'Musical Instrument',
  NAVIGATORS = 'Navigators Tools',
  POISONERS = 'Poisoners Kit',
  THIEVES = 'Thieves Tools'
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