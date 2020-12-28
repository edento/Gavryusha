import * as at from '../../helpers/actionTypes';
import customFetch from '../../helpers/customFetch';

export const getAllCategories = () => async (dispatch) => {
  try {
    const res = await customFetch('/categories');

    dispatch({
      type: at.GET_ALL_CATEGORIES,
      payload: {
        res,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
