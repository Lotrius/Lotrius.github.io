import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import 'tachyons';
import 'animate.css';

import Nav from '../Components/JS/Nav/Nav';
import '../Components/CSS/General.css';

// Code splitting with loadable component
const Home = loadable(() => import('../Components/JS/Home/Home'));
const Projects = loadable(() => import('../Components/JS/Projects/Projects'));
const Resume = loadable(() => import('../Components/JS/Resume/Resume'));
const Contact = loadable(() => import('../Components/JS/Contact/Contact'));
const Error = loadable(() => import('../Components/JS/Error/Error'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Projects} path="/projects" />
          <Route exact component={Resume} path="/resume" />
          <Route exact component={Contact} path="/contact" />
          <Route component={Error} path="*" />
        </Switch>
      </Suspense>
    </Router>
    // <div>
    //   {/* <Nav /> */}
    //   <Home />
    //   <Projects />
    //   <Resume />
    //   <Contact />
    // </div>
  );
};

export default App;
