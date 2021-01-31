import React from 'react';
import './OrderSummary.style.scss';
import { Divider, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { MainState } from '../../../types/store';

const OrderSummary: React.FC = () => {
  const totalPrice = useSelector<MainState, number>((state) => state.cart.totalPrice);

  const paymentSucceeded = () => alert('The payment was succesful');

  return (
    <div className="order-summary">
      <h1 className="order-summary_main-heading">Order Summary</h1>
      <Divider />
      <h3>
        Subtotal
        <span>{`${totalPrice} $`}</span>
      </h3>
      <h2>
        Total Payment:
        <span> {`${totalPrice} $`}</span>
      </h2>
      <Button variant="contained" color="primary" onClick={paymentSucceeded}>
        <img className="order-summary_paypal-icon" src="/icons/paypal.svg" alt="paypal" />
        Continue payment with paypal
      </Button>
    </div>
  );
};

export default OrderSummary;
