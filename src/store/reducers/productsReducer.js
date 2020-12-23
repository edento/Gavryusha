// import produce from 'immer';
import * as at from '../../helpers/actionTypes';

// const initialState = {}

export default function categoriesReducer(state = {}, { type, payload }) {
  switch (type) {
    case at.GET_ALL_PRODUCTS: {
      return payload.res;
    }

    default:
      return state;
  }
}
