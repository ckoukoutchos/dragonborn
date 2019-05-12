/**
 * @name updateArray
 * @description immutably updating an array
 * @param prevArray
 * @param updatedItem
 * @param index
 */
export const updateArray = (
  prevArray: any[],
  updatedItem: any,
  index: number
): any[] => {
  const newArray = [...prevArray];
  newArray[index] = updatedItem;
  return newArray;
};

/**
 * @name updateObject
 * @description immutably update properties in an object
 * @param prevObject
 * @param updatedProps
 */
export const updateObject = (prevObject: any, updatedProps: any): any => ({
  ...prevObject,
  ...updatedProps
});

/**
 * @name updateObjectInArray
 * @description immutably udate properties in an object within and array
 * @param prevArray
 * @param index
 * @param objectProp
 * @param newValue
 */
export const updateObjectInArray = (
  prevArray: any[],
  index: number,
  objectProp: any,
  newValue: any
): any[] => {
  const newArray = [...prevArray];
  newArray[index] = { ...newArray[index], [objectProp]: newValue };
  return newArray;
};
