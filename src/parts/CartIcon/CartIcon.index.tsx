import React from 'react';
import './CartIcon.style.scss';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';

import { MainState } from '../../types/store';

const CartIcon: React.FC = () => {
  const history = useHistory();
  const cartAmount = useSelector<MainState, number>((state) => state.cart.totalAmount);

  const moveToCheckout = (): void => history.push('/checkout/cart');

  return (
    <IconButton className="cart-icon" type="button" onClick={moveToCheckout} onKeyDown={moveToCheckout}>
      <img src="/icons/trash-cart.svg" alt="cart" />
      {cartAmount && (
        <div>
          <p> {cartAmount}</p>
        </div>
      )}
    </IconButton>
  );
};

export default CartIcon;
