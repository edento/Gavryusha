import API from '../config/axios';
import { Cart, Product, CartItem } from '../types/general';

const CartService = {
  async getCart(): Promise<Cart | undefined> {
    try {
      const cartId: string | null = localStorage.getItem('cartId');
      if (!cartId) throw Error('cart not exist!');
      const { data } = await API.get<Cart>(`/cart/${cartId}`);
      return data;
    } catch (err) {
      console.error(err.message);
    }
  },

  async addNewItemToCart(
    cartId: number,
    { price: productPrice, id: productId }: Product
  ): Promise<Cart | undefined> {
    try {
      const { data: currCart } = await API.get<Cart>(`/cart/${cartId}`);
      const { totalAmount, totalPrice, cartItemsIds } = currCart;

      const newCartItem = {
        amount: 1,
        cartId,
        productId,
        totalPrice: productPrice,
        unitPrice: productPrice,
      };

      const {
        data: { id: cartItemId },
      } = await API.post<CartItem>('/cartItems', newCartItem);

      const updateCart = {
        totalAmount: totalAmount + 1,
        totalPrice: totalPrice + productPrice,
        cartItemsIds: [...cartItemsIds, cartItemId],
      };

      const { data } = await API.patch<Cart>(`/cart/${cartId}`, updateCart);
      return data;
    } catch (err) {
      console.error(err.message);
    }
  },

  async createNewCart(): Promise<number | undefined> {
    try {
      const newCart = {
        totalAmount: 0,
        totalPrice: 0,
        cartItemsIds: [],
      };

      const {
        data: { id },
      } = await API.post<Cart>('/cart', newCart);
      localStorage.setItem('cartId', JSON.stringify(id));
      return id;
    } catch (err) {
      console.error(err.message);
    }
  },
};

export default CartService;
