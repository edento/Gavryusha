import React from 'react';
import './CartItemUnit.style.scss';
import { useSelector } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { Product, CartItem } from '../../../types/general';
import { MainState } from '../../../types/store';

export interface CartItemUnitProps {
  cartItemInfo: CartItem;
}

const CartItemUnit: React.FC<CartItemUnitProps> = ({ cartItemInfo }) => {
  const products = useSelector<MainState, Product[]>((state) => state.products);
  const { amount, productId, totalPrice } = cartItemInfo;
  const currProduct = products.find(({ id }) => id === productId) || ({} as Product);
  const { name, img, price } = currProduct;

  return (
    <div className="cart-item">
      <img className="cart-item_img" src={img} alt="product" />
      <div className="cart-item_info">
        <h3>{name}</h3>
        <h3>
          <span>Price:</span>
          {`${price} $`}
        </h3>
        <h3>
          <span>Amount:</span>
          {amount}
        </h3>
        <h3 className="cart-item_info_total-price">
          <span>Total Price:</span>
          {`${totalPrice} $`}
        </h3>
      </div>
      <IconButton>
        <Clear />
      </IconButton>
    </div>
  );
};

export default CartItemUnit;
