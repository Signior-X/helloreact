import React, {lazy, Suspense} from 'react';
import './App.css';
import Navbar from './components/navbar';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

/* The multiple page views */
const Home = lazy( () =>
  import('./components/home' /* webpackChunkName: "Home" */)
);
const About = lazy( () => 
  import('./components/about' /* webpackChunkName: "About" */)
);


function App() {

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home'
    },
    {
      pageLink: '/about',
      view: About,
      displayName: 'About'
    }
  ]

  return (
    <div className="App">
      <Suspense fallback={<div />}>
        <Router>
          <Navbar pages={pages} />
          <Route
            render={({ location }) => (
              <Switch location={location}>
                {pages.map((page, index) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      render={({ match }) => <page.view />}
                      key={index}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
            )}
          />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
