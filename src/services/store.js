import { createStore, combineReducers } from 'redux';
import cartReducer from '../pages/cart/cart.reducer'; // import cart reducer

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;