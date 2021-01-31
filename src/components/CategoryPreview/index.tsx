import React from 'react';
import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../../types/general';
import ProductPreview from '../ProductPreview';
import { SLIDER_DEFAULT_SLIDES_TO_SHOW } from '../../helpers/constants';

interface Props {
  categoryInfo: Category;
}

const CategoryPreview: React.FC<Props> = ({ categoryInfo }) => {
  const { name, productsIds } = categoryInfo;

  return (
    <div className="category-container">
      <h1>{name}</h1>
      <Slider dots speed={500} slidesToShow={productsIds.length > SLIDER_DEFAULT_SLIDES_TO_SHOW ? SLIDER_DEFAULT_SLIDES_TO_SHOW : productsIds.length}>
        {productsIds.map((productId) => (
          <ProductPreview productId={productId} categoryName={name} key={uuidv4()} />
        ))}
      </Slider>
    </div>
  );
};

export default CategoryPreview;
