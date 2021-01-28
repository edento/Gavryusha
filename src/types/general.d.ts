export type Category = {
  name: string;
  img: string;
  productsIds: number[];
};

export type Product = {
  id: number;
  name: string;
  categoryId: number;
  price: number;
  img: string;
  description: string;
};

export type Cart = {
  totalAmount: number;
  totalPrice: number;
  cartItemsIds: number[];
  id: number;
};

export type CartItem = {
  amount: number;
  cartId: number;
  productId: number;
  totalPrice: number;
  unitPrice: number;
  id: number;
};
