import * as at from '../../helpers/actionTypes';
import customFetch from '../../helpers/customFetch';

export const getCart = () => (dispatch) => {
  try {
    const res = customFetch('/cart');

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
