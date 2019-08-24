import React from 'react';
import Nav from './Nav'

const Resume = ({ onRouteChange, route }) => {
    return (
        <div>
            <Nav onRouteChange={onRouteChange} route={route}></Nav>
            <p>Resume</p>
        </div>
    )
}


export default Resume;