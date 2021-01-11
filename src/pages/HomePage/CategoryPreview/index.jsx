import React from 'react';
import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProductPreview from '../../../parts/ProductPreview';
import { SLIDER_DEFAULT_SLIDES_TO_SHOW } from '../../../helpers/constants';

const CategoryPreview = ({ categoryInfo: { name, productsIds } }) => {
  return (
    <div className="category-container">
      <h1>{name}</h1>
      <Slider
        dots
        speed={500}
        slidesToShow={
          productsIds.length > SLIDER_DEFAULT_SLIDES_TO_SHOW
            ? SLIDER_DEFAULT_SLIDES_TO_SHOW
            : productsIds.length
        }
      >
        {productsIds.map((productId) => (
          <ProductPreview productId={productId} categoryName={name} key={uuid()} />
        ))}
      </Slider>
    </div>
  );
};

CategoryPreview.propTypes = {
  categoryInfo: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CategoryPreview;
