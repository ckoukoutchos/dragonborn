export const updateArray = (
  prevArray: any[],
  updatedItem: any,
  index: number
): any[] => {
  const newArray = [...prevArray];
  newArray[index] = updatedItem;
  return newArray;
};

export const updateObject = (prevObject: any, updatedProps: any): any => ({
  ...prevObject,
  ...updatedProps
});

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
