import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Header from "./components/UI/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/images'>
            ///
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
