import React from 'react';
import Nav from './nav'

const Contact = ({ onRouteChange, route }) => {
    return (
        <div>
            <Nav onRouteChange={onRouteChange} route={route}></Nav>
            <p>Contact</p>
        </div>
    )
}


export default Contact;