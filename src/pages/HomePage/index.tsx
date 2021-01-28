import React, { useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch } from 'redux';
import { MainState } from '../../types/store';
import { Category } from '../../types/general';
import Navbar from '../../parts/Navbar';
import CategoryPreview from '../../components/CategoryPreview';
import { getAllCategories } from '../../store/actions/category.action';
import { getAllProducts } from '../../store/actions/product.action';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const categories = useSelector<MainState, Category[]>((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="home-page">
      <Navbar />
      <div className="home-page_bg" />
      <div className="home-page_main-heading">
        <h1>Welcome to Gavryusha!</h1>
        <h5>The place where you can find rare items</h5>
      </div>
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryPreview categoryInfo={category} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
