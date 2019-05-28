export default class Hero {
  abilityScores: AbilityScore[];
  active: boolean;
  alignment: Alignments;
  armor = [];
  armorClass: number;
  attacks = [];
  background: string;
  currentHP: number;
  deathSaves = {
    failures: 0,
    successes: 0
  };
  heroClass: HeroClasses;
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
  race: Races;
  savingThrows: SavingThrow[];
  speed: number;
  skills: Skill[];
  subrace = null;
  temporaryHP: number;
  xp: number;
  [key: string]: any

  constructor() {
    this.abilityScores = [
      { name: Abilities.CHA, value: 0 },
      { name: Abilities.CON, value: 0 },
      { name: Abilities.DEX, value: 0 },
      { name: Abilities.INT, value: 0 },
      { name: Abilities.STR, value: 0 },
      { name: Abilities.WIS, value: 0 }
    ];
    this.active = false;
    this.alignment = Alignments.NN;
    this.armor = [];
    this.armorClass = 0;
    this.attacks = [];
    this.background = '';
    this.currentHP = 0;
    this.deathSaves = {
      failures: 0,
      successes: 0
    };
    this.heroClass = HeroClasses.BARBARIAN;
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
    this.race = Races.HUMAN;
    this.savingThrows = [
      { name: Abilities.CHA, proficient: false, value: 0 },
      { name: Abilities.CON, proficient: false, value: 0 },
      { name: Abilities.DEX, proficient: false, value: 0 },
      { name: Abilities.INT, proficient: false, value: 0 },
      { name: Abilities.STR, proficient: false, value: 0 },
      { name: Abilities.WIS, proficient: false, value: 0 }
    ];
    this.speed = 0;
    this.skills = [
      { name: Skills.ACROBATICS, proficient: false, ability: Abilities.DEX, value: 0 },
      { name: Skills.ANIMAL_HERDING, proficient: false, ability: Abilities.WIS, value: 0 },
      { name: Skills.ARCANA, proficient: false, ability: Abilities.INT, value: 0 },
      { name: Skills.ATHLETICS, proficient: false, ability: Abilities.STR, value: 0 },
      { name: Skills.DECEPTION, proficient: false, ability: Abilities.CHA, value: 0 },
      { name: Skills.HISTORY, proficient: false, ability: Abilities.INT, value: 0 },
      { name: Skills.INSIGHT, proficient: false, ability: Abilities.WIS, value: 0 },
      { name: Skills.INTIMIDATION, proficient: false, ability: Abilities.CHA, value: 0 },
      { name: Skills.INVESTIGATION, proficient: false, ability: Abilities.INT, value: 0 },
      { name: Skills.MEDICINE, proficient: false, ability: Abilities.WIS, value: 0 },
      { name: Skills.NATURE, proficient: false, ability: Abilities.INT, value: 0 },
      { name: Skills.PERCEPTION, proficient: false, ability: Abilities.WIS, value: 0 },
      { name: Skills.PERFORMANCE, proficient: false, ability: Abilities.CHA, value: 0 },
      { name: Skills.PERSUASION, proficient: false, ability: Abilities.CHA, value: 0 },
      { name: Skills.RELIGION, proficient: false, ability: Abilities.INT, value: 0 },
      { name: Skills.SLEIGHT_OF_HAND, proficient: false, ability: Abilities.DEX, value: 0 },
      { name: Skills.STEALTH, proficient: false, ability: Abilities.DEX, value: 0 },
      { name: Skills.SURVIVAL, proficient: false, ability: Abilities.WIS, value: 0 }
    ];
    this.subrace = null;
    this.temporaryHP = 0;
    this.xp = 0;
  }
}

export interface AbilityScore {
  name: Abilities;
  value: number;
}

export interface SavingThrow {
  name: Abilities;
  proficient: boolean;
  value: number;
}

export interface Skill {
  ability: Abilities;
  name: Skills;
  proficient: boolean;
  value: number;
}

export enum Abilities {
  CHA = 'Charisma',
  CON = 'Constitution',
  DEX = 'Dexterity',
  INT = 'Intelligence',
  STR = 'Strength',
  WIS = 'Wisdom'
}

export enum Alignments {
  CG = 'Chaotic Good',
  NG = 'Neutral Good',
  LG = 'Lawful Good',
  CN = 'Chaotic Neutral',
  NN = 'Neutral Neutral',
  LN = ' Lawful Neutral',
  CE = 'Chaotic Evil',
  NE = 'Neutral Evil',
  LE = 'Lawful Evil',
}

export enum HeroClasses {
  BARBARIAN = 'Barbarian',
  BARD = 'Bard',
  CLERIC = 'Cleric',
  DRUID = 'Druid',
  FIGHTER = 'Fighter',
  MONK = 'Monk',
  PALADIN = 'Paladin',
  RANGER = 'Ranger',
  ROGUE = 'Rogue',
  SORCERER = 'Sorcerer',
  WARLOCK = 'Warlock',
  WIZARD = 'Wizard'
}

export enum Skills {
  ACROBATICS = 'Acrobatics',
  ANIMAL_HERDING = 'Animal Handling',
  ARCANA = 'Arcana',
  ATHLETICS = 'Athletics',
  DECEPTION = 'Deception',
  HISTORY = 'History',
  INSIGHT = 'Insight',
  INTIMIDATION = 'Intimidation',
  INVESTIGATION = 'Investigation',
  MEDICINE = 'Medicine',
  NATURE = 'Nature',
  PERCEPTION = 'Perception',
  PERFORMANCE = 'Performance',
  PERSUASION = 'Persuasion',
  RELIGION = 'Religion',
  SLEIGHT_OF_HAND = 'Sleight Of Hand',
  STEALTH = 'Stealth',
  SURVIVAL = 'Survival'
}

export enum Races {
  DWARF = 'Dwarf',
  ELF = 'Elf',
  HALFLING = 'Halfling',
  HUMAN = 'Human',
  DRAGONBORN = 'Dragonborn',
  GNOME = 'Gnome',
  HALF_ELF = 'Half-Elf',
  HALF_ORC = 'Half-Orc',
  TIEFLING = 'Tiefling'
}