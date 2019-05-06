/**
 * @name calcAbilityModifier
 * @description calculates an ability modify based on ability score
 * @param value
 */
export const calcAbilityModifier = (value: number): number =>
  Math.floor((value - 10) / 2);
