import { createStore, combineReducers, compose } from 'redux';
import eventReducer from '../components/eventCard/eventCard.reducer';
import favoriteReducer from '../pages/favorite/favorite.reducer';

// Gabungkan reducer
const rootReducer = combineReducers({
  events: eventReducer,
  favorites: favoriteReducer,
});

// Gunakan Redux DevTools jika tersedia
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Buat store tanpa middleware thunk
const store = createStore(rootReducer, composeEnhancers());

export default store;