import * as at from '../../helpers/actionTypes';
import API from '../../helpers/API';

export const getAllCategories = () => async (dispatch) => {
  try {
    const { data } = await API.get('/categories');

    dispatch({
      type: at.GET_ALL_CATEGORIES,
      payload: {
        data,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
