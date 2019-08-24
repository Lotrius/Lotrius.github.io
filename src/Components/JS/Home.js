import React from 'react';
import Nav from './Nav';
import '../CSS/home.css';
import '../CSS/general.css';

const Home = ({ onRouteChange, route }) => {
    return (
        <div>
            {/* NAV BAR */}
            <Nav onRouteChange={onRouteChange} route={route}></Nav>

            {/* IMAGE */}
            <div className="row home animated fadeIn">
                <div className="col col-sm-auto picture">
                    <div id="profile">
                        <img className="portrait" src={require("../../Pics/me.jpg")} itemProp="image" alt="Avatar" />
                    </div>
                </div>
            </div>

            {/* DESCRIPTION */}
            <div className="col col-sm-auto info">
                <div id="profile">
                    <h1>Maybe something will go here????</h1>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="bg-dark">
                <div>
                    <ul>
                        <li>
                            <a
                                id="fb"
                                href="https://www.facebook.com/solomon.kim.319"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img className="social" src={require("../../Pics/fb.png")} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a
                                id="github"
                                href="https://github.com/Lotrius"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img className="social" src={require("../../Pics/github.png")} alt="GitHub" />
                            </a>
                        </li>
                        <li>
                            <a
                                id="linkedin"
                                href="https://www.linkedin.com/in/solomon-kim/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img className="social" src={require("../../Pics/linkedin.png")} alt="LinkedIn" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 id="copyright">Do I actually need to copyright this page??</h1>
                </div>

            </footer>
        </div>
    )
}


export default Home;