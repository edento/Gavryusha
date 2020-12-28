import * as at from '../../helpers/actionTypes';
import customFetch from '../../helpers/customFetch';

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await customFetch('/products');

    dispatch({
      type: at.GET_ALL_PRODUCTS,
      payload: {
        res,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
