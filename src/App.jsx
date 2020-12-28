import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CategoryProductsPage from './pages/CategoryProductsPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="page">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          {/* <Route exact path="/" render={() => <Redirect to="/categories/food" />} /> */}
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/categories/:categoryName" component={CategoryProductsPage} />
          <Route exact path="/product/:productId" component={ProductPage} />
          {/* <Route exact path="/search?product=top" component={ProductPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
