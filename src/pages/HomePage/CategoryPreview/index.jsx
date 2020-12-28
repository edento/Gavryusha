import React from 'react';
import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProductPreview from '../../../parts/ProductPreview';

const CategoryPreview = ({ categoryInfo: { name, productsIds } }) => {
  const { products } = useSelector((state) => state);

  const slidesToShow = 6;

  return (
    <div className="category-container">
      <h1>{name}</h1>
      <Slider
        dots
        speed={500}
        slidesToShow={productsIds.length > slidesToShow ? slidesToShow : productsIds.length}
      >
        {productsIds.map((productId) => (
          <ProductPreview product={products[productId] || {}} key={uuid()} />
        ))}
      </Slider>
    </div>
  );
};

CategoryPreview.propTypes = {
  categoryInfo: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CategoryPreview;
