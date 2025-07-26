const initialState = {
  events: [],
  status: 'idle',
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS_REQUEST':
      return { ...state, status: 'loading' };
    case 'FETCH_EVENTS_SUCCESS':
      return { ...state, status: 'idle', events: action.payload };
    case 'FETCH_EVENTS_FAILURE':
      return { ...state, status: 'error' };
    default:
      return state;
  }
};

export default eventReducer;