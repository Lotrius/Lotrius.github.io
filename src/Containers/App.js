import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import 'tachyons';

import Nav from '../Components/JS/Nav';

// Code splitting with loadable component
const Home = loadable(() => import('../Components/JS/Home'));
const About = loadable(() => import('../Components/JS/About'));
const Projects = loadable(() => import('../Components/JS/Projects'));
const Resume = loadable(() => import('../Components/JS/Resume'));
const Contact = loadable(() => import('../Components/JS/Contact'));
const Error = loadable(() => import('../Components/JS/Error'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={About} path="/about" />
          <Route exact component={Projects} path="/projects" />
          <Route exact component={Resume} path="/resume" />
          <Route exact component={Contact} path="/contact" />
          <Route component={Error} path="*" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
