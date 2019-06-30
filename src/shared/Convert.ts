import { Weapon, WeaponProps } from '../models/Gear';
import Hero from '../models/Hero';

/**
 * @name calcAbilityModifier
 * @description calculates an ability modify based on ability score
 * @param value
 */
export const calcAbilityModifier = (value: number): number =>
  Math.floor((value - 10) / 2);

/**
 * @name calcAttackBonus
 * @description calculates a weapons attack bonus based on the hero's proficiency with the weapon,proficiency bouns, and ability score modifier
 * @param Hero
 * @param Weapon 
 */
export const calcAttackBonus = ({ abilityScores, proficiencies, proficiencyBonus }: Hero, { properties, weaponType }: Weapon): string => {
  // sometimes FB deletes empty arrays so need to check that proficiencies exist on hero
  const proficiencyList = proficiencies ? proficiencies : [];

  const weaponProficiencyBonus = proficiencyList.includes(weaponType) ? proficiencyBonus : 0;
  const dexMod = calcAbilityModifier(abilityScores.Dexterity);
  const strMod = calcAbilityModifier(abilityScores.Strength);

  // if finesse weapon, use greater of dex and str mod
  if (properties.includes(WeaponProps.FINESSE)) {
    if (dexMod > strMod) {
      return `+${Number(dexMod) + Number(weaponProficiencyBonus)}`;
    } else {
      return `+${Number(strMod) + Number(weaponProficiencyBonus)}`;
    }
    // if range weapon, use dex
  } else if (properties.includes(WeaponProps.AMMUNITION)) {
    return `+${Number(dexMod) + Number(weaponProficiencyBonus)}`;
    // if melee, use str
  } else {
    return `+${Number(strMod) + Number(weaponProficiencyBonus)}`;
  }
}

/**
 * @name calcDamageDice
 * @description calculates the damage dice and bonus for a weapon roll
 * @param Hero 
 * @param Weapon 
 */
export const calcDamageDice = ({ abilityScores }: Hero, { numberOfDamageDice, numberOfDamageDiceSides, properties }: Weapon) => {
  const dexMod = calcAbilityModifier(abilityScores.Dexterity);
  const strMod = calcAbilityModifier(abilityScores.Strength);

  // if finesse weapon, use greater of dex and str mod
  if (properties.includes(WeaponProps.FINESSE)) {
    if (dexMod > strMod) {
      return `${numberOfDamageDice}d${numberOfDamageDiceSides}+${Number(dexMod)}`;
    } else {
      return `${numberOfDamageDice}d${numberOfDamageDiceSides}+${Number(strMod)}`;
    }
    // if range weapon, use dex
  } else if (properties.includes(WeaponProps.AMMUNITION)) {
    return `${numberOfDamageDice}d${numberOfDamageDiceSides}+${Number(dexMod)}`;
    // if melee, use str
  } else {
    return `${numberOfDamageDice}d${numberOfDamageDiceSides}+${Number(strMod)}`;
  }
}