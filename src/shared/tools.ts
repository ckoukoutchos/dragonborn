import { ToolTypes } from '../models/Gear';

export default [
  {
    cost: '25 gp',
    desc: 'Lets you add your proficiency bonus to any ability checks you make to create a visual disguise.',
    name: ToolTypes.DISGUISE,
    type: ToolTypes.DISGUISE,
    weight: '3 lb'
  },
  {
    cost: '15 gp',
    desc: 'Lets you add your profiviency bonus to any ability checks you make to create a physical forgery of a document.',
    name: ToolTypes.FORGERY,
    type: ToolTypes.FORGERY,
    weight: '5 lb'
  }
]