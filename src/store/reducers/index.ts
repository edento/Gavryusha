import { combineReducers } from 'redux';
import categoriesReducer from './category.reducer';
import productsReducer from './product.reducer';
import cartReducer from './cart.reducer';

export default combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});
