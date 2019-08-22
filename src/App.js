import React, { Component } from 'react';
import './Containers/App.css';
import Home from './Components/home'
import AsyncComponent from './Components/AsyncComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      component: null
    };
  }

  onRouteChange = (route) => {
    // Change the route
    this.setState({ route });
  }

  render() {
    // Async rendering
    switch (this.state.route) {
      case 'home':
        return <Home onRouteChange={this.onRouteChange} route={this.state.route} />;

      case 'about':
        const AsyncAbout = AsyncComponent(() => import('./Components/about'));
        return <AsyncAbout onRouteChange={this.onRouteChange} route={this.state.route} />;

      case 'projects':
        const AsyncProjects = AsyncComponent(() => import('./Components/projects'));
        return <AsyncProjects onRouteChange={this.onRouteChange} route={this.state.route} />;

      case 'resume':
        const AsyncResume = AsyncComponent(() => import('./Components/resume'));
        return <AsyncResume onRouteChange={this.onRouteChange} route={this.state.route} />;

      case 'contact':
        const AsyncContact = AsyncComponent(() => import('./Components/contact'));
        return <AsyncContact onRouteChange={this.onRouteChange} route={this.state.route} />;

      default:
        return null;
    }

  }
}

export default App;
