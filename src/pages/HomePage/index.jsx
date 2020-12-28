import React, { useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import Navbar from '../../parts/Navbar';
import CategoryPreview from './CategoryPreview';
import { getAllCategories } from '../../store/actions/categoriesAction';
import { getAllProducts } from '../../store/actions/productsAction';

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <div className="home-page_bg" />
      <div className="home-page_main-heading">
        <h1>Welcome to Gavryusha!</h1>
        <h5>The place where you can find rare items</h5>
      </div>
      <div className="categories-container">
        {Object.values(categories).map((category) => (
          <CategoryPreview categoryInfo={category} key={uuid()} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
