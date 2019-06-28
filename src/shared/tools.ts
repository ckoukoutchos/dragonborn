import { ToolTypes, GearTypes } from '../models/Gear';

export default [
  {
    cost: '25 gp',
    desc: 'Lets you add your proficiency bonus to any ability checks you make to create a visual disguise.',
    name: ToolTypes.DISGUISE,
    number: 1,
    toolType: ToolTypes.DISGUISE,
    type: GearTypes.TOOLS,
    weight: '3 lb'
  },
  {
    cost: '15 gp',
    desc: 'Lets you add your profiviency bonus to any ability checks you make to create a physical forgery of a document.',
    name: ToolTypes.FORGERY,
    number: 1,
    toolType: ToolTypes.FORGERY,
    type: GearTypes.TOOLS,
    weight: '5 lb'
  }
]