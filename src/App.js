import React, { useEffect } from 'react';
import './App.css';
import { About, Contact, Education, Home, Skills, WorkHistory } from './pages/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} key={Home} />
        <Route path='/about' component={About} key={About} />
        <Route path='/skills' component={Skills} key={Skills} />
        <Route path='/education' component={Education} key={Education} />
        <Route path='/workhistory' component={WorkHistory} key={WorkHistory} />
        <Route path='/contact' component={Contact} key={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
