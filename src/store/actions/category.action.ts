import * as at from '../actionTypes';
import CategoryService from '../../services/category.service';
import { Category } from '../../types/general';
import { DispatchType } from '../../types/store';

export const getAllCategories = () => async (dispatch: DispatchType<Category[]>) => {
  try {
    const categories = await CategoryService.getAllCategories();

    dispatch({
      type: at.GET_ALL_CATEGORIES,
      payload: {
        categories,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
