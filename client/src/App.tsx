import React from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Header from "./components/UI/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import GalleryContainer from "./components/Gallery/GalleryContainer";

const App = () => {
  const history = createBrowserHistory()

  return (
    <Router history={history}>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/gallery'>
            <GalleryContainer />
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
