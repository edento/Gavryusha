import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { getAllCategories } from './store/actions/category.action';
import { getAllProducts } from './store/actions/product.action';
import { getCart } from './store/actions/cart.action';
import CartPage from './pages/CartPage/CartPage.index';
// import CategoryProductsPage from './pages/CategoryProductsPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
    dispatch(getCart());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/categories/:categoryName/:productId" component={ProductPage} />
        <Route exact path="/checkout/cart" component={CartPage} />
        {/* <Route exact path="/categories/:categoryName" component={CategoryProductsPage} /> */}
        {/* <Route exact path="/search?product=top" component={ProductPage} /> */}
      </Switch>
    </Router>
  );
};

export default App;
