export interface Tool {
  cost: string;
  desc: string;
  name: string;
  type: string;
  weight: number;
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