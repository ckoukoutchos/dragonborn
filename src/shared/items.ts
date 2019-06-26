import { GearTypes } from '../models/Gear';

export default [
  {
    cost: '1 gp',
    desc: 'A simple pad of cloth and fluff to rest upon.',
    name: 'Bedroll',
    number: 1,
    type: GearTypes.ITEMS,
    weight: '7 lb',
  },
  {
    cost: '2 gp',
    desc: 'For when you need to get in a jam.',
    name: 'Crowbar',
    number: 1,
    type: GearTypes.ITEMS,
    weight: '5 lb',
  }
]

/* template
{
  cost: ,
  desc: ,
  name: ,
  number: ,
  type: ,
  weight: ,
}
*/