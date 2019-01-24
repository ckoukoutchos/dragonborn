import * as actionTypes from '../actions/actionTypes';

const initialState = {
  heroes: [
    {
      id: 1,
      class: 'Barbarian',
      level: 3,
      race: 'Half-orc',
      alignment: 'Chaotic Neutral',
      name: 'Thronk, Destroyer of Worlds',
      active: true
    },
    {
      id: 5,
      class: 'Rogue',
      level: 7,
      race: 'Elf',
      alignment: 'Chaotic Good',
      name: 'Valarian',
      active: false
    }
  ],
  userId: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HEROES:
      return state;
    case actionTypes.FETCH_HEROES_SUCCESS:
      return { heroes: action.heros };
    default:
      return state;
  }
};

export default reducer;
