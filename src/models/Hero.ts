import { Armor, Gear, Weapon, Coinage, CoinTypes } from './Gear';
import { SpellCasting } from './Spell';

export default class Hero {
  abilityScores: AbilityScores;
  active: boolean;
  alignment: Alignments | string;
  armor: Armor[];
  armorClass: number;
  background: string;
  coinage: Coinage;
  features: string;
  heroClass: HeroClasses | string;
  id: number;
  initative: number;
  inspiration: number;
  items: Gear[];
  level: number;
  name: string;
  numberOfHitDice: number;
  numberOfHitDiceSides: number;
  playerName: string;
  proficiencies: string[];
  proficiencyBonus: number;
  race: Races | string;
  savingThrowsScores: SavingThrowsScores;
  speed: number;
  spells: any;
  spellCasting: SpellCasting;
  skillScores: SkillScores;
  subrace = null;
  temporaryHP: number;
  tools: Gear[];
  weapons: Weapon[];
  xp: number;
  [key: string]: any

  constructor() {
    this.abilityScores = {
      [Abilities.CHA]: 10,
      [Abilities.CON]: 10,
      [Abilities.DEX]: 10,
      [Abilities.INT]: 10,
      [Abilities.STR]: 10,
      [Abilities.WIS]: 10
    };
    this.active = false;
    this.alignment = '';
    this.armor = [];
    this.armorClass = 0;
    this.background = '';
    this.coinage = {
      [CoinTypes.CP]: 0,
      [CoinTypes.SP]: 0,
      [CoinTypes.EP]: 0,
      [CoinTypes.GP]: 0,
      [CoinTypes.PP]: 0,
    };
    this.features = '';
    this.heroClass = '';
    this.id = 0;
    this.initative = 0;
    this.inspiration = 0;
    this.items = [];
    this.level = 1;
    this.name = '';
    this.numberOfHitDice = 0;
    this.numberOfHitDiceSides = 0;
    this.playerName = '';
    this.proficiencies = [];
    this.proficiencyBonus = 2;
    this.race = '';
    this.savingThrowsScores = {
      [Abilities.CHA]: { proficient: false, value: 0 },
      [Abilities.CON]: { proficient: false, value: 0 },
      [Abilities.DEX]: { proficient: false, value: 0 },
      [Abilities.INT]: { proficient: false, value: 0 },
      [Abilities.STR]: { proficient: false, value: 0 },
      [Abilities.WIS]: { proficient: false, value: 0 }
    };
    this.speed = 0;
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
    this.spells = [];
    this.spellCasting = {
      castingAbility: '',
      saveDC: 8
    }
    this.subrace = null;
    this.temporaryHP = 0;
    this.tools = [];
    this.weapons = [];
    this.xp = 0;
  }
}

export interface AbilityScores {
  Charisma: number,
  Constitution: number,
  Dexterity: number,
  Intelligence: number,
  Strength: number,
  Wisdom: number,
  [key: string]: any
}

export interface SavingThrowsScores {
  Charisma: Skill;
  Constitution: Skill;
  Dexterity: Skill;
  Intelligence: Skill;
  Strength: Skill;
  Wisdom: Skill;
}

export interface Skill {
  ability?: Abilities;
  proficient: boolean;
  value: number;
}

export interface SkillScores {
  Acrobatics: Skill;
  'Animal Handling': Skill;
  Arcana: Skill;
  Athletics: Skill;
  Deception: Skill;
  History: Skill;
  Insight: Skill;
  Intimidation: Skill;
  Investigation: Skill;
  Medicine: Skill;
  Nature: Skill;
  Perception: Skill;
  Performance: Skill;
  Persuasion: Skill;
  Religion: Skill;
  'Sleight Of Hand': Skill;
  Stealth: Skill;
  Survival: Skill;
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

export enum Proficiencies {
  SIMPLE_MELEE = 'Simple Melee',
  SIMPLE_RANGED = 'Simple Ranged',
  MARTIAL_MELEE = 'Martial Melee',
  MARTIAL_RANGED = 'Martial Ranged'
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