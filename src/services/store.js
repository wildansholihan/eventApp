// store.js
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import eventReducer from '../components/eventCard/eventCard.reducer';

// Gabungkan reducer
const rootReducer = combineReducers({
  events: eventReducer,
});

// Gunakan Redux DevTools jika tersedia
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Buat store dengan middleware thunk
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;