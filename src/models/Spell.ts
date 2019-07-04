import { Abilities } from './Hero';

export interface Spell {
    castingTime: string;
    spellComponents: SpellComponents[];
    concentration: boolean;
    damageMod?: number;
    desc: string;
    duration: Durations;
    level: number;
    name: string;
    numberOfDamageDice?: number;
    numberOfDamageDiceSides?: number;
    range: string;
    savingThrow?: Abilities;
    type: SpellTypes;
}

export interface SpellCasting {
    castingAbility: Abilities | string;
    saveDC: number;
}

export enum Durations {
    INSTANTANEOUS = 'Instantaneous'
}

export enum SpellComponents {
    MATERIAL = 'Material',
    SOMATIC = 'Somatic',
    VERBAL = 'Verbal'
}

export enum SpellTypes {
    ABJURATION = 'Abjuration',
    CONJURATION = 'Conjuration',
    DIVINATION = 'Divination',
    ENCHANTMENT = 'Enchantment',
    EVOCATION = 'Evocation',
    ILLUSIOn = 'Illusion',
    NECROMANCY = 'Necromancy',
    TRANSMUTATION = 'Transmutation'
}