// import produce from 'immer';
import * as at from '../actionTypes';
import { Action } from '../../types/store';
import { Product } from '../../types/general';

const initialState = [] as Product[];

export default function productReducer(state = initialState, { type, payload }: Action<Product[]>) {
  switch (type) {
    case at.GET_ALL_PRODUCTS: {
      return payload.products || initialState;
    }

    default:
      return state;
  }
}
