import React, { Component } from 'react';
import './App.css';
import Home from '../Components/JS/Home'
import AsyncComponent from '../Components/JS/AsyncComponent';

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
    // Async rendering
    switch (this.state.route) {
      case 'home':
        return <Home onRouteChange={this.onRouteChange} route={this.state.route} />;

      case 'about':
        const AsyncAbout = AsyncComponent(() => import('../Components/JS/About'));
        return <AsyncAbout onRouteChange={this.onRouteChange} route={this.state.route} />;

      case 'projects':
        const AsyncProjects = AsyncComponent(() => import('../Components/JS/Projects'));
        return <AsyncProjects onRouteChange={this.onRouteChange} route={this.state.route} />;

      case 'resume':
        const AsyncResume = AsyncComponent(() => import('../Components/JS/Resume'));
        return <AsyncResume onRouteChange={this.onRouteChange} route={this.state.route} />;

      case 'contact':
        const AsyncContact = AsyncComponent(() => import('../Components/JS/Contact'));
        return <AsyncContact onRouteChange={this.onRouteChange} route={this.state.route} />;

      default:
        return null;
    }

  }
}

export default App;
