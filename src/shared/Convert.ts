import { Weapon } from '../models/Weapon';
import { AbilityScores } from '../models/Hero';

/**
 * @name calcAbilityModifier
 * @description calculates an ability modify based on ability score
 * @param value
 */
export const calcAbilityModifier = (value: number): number =>
  Math.floor((value - 10) / 2);

export const calcAtkBonus = ({ attackBonus, properties }: Weapon, abilityScores: AbilityScores): number => {

  return 1;
}