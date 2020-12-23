import React, { useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import Navbar from '../../parts/Navbar';
import CategoryContainer from './categoryContainer';
import { getAllCategories } from '../../store/actions/categoriesAction';
import { getAllProducts } from '../../store/actions/productsAction';

const HomePage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <img className="main-img" src="/imgs/garbage.jpg" alt="main" />
      <div className="home-page_main-heading">
        <h1>Welcome to Gavryusha!</h1>
        <h5>The place where you can find rare items</h5>
      </div>
      <div className="white-box">
        {Object.values(categories).map((category) => (
          <CategoryContainer categoryInfo={category} key={uuid()} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
