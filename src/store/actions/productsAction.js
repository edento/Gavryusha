import * as at from '../../helpers/actionTypes';
import customFetch from '../../helpers/customFetch';

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await customFetch('/products');
    console.log('🚀 ~ file: productsAction.js ~ line 7 ~ getAllProducts ~ res', res);

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

export const lala = 'lala';
