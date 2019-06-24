import { ArmorTypes } from '../models/Gear';

// eventually will be stored in db and served as json from backend, till then will be served in app bundle
export default [
  {
    armorClass: 11,
    cost: '5 gp',
    desc: 'Quilted layers of cloth and batting.',
    dexMod: true,
    equipped: false,
    name: 'Padded',
    stealthDisadvatage: true,
    type: ArmorTypes.LIGHT,
    weight: '8 lb'
  },
  {
    armorClass: 12,
    cost: '10 gp',
    desc: 'A crude armor of thick furs and pelts.',
    dexMod: true,
    equipped: false,
    name: 'Hide',
    stealthDisadvatage: false,
    type: ArmorTypes.MEDIUM,
    weight: '12 lb'
  },
  {
    armorClass: 14,
    cost: '30 gp',
    desc: 'Leather with rings of iron sewn into it.',
    dexMod: false,
    equipped: false,
    name: 'Ring Mail',
    stealthDisadvatage: true,
    type: ArmorTypes.HEAVY,
    weight: '40 lb'
  }
];