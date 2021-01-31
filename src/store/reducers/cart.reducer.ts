// import produce from 'immer';
import * as at from '../actionTypes';
import { Action } from '../../types/store';
import { Cart, CartItem } from '../../types/general';

const initialState = {} as Cart;

export default function cartReducer(state = initialState, { type, payload }: Action<Cart>) {
  switch (type) {
    case at.UPDATE_CART: {
      return payload.myCart || initialState;
    }

    default:
      return state;
  }
}
