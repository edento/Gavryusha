import React from 'react';
import './style.scss';
import Navbar from '../../parts/Navbar';
import CategoryContainer from './categoryContainer';

const HomePage = () => {
  return (
    <div className="home-page page">
      <Navbar />
      <img className="main-img" src="/imgs/garbage.jpg" alt="main" />
      <div className="home-page_main-heading">
        <h1>Welcome to Gavryusha!</h1>
        <h5>The place where you can find rare items</h5>
      </div>
      <div className="white-box">
        <CategoryContainer />
      </div>
    </div>
  );
};

export default HomePage;
