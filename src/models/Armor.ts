export interface Armor {
    armorClass: number;
    cost: number;
    desc: string;
    equipped: boolean;
    name: string;
    stealthDisadvatage: boolean;
    type: string;
    weight: string;
}

export enum ArmorTypes {
    HEAVY = 'Heavy',
    LIGHT = 'Light',
    MEDIUM = 'Medium',
    SHIELD = 'Shield'
}