import * as at from '../../helpers/actionTypes';
import API from '../../helpers/API';
// import { getNewId } from '../../helpers/functions';
import CartService from '../../services/cart.service';

export const getCart = () => (dispatch) => {
  try {
    const res = API.get('/cart');

    dispatch({
      type: at.GET_CART,
      payload: {
        res,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const addItemToChart = (productInfo) => async (dispatch) => {
  try {
    const cartIdLS = localStorage.getItem('cartId');
    if (cartIdLS) CartService.addItemToCart(cartIdLS, productInfo);
    else CartService.createNewCartAndAddNewItem(productInfo);
  } catch (err) {
    console.log(err);
  }
};
