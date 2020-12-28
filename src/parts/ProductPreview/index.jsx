import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const ProductPreview = ({ product }) => {
  const history = useHistory();
  const { name, img, price, id: productId } = product;

  const moveToProductPage = () => history.push(`product/${productId}`);

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
  product: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ProductPreview;
