import React, { useCallback } from 'react';
import './style.scss';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import Navbar from '../../parts/Navbar';
import { addItemToChart } from '../../store/actions/cartAction';

const ProductPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();

  const currProduct = useSelector(({ products }) => products[productId]);
  if (!currProduct) history.push('/home');
  const { name, img, price, description } = currProduct || {};

  const addToTheChart = useCallback(() => {
    dispatch(addItemToChart(currProduct));
  }, []);

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
