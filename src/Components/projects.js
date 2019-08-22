import React from 'react';
import Nav from './nav'

const Projects = ({ onRouteChange, route }) => {
    return (
        <div>
            <Nav onRouteChange={onRouteChange} route={route}></Nav>
            <p>Projects</p>
        </div>
    )
}


export default Projects;