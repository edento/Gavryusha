import React from 'react';
import './CartPage.style.scss';
import Navbar from '../../parts/Navbar';
import CartItemsList from './CartItemsList/CartItemsList.index';
import OrderSummary from './OrderSummary/OrderSummary.index';

// export interface CartPageProps {}

const CartPage: React.FC = () => {
  return (
    <div className="cart-page">
      <Navbar />
      <h1 className="cart-page_main-heading">My Trash Cart</h1>
      <div className="cart-page_container">
        <CartItemsList />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
