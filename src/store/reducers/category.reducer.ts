// import produce from 'immer';
import * as at from '../actionTypes';
import { Action } from '../../types/store';
import { Category } from '../../types/general';

const initialState = [] as Category[];

export default function categoryReducer(
  state = initialState,
  { type, payload }: Action<Category[]>
) {
  switch (type) {
    case at.GET_ALL_CATEGORIES: {
      return payload.categories || initialState;
    }

    default:
      return state;
  }
}
