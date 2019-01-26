export const updateArray = (prevArray, updatedItem, index) => {
  const newArray = [...prevArray];
  newArray[index] = updatedItem;
  return newArray;
};

export const updateObject = (prevObject, updatedProps) => ({
  ...prevObject,
  ...updatedProps
});

export const updateObjectInArray = (prevArray, index, objectProp, newValue) => {
  const newArray = [...prevArray];
  newArray[index] = { ...newArray[index], [objectProp]: newValue };
  return newArray;
};
