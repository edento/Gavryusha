import React from 'react';
import './CartItemsList.style.scss';
import { List, ListItem, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CartItemUnit from '../CartItemUnit/CartItemUnit.index';
import { CartItem, Cart, Product } from '../../../types/general';
import { MainState } from '../../../types/store';

const CartItemsList = () => {
  const cartItems = useSelector<MainState, CartItem[] | undefined>((state) => state.cart.cartItems) || ([] as CartItem[]);
  return (
    <div className="cart-items-list">
      <h1>My Items</h1>
      <Divider />
      <List>
        {cartItems!.map((cartItemInfo, index) => (
          <>
            {index > 0 && <Divider key={uuidv4()} />}
            <ListItem key={uuidv4()}>
              <CartItemUnit cartItemInfo={cartItemInfo} />
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );
};

export default CartItemsList;
