import { Category, Product, Cart } from './general';
import { ThunkDispatch } from 'redux-thunk';
// import { AnyAction } from 'redux';

// Redux types
export type MainState = {
  categories: Category[];
  products: Product[];
  cart: Cart;
};

export interface Action<T> {
  type: string;
  payload: {
    [key: string]: T | undefined;
    [key: string]: any;
  };
}

export type DispatchType<T> = ThunkDispatch<State, any, Action<T>>;
