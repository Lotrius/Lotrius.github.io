import React from 'react';
import Nav from './Nav'
import ProjectDesc from './ProjectDesc';

const Projects = ({ onRouteChange, route }) => {
    return (
        <div>
            <Nav onRouteChange={onRouteChange} route={route}></Nav>
            <ProjectDesc />
        </div>
    )
}


export default Projects;