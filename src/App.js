import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './pages/page-not-found/page-not-found';
import Homepage from './pages/homepage/homepage';
import './App.scss';
import Header from './cmps/app-header/app-header';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <div className='app-container'>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/error">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
