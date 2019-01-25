export const updateObject = (oldState, newProperties) => ({
  ...oldState,
  ...newProperties
});
