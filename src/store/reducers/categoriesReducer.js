// import produce from 'immer';
import * as at from '../../helpers/actionTypes';

export default function categoriesReducer(state = [], { type, payload }) {
  switch (type) {
    case at.GET_ALL_CATEGORIES: {
      return payload.res;
    }

    default:
      return state;
  }
}
