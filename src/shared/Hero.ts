export default class Hero {
  abilityScores = [
    { name: 'Charisma', value: 0 },
    { name: 'Constitution', value: 0 },
    { name: 'Dexterity', value: 0 },
    { name: 'Intelligence', value: 0 },
    { name: 'Strength', value: 0 },
    { name: 'Wisdom', value: 0 }
  ];
  alignment = '';
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
  id = null;
  initative = 0;
  inspiration = 0;
  level = 0;
  name = '';
  playerName = '';
  proficiency = 0;
  race = '';
  savingThrows = [
    { name: 'Charisma', proficient: false, value: 0 },
    { name: 'Constitution', proficient: false, value: 0 },
    { name: 'Dexterity', proficient: false, value: 0 },
    { name: 'Intelligence', proficient: false, value: 0 },
    { name: 'Strength', proficient: false, value: 0 },
    { name: 'Wisdom', proficient: false, value: 0 }
  ];
  speed = 0;
  skills = [
    { name: 'Acrobatics', proficient: false, ability: 'dexterity', value: 0 },
    {
      name: 'Animal Handling',
      proficient: false,
      ability: 'Wisdom',
      value: 0
    },
    { name: 'Arcana', proficient: false, ability: 'intelligence', value: 0 },
    { name: 'Athletics', proficient: false, ability: 'strength', value: 0 },
    { name: 'Deception', proficient: false, ability: 'charisma', value: 0 },
    { name: 'History', proficient: false, ability: 'intelligence', value: 0 },
    { name: 'Insight', proficient: false, ability: 'wisdom', value: 0 },
    {
      name: 'Intimidation',
      proficient: false,
      ability: 'charisma',
      value: 0
    },
    {
      name: 'Investigation',
      proficient: false,
      ability: 'intelligence',
      value: 0
    },
    { name: 'Medicine', proficient: false, ability: 'wisdom', value: 0 },
    { name: 'Nature', proficient: false, ability: 'intelligence', value: 0 },
    { name: 'Perception', proficient: false, ability: 'wisdom', value: 0 },
    { name: 'Performance', proficient: false, ability: 'charisma', value: 0 },
    { name: 'Persuasion', proficient: false, ability: 'charisma', value: 0 },
    {
      name: 'Religion',
      proficient: false,
      ability: 'intelligence',
      value: 0
    },
    {
      name: 'Sleight Of Hand',
      proficient: false,
      ability: 'dexterity',
      value: 0
    },
    { name: 'Stealth', proficient: false, ability: 'dexterity', value: 0 },
    { name: 'Survival', proficient: false, ability: 'wisdom', value: 0 }
  ];
  subrace = null;
  temporaryHP = 0;
  xp = 0;
}
