import { createStore, combineReducers, compose } from 'redux';
import eventReducer from '../components/eventCard/eventCard.reducer';

// Gabungkan reducer
const rootReducer = combineReducers({
  events: eventReducer,
});

// Gunakan Redux DevTools jika tersedia
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Buat store tanpa middleware thunk
const store = createStore(rootReducer, composeEnhancers());

export default store;