import * as at from '../../helpers/actionTypes';
import API from '../../helpers/API';

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await API.get('/products');

    dispatch({
      type: at.GET_ALL_PRODUCTS,
      payload: {
        data,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
