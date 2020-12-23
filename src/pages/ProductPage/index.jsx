import React from 'react';
import './style.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Container } from '@material-ui/core';
import Navbar from '../../parts/Navbar';

const ProductPage = () => {
  const { productId } = useParams();
  const currProduct = useSelector(({ products }) => products[productId]);
  const { name, img, price, description } = currProduct;

  return (
    <div className="product-page">
      <Navbar />
      <Container maxWidth="lg">
        <div className="product-page_info">
          <h3>{name}</h3>
          <h1 className="product-page_info_price">{`${price}$`}</h1>
          <p className="product-page_info_description">{description}</p>
          <Button variant="contained" color="primary">
            Add to my trash
            <img src="/icons/trash-can.svg" alt="trash can" />
          </Button>
        </div>
        <img className="product-page_img" src={img} alt="product" />
      </Container>
    </div>
  );
};

export default ProductPage;
