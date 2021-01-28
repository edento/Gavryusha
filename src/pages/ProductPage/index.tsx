import React, { useCallback } from 'react';
import './style.scss';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { Dispatch } from 'redux';
import Navbar from '../../parts/Navbar';
import { addNewItemToChart } from '../../store/actions/cart.action';
import { MainState } from '../../types/store';
import { Product } from '../../types/general';

const ProductPage: React.FC = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const { productId } = useParams<any>();
  const history = useHistory();

  const currProduct = useSelector<MainState, Product>(({ products }) => products[productId]);

  const addToTheChart = useCallback(() => {
    dispatch(addNewItemToChart(currProduct));
  }, []);

  const { name, img, price, description } = currProduct || {};

  if (!currProduct) history.push('/home');
  return (
    <div className="product-page">
      <Navbar />
      <div className="product-page_content">
        <img className="product-page_img" src={img} alt="product" />
        <div className="product-page_info">
          <h3>{name}</h3>
          <h1 className="product-page_info_price">{`${price}$`}</h1>
          <p className="product-page_info_description">{description}</p>
          <Button variant="contained" color="primary" onClick={addToTheChart}>
            Add to my trash
            <img src="/icons/trash-can.svg" alt="trash can" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
