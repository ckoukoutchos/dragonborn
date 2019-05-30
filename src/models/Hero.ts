import { Weapon } from './Weapon';

export default class Hero {
  abilityScores: AbilityScores;
  active: boolean;
  alignment: Alignments;
  armor = [];
  armorClass: number;
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
  savingThrowsScores: SavingThrowsScores;
  speed: number;
  spells: any;
  skillScores: SkillScores;
  subrace = null;
  temporaryHP: number;
  weapons: Weapon[];
  xp: number;
  [key: string]: any

  constructor() {
    this.abilityScores = {
      [Abilities.CHA]: 0,
      [Abilities.CON]: 0,
      [Abilities.DEX]: 0,
      [Abilities.INT]: 0,
      [Abilities.STR]: 0,
      [Abilities.WIS]: 0
    };
    this.active = false;
    this.alignment = Alignments.NN;
    this.armor = [];
    this.armorClass = 0;
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
    this.savingThrowsScores = {
      [Abilities.CHA]: { proficient: false, value: 0 },
      [Abilities.CON]: { proficient: false, value: 0 },
      [Abilities.DEX]: { proficient: false, value: 0 },
      [Abilities.INT]: { proficient: false, value: 0 },
      [Abilities.STR]: { proficient: false, value: 0 },
      [Abilities.WIS]: { proficient: false, value: 0 }
    };
    this.speed = 0;
    this.spells = [];
    this.skillScores = {
      [Skills.ACROBATICS]: { proficient: false, ability: Abilities.DEX, value: 0 },
      [Skills.ANIMAL_HERDING]: { proficient: false, ability: Abilities.WIS, value: 0 },
      [Skills.ARCANA]: { proficient: false, ability: Abilities.INT, value: 0 },
      [Skills.ATHLETICS]: { proficient: false, ability: Abilities.STR, value: 0 },
      [Skills.DECEPTION]: { proficient: false, ability: Abilities.CHA, value: 0 },
      [Skills.HISTORY]: { proficient: false, ability: Abilities.INT, value: 0 },
      [Skills.INSIGHT]: { proficient: false, ability: Abilities.WIS, value: 0 },
      [Skills.INTIMIDATION]: { proficient: false, ability: Abilities.CHA, value: 0 },
      [Skills.INVESTIGATION]: { proficient: false, ability: Abilities.INT, value: 0 },
      [Skills.MEDICINE]: { proficient: false, ability: Abilities.WIS, value: 0 },
      [Skills.NATURE]: { proficient: false, ability: Abilities.INT, value: 0 },
      [Skills.PERCEPTION]: { proficient: false, ability: Abilities.WIS, value: 0 },
      [Skills.PERFORMANCE]: { proficient: false, ability: Abilities.CHA, value: 0 },
      [Skills.PERSUASION]: { proficient: false, ability: Abilities.CHA, value: 0 },
      [Skills.RELIGION]: { proficient: false, ability: Abilities.INT, value: 0 },
      [Skills.SLEIGHT_OF_HAND]: { proficient: false, ability: Abilities.DEX, value: 0 },
      [Skills.STEALTH]: { proficient: false, ability: Abilities.DEX, value: 0 },
      [Skills.SURVIVAL]: { proficient: false, ability: Abilities.WIS, value: 0 }
    };
    this.subrace = null;
    this.temporaryHP = 0;
    this.weapons = [];
    this.xp = 0;
  }
}
export enum Abilities {
  CHA = 'Charisma',
  CON = 'Constitution',
  DEX = 'Dexterity',
  INT = 'Intelligence',
  STR = 'Strength',
  WIS = 'Wisdom'
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

export interface AbilityScores {
  [Abilities.CHA]: number,
  [Abilities.CON]: number,
  [Abilities.DEX]: number,
  [Abilities.INT]: number,
  [Abilities.STR]: number,
  [Abilities.WIS]: number,
  [key: string]: any
}

export interface SavingThrowsScores {
  [Abilities.CHA]: Skill;
  [Abilities.CON]: Skill;
  [Abilities.DEX]: Skill;
  [Abilities.INT]: Skill;
  [Abilities.STR]: Skill;
  [Abilities.WIS]: Skill;
}

export interface SkillScores {
  [Skills.ACROBATICS]: Skill;
  [Skills.ANIMAL_HERDING]: Skill;
  [Skills.ARCANA]: Skill;
  [Skills.ATHLETICS]: Skill;
  [Skills.DECEPTION]: Skill;
  [Skills.HISTORY]: Skill;
  [Skills.INSIGHT]: Skill;
  [Skills.INTIMIDATION]: Skill;
  [Skills.INVESTIGATION]: Skill;
  [Skills.MEDICINE]: Skill;
  [Skills.NATURE]: Skill;
  [Skills.PERCEPTION]: Skill;
  [Skills.PERFORMANCE]: Skill;
  [Skills.PERSUASION]: Skill;
  [Skills.RELIGION]: Skill;
  [Skills.SLEIGHT_OF_HAND]: Skill;
  [Skills.STEALTH]: Skill;
  [Skills.SURVIVAL]: Skill;
}

export interface Skill {
  ability?: Abilities;
  proficient: boolean;
  value: number;
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