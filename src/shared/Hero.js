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
  armor = null;
  attacks = [];
  background = '';
  heorClass = '';
  level = 0;
  name = '';
  playerName = '';
  race = '';
  subrace = null;
  skills = [];
  armorClass = 0;
  currentHP = 0;
  deathSaves = {
    failures: 0,
    successes: 0
  };
  hitDice = {
    numberOfDice: 1,
    numberOfSides: 4
  };
  initative = 0;
  speed = 0;
  temporaryHP = 0;
  xp = 0;
  skills = {
    acrobatics: {
      isProficient: false,
      ability: 'dexterity',
      value: 0
    },
    animalHandling: {
      isProficient: false,
      ability: 'wisdom',
      value: 0
    },
    arcana: {
      isProficient: false,
      ability: 'intelligence',
      value: 0
    },
    athletics: {
      isProficient: false,
      ability: 'strength',
      value: 0
    },
    deception: {
      isProficient: false,
      ability: 'charisma',
      value: 0
    },
    history: {
      isProficient: false,
      ability: 'intelligence',
      value: 0
    },
    insight: {
      isProficient: false,
      ability: 'wisdom',
      value: 0
    },
    intimidation: {
      isProficient: false,
      ability: 'charisma',
      value: 0
    },
    investigation: {
      isProficient: false,
      ability: 'intelligence',
      value: 0
    },
    medicine: {
      isProficient: false,
      ability: 'wisdom',
      value: 0
    },
    nature: {
      isProficient: false,
      ability: 'intelligence',
      value: 0
    },
    perception: {
      isProficient: false,
      ability: 'wisdom',
      value: 0
    },
    performance: {
      isProficient: false,
      ability: 'charisma',
      value: 0
    },
    persuasion: {
      isProficient: false,
      ability: 'charisma',
      value: 0
    },
    religion: {
      isProficient: false,
      ability: 'intelligence',
      value: 0
    },
    sleightOfHand: {
      isProficient: false,
      ability: 'dexterity',
      value: 0
    },
    stealth: {
      isProficient: false,
      ability: 'dexterity',
      value: 0
    },
    survival: {
      isProficient: false,
      ability: 'wisdom',
      value: 0
    }
  };
}
