import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from '../Components/JS/Nav.js';
import Home from '../Components/JS/Home';
import About from '../Components/JS/About.js';
import Projects from '../Components/JS/Projects.js';
import Resume from '../Components/JS/Resume.js';
import Contact from '../Components/JS/Contact.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      component: null
    };
  }

  componentDidMount() {
    const route = localStorage.getItem('route');
    this.setState({ route });
  }

  onRouteChange = (route) => {
    // Change the route
    this.setState({ route: route }, () => { localStorage.setItem('route', route) });
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact component={Home} path='/' />
          <Route exact component={About} path='/about' />
          <Route exact component={Projects} path='/projects' />
          <Route exact component={Resume} path='/resume'/>
          <Route exact component={Contact} path='/about' />
        </Switch>
      </Router>
    )
  }
}

export default App;
