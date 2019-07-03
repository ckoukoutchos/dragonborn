export interface Spell {
    castingTime: string;
    components: Components[];
    concentration: boolean;
    desc: string;
    duration: string;
    level: number;
    name: string;
    range: string;
    type: SpellTypes;
}

export enum Components {
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