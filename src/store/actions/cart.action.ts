import * as at from '../actionTypes';
import CartService from '../../services/cart.service';
import { DispatchType } from '../../types/store';
import { Cart, Product, CartItem } from '../../types/general';

export const getCart = () => async (dispatch: DispatchType<Cart>) => {
  try {
    const myCart = await CartService.getCart();

    dispatch({
      type: at.UPDATE_CART,
      payload: {
        myCart,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const addNewItemToChart = (productInfo: Product) => async (dispatch: DispatchType<Cart>) => {
  try {
    let cartId: number | undefined = localStorage.getItem('cartId') ? parseInt(localStorage.getItem('cartId')!, 10) : 0;
    if (!cartId) cartId = await CartService.createNewCart();
    const myCart = await CartService.addNewItemToCart(cartId!, productInfo);

    dispatch({
      type: at.UPDATE_CART,
      payload: {
        myCart,
      },
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const getAllMyCartItems = () => async (dispatch: DispatchType<CartItem[]>) => {
  try {
    const cartId: number | undefined = localStorage.getItem('cartId') ? parseInt(localStorage.getItem('cartId')!, 10) : 0;
    if (!cartId) throw Error('cart not exist. create new cart');
    const cartItems = await CartService.getAllMyCartItems(cartId!);
    dispatch({
      type: at.GET_ALL_CART_ITEMS,
      payload: {
        cartItems,
      },
    });
  } catch (err) {
    console.error(err.message);
  }
};
