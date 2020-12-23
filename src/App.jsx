import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="page">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          {/* <Route exact path="/" render={() => <Redirect to="/product/1" />} /> */}

          <Route exact path="/home" component={HomePage} />
          <Route exact path="/categories" component={CategoriesPage} />
          <Route exact path="/product/:productId" component={ProductPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
