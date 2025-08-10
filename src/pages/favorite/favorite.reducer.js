const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const existing = state.favorites.find(item => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          favorites: state.favorites.filter(item => item.id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }

    default:
      return state;
  }
};

export default favoriteReducer;