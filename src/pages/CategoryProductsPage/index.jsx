import React, { useMemo } from 'react';
import './style.scss';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import { useParams } from 'react-router-dom';

import Navbar from '../../parts/Navbar';
import ProductPreview from '../../parts/ProductPreview';

const CategoryProductsPage = () => {
  const { categoryName } = useParams();
  const { categories, products } = useSelector((state) => state);

  const currCategory = useMemo(
    () => categories.filter(({ name }) => name.toLowerCase() === categoryName)[0],
    [categories, categoryName],
  );

  const { name, img, productsIds } = currCategory;

  const productsArr = useMemo(
    () => productsIds.map((productId) => products[productId]),
    productsIds,
    categoryName,
  );

  return (
    <div className="category-products">
      <Navbar />
      <h1 className="category_name">{name}</h1>
      <div className="category_img" style={{ backgroundImage: `url(${img})` }} />
      <div className="category_products-container">
        {productsArr.map((product) => (
          <ProductPreview product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProductsPage;
