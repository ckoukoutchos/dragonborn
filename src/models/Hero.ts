export default class Hero {
  abilityScores: AbilityScore[];
  active: boolean;
  alignment: string;
  armor = [];
  armorClass: number;
  attacks = [];
  background: string;
  currentHP: number;
  deathSaves = {
    failures: 0,
    successes: 0
  };
  heroClass: string;
  hitDice = {
    numberOfDice: 1,
    numberOfSides: 4
  };
  id: number;
  initative: number;
  inspiration: number;
  level: number;
  name: string;
  playerName: string;
  proficiency: number;
  race: string;
  savingThrows: SavingThrows[];
  speed: number;
  skills: Skills[];
  subrace = null;
  temporaryHP: number;
  xp: number;

  constructor() {
    this.abilityScores = [
      { name: 'Charisma', value: 0 },
      { name: 'Constitution', value: 0 },
      { name: 'Dexterity', value: 0 },
      { name: 'Intelligence', value: 0 },
      { name: 'Strength', value: 0 },
      { name: 'Wisdom', value: 0 }
    ];
    this.active = false;
    this.alignment = '';
    this.armor = [];
    this.armorClass = 0;
    this.attacks = [];
    this.background = '';
    this.currentHP = 0;
    this.deathSaves = {
      failures: 0,
      successes: 0
    };
    this.heroClass = '';
    this.hitDice = {
      numberOfDice: 1,
      numberOfSides: 4
    };
    this.id = 0;
    this.initative = 0;
    this.inspiration = 0;
    this.level = 0;
    this.name = '';
    this.playerName = '';
    this.proficiency = 0;
    this.race = '';
    this.savingThrows = [
      { name: 'Charisma', proficient: false, value: 0 },
      { name: 'Constitution', proficient: false, value: 0 },
      { name: 'Dexterity', proficient: false, value: 0 },
      { name: 'Intelligence', proficient: false, value: 0 },
      { name: 'Strength', proficient: false, value: 0 },
      { name: 'Wisdom', proficient: false, value: 0 }
    ];
    this.speed = 0;
    this.skills = [
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
    this.subrace = null;
    this.temporaryHP = 0;
    this.xp = 0;
  }
}

export interface AbilityScore {
  name: string;
  value: number;
}

export interface SavingThrows {
  name: string;
  proficient: boolean;
  value: number;
}

export interface Skills {
  ability: string;
  name: string;
  proficient: boolean;
  value: number;
}