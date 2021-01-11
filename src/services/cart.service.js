import API from '../helpers/API';

const CartService = {
  async addItemToCart(cartId, { price: productPrice, id: productId }) {
    const { data: currCart } = await API.get(`/cart/${cartId}`);
    const { totalAmount, totalPrice, cartItems } = currCart;

    const newCartItem = {
      amount: 1,
      cartId,
      productId,
      totalPrice: productPrice,
      unitPrice: productPrice,
    };

    const { data: newCartItemData } = await API.post('/cartItems', newCartItem);
    const { id: cartItemId } = newCartItemData;

    const updateCart = {
      totalAmount: totalAmount + 1,
      totalPrice: totalPrice + productPrice,
      cartItems: [...cartItems, cartItemId],
    };

    await API.patch(`/cart/${cartId}`, updateCart);
  },

  async createNewCartAndAddNewItem({ price: productPrice, id: productId }) {
    const newCart = {
      totalAmount: 1,
      totalPrice: productPrice,
      cartItems: [],
    };

    const { data: newCartData } = await API.post('/cart', newCart);
    const { id: cartId } = newCartData;
    localStorage.setItem('cartId', cartId);

    const newCartItem = {
      amount: 1,
      cartId,
      productId,
      totalPrice: productPrice,
      unitPrice: productPrice,
    };

    const { data: newCartItemData } = await API.post('/cartItems', newCartItem);
    const { id: cartItemId } = newCartItemData;

    await API.patch(`/cart/${cartId}`, { cartItems: [cartItemId] });
  },
};

export default CartService;
