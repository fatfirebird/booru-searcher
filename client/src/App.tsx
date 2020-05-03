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
import GalleryContainer from "./components/Gallery/GalleryContainer";
import NotFound from "./components/UI/NotFound/NotFound";

const App = () => {
  const history = createBrowserHistory()

  return (
    <Router history={history}>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/gallery' component={GalleryContainer}/>
          <Route exact path='/' component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
