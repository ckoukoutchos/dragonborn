export default class Hero {
  abilityScores = {
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    strength: 0,
    wisdom: 0
  };
  alignment = ['', ''];
  armor = [];
  armorClass = 0;
  attacks = [];
  background = '';
  currentHP = 0;
  deathSaves = {
    failures: 0,
    successes: 0
  };
  heroClass = '';
  hitDice = {
    numberOfDice: 1,
    numberOfSides: 4
  };
  id = 1;
  initative = 0;
  level = 0;
  name = '';
  playerName = '';
  race = '';
  speed = 0;
  skills = [
    { name: 'Acrobatics', isProficient: false, ability: 'Dexterity', value: 0 },
    {
      name: 'Animal Handling',
      isProficient: true,
      ability: 'Wisdom',
      value: 0
    },
    { name: 'Arcana', isProficient: false, ability: 'Intelligence', value: 0 },
    { name: 'Athletics', isProficient: false, ability: 'Strength', value: 0 },
    { name: 'Deception', isProficient: false, ability: 'Charisma', value: 0 },
    { name: 'History', isProficient: false, ability: 'Intelligence', value: 0 },
    { name: 'Insight', isProficient: false, ability: 'wisdom', value: 0 },
    {
      name: 'Intimidation',
      isProficient: false,
      ability: 'Charisma',
      value: 0
    },
    {
      name: 'Investigation',
      isProficient: false,
      ability: 'Intelligence',
      value: 0
    },
    { name: 'Medicine', isProficient: false, ability: 'Wisdom', value: 0 },
    { name: 'Nature', isProficient: false, ability: 'Intelligence', value: 0 },
    { name: 'Perception', isProficient: false, ability: 'Wisdom', value: 0 },
    { name: 'Performance', isProficient: false, ability: 'Charisma', value: 0 },
    { name: 'Persuasion', isProficient: false, ability: 'Charisma', value: 0 },
    {
      name: 'Religion',
      isProficient: false,
      ability: 'Intelligence',
      value: 0
    },
    {
      name: 'Sleight Of Hand',
      isProficient: false,
      ability: 'Dexterity',
      value: 0
    },
    { name: 'Stealth', isProficient: false, ability: 'Dexterity', value: 0 },
    { name: 'Survival', isProficient: false, ability: 'Wisdom', value: 0 }
  ];
  subrace = null;
  temporaryHP = 0;
  xp = 0;
}
