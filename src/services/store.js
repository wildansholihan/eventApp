import { createStore, combineReducers } from 'redux';
import eventReducer from '../components/eventCard/eventCard.reducer'; // import eventCard reducer

const rootReducer = combineReducers({
  cart: eventReducer,
});

const store = createStore(rootReducer);

export default store;