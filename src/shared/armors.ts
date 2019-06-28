import { ArmorTypes, GearTypes } from '../models/Gear';

// eventually will be stored in db and served as json from backend, till then will be served in app bundle
export default [
  {
    armorClass: 11,
    cost: '5 gp',
    desc: 'Quilted layers of cloth and batting.',
    dexMod: true,
    equipped: false,
    name: 'Padded',
    number: 1,
    stealthDisadvatage: true,
    armorType: ArmorTypes.LIGHT,
    type: GearTypes.ARMOR,
    weight: '8 lb'
  },
  {
    armorClass: 12,
    cost: '10 gp',
    desc: 'A crude armor of thick furs and pelts.',
    dexMod: true,
    equipped: false,
    name: 'Hide',
    number: 1,
    stealthDisadvatage: false,
    armorType: ArmorTypes.MEDIUM,
    type: GearTypes.ARMOR,
    weight: '12 lb'
  },
  {
    armorClass: 14,
    cost: '30 gp',
    desc: 'Leather with rings of iron sewn into it.',
    dexMod: false,
    equipped: false,
    name: 'Ring Mail',
    number: 1,
    stealthDisadvatage: true,
    armorType: ArmorTypes.HEAVY,
    type: GearTypes.ARMOR,
    weight: '40 lb'
  }
];