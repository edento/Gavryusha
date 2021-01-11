import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

const ProductPreview = ({ productId, categoryName }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const products = useSelector((state) => state.products);

  const { name, img, price } = products.find((product) => product.id === productId) || {};

  const moveToProductPage = () => {
    if (pathname.includes('categories')) history.push(`${pathname}/${productId}`);
    else history.push(`/categories/${categoryName}/${productId}`);
  };

  return (
    <Card onClick={moveToProductPage} className="product-preview">
      <CardActionArea>
        <CardMedia image={img} />
        <CardContent>
          <Typography gutterBottom variant="body1">
            {name}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            {`${price} $`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProductPreview.propTypes = {
  productId: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default ProductPreview;
