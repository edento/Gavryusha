import * as at from '../actionTypes';
import ProductService from '../../services/product.service';
import { Product } from '../../types/general';
import { DispatchType } from '../../types/store';

export const getAllProducts = () => async (dispatch: DispatchType<Product[]>) => {
  try {
    const products = await ProductService.getAllProducts();

    dispatch({
      type: at.GET_ALL_PRODUCTS,
      payload: {
        products,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
