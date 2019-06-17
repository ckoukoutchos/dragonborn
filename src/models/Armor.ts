export interface Armor {
  armorClass: number;
  cost: string;
  desc: string;
  dexMod: boolean;
  equipped: boolean;
  name: string;
  stealthDisadvatage: boolean;
  strengthReq?: number;
  type: string;
  weight: string;
}

export enum ArmorTypes {
  HEAVY = 'Heavy',
  LIGHT = 'Light',
  MEDIUM = 'Medium',
  SHIELD = 'Shield'
}