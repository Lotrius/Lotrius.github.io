import React from 'react';
import Nav from './Nav'

const About = ({ onRouteChange , active, route }) => {
    return (
        <div>
            <Nav onRouteChange={onRouteChange} route={route}></Nav>
            <p>About</p>
        </div>
    )
}


export default About;