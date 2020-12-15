import React from 'react';
import './style.scss';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

const items = [
  {
    name: 'Random Name #1',
    imgSrc: '/imgs/lashes.jpg',
  },
  {
    name: 'Random Name #2',
    imgSrc: '/imgs/eye.jpg',
  },
  // {
  //     name: "Random Name #2",
  //     description: "Hello World!"
  // }
];

const CategoryContainer = () => {
  return (
    <div className="category-container">
      <h1>Caterory name</h1>
      <Carousel>
        {items.map((item, i) => (
          <Item key={uuid()} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <Paper>
      <h2 className="product-title">{item.name}</h2>
      <img className="product-img" src={item.imgSrc} alt="product" />

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
};

Item.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CategoryContainer;
