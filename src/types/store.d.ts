import { Category, Product, Cart } from './general';

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

export type DispatchType<T> = (args: Action<T>) => Action<T>;
