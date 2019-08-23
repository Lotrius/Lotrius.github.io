import React from 'react';
import './css/nav.css'

const Nav = ({ onRouteChange, route }) => {
    return (
        <nav className="row navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-brand name" onClick={() => onRouteChange('home')}>Solomon Kim</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <ul className="nav navbar-nav">
                    <li>
                        <button
                            id="home"
                            className={"tab nav-item nav-link " + (route === 'home' ? "active" : '')}
                            onClick={() => onRouteChange('home')}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            id="about"
                            className={"tab nav-item nav-link " + (route === 'about' ? "active" : '')}
                            onClick={() => onRouteChange('about')}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            id="projects"
                            className={"tab nav-item nav-link " + (route === 'projects' ? "active" : '')}
                            onClick={() => onRouteChange('projects')}
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            id="resume"
                            className={"tab nav-item nav-link " + (route === 'resume' ? "active" : '')}
                            onClick={() => onRouteChange('resume')}
                        >
                            Resume
                        </button>
                    </li>
                    <li>
                        <button
                            id="contact"
                            className={"tab nav-item nav-link " + (route === 'contact' ? "active" : '')}
                            onClick={() => onRouteChange('contact')}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default Nav;