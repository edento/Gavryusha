import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { MainState } from '../../types/store';
import { Product } from '../../types/general';

interface Props {
  productId: number;
  categoryName: string;
}

const ProductPreview: React.FC<Props> = ({ productId, categoryName }) => {
  const history = useHistory();
  const products = useSelector<MainState, Product[]>((state) => state.products);

  const { name, img, price } = products.find((product) => product.id === productId) || {};

  const moveToProductPage = () => {
    history.push(`/categories/${categoryName}/${productId}`);
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

export default ProductPreview;
