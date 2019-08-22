import React from 'react';
import Nav from './nav'

const Home = ({ onRouteChange, route }) => {
    return (
        <div>
            <Nav onRouteChange={onRouteChange} route={route}></Nav>
            <p>Home</p>
        </div>
    )
}


export default Home;